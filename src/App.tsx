import React, { useState, useMemo } from 'react';
import SerpentineTimeline from './components/SerpentineTimeline';
import InlineFilterPanel from './components/InlineFilterPanel';
import { politicalScandals } from './data/scandals';
import { ScandalFilters, PoliticalScandal } from './types/scandal';
import './App.css';
import './styles/inline-filter.css';

const getEarliestDate = () => {
  if (politicalScandals.length === 0) return '';
  return politicalScandals
    .map(s => new Date(s.date))
    .sort((a, b) => a.getTime() - b.getTime())[0]
    .toISOString()
    .slice(0, 10);
};

const today = new Date().toISOString().slice(0, 10);

function App() {
  const [filters, setFilters] = useState<ScandalFilters>({
    country: [],
    scandalType: [],
    politicalParty: [],
    keywords: [],
    status: [],
    mainPerson: '',
    personScope: 'main', // 'main' ou 'all'
    dateRange: {
      start: getEarliestDate(),
      end: today,
    },
  });

  // Filtrage des scandales
  const filteredScandals = React.useMemo(() => {
    let result = politicalScandals;
    // Filtre par période
    if (filters.dateRange?.start || filters.dateRange?.end) {
      result = result.filter(scandal => {
        const scandalDate = new Date(scandal.date).toISOString().slice(0, 10);
        const start = filters.dateRange?.start || '0000-01-01';
        const end = filters.dateRange?.end || new Date().toISOString().slice(0, 10);
        return scandalDate >= start && scandalDate <= end;
      });
    }
    // Filtre par personne principale ou toutes implications
    if (filters.mainPerson) {
      if (filters.personScope === 'all') {
        // Inclure mainPerson ou otherPersons
        result = result.filter(scandal =>
          scandal.mainPerson === filters.mainPerson ||
          (scandal.otherPersons && scandal.otherPersons.includes(filters.mainPerson!))
        );
      } else {
        // Seulement mainPerson
        result = result.filter(scandal => scandal.mainPerson === filters.mainPerson);
      }
      // Éviter les doublons
      result = Array.from(new Set(result));
    }
    // Autres filtres
    return result.filter(scandal => {
      if (filters.country?.length && !filters.country.includes(scandal.country)) return false;
      if (filters.scandalType?.length && !filters.scandalType.includes(scandal.scandalType)) return false;
      if (filters.politicalParty?.length && !filters.politicalParty.includes(scandal.politicalParty)) return false;
      if (filters.keywords?.length && !filters.keywords.some(keyword => scandal.tags?.includes(keyword))) return false;
      if (filters.status?.length) {
        if (filters.status.includes('resolved') && !scandal.resolved) return false;
        if (filters.status.includes('ongoing') && scandal.resolved) return false;
        if (filters.status.includes('unknown') && scandal.resolved !== undefined) return false;
      }
      return true;
    });
  }, [politicalScandals, filters]);

  const handlePersonClick = (person: string, includeOtherPersons: boolean) => {
    setFilters({
      ...filters,
      keywords: [],
      mainPerson: person,
      personScope: includeOtherPersons ? 'all' : 'main',
    });
  };

  const handleFiltersChange = (newFilters: ScandalFilters) => {
    setFilters(newFilters);
  };

  const handleTagClick = (tag: string) => {
    setFilters({
      ...filters,
      keywords: [tag]
    });
  };

  return (
    <div className="App">
      <div className="serpentine-timeline">
        {/* Header */}
        <div className="timeline-header">
          <h1 className="timeline-main-title">Bibliothèque à Scandales</h1>
          <h2 className="timeline-subtitle">Affaires et controverses du paysage politique français</h2>
        </div>

        {/* Panneau de filtres intégré */}
        <div className="timeline-container">
          <InlineFilterPanel
            scandals={politicalScandals}
            filters={filters}
            onFiltersChange={handleFiltersChange}
            filteredScandals={filteredScandals}
          />
        </div>

        {/* Timeline */}
        <SerpentineTimeline
          title=""
          subtitle=""
          scandals={filteredScandals}
          onTagClick={handleTagClick}
          onPersonClick={handlePersonClick}
        />
      </div>
    </div>
  );
}

export default App;
