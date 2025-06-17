/**
 * TYPES TYPESCRIPT - STRUCTURE DES SCANDALES
 * 
 * INTERFACE PRINCIPALE : PoliticalScandal
 * 
 * CHAMPS OBLIGATOIRES :
 * - id: string - Identifiant unique
 * - title: string - Nom du scandale
 * - date: string - Date de révélation (format ISO)
 * - mainPerson: string - Personnalité principale
 * - position: string - Fonction/poste occupé
 * - politicalParty: string - Parti politique
 * - country: string - Pays (France principalement)
 * - description: string - Description détaillée
 * - severity: number - Gravité de 1 à 5
 * - resolved: boolean - Statut (jugé/en instance)
 * - type: string - Catégorie du scandale
 * 
 * CHAMPS OPTIONNELS :
 * - amountInvolved?: number - Montant financier
 * - currency?: string - Devise (EUR par défaut)
 * - consequences?: string[] - Liste des conséquences
 * - tags?: string[] - Mots-clés pour filtrage
 * - prisonSentence?: number - Peine de prison (années)
 * - sources?: string[] - Sources/liens externes
 * 
 * UTILISATION :
 * - Validation TypeScript stricte
 * - Autocomplétion dans l'IDE
 * - Cohérence des données
 * - Base pour les filtres et statistiques
 * 
 * ÉVOLUTIONS POSSIBLES :
 * - Ajout de champs géographiques (région, ville)
 * - Dates multiples (révélation, jugement, etc.)
 * - Liens entre scandales (affaires connexes)
 * - Médias associés (photos, documents)
 */

export interface PoliticalScandal {
  //id: number; // Identifiant unique
  // Informations temporelles
  date: string; // Date complète ou année
  duration?: string; // Durée du scandale
  
  // Informations principales
  title: string; // Nom du scandale
  description: string; // Description détaillée
  
  // Personnes impliquées
  mainPerson: string; // Personne principale
  otherPersons?: string[]; // Autres personnes impliquées
  
  // Informations politiques
  politicalParty: string; // Parti politique
  position: string; // Poste occupé (Président, Ministre, etc.)
  country: string; // Pays concerné
  
  // Type et gravité
  scandalType: 'corruption' | 'discrimination' | 'fake-jobs' | 'tax-fraud' | 'violence' | 'misuse-of-public-funds' | 'conflict_of_interest' | 'personal' | 'financial' | 'sexual' | 'abuse-of-power' | 'espionage' | 'electoral' | 'other';
  severity: 1 | 2 | 3 | 4 | 5; // Échelle de gravité
  
  // Aspects financiers
  amountInvolved?: number; // Somme en question
  currency?: string; // Devise
  
  // Conséquences
  consequences: string[]; // Démission, prison, amende, etc.
  resolved: boolean; // Affaire résolue ou en cours
  
  // Métadonnées
  sources?: Array<{
    title: string;
    url: string;
    publisher: string;
  }>; // Sources d'information
  tags?: string[]; // Tags personnalisés
  
  // Styling
  color: 'red' | 'orange' | 'yellow' | 'purple' | 'blue' | 'gray';
}

export interface ScandalTimelineProps {
  title: string;
  subtitle: string;
  scandals: PoliticalScandal[];
  filters?: {
    country?: string[];
    scandalType?: string[];
    politicalParty?: string[];
    severity?: number[];
  };
  showFilters?: boolean;
  className?: string;
}

export interface ScandalFilters {
  country?: string[];
  scandalType?: string[];
  politicalParty?: string[];
  keywords?: string[];
  status?: string[];
  mainPerson?: string;
  personScope?: 'main' | 'all';
  dateRange?: {
    start?: string;
    end?: string;
  };
}

export interface ScandalCardProps {
  scandal: PoliticalScandal;
  index: number;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export interface FilterPanelProps {
  filters: ScandalFilters;
  availableCountries: string[];
  availableParties: string[];
  onFiltersChange: (filters: ScandalFilters) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export interface SeverityBadgeProps {
  severity: number;
  size?: 'sm' | 'md' | 'lg';
}

export interface ConsequenceBadgeProps {
  consequence: string;
  variant?: 'default' | 'warning' | 'danger' | 'success';
}

export interface AmountFormatterProps {
  amount: number;
  currency: string;
  showSymbol?: boolean;
  compact?: boolean;
}

export type ScandalColor = 'red' | 'orange' | 'yellow' | 'purple' | 'blue' | 'gray';
export type ScandalType = 'corruption' | 'financial' | 'sexual' | 'abuse-of-power' | 'espionage' | 'electoral' | 'other';
export type SeverityLevel = 1 | 2 | 3 | 4 | 5;

// Utilitaires de formatage
export interface CurrencyConfig {
  symbol: string;
  code: string;
  decimals: number;
}

export interface LocaleConfig {
  language: string;
  currency: string;
  dateFormat: string;
} 