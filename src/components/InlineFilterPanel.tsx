import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Funnel, 
  X,
  Building2, 
  GalleryVerticalEnd,
  Scale,
  Flag,
  Timer,
  CheckCircle2,
  Clock,
  HelpCircle,
  User,
  Users
} from 'lucide-react';
import { PoliticalScandal, ScandalFilters } from '../types/scandal';
import '../styles/InlineFilterPanel.css';

interface InlineFilterPanelProps {
  scandals: PoliticalScandal[];
  filters: ScandalFilters;
  onFiltersChange: (filters: ScandalFilters) => void;
  filteredScandals: PoliticalScandal[];
}

const InlineFilterPanel: React.FC<InlineFilterPanelProps> = ({
  scandals,
  filters,
  onFiltersChange,
  filteredScandals
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAllKeywords, setShowAllKeywords] = useState(false);
  const [showAllTypes, setShowAllTypes] = useState(false);
  const [showAllParties, setShowAllParties] = useState(false);
  const [showAllStatuses, setShowAllStatuses] = useState(false);

  /**
   * PANNEAU DE FILTRES INTÉGRÉ AVEC STATISTIQUES
   * 
   * COMPOSANT CENTRAL du système de filtrage avec 4 sections principales :
   * 
   * 1. HEADER avec titre "TRANSPARENCE POLITIQUE" / "ARCHIVES D'ENQUÊTES PUBLIQUES"
   * 2. BOUTON FILTRES avec icône Funnel blanche et compteur sans parenthèses
   * 3. FILTRES EXPANDABLES (quand bouton cliqué) :
   *    - Personnes, Partis, Types, Conséquences, Gravité, Montants, Périodes
   *    - Limitation à 6 items avec bouton "Voir + X" pour expansion
   *    - Tri par occurrence décroissante pour tous les filtres
   * 4. STATISTIQUES TOUJOURS VISIBLES (plus de toggle) :
   *    - "15 SCANDALES" (nombre total filtré)
   *    - "895.7M € MONTANT" (somme des montants filtrés)
   *    - "27 ANS PRISON" (total des peines filtrées)
   *    - "1 PAYS" (nombre de pays impliqués)
   * 
   * ORDRE D'AFFICHAGE : Header → Filtres (si expandés) → Statistiques (toujours)
   * 
   * MODIFICATIONS RÉCENTES :
   * - Suppression des parenthèses dans les compteurs de filtres
   * - Statistiques rendues permanentes (suppression du système de toggle)
   * - Icône Filter remplacée par Funnel en blanc
   * - Limitation et expansion des mots-clés avec tri par occurrence
   */

  // Calcul des options disponibles triées par nombre d'éléments (décroissant)
  const availableOptions = React.useMemo(() => {
    // Fonction pour trier par nombre d'occurrences
    const sortByCount = (items: string[], getCount: (item: string) => number) => {
      return items.sort((a, b) => getCount(b) - getCount(a));
    };

    const countries = sortByCount(
      Array.from(new Set(scandals.map(s => s.country))),
      (country) => scandals.filter(s => s.country === country).length
    );

    const types = sortByCount(
      Array.from(new Set(scandals.map(s => s.scandalType))),
      (type) => scandals.filter(s => s.scandalType === type).length
    );

    const parties = sortByCount(
      Array.from(new Set(scandals.map(s => s.politicalParty))),
      (party) => scandals.filter(s => s.politicalParty === party).length
    );

    const keywords = sortByCount(
      Array.from(new Set(scandals.flatMap(s => s.tags || []))),
      (keyword) => scandals.filter(s => s.tags?.includes(keyword)).length
    );

    const statuses = [
      { id: 'resolved', label: 'Jugé', count: scandals.filter(s => s.resolved).length },
      { id: 'ongoing', label: 'En cours', count: scandals.filter(s => !s.resolved && s.resolved !== undefined).length },
      { id: 'unknown', label: 'Statut inconnu', count: scandals.filter(s => s.resolved === undefined).length }
    ];

    return { countries, types, parties, keywords, statuses };
  }, [scandals]);

  // Icônes pour les types de scandales
  const scandalTypeIcons = {
    'corruption': <Building2 size={16} />,
    'financial': <GalleryVerticalEnd size={16} />,
    'abuse-of-power': <Scale size={16} />,
    'electoral': <Flag size={16} />,
    'espionage': <Timer size={16} />
  };

  // Statistiques
  const stats = React.useMemo(() => {
    const totalAmount = filteredScandals
      .filter(s => s.amountInvolved)
      .reduce((sum, s) => sum + (s.amountInvolved || 0), 0);

    const prisonYears = filteredScandals.reduce((total, scandal) => {
      const prisonConsequences = scandal.consequences.filter(c => 
        c.toLowerCase().includes('prison') || c.toLowerCase().includes('ans')
      );
      
      let years = 0;
      prisonConsequences.forEach(consequence => {
        const match = consequence.match(/(\d+)\s*(ans?|année)/i);
        if (match) years += parseInt(match[1]);
      });
      
      return total + years;
    }, 0);

    const resolvedCount = filteredScandals.filter(s => s.resolved).length;
    const politicalParties = new Set(filteredScandals.map(s => s.politicalParty)).size;

    return {
      total: filteredScandals.length,
      totalAmount,
      prisonYears,
      resolvedCount,
      politicalParties
    };
  }, [filteredScandals]);

  const formatAmount = (amount: number): string => {
    if (amount >= 1000000000) return `${(amount / 1000000000).toFixed(1)}Md €`;
    if (amount >= 1000000) return `${(amount / 1000000).toFixed(1)}M €`;
    if (amount >= 1000) return `${(amount / 1000).toFixed(0)}K €`;
    return `${amount} €`;
  };

  const translateScandalType = (type: string): string => {
    const translations = {
      'corruption': 'Corruption',
      'financial': 'Financier',
      'sexual': 'Sexuel',
      'abuse-of-power': 'Abus de pouvoir',
      'espionage': 'Espionnage',
      'electoral': 'Électoral',
      'other': 'Autre'
    };
    return translations[type as keyof typeof translations] || type;
  };

  const getSeverityLabel = (severity: number): string => {
    const labels = { 1: 'Mineur', 2: 'Modéré', 3: 'Grave', 4: 'Très grave', 5: 'Critique' };
    return labels[severity as keyof typeof labels] || `Niveau ${severity}`;
  };

  const handleFilterChange = (type: keyof ScandalFilters, value: string | number) => {
    if (type === 'dateRange') return;
    
    const currentValues = (filters[type] as (string | number)[]) || [];
    const newValues = currentValues.includes(value as never)
      ? currentValues.filter((v: string | number) => v !== value)
      : [...currentValues, value as never];

    onFiltersChange({ ...filters, [type]: newValues });
  };

  const clearAllFilters = () => {
    onFiltersChange({ country: [], scandalType: [], politicalParty: [], keywords: [] });
  };

  const hasActiveFilters = (filters.scandalType?.length || 0) + 
                          (filters.politicalParty?.length || 0) + 
                          (filters.keywords?.length || 0) > 0;

  const activeFiltersCount = hasActiveFilters ? 
    (filters.scandalType?.length || 0) + 
    (filters.politicalParty?.length || 0) + 
    (filters.keywords?.length || 0) : 0;

  return (
    <div className="inline-filter-panel">
      {/* Header du panneau - toujours visible */}
      <div className="filter-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="filter-header-left">
          <Funnel size={20} color="white" />
          <span className="filter-title">Filtres & Recherche</span>
          {hasActiveFilters && (
            <span className="active-filters-badge">{activeFiltersCount}</span>
          )}
          {/* Badge filtre personne */}
          {filters.mainPerson && (
            <span className="active-person-badge">
              {filters.mainPerson}
              {filters.personScope === 'all' ? (
                <span title="Inclut les implications indirectes" style={{marginLeft:6,display:'flex',alignItems:'center'}}>
                  <Users size={16} />
                </span>
              ) : (
                <span title="Filtrage strict sur la personne principale" style={{marginLeft:6,display:'flex',alignItems:'center'}}>
                  <User size={16} />
                </span>
              )}
              <button
                className="remove-person-filter"
                onClick={e => {
                  e.stopPropagation();
                  onFiltersChange({ ...filters, mainPerson: undefined });
                }}
                title="Retirer le filtre personne"
              >
                <X size={14} />
              </button>
            </span>
          )}
        </div>
        <div className="filter-header-right">
          <input
            type="date"
            className="date-filter-input"
            value={filters.dateRange?.start || ''}
            max={filters.dateRange?.end || new Date().toISOString().slice(0,10)}
            onClick={e => e.stopPropagation()}
            onChange={e => {
              onFiltersChange({
                ...filters,
                dateRange: {
                  ...filters.dateRange,
                  start: e.target.value
                }
              });
            }}
          />
          <span style={{color:'#94a3b8',margin:'0 6px'}}>–</span>
          <input
            type="date"
            className="date-filter-input"
            value={filters.dateRange?.end || ''}
            min={filters.dateRange?.start || ''}
            max={new Date().toISOString().slice(0,10)}
            onClick={e => e.stopPropagation()}
            onChange={e => {
              onFiltersChange({
                ...filters,
                dateRange: {
                  ...filters.dateRange,
                  end: e.target.value
                }
              });
            }}
          />
          <button className="expand-btn">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      {/* Contenu des filtres - pliable */}
      {isExpanded && (
        <div className="filter-content">
          {/* Grille de filtres à 4 colonnes */}
          <div className="filter-grid">
            {/* Colonne 1: Types de scandales */}
            <div className="filter-column">
              <h3><span><Scale size={18}/></span>Types</h3>
              <div className="filter-options">
                {(showAllTypes ? availableOptions.types : availableOptions.types.slice(0, 6)).map(type => (
                  <button
                    key={type}
                    className={`filter-option ${filters.scandalType?.includes(type) ? 'active' : ''}`}
                    onClick={() => handleFilterChange('scandalType', type)}
                  >
                    <span className="filter-label">{translateScandalType(type)}</span>
                    <span className="filter-count">
                      {scandals.filter(s => s.scandalType === type).length}
                    </span>
                  </button>
                ))}
                {availableOptions.types.length > 6 && (
                  <button
                    className="show-more-btn"
                    onClick={() => setShowAllTypes(!showAllTypes)}
                  >
                    {showAllTypes ? 'Voir moins' : `Voir +${availableOptions.types.length - 6}`}
                  </button>
                )}
              </div>
            </div>

            {/* Colonne 2: Partis politiques */}
            <div className="filter-column">
              <h3><span><Flag size={18}/></span>Partis</h3>
              <div className="filter-options">
                {(showAllParties ? availableOptions.parties : availableOptions.parties.slice(0, 6)).map(party => (
                  <button
                    key={party}
                    className={`filter-option ${filters.politicalParty?.includes(party) ? 'active' : ''}`}
                    onClick={() => handleFilterChange('politicalParty', party)}
                  >
                    <span className="filter-label">{party}</span>
                    <span className="filter-count">
                      {scandals.filter(s => s.politicalParty === party).length}
                    </span>
                  </button>
                ))}
                {availableOptions.parties.length > 6 && (
                  <button
                    className="show-more-btn"
                    onClick={() => setShowAllParties(!showAllParties)}
                  >
                    {showAllParties ? 'Voir moins' : `Voir +${availableOptions.parties.length - 6}`}
                  </button>
                )}
              </div>
            </div>

            {/* Colonne 3: Mots-clés */}
            <div className="filter-column">
              <h3><span><HelpCircle size={18}/></span>Mots-clés</h3>
              <div className="filter-options">
                {(showAllKeywords ? availableOptions.keywords : availableOptions.keywords.slice(0, 6)).map(keyword => (
                  <button
                    key={keyword}
                    className={`filter-option ${filters.keywords?.includes(keyword) ? 'active' : ''}`}
                    onClick={() => handleFilterChange('keywords', keyword)}
                  >
                    <span className="filter-label">{keyword}</span>
                    <span className="filter-count">
                      {scandals.filter(s => s.tags?.includes(keyword)).length}
                    </span>
                  </button>
                ))}
                {availableOptions.keywords.length > 6 && (
                  <button
                    className="show-more-btn"
                    onClick={() => setShowAllKeywords(!showAllKeywords)}
                  >
                    {showAllKeywords ? 'Voir moins' : `Voir +${availableOptions.keywords.length - 6}`}
                  </button>
                )}
              </div>
            </div>

            {/* Colonne 4: Statut */}
            <div className="filter-column">
              <h3><span><CheckCircle2 size={18}/></span>Statut</h3>
              <div className="filter-options">
                {(showAllStatuses ? availableOptions.statuses : availableOptions.statuses.slice(0, 6)).map(status => (
                  <button
                    key={status.id}
                    className={`filter-option ${filters.status?.includes(status.id) ? 'active' : ''}`}
                    onClick={() => handleFilterChange('status', status.id)}
                  >
                    <span className="filter-label">{status.label}</span>
                    <span className="filter-count">
                      {status.count}
                    </span>
                  </button>
                ))}
                {availableOptions.statuses.length > 6 && (
                  <button
                    className="show-more-btn"
                    onClick={() => setShowAllStatuses(!showAllStatuses)}
                  >
                    {showAllStatuses ? 'Voir moins' : `Voir +${availableOptions.statuses.length - 6}`}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistiques rapides - toujours visibles */}
      <div className="quick-stats">
        <div className="stat-item">
          <span className="stat-value">{stats.total}</span>
          <span className="stat-label">Scandales</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{formatAmount(stats.totalAmount)}</span>
          <span className="stat-label">Montant</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.prisonYears}</span>
          <span className="stat-label">Ans prison</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.politicalParties}</span>
          <span className="stat-label">Partis</span>
        </div>
      </div>
    </div>
  );
};

export default InlineFilterPanel; 