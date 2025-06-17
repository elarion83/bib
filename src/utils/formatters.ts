import { format, parseISO, isValid } from 'date-fns';
import { fr } from 'date-fns/locale';

/**
 * UTILITAIRES DE FORMATAGE
 * 
 * FONCTIONS PRINCIPALES :
 * 
 * 1. formatAmount() - Formatage des montants financiers
 *    - Conversion automatique : K, M, Md (milliers, millions, milliards)
 *    - Support multi-devises (EUR par défaut)
 *    - Utilisé dans : cartes timeline, statistiques, modal
 * 
 * 2. formatDate() - Formatage des dates
 *    - Formats : 'short' (MM/YYYY), 'full' (DD mois YYYY), 'year' (YYYY)
 *    - Localisation française automatique
 *    - Gestion des dates invalides
 * 
 * 3. formatPrisonSentence() - Formatage des peines de prison
 *    - Pluralisation automatique (an/ans)
 *    - Gestion des peines nulles/indéfinies
 * 
 * 4. formatConsequences() - Formatage des conséquences
 *    - Jointure avec virgules et "et" final
 *    - Capitalisation automatique
 * 
 * 5. formatSeverity() - Formatage de la gravité
 *    - Conversion numérique vers libellé français
 *    - Échelle 1-5 : Mineur → Critique
 * 
 * UTILISATION :
 * - Import direct dans les composants
 * - Remplacement de AmountFormatter (supprimé)
 * - Cohérence d'affichage dans toute l'app
 */

// Configuration des devises
export const currencyConfigs: Record<string, { symbol: string; decimals: number }> = {
  EUR: { symbol: '€', decimals: 2 },
  USD: { symbol: '$', decimals: 2 },
  GBP: { symbol: '£', decimals: 2 },
  JPY: { symbol: '¥', decimals: 0 },
  CHF: { symbol: 'CHF', decimals: 2 },
  CAD: { symbol: 'C$', decimals: 2 },
  AUD: { symbol: 'A$', decimals: 2 },
  BRL: { symbol: 'R$', decimals: 2 },
  RUB: { symbol: '₽', decimals: 2 },
  CNY: { symbol: '¥', decimals: 2 },
};

/**
 * Formate un montant avec la devise appropriée
 */
export const formatAmount = (
  amount: number, 
  currency: string = 'EUR', 
  options: {
    compact?: boolean;
    showSymbol?: boolean;
    locale?: string;
  } = {}
): string => {
  const { compact = true, showSymbol = true, locale = 'fr-FR' } = options;
  const config = currencyConfigs[currency] || currencyConfigs.EUR;

  if (compact && amount >= 1000000000) {
    const billions = (amount / 1000000000).toFixed(1);
    return showSymbol 
      ? `${billions} Md ${config.symbol}` 
      : `${billions} milliards`;
  }

  if (compact && amount >= 1000000) {
    const millions = (amount / 1000000).toFixed(1);
    return showSymbol 
      ? `${millions} M ${config.symbol}` 
      : `${millions} millions`;
  }

  if (compact && amount >= 1000) {
    const thousands = (amount / 1000).toFixed(0);
    return showSymbol 
      ? `${thousands} k ${config.symbol}` 
      : `${thousands} milliers`;
  }

  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: config.decimals,
    maximumFractionDigits: config.decimals,
  }).format(amount);

  return showSymbol ? `${formatted} ${config.symbol}` : formatted;
};

/**
 * Formate une date selon le format français
 */
export const formatDate = (
  dateString: string,
  formatType: 'full' | 'year' | 'monthYear' | 'short' = 'full'
): string => {
  // Si c'est juste une année
  if (/^\d{4}$/.test(dateString)) {
    return dateString;
  }

  try {
    const date = parseISO(dateString);
    
    if (!isValid(date)) {
      return dateString; // Retourne la chaîne originale si invalide
    }

    switch (formatType) {
      case 'year':
        return format(date, 'yyyy');
      case 'monthYear':
        return format(date, 'MMMM yyyy', { locale: fr });
      case 'short':
        return format(date, 'dd/MM/yyyy');
      case 'full':
      default:
        return format(date, 'dd MMMM yyyy', { locale: fr });
    }
  } catch {
    return dateString; // Retourne la chaîne originale en cas d'erreur
  }
};

