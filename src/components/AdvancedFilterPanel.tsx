import React, { useState, useMemo } from 'react';
import { Filter, DollarSign, Calendar, Users, Scale, TrendingUp, X } from 'lucide-react';
import { PoliticalScandal, ScandalFilters } from '../types/scandal';

interface AdvancedFilterPanelProps {
  scandals: PoliticalScandal[];
  visibleScandals: PoliticalScandal[];
  filters: ScandalFilters;
  onFiltersChange: (filters: ScandalFilters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

interface ScandalStats {
  totalAmount: number;
  prisonYears: number;
  totalScandals: number;
  resolvedScandals: number;
  affectedCountries: number;
  mostCommonType: string;
  timeSpan: string;
}

const AdvancedFilterPanel: React.FC<AdvancedFilterPanelProps> = ({
  scandals,
  visibleScandals,
  filters,
  onFiltersChange,
  isOpen,
  onToggle
}) => {
  const [activeSection, setActiveSection] = useState<string>('stats');

  // Calcul des statistiques en temps réel
  const stats = useMemo((): ScandalStats => {
    const amounts = visibleScandals
      .filter(s => s.amountInvolved)
      .map(s => s.amountInvolved || 0);
    
    const totalAmount = amounts.reduce((sum, amount) => sum + amount, 0);

    // Estimation des années de prison à partir des conséquences
    const prisonYears = visibleScandals.reduce((total, scandal) => {
      const prisonConsequences = scandal.consequences.filter(c => 
        c.toLowerCase().includes('prison') || c.toLowerCase().includes('ans')
      );
      
      let years = 0;
      prisonConsequences.forEach(consequence => {
        const match = consequence.match(/(\d+)\s*(ans?|année)/i);
        if (match) {
          years += parseInt(match[1]);
        }
      });
      
      return total + years;
    }, 0);

    const resolvedScandals = visibleScandals.filter(s => s.resolved).length;
    

    const countries = new Set(visibleScandals.map(s => s.country));
    const scandalTypes = visibleScandals.reduce((acc, s) => {
      acc[s.scandalType] = (acc[s.scandalType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const mostCommonType = Object.entries(scandalTypes)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'Aucun';

    const dates = visibleScandals.map(s => new Date(s.date));
    const minDate = dates.length > 0 ? new Date(Math.min(...dates.map(d => d.getTime()))) : null;
    const maxDate = dates.length > 0 ? new Date(Math.max(...dates.map(d => d.getTime()))) : null;
    
    const timeSpan = minDate && maxDate 
      ? `${minDate.getFullYear()} - ${maxDate.getFullYear()}`
      : 'Non défini';

          return {
        totalAmount,
        prisonYears,
        totalScandals: visibleScandals.length,
        resolvedScandals,
        affectedCountries: countries.size,
        mostCommonType,
        timeSpan
      };
  }, [visibleScandals]);

  // Options disponibles pour les filtres
  const filterOptions = useMemo(() => {
    const countries = Array.from(new Set(scandals.map(s => s.country))).sort();
    const types = Array.from(new Set(scandals.map(s => s.scandalType))).sort();
    const parties = Array.from(new Set(scandals.map(s => s.politicalParty))).sort();
    const keywords = Array.from(new Set(scandals.flatMap(s => s.tags || []))).sort();

    return { countries, types, parties, keywords };
  }, [scandals]);

  const formatAmount = (amount: number): string => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)} Md €`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)} M €`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)} K €`;
    }
    return `${amount} €`;
  };

  const handleFilterChange = (type: keyof ScandalFilters, value: string | number) => {
    // Gérer uniquement les types de filtres qui sont des tableaux
    if (type === 'dateRange') return; // Ignorer dateRange pour ce composant
    
    const currentValues = (filters[type] as (string | number)[]) || [];
    const newValues = currentValues.includes(value as never)
      ? currentValues.filter((v: string | number) => v !== value)
      : [...currentValues, value as never];

    onFiltersChange({
      ...filters,
      [type]: newValues
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      country: [],
      scandalType: [],
      politicalParty: [],
      keywords: []
    });
  };

  const getSectionTitle = (section: string): string => {
    switch (section) {
      case 'stats': return 'Statistiques';
      case 'country': return 'Pays';
      case 'type': return 'Types';
      case 'party': return 'Partis';
      case 'keywords': return 'Mots-clés';
      default: return '';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="filter-panel-backdrop">
      <div className="filter-panel-container">
        <div className="filter-panel-header">
          <div className="filter-panel-title">
            <Filter size={24} />
            <span>Filtres et Statistiques</span>
          </div>
          <button className="filter-panel-close" onClick={onToggle}>
            <X size={20} />
          </button>
        </div>

        <div className="filter-panel-content">
          {/* Navigation des sections */}
          <div className="filter-sections-nav">
            {['stats', 'country', 'type', 'party', 'keywords'].map(section => (
              <button
                key={section}
                className={`section-nav-btn ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}
              >
                {getSectionTitle(section)}
              </button>
            ))}
          </div>

          {/* Section Statistiques */}
          {activeSection === 'stats' && (
            <div className="stats-section">
              <h3>Aperçu des scandales visibles</h3>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.totalScandals}</div>
                    <div className="stat-label">Scandales</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon money">
                    <DollarSign size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{formatAmount(stats.totalAmount)}</div>
                    <div className="stat-label">Montant total</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon prison">
                    <Scale size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.prisonYears}</div>
                    <div className="stat-label">Années de prison</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <Users size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.affectedCountries}</div>
                    <div className="stat-label">Pays concernés</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <Calendar size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.timeSpan}</div>
                    <div className="stat-label">Période</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon">
                    <Filter size={20} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.affectedCountries}</div>
                    <div className="stat-label">Pays différents</div>
                  </div>
                </div>
              </div>

              <div className="progress-section">
                <div className="progress-item">
                  <span>Affaires jugées</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${stats.totalScandals > 0 ? (stats.resolvedScandals / stats.totalScandals) * 100 : 0}%` 
                      }}
                    />
                  </div>
                  <span>{stats.resolvedScandals}/{stats.totalScandals}</span>
                </div>
              </div>
            </div>
          )}

          {/* Sections de filtres */}
          {activeSection === 'country' && (
            <div className="filter-section">
              <h3>Filtrer par pays</h3>
              <div className="filter-options">
                {filterOptions.countries.map(country => (
                  <label key={country} className="filter-option">
                    <input
                      type="checkbox"
                      checked={(filters.country as string[])?.includes(country) || false}
                      onChange={() => handleFilterChange('country', country)}
                    />
                    <span className="filter-label">{country}</span>
                    <span className="filter-count">
                      ({scandals.filter(s => s.country === country).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'type' && (
            <div className="filter-section">
              <h3>Filtrer par type</h3>
              <div className="filter-options">
                {filterOptions.types.map(type => (
                  <label key={type} className="filter-option">
                    <input
                      type="checkbox"
                      checked={(filters.scandalType as string[])?.includes(type) || false}
                      onChange={() => handleFilterChange('scandalType', type)}
                    />
                    <span className="filter-label">{type}</span>
                    <span className="filter-count">
                      ({scandals.filter(s => s.scandalType === type).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'party' && (
            <div className="filter-section">
              <h3>Filtrer par parti</h3>
              <div className="filter-options">
                {filterOptions.parties.map(party => (
                  <label key={party} className="filter-option">
                    <input
                      type="checkbox"
                      checked={(filters.politicalParty as string[])?.includes(party) || false}
                      onChange={() => handleFilterChange('politicalParty', party)}
                    />
                    <span className="filter-label">{party}</span>
                    <span className="filter-count">
                      ({scandals.filter(s => s.politicalParty === party).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'keywords' && (
            <div className="filter-section">
              <h3>Filtrer par mots-clés</h3>
              <div className="filter-options">
                {filterOptions.keywords.map(keyword => (
                  <label key={keyword} className="filter-option">
                    <input
                      type="checkbox"
                      checked={(filters.keywords as string[])?.includes(keyword) || false}
                      onChange={() => handleFilterChange('keywords', keyword)}
                    />
                    <span className="filter-label">{keyword}</span>
                    <span className="filter-count">
                      ({scandals.filter(s => s.tags?.includes(keyword)).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="filter-actions">
            <button className="clear-filters-btn" onClick={clearAllFilters}>
              Effacer tous les filtres
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilterPanel; 