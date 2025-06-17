import React from 'react';
import { PoliticalScandal } from '../types/scandal';

// Exemple de données de scandales
export const exampleScandals: PoliticalScandal[] = [
  {
   // id: 1,
    date: "2023-01-15",
    duration: "6 mois",
    title: "Affaire des écoutes illégales",
    description: "Scandale impliquant des écoutes téléphoniques non autorisées de journalistes d'investigation.",
    mainPerson: "Jean Dupont",
    otherPersons: ["Marie Martin", "Pierre Dubois"],
    politicalParty: "Parti Démocrate",
    position: "Ministre de l'Intérieur",
    country: "France",
    scandalType: "espionage",
    severity: 4,
    consequences: ["Démission du ministre", "Enquête parlementaire"],
    resolved: false,
    tags: ["écoutes", "surveillance", "presse"],
    color: "gray"
  },
  {
  //  id: 2,
    date: "2023-03-20",
    duration: "1 an",
    title: "Scandale des marchés publics",
    description: "Attribution frauduleuse de marchés publics pour la construction d'infrastructures.",
    mainPerson: "Sophie Lambert",
    otherPersons: ["Marc Bernard", "Luc Petit"],
    politicalParty: "Parti Républicain",
    position: "Maire",
    country: "France",
    scandalType: "corruption",
    severity: 5,
    amountInvolved: 2500000,
    currency: "EUR",
    consequences: ["Mise en examen", "Gel des projets", "Perquisitions"],
    resolved: true,
    tags: ["marchés publics", "infrastructure", "corruption"],
    color: "red"
  },
  {
 //   id: 3,
    date: "2023-06-10",
    duration: "3 mois",
    title: "Affaire des notes de frais",
    description: "Utilisation abusive des notes de frais et remboursements injustifiés.",
    mainPerson: "Philippe Martin",
    otherPersons: ["Claire Dubois", "Thomas Roux"],
    politicalParty: "Parti Centriste",
    position: "Député",
    country: "France",
    scandalType: "financial",
    severity: 3,
    amountInvolved: 150000,
    currency: "EUR",
    consequences: ["Remboursement intégral", "Blâme public"],
    resolved: true,
    tags: ["frais", "luxe", "remboursement"],
    color: "orange"
  }
];

// Fonction pour créer un nouveau scandale
export const createScandal = (data: Partial<PoliticalScandal>): PoliticalScandal => {
  return {
  //  id:5,
    date: data.date || new Date().toISOString(),
    title: data.title || 'Nouveau scandale',
    description: data.description || 'Description à venir',
    mainPerson: data.mainPerson || 'Inconnu',
    position: data.position || 'Non spécifié',
    politicalParty: data.politicalParty || 'Indépendant',
    country: data.country || 'France',
    scandalType: data.scandalType || 'other',
    severity: data.severity || 1,
    consequences: data.consequences || ['En cours d\'évaluation'],
    resolved: data.resolved || false,
    color: data.color || 'gray',
    ...data
  };
};

// Fonction pour filtrer les scandales
export const filterScandals = (scandals: PoliticalScandal[], filters: any) => {
  return scandals.filter(scandal => {
    if (filters.country && !filters.country.includes(scandal.country)) {
      return false;
    }
    if (filters.severity && !filters.severity.includes(scandal.severity)) {
      return false;
    }
    if (filters.type && !filters.type.includes(scandal.scandalType)) {
      return false;
    }
    return true;
  });
};

// Fonction pour trier les scandales
export const sortScandals = (scandals: PoliticalScandal[], sortBy: string) => {
  return [...scandals].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'severity':
        return b.severity - a.severity;
      case 'amount':
        return (b.amountInvolved || 0) - (a.amountInvolved || 0);
      default:
        return 0;
    }
  });
};

// Fonction pour calculer les statistiques
export const calculateStats = (scandals: PoliticalScandal[]) => {
  return {
    total: scandals.length,
    resolved: scandals.filter(s => s.resolved).length,
    totalAmount: scandals.reduce((sum, s) => sum + (s.amountInvolved || 0), 0),
    averageSeverity: scandals.reduce((sum, s) => sum + s.severity, 0) / scandals.length
  };
}; 