/**
 * Calcule la durée entre deux dates
 */
export const calculateDuration = (startDate: string, endDate?: string): string => {
  try {
    const start = parseISO(startDate);
    const end = endDate ? parseISO(endDate) : new Date();
    
    if (!isValid(start) || !isValid(end)) {
      return 'Durée inconnue';
    }

    const diffInMilliseconds = end.getTime() - start.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInYears > 0) {
      return `${diffInYears} an${diffInYears > 1 ? 's' : ''}`;
    }
    
    if (diffInMonths > 0) {
      return `${diffInMonths} mois`;
    }
    
    return `${diffInDays} jour${diffInDays > 1 ? 's' : ''}`;
  } catch {
    return 'Durée inconnue';
  }
};

/**
 * Obtient la couleur appropriée selon la gravité
 */
export const getSeverityColor = (severity: number): string => {
  const colors = {
    1: 'bg-yellow-500 shadow-yellow-500/30 text-white',
    2: 'bg-blue-500 shadow-blue-500/30 text-white',
    3: 'bg-orange-500 shadow-orange-500/30 text-white',
    4: 'bg-red-500 shadow-red-500/30 text-white',
    5: 'bg-purple-600 shadow-purple-600/30 text-white',
  };
  return colors[severity as keyof typeof colors] || colors[3];
};

/**
 * Obtient la couleur du texte selon la gravité
 */
export const getSeverityTextColor = (severity: number): string => {
  const colors = {
    1: 'text-yellow-600',
    2: 'text-blue-600',
    3: 'text-orange-600',
    4: 'text-red-600',
    5: 'text-purple-600',
  };
  return colors[severity as keyof typeof colors] || colors[3];
};

/**
 * Génère un libellé pour le niveau de gravité
 */
export const getSeverityLabel = (severity: number): string => {
  const labels = {
    1: 'Mineur',
    2: 'Modéré',
    3: 'Important',
    4: 'Grave',
    5: 'Majeur',
  };
  return labels[severity as keyof typeof labels] || 'Non défini';
};

/**
 * Génère une couleur pour le type de scandale
 */
export const getScandalTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    corruption: 'bg-red-500',
    financial: 'bg-green-500',
    sexual: 'bg-pink-500',
    'abuse-of-power': 'bg-purple-500',
    espionage: 'bg-gray-600',
    electoral: 'bg-blue-500',
    other: 'bg-orange-500',
  };
  return typeColors[type] || typeColors.other;
};

/**
 * Traduit le type de scandale en français
 */
export const translateScandalType = (type: string): string => {
  const translations: Record<string, string> = {
    corruption: 'Corruption',
    financial: 'Financier',
    sexual: 'Sexuel',
    'abuse-of-power': 'Abus de pouvoir',
    espionage: 'Espionnage',
    electoral: 'Électoral',
    other: 'Autre',
  };
  return translations[type] || type;
};

/**
 * Formate la liste des conséquences
 */
export const formatConsequences = (consequences: string[]): string => {
  if (consequences.length === 0) return 'Aucune conséquence connue';
  if (consequences.length === 1) return consequences[0];
  if (consequences.length === 2) return consequences.join(' et ');
  
  const lastConsequence = consequences[consequences.length - 1];
  const otherConsequences = consequences.slice(0, -1);
  return `${otherConsequences.join(', ')} et ${lastConsequence}`;
};

/**
 * Génère un ID unique pour un scandale
 */
export const generateScandalId = (scandal: { title: string; date: string; mainPerson: string }): string => {
  const cleanTitle = scandal.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const year = scandal.date.substring(0, 4);
  const cleanPerson = scandal.mainPerson.toLowerCase().replace(/[^a-z0-9]/g, '-');
  return `${cleanTitle}-${year}-${cleanPerson}`;
}; 