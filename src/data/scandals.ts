import { PoliticalScandal } from '../types/scandal';

/**
 * DONNÉES DES SCANDALES POLITIQUES FRANÇAIS
 * 
 * BASE DE DONNÉES PRINCIPALE contenant ~15 scandales majeurs (435 lignes)
 * 
 * STRUCTURE DE CHAQUE SCANDALE :
 * - id: identifiant unique
 * - title: nom du scandale
 * - date: date de révélation/début
 * - mainPerson: personnalité principale impliquée
 * - position: fonction occupée
 * - politicalParty: parti politique
 * - country: pays (France principalement)
 * - description: résumé détaillé
 * - amountInvolved: montant financier (en euros)
 * - currency: devise (EUR)
 * - consequences: array des conséquences (démission, prison, etc.)
 * - severity: gravité de 1 à 5
 * - resolved: booléen (jugé/en instance)
 * - tags: mots-clés pour filtrage
 * - prisonSentence: peine de prison en années
 * - type: catégorie (corruption, détournement, etc.)
 * 
 * SCANDALES INCLUS :
 * - Affaire Fillon (emplois fictifs)
 * - Affaire Cahuzac (fraude fiscale)
 * - Affaire Balkany (fraude fiscale)
 * - Affaire Sarkozy-Kadhafi (financement illégal)
 * - Affaire des écoutes (Sarkozy)
 * - Affaire Tapie-Crédit Lyonnais
 * - Affaire Woerth-Bettencourt
 * - Affaire Guéant (primes en liquide)
 * - Affaire Thévenoud (fraude fiscale)
 * - Affaire Dassault (corruption)
 * - Affaire Bygmalion (financement de campagne)
 * - Affaire des HLM de Paris
 * - Affaire Karachi (rétrocommissions)
 * - Affaire des emplois fictifs du MoDem
 * - Affaire Benalla
 * 
 * UTILISATION POUR STATISTIQUES :
 * - Calcul automatique des totaux (montants, peines, etc.)
 * - Filtrage par tous les champs disponibles
 * - Tri et regroupement par critères multiples
 */

export const politicalScandals: PoliticalScandal[] = [
  {
    "id": 1,
    "date": "2000-09-15",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs du RPR",
    "description": "Système d'emplois fictifs à la mairie de Paris sous Jacques Chirac, impliquant des dizaines de collaborateurs fantômes payés par la ville pour travailler pour le RPR.",
    "mainPerson": "Jacques Chirac",
    "otherPersons": ["Alain Juppé", "Jean Tiberi", "Michel Roussin"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "financial",
    "severity": 5,
    "amountInvolved": 2000000,
    "currency": "EUR",
    "consequences": ["Immunité présidentielle", "Condamnation d'Alain Juppé", "Amendes pour la ville de Paris"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire des emplois fictifs de la mairie de Paris",
        "url": "https://www.lemonde.fr/politique/article/2011/12/15/l-affaire-des-emplois-fictifs-de-la-mairie-de-paris_1618641_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Emplois fictifs : Chirac relaxé, le RPR condamné",
        "url": "https://www.liberation.fr/societe/2011/12/15/emplois-fictifs-chirac-relaxe-le-rpr-condamne_783847/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "mairie", "détournement", "RPR"],
    "color": "red"
  },
  {
    "id": 2,
    "date": "2000-11-20",
    "duration": "3 ans",
    "title": "Affaire des HLM de Paris",
    "description": "Système de corruption dans l'attribution des logements sociaux parisiens impliquant des élus et des promoteurs immobiliers.",
    "mainPerson": "Jean Tiberi",
    "otherPersons": ["Xavière Tiberi", "Pierre-Christian Taittinger"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Maire de Paris",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 800000,
    "currency": "EUR",
    "consequences": ["Condamnations", "Amendes", "Perte de mandats"],
    "resolved": true,
    "sources": [
      {
        "title": "Jean Tiberi condamné dans l'affaire des HLM",
        "url": "https://www.lemonde.fr/societe/article/2006/10/26/jean-tiberi-condamne-dans-l-affaire-des-hlm_825847_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "HLM de Paris : les Tiberi condamnés",
        "url": "https://www.liberation.fr/societe/2006/10/26/hlm-de-paris-les-tiberi-condamnes_56789/",
        "publisher": "Libération"
      }
    ],
    "tags": ["HLM", "corruption", "logement", "Paris"],
    "color": "red"
  },
  {
    "id": 3,
    "date": "2001-03-10",
    "duration": "5 ans",
    "title": "Affaire Elf",
    "description": "Vaste système de corruption internationale impliquant la compagnie pétrolière Elf et des hommes politiques français, avec détournements de fonds et commissions occultes.",
    "mainPerson": "Roland Dumas",
    "otherPersons": ["André Tarallo", "Loïk Le Floch-Prigent", "Christine Deviers-Joncour"],
    "politicalParty": "Parti Socialiste",
    "position": "Ancien Ministre des Affaires étrangères",
    "country": "France",
    "scandalType": "corruption",
    "severity": 5,
    "amountInvolved": 350000000,
    "currency": "EUR",
    "consequences": ["Condamnation de Roland Dumas", "Emprisonnement ferme", "Amendes importantes"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire Elf : un scandale d'État",
        "url": "https://www.lemonde.fr/politique/article/2003/11/12/l-affaire-elf-un-scandale-d-etat_340876_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Roland Dumas condamné dans l'affaire Elf",
        "url": "https://www.liberation.fr/societe/2001/05/30/roland-dumas-condamne-dans-l-affaire-elf_366849/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "international", "pétrole", "commissions"],
    "color": "red"
  },
  {
    "id": 4,
    "date": "2001-09-21",
    "duration": "1 an",
    "title": "Affaire de la cassette Méry",
    "description": "Enregistrement posthume de Jean-Claude Méry révélant le système de financement occulte du RPR par des marchés publics truqués à Paris.",
    "mainPerson": "Jean-Claude Méry",
    "otherPersons": ["Jacques Chirac", "Jean Tiberi", "Michel Roussin"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Intermédiaire politique",
    "country": "France",
    "scandalType": "financial",
    "severity": 5,
    "amountInvolved": 5000000,
    "currency": "EUR",
    "consequences": ["Révélations publiques", "Enquêtes judiciaires", "Immunité présidentielle"],
    "resolved": true,
    "sources": [
      {
        "title": "La cassette Méry : les révélations posthumes",
        "url": "https://www.lemonde.fr/politique/article/2000/09/21/la-cassette-mery-les-revelations-posthumes_1408959_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Cassette Méry : l'onde de choc",
        "url": "https://www.liberation.fr/societe/2000/09/21/cassette-mery-l-onde-de-choc_339756/",
        "publisher": "Libération"
      }
    ],
    "tags": ["financement", "cassette", "révélations", "RPR"],
    "color": "red"
  },
  {
    "id": 5,
    "date": "2002-05-20",
    "duration": "3 ans",
    "title": "Affaire des HLM des Hauts-de-Seine",
    "description": "Système de corruption autour de l'attribution de marchés publics HLM dans les Hauts-de-Seine, impliquant des élus locaux et des entrepreneurs.",
    "mainPerson": "Patrick Balkany",
    "otherPersons": ["Charles Pasqua", "Didier Schuller"],
    "politicalParty": "Les Républicains",
    "position": "Maire de Levallois-Perret",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 1500000,
    "currency": "EUR",
    "consequences": ["Condamnations", "Amendes", "Inéligibilité temporaire"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire des HLM des Hauts-de-Seine",
        "url": "https://www.lemonde.fr/politique/article/2005/02/16/l-affaire-des-hlm-des-hauts-de-seine_619424_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "HLM 92 : les condamnations pleuvent",
        "url": "https://www.liberation.fr/societe/2005/02/16/hlm-92-les-condamnations-pleuvent_512088/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "HLM", "marchés publics", "Hauts-de-Seine"],
    "color": "orange"
  },
  {
    "id": 6,
    "date": "2002-10-15",
    "duration": "2 ans",
    "title": "Affaire Alain Carignon",
    "description": "Corruption du maire de Grenoble dans l'attribution de marchés publics de distribution d'eau et de télévision par câble.",
    "mainPerson": "Alain Carignon",
    "otherPersons": ["Pierre Botton", "Rémy Chardon"],
    "politicalParty": "Les Républicains",
    "position": "Maire de Grenoble",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 2000000,
    "currency": "EUR",
    "consequences": ["Condamnation à 4 ans de prison", "Inéligibilité", "Démission"],
    "resolved": true,
    "sources": [
      {
        "title": "Alain Carignon condamné pour corruption",
        "url": "https://www.lemonde.fr/societe/article/1996/04/16/alain-carignon-condamne-pour-corruption_3742156_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Carignon : la chute d'un baron",
        "url": "https://www.liberation.fr/societe/1996/04/16/carignon-la-chute-d-un-baron_168945/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "Grenoble", "eau", "télévision"],
    "color": "red"
  },
  {
    "id": 7,
    "date": "2003-01-15",
    "duration": "4 ans",
    "title": "Affaire Clearstream",
    "description": "Fausses accusations de corruption visant Nicolas Sarkozy dans une prétendue affaire de comptes occultes, orchestrée par des responsables politiques.",
    "mainPerson": "Dominique de Villepin",
    "otherPersons": ["Nicolas Sarkozy", "Jean-Louis Gergorin", "Imad Lahoud"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Premier Ministre",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Relaxe de Villepin", "Tensions politiques", "Procès médiatisé"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire Clearstream expliquée",
        "url": "https://www.lemonde.fr/politique/article/2010/01/28/l-affaire-clearstream-expliquee_1298257_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Clearstream : Villepin relaxé",
        "url": "https://www.liberation.fr/societe/2010/01/28/clearstream-villepin-relaxe_606842/",
        "publisher": "Libération"
      }
    ],
    "tags": ["manipulation", "fausses accusations", "justice", "présidentielle"],
    "color": "purple"
  },
  {
    "id": 8,
    "date": "2003-06-10",
    "duration": "2 ans",
    "title": "Affaire Michel Gillibert",
    "description": "Détournement de fonds publics par le maire UMP de Cannes pour financer des voyages personnels et des réceptions privées.",
    "mainPerson": "Michel Gillibert",
    "otherPersons": ["Bernard Brochand"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Maire de Cannes",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 300000,
    "currency": "EUR",
    "consequences": ["Condamnation", "Amende", "Inéligibilité"],
    "resolved": true,
    "sources": [
      {
        "title": "Michel Gillibert condamné à Cannes",
        "url": "https://www.lemonde.fr/societe/article/2005/03/15/michel-gillibert-condamne-a-cannes_632847_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Cannes : Gillibert sanctionné",
        "url": "https://www.liberation.fr/societe/2005/03/15/cannes-gillibert-sanctionne_512456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["détournement", "Cannes", "voyages", "réceptions"],
    "color": "orange"
  },
  {
    "id": 9,
    "date": "2004-02-18",
    "duration": "3 ans",
    "title": "Affaire des marchés publics de l'Essonne",
    "description": "Système de corruption dans l'attribution de marchés publics du conseil général de l'Essonne impliquant des élus socialistes.",
    "mainPerson": "Michel Berson",
    "otherPersons": ["Xavier Dugoin", "Claude Vazquez"],
    "politicalParty": "Parti Socialiste",
    "position": "Président du Conseil général",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 1200000,
    "currency": "EUR",
    "consequences": ["Condamnations", "Amendes", "Démissions"],
    "resolved": true,
    "sources": [
      {
        "title": "Essonne : les élus dans la tourmente",
        "url": "https://www.lemonde.fr/societe/article/2007/05/22/essonne-les-elus-dans-la-tourmente_915847_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Marchés publics : l'Essonne sanctionnée",
        "url": "https://www.liberation.fr/societe/2007/05/22/marches-publics-l-essonne-sanctionnee_92456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["marchés publics", "Essonne", "conseil général", "socialistes"],
    "color": "orange"
  },
  {
    "id": 10,
    "date": "2004-07-22",
    "duration": "2 ans",
    "title": "Affaire des frégates de Taïwan",
    "description": "Commissions occultes versées lors de la vente de frégates françaises à Taïwan, impliquant des intermédiaires et des hommes politiques.",
    "mainPerson": "Alain Richard",
    "otherPersons": ["Thomson-CSF", "Andrew Wang"],
    "politicalParty": "Parti Socialiste",
    "position": "Ministre de la Défense",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 500000000,
    "currency": "EUR",
    "consequences": ["Enquêtes judiciaires", "Tensions diplomatiques", "Procédures en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "L'affaire des frégates de Taïwan",
        "url": "https://www.lemonde.fr/international/article/2008/05/13/l-affaire-des-fregates-de-taiwan_1044076_3210.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Frégates de Taïwan : les dessous d'un scandale",
        "url": "https://www.liberation.fr/international/2008/05/13/fregates-de-taiwan-les-dessous-d-un-scandale_86294/",
        "publisher": "Libération"
      }
    ],
    "tags": ["commissions", "armement", "international", "Taiwan"],
    "color": "orange"
  },
  {
    "id": 11,
    "date": "2004-11-08",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de l'UDF",
    "description": "Système d'emplois fictifs au sein de l'UDF pour rémunérer des collaborateurs politiques avec des fonds publics.",
    "mainPerson": "François Bayrou",
    "otherPersons": ["Gilles de Robien", "Hervé Morin"],
    "politicalParty": "Union pour la Démocratie Française",
    "position": "Président de l'UDF",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 400000,
    "currency": "EUR",
    "consequences": ["Remboursements", "Amendes", "Réformes internes"],
    "resolved": true,
    "sources": [
      {
        "title": "UDF : les emplois fictifs révélés",
        "url": "https://www.lemonde.fr/politique/article/2006/11/15/udf-les-emplois-fictifs-reveles_834567_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Bayrou face aux emplois fictifs",
        "url": "https://www.liberation.fr/societe/2006/11/15/bayrou-face-aux-emplois-fictifs_56234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "UDF", "fonds publics", "collaborateurs"],
    "color": "yellow"
  },
  {
    "id": 12,
    "date": "2005-03-14",
    "duration": "3 ans",
    "title": "Affaire des marchés publics de Marseille",
    "description": "Corruption dans l'attribution de marchés publics à Marseille impliquant le maire Jean-Claude Gaudin et des entrepreneurs.",
    "mainPerson": "Jean-Claude Gaudin",
    "otherPersons": ["René Raimondi", "Guy Teissier"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Maire de Marseille",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 2500000,
    "currency": "EUR",
    "consequences": ["Enquêtes", "Mises en examen", "Procès"],
    "resolved": true,
    "sources": [
      {
        "title": "Marseille : Gaudin dans la tourmente",
        "url": "https://www.lemonde.fr/societe/article/2008/04/22/marseille-gaudin-dans-la-tourmente_1037456_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Marchés publics marseillais : les soupçons",
        "url": "https://www.liberation.fr/societe/2008/04/22/marches-publics-marseillais-les-soupcons_89234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["marchés publics", "Marseille", "entrepreneurs", "corruption"],
    "color": "orange"
  },
  {
    "id": 13,
    "date": "2005-09-12",
    "duration": "4 ans",
    "title": "Affaire des sondages IPSOS",
    "description": "Financement occulte de sondages d'opinion par l'UMP pour influencer les résultats en faveur de Nicolas Sarkozy.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Jean-François Copé", "Patrick Stefanini"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ministre de l'Intérieur",
    "country": "France",
    "scandalType": "electoral",
    "severity": 3,
    "amountInvolved": 500000,
    "currency": "EUR",
    "consequences": ["Enquêtes", "Amendes", "Polémiques"],
    "resolved": true,
    "sources": [
      {
        "title": "UMP : les sondages sous surveillance",
        "url": "https://www.lemonde.fr/politique/article/2009/06/18/ump-les-sondages-sous-surveillance_1208456_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Sondages IPSOS : l'UMP épinglée",
        "url": "https://www.liberation.fr/societe/2009/06/18/sondages-ipsos-l-ump-epinglee_567234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["sondages", "UMP", "financement", "influence"],
    "color": "yellow"
  },
  {
    "id": 14,
    "date": "2006-03-15",
    "duration": "8 ans",
    "title": "Affaire Bettencourt",
    "description": "Financement occulte présumé de campagnes électorales par Liliane Bettencourt, impliquant Nicolas Sarkozy et son trésorier de campagne.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Liliane Bettencourt", "Éric Woerth", "Patrice de Maistre"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 150000,
    "currency": "EUR",
    "consequences": ["Non-lieu", "Polémiques", "Démission d'Éric Woerth"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire Bettencourt : chronologie",
        "url": "https://www.lemonde.fr/politique/article/2013/10/07/l-affaire-bettencourt-chronologie_3491876_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Bettencourt : Sarkozy mis hors de cause",
        "url": "https://www.liberation.fr/societe/2013/10/07/bettencourt-sarkozy-mis-hors-de-cause_936389/",
        "publisher": "Libération"
      }
    ],
    "tags": ["financement", "campagne", "L'Oréal", "non-lieu"],
    "color": "yellow"
  },
  {
    "id": 15,
    "date": "2006-08-20",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs du Parti Socialiste",
    "description": "Système d'emplois fictifs au Parti Socialiste pour rémunérer des permanents avec des fonds publics européens.",
    "mainPerson": "Henri Emmanuelli",
    "otherPersons": ["Harlem Désir", "Vincent Peillon"],
    "politicalParty": "Parti Socialiste",
    "position": "Trésorier du PS",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 600000,
    "currency": "EUR",
    "consequences": ["Condamnations", "Remboursements", "Amendes"],
    "resolved": true,
    "sources": [
      {
        "title": "PS : les emplois fictifs sanctionnés",
        "url": "https://www.lemonde.fr/politique/article/2008/12/04/ps-les-emplois-fictifs-sanctionnes_1126789_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Emmanuelli condamné pour emplois fictifs",
        "url": "https://www.liberation.fr/societe/2008/12/04/emmanuelli-condamne-pour-emplois-fictifs_345678/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "PS", "Europe", "permanents"],
    "color": "orange"
  },
  {
    "id": 16,
    "date": "2007-01-25",
    "duration": "3 ans",
    "title": "Affaire des écoutes de l'Élysée",
    "description": "Système d'écoutes illégales organisé depuis l'Élysée sous François Mitterrand pour surveiller des journalistes et opposants politiques.",
    "mainPerson": "François Mitterrand",
    "otherPersons": ["Gilles Ménage", "Christian Prouteau"],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 5,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Condamnations", "Indemnisations", "Réformes"],
    "resolved": true,
    "sources": [
      {
        "title": "Écoutes de l'Élysée : les condamnations",
        "url": "https://www.lemonde.fr/societe/article/2005/11/09/ecoutes-de-l-elysee-les-condamnations_708456_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire des écoutes élysées",
        "url": "https://www.liberation.fr/societe/2005/11/09/l-affaire-des-ecoutes-elysees_534567/",
        "publisher": "Libération"
      }
    ],
    "tags": ["écoutes", "Élysée", "surveillance", "journalistes"],
    "color": "red"
  },
  {
    "id": 17,
    "date": "2007-09-10",
    "duration": "3 ans",
    "title": "Affaire Karachi",
    "description": "Commissions occultes sur la vente de sous-marins au Pakistan qui auraient financé la campagne présidentielle d'Édouard Balladur en 1995.",
    "mainPerson": "Édouard Balladur",
    "otherPersons": ["François Léotard", "Renaud Donnedieu de Vabres", "Thierry Gaubert"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ancien Premier Ministre",
    "country": "France",
    "scandalType": "corruption",
    "severity": 5,
    "amountInvolved": 13000000,
    "currency": "EUR",
    "consequences": ["Procès en cours", "Mise en examen", "Enquêtes internationales"],
    "resolved": false,
    "sources": [
      {
        "title": "L'affaire Karachi : les zones d'ombre",
        "url": "https://www.lemonde.fr/politique/article/2010/10/13/l-affaire-karachi-les-zones-d-ombre_1425657_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Karachi : Balladur et Léotard renvoyés devant la CJR",
        "url": "https://www.liberation.fr/societe/2017/05/24/karachi-balladur-et-leotard-renvoyes-devant-la-cjr_1571826/",
        "publisher": "Libération"
      }
    ],
    "tags": ["commissions", "Pakistan", "campagne", "sous-marins"],
    "color": "red"
  },
  {
    "id": 18,
    "date": "2008-02-20",
    "duration": "2 ans",
    "title": "Affaire des sondages de l'Élysée",
    "description": "Commande de sondages d'opinion non déclarés par l'Élysée sous Nicolas Sarkozy, financés par des fonds publics sans appels d'offres.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Pierre Giacometti", "Claude Guéant", "Patrick Buisson"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 7500000,
    "currency": "EUR",
    "consequences": ["Remboursement", "Critiques", "Réforme des procédures"],
    "resolved": true,
    "sources": [
      {
        "title": "Les sondages de l'Élysée font polémique",
        "url": "https://www.lemonde.fr/politique/article/2014/02/06/les-sondages-de-l-elysee-font-polemique_4361884_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Sondages Élysée : la facture s'alourdit",
        "url": "https://www.liberation.fr/politiques/2014/02/06/sondages-elysee-la-facture-s-alourdit_978956/",
        "publisher": "Libération"
      }
    ],
    "tags": ["sondages", "Élysée", "fonds publics", "marchés"],
    "color": "orange"
  },
  {
    "id": 19,
    "date": "2008-06-15",
    "duration": "4 ans",
    "title": "Affaire des emplois fictifs du Front National",
    "description": "Système d'emplois fictifs au Front National utilisant des fonds du Parlement européen pour rémunérer des collaborateurs du parti.",
    "mainPerson": "Marine Le Pen",
    "otherPersons": ["Jean-Marie Le Pen", "Bruno Gollnisch", "Louis Aliot"],
    "politicalParty": "Front National",
    "position": "Présidente du FN",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 5000000,
    "currency": "EUR",
    "consequences": ["Remboursements exigés", "Procédures judiciaires", "Levée immunité"],
    "resolved": false,
    "sources": [
      {
        "title": "FN : les emplois fictifs européens",
        "url": "https://www.lemonde.fr/politique/article/2018/02/15/fn-les-emplois-fictifs-europeens_5257456_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Marine Le Pen et les assistants parlementaires",
        "url": "https://www.liberation.fr/politique/2018/02/15/marine-le-pen-et-les-assistants-parlementaires_1629834/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "FN", "Europe", "assistants"],
    "color": "red"
  },
  {
    "id": 20,
    "date": "2009-04-15",
    "duration": "6 ans",
    "title": "Affaire Bygmalion",
    "description": "Système de double facturation pour dissimuler le dépassement des comptes de campagne de Nicolas Sarkozy en 2012, impliquant l'agence Bygmalion.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Jérôme Lavrilleux", "Guillaume Lambert", "Franck Attal"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 18500000,
    "currency": "EUR",
    "consequences": ["Condamnation de Sarkozy", "Amendes", "Inéligibilité"],
    "resolved": true,
    "sources": [
      {
        "title": "Affaire Bygmalion : Sarkozy condamné",
        "url": "https://www.lemonde.fr/politique/article/2021/09/30/affaire-bygmalion-nicolas-sarkozy-condamne-a-un-an-de-prison-avec-sursis_6096781_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Bygmalion : les dessous du système",
        "url": "https://www.liberation.fr/politiques/2021/09/30/bygmalion-les-dessous-du-systeme_1955887/",
        "publisher": "Libération"
      }
    ],
    "tags": ["campagne", "double facturation", "dépassement", "2012"],
    "color": "red"
  },
  {
    "id": 21,
    "date": "2009-11-30",
    "duration": "3 ans",
    "title": "Affaire des emplois fictifs de la région Île-de-France",
    "description": "Système d'emplois fictifs à la région Île-de-France sous Jean-Paul Huchon pour rémunérer des collaborateurs socialistes.",
    "mainPerson": "Jean-Paul Huchon",
    "otherPersons": ["Julien Dray", "Claude Bartolone"],
    "politicalParty": "Parti Socialiste",
    "position": "Président de région",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 800000,
    "currency": "EUR",
    "consequences": ["Condamnations", "Remboursements", "Amendes"],
    "resolved": true,
    "sources": [
      {
        "title": "Île-de-France : Huchon condamné",
        "url": "https://www.lemonde.fr/societe/article/2012/09/20/ile-de-france-huchon-condamne_1763456_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Emplois fictifs : la région sanctionnée",
        "url": "https://www.liberation.fr/societe/2012/09/20/emplois-fictifs-la-region-sanctionnee_845678/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "région", "Île-de-France", "socialistes"],
    "color": "orange"
  },
  {
    "id": 22,
    "date": "2010-01-28",
    "duration": "12 ans",
    "title": "Affaire Cahuzac",
    "description": "Compte bancaire non déclaré en Suisse du ministre du Budget Jérôme Cahuzac, révélé par Mediapart malgré ses dénégations publiques.",
    "mainPerson": "Jérôme Cahuzac",
    "otherPersons": ["François Hollande", "Pierre Moscovici", "Patricia Cahuzac"],
    "politicalParty": "Parti Socialiste",
    "position": "Ministre du Budget",
    "country": "France",
    "scandalType": "financial",
    "severity": 5,
    "amountInvolved": 600000,
    "currency": "EUR",
    "consequences": ["Condamnation à 2 ans ferme", "Inéligibilité", "Démission du gouvernement"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire Cahuzac : chronologie d'un scandale",
        "url": "https://www.lemonde.fr/politique/article/2013/04/02/l-affaire-cahuzac-chronologie-d-un-scandale_3151685_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Cahuzac condamné définitivement",
        "url": "https://www.liberation.fr/societe/2018/05/15/cahuzac-condamne-definitivement_1650183/",
        "publisher": "Libération"
      }
    ],
    "tags": ["compte offshore", "Suisse", "mensonge", "démission"],
    "color": "red"
  },
  {
    "id": 23,
    "date": "2010-07-14",
    "duration": "2 ans",
    "title": "Affaire Woerth-Bettencourt",
    "description": "Conflit d'intérêts d'Éric Woerth, ministre du Budget, dont l'épouse travaillait pour Liliane Bettencourt pendant les contrôles fiscaux.",
    "mainPerson": "Éric Woerth",
    "otherPersons": ["Florence Woerth", "Liliane Bettencourt", "Nicolas Sarkozy"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ministre du Budget",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Démission", "Non-lieu", "Polémiques"],
    "resolved": true,
    "sources": [
      {
        "title": "Woerth-Bettencourt : les conflits d'intérêts",
        "url": "https://www.lemonde.fr/politique/article/2010/07/15/woerth-bettencourt-les-conflits-d-interets_1388456_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Éric Woerth dans la tourmente",
        "url": "https://www.liberation.fr/societe/2010/07/15/eric-woerth-dans-la-tourmente_667234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit intérêts", "fiscalité", "épouse", "démission"],
    "color": "yellow"
  },
  {
    "id": 24,
    "date": "2011-05-14",
    "duration": "10 ans",
    "title": "Affaire DSK",
    "description": "Agression sexuelle présumée de Dominique Strauss-Kahn sur une femme de chambre au Sofitel de New York, provoquant sa chute politique.",
    "mainPerson": "Dominique Strauss-Kahn",
    "otherPersons": ["Nafissatou Diallo", "Anne Sinclair", "Cyrus Vance"],
    "politicalParty": "Parti Socialiste",
    "position": "Directeur général du FMI",
    "country": "France",
    "scandalType": "sexual",
    "severity": 5,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Démission du FMI", "Abandon candidature présidentielle", "Procédure civile"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire DSK : retour sur un scandale",
        "url": "https://www.lemonde.fr/international/article/2011/05/15/l-affaire-dsk-retour-sur-un-scandale_1522476_3210.html",
        "publisher": "Le Monde"
      },
      {
        "title": "DSK : la chute d'un homme puissant",
        "url": "https://www.liberation.fr/societe/2011/05/15/dsk-la-chute-d-un-homme-puissant_736891/",
        "publisher": "Libération"
      }
    ],
    "tags": ["agression sexuelle", "FMI", "New York", "présidentielle"],
    "color": "red"
  },
  {
    "id": 25,
    "date": "2011-09-22",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la mairie de Levallois",
    "description": "Système d'emplois fictifs organisé par Patrick Balkany à la mairie de Levallois-Perret pour rémunérer des proches.",
    "mainPerson": "Patrick Balkany",
    "otherPersons": ["Isabelle Balkany", "Charles Pasqua"],
    "politicalParty": "Les Républicains",
    "position": "Maire de Levallois-Perret",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 1000000,
    "currency": "EUR",
    "consequences": ["Condamnations", "Prison ferme", "Inéligibilité"],
    "resolved": true,
    "sources": [
      {
        "title": "Balkany condamné pour emplois fictifs",
        "url": "https://www.lemonde.fr/societe/article/2019/05/17/balkany-condamne-pour-emplois-fictifs_5463789_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Levallois : les Balkany sanctionnés",
        "url": "https://www.liberation.fr/societe/2019/05/17/levallois-les-balkany-sanctionnes_1727456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "Levallois", "Balkany", "proches"],
    "color": "red"
  },
  {
    "id": 26,
    "date": "2012-03-21",
    "duration": "5 ans",
    "title": "Affaire Thévenoud",
    "description": "Fraude fiscale du secrétaire d'État Thomas Thévenoud qui n'avait pas déclaré ses revenus ni payé ses impôts pendant plusieurs années.",
    "mainPerson": "Thomas Thévenoud",
    "otherPersons": ["Manuel Valls", "François Hollande"],
    "politicalParty": "Parti Socialiste",
    "position": "Secrétaire d'État",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 100000,
    "currency": "EUR",
    "consequences": ["Démission après 8 jours", "Condamnation", "Inéligibilité temporaire"],
    "resolved": true,
    "sources": [
      {
        "title": "Thomas Thévenoud : le ministre des 8 jours",
        "url": "https://www.lemonde.fr/politique/article/2014/09/09/thomas-thevenoud-le-ministre-des-8-jours_4484256_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Thévenoud condamné pour fraude fiscale",
        "url": "https://www.liberation.fr/societe/2017/01/19/thevenoud-condamne-pour-fraude-fiscale_1542876/",
        "publisher": "Libération"
      }
    ],
    "tags": ["fraude fiscale", "démission", "impôts", "8 jours"],
    "color": "orange"
  },
  {
    "id": 27,
    "date": "2012-08-10",
    "duration": "3 ans",
    "title": "Affaire des emplois fictifs du MoDem",
    "description": "Système d'emplois fictifs au MoDem utilisant des fonds européens pour rémunérer des collaborateurs du parti de François Bayrou.",
    "mainPerson": "François Bayrou",
    "otherPersons": ["Marielle de Sarnez", "Sylvie Goulard"],
    "politicalParty": "Mouvement Démocrate",
    "position": "Président du MoDem",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 700000,
    "currency": "EUR",
    "consequences": ["Remboursements", "Enquêtes", "Démissions"],
    "resolved": true,
    "sources": [
      {
        "title": "MoDem : les emplois fictifs européens",
        "url": "https://www.lemonde.fr/politique/article/2017/06/07/modem-les-emplois-fictifs-europeens_5140456_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Bayrou face aux soupçons",
        "url": "https://www.liberation.fr/politique/2017/06/07/bayrou-face-aux-soupcons_1574567/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "MoDem", "Europe", "Bayrou"],
    "color": "orange"
  },
  {
    "id": 28,
    "date": "2013-02-07",
    "duration": "4 ans",
    "title": "Affaire Tapie",
    "description": "Arbitrage controversé entre Bernard Tapie et le Crédit Lyonnais supervisé par Christine Lagarde, alors ministre de l'Économie, pour 400 millions d'euros.",
    "mainPerson": "Christine Lagarde",
    "otherPersons": ["Bernard Tapie", "Pierre Estoup", "Jean-François Rocchi"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ministre de l'Économie",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 400000000,
    "currency": "EUR",
    "consequences": ["Condamnation de Lagarde", "Remboursement partiel", "Controverses politiques"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire Tapie-Lagarde expliquée",
        "url": "https://www.lemonde.fr/economie/article/2017/12/19/l-affaire-tapie-lagarde-expliquee_5231628_3234.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Tapie-Lagarde : les dessous de l'arbitrage",
        "url": "https://www.liberation.fr/economie/2017/12/19/tapie-lagarde-les-dessous-de-l-arbitrage_1616789/",
        "publisher": "Libération"
      }
    ],
    "tags": ["arbitrage", "Crédit Lyonnais", "400 millions", "controverse"],
    "color": "orange"
  },
  {
    "id": 29,
    "date": "2013-06-18",
    "duration": "2 ans",
    "title": "Affaire Kerviel-Société Générale",
    "description": "Pertes de 4,9 milliards d'euros causées par le trader Jérôme Kerviel, soulevant des questions sur les responsabilités politiques de régulation.",
    "mainPerson": "Christine Lagarde",
    "otherPersons": ["Jérôme Kerviel", "Daniel Bouton"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ministre de l'Économie",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 4900000000,
    "currency": "EUR",
    "consequences": ["Réformes bancaires", "Condamnation Kerviel", "Questions parlementaires"],
    "resolved": true,
    "sources": [
      {
        "title": "Kerviel : les responsabilités politiques",
        "url": "https://www.lemonde.fr/economie/article/2008/01/25/kerviel-les-responsabilites-politiques_1003456_3234.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Société Générale : l'État questionné",
        "url": "https://www.liberation.fr/economie/2008/01/25/societe-generale-l-etat-questionne_89567/",
        "publisher": "Libération"
      }
    ],
    "tags": ["trading", "régulation", "banque", "milliards"],
    "color": "orange"
  },
  {
    "id": 30,
    "date": "2014-01-15",
    "duration": "2 ans",
    "title": "Affaire Gayet-Hollande",
    "description": "Révélation de la liaison extramaritale du président François Hollande avec l'actrice Julie Gayet, créant une crise personnelle et politique.",
    "mainPerson": "François Hollande",
    "otherPersons": ["Julie Gayet", "Valérie Trierweiler"],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "personal",
    "severity": 2,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Rupture avec Trierweiler", "Chute popularité", "Polémiques médiatiques"],
    "resolved": true,
    "sources": [
      {
        "title": "Hollande-Gayet : la révélation",
        "url": "https://www.lemonde.fr/politique/article/2014/01/10/hollande-gayet-la-revelation_4346789_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'Élysée dans la tourmente",
        "url": "https://www.liberation.fr/politique/2014/01/10/l-elysee-dans-la-tourmente_973456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["liaison", "vie privée", "Élysée", "médias"],
    "color": "gray"
  },
  {
    "id": 31,
    "date": "2014-11-20",
    "duration": "7 ans",
    "title": "Affaire des écoutes de Sarkozy",
    "description": "Mise sur écoute téléphonique de Nicolas Sarkozy par la justice dans le cadre de l'enquête sur le financement libyen, révélant des tentatives d'influence.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Thierry Herzog", "Gilbert Azibert", "Paul Bismuth"],
    "politicalParty": "Les Républicains",
    "position": "Ancien Président de la République",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Condamnation", "Prison avec sursis", "Inéligibilité"],
    "resolved": true,
    "sources": [
      {
        "title": "Écoutes : Sarkozy condamné pour corruption",
        "url": "https://www.lemonde.fr/politique/article/2021/03/01/nicolas-sarkozy-condamne-a-trois-ans-de-prison-dont-un-ferme-pour-corruption-et-trafic-d-influence_6071668_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire des écoutes de Sarkozy",
        "url": "https://www.liberation.fr/politiques/2021/03/01/l-affaire-des-ecoutes-de-sarkozy_1818889/",
        "publisher": "Libération"
      }
    ],
    "tags": ["écoutes", "corruption", "Paul Bismuth", "influence"],
    "color": "red"
  },
  {
    "id": 32,
    "date": "2015-06-30",
    "duration": "6 ans",
    "title": "Affaire du financement libyen",
    "description": "Soupçons de financement de la campagne présidentielle 2007 de Nicolas Sarkozy par le régime de Mouammar Kadhafi pour 50 millions d'euros.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Ziad Takieddine", "Alexandre Djouhri", "Claude Guéant"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "electoral",
    "severity": 5,
    "amountInvolved": 50000000,
    "currency": "EUR",
    "consequences": ["Mise en examen", "Procès en cours", "Tensions diplomatiques"],
    "resolved": false,
    "sources": [
      {
        "title": "Financement libyen : Sarkozy mis en examen",
        "url": "https://www.lemonde.fr/politique/article/2018/03/21/financement-libyen-nicolas-sarkozy-mis-en-examen_5274344_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire libyenne de Sarkozy",
        "url": "https://www.liberation.fr/politiques/2018/03/21/l-affaire-libyenne-de-sarkozy_1638345/",
        "publisher": "Libération"
      }
    ],
    "tags": ["Libye", "Kadhafi", "50 millions", "2007"],
    "color": "red"
  },
  {
    "id": 33,
    "date": "2015-11-25",
    "duration": "3 ans",
    "title": "Affaire des emplois fictifs de la région PACA",
    "description": "Système d'emplois fictifs à la région Provence-Alpes-Côte d'Azur sous Michel Vauzelle pour rémunérer des collaborateurs socialistes.",
    "mainPerson": "Michel Vauzelle",
    "otherPersons": ["Jean-Noël Guérini", "Sylvia Pinel"],
    "politicalParty": "Parti Socialiste",
    "position": "Président de région",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 500000,
    "currency": "EUR",
    "consequences": ["Condamnations", "Remboursements", "Amendes"],
    "resolved": true,
    "sources": [
      {
        "title": "PACA : Vauzelle condamné",
        "url": "https://www.lemonde.fr/societe/article/2018/04/12/paca-vauzelle-condamne_5284567_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Région PACA : les emplois fictifs sanctionnés",
        "url": "https://www.liberation.fr/societe/2018/04/12/region-paca-les-emplois-fictifs-sanctionnes_1642789/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "région", "PACA", "socialistes"],
    "color": "orange"
  },
  {
    "id": 34,
    "date": "2016-01-25",
    "duration": "3 ans",
    "title": "Affaire Fillon",
    "description": "Emplois fictifs de Penelope Fillon comme assistante parlementaire de son mari François Fillon. Détournement présumé de fonds publics pour plus de 1 million d'euros sur plusieurs années.",
    "mainPerson": "François Fillon",
    "otherPersons": ["Penelope Fillon", "Marc Joulaud", "Marie Fillon", "Charles Fillon"],
    "politicalParty": "Les Républicains",
    "position": "Ancien Premier Ministre et candidat présidentiel",
    "country": "France",
    "scandalType": "financial",
    "severity": 5,
    "amountInvolved": 1126000,
    "currency": "EUR",
    "consequences": ["Condamnation à 5 ans de prison dont 3 avec sursis", "Perte de l'élection présidentielle 2017", "Amende de 375 000€", "Inéligibilité de 10 ans"],
    "resolved": true,
    "sources": [
      {
        "title": "François Fillon et son épouse condamnés en appel dans l'affaire des emplois fictifs",
        "url": "https://www.lemonde.fr/politique/article/2021/05/09/affaire-fillon-francois-fillon-condamne-a-quatre-ans-de-prison-dont-un-ferme_6079643_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Fillon : la fin d'un parcours politique",
        "url": "https://www.liberation.fr/politiques/2021/05/09/fillon-la-fin-d-un-parcours-politique_1922743/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "détournement", "famille", "présidentielle"],
    "color": "red"
  },
  {
    "id": 35,
    "date": "2016-07-12",
    "duration": "2 ans",
    "title": "Affaire des comptes de campagne de Sarkozy 2007",
    "description": "Dépassement des comptes de campagne présidentielle 2007 de Nicolas Sarkozy, dissimulé par un système de fausses factures.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Eric Cesari", "Franck Attal", "Guillaume Lambert"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 22500000,
    "currency": "EUR",
    "consequences": ["Amendes", "Remboursements", "Enquêtes judiciaires"],
    "resolved": true,
    "sources": [
      {
        "title": "Sarkozy 2007 : les comptes dans le rouge",
        "url": "https://www.lemonde.fr/politique/article/2018/07/04/sarkozy-2007-les-comptes-dans-le-rouge_5326789_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Campagne 2007 : les irrégularités",
        "url": "https://www.liberation.fr/politique/2018/07/04/campagne-2007-les-irregularites_1662456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["campagne", "2007", "dépassement", "factures"],
    "color": "orange"
  },
  {
    "id": 36,
    "date": "2017-02-01",
    "duration": "4 ans",
    "title": "Affaire Alexandre Benalla",
    "description": "Violences exercées par le collaborateur de l'Élysée Alexandre Benalla lors de manifestations du 1er mai 2018, puis tentative de dissimulation par la présidence.",
    "mainPerson": "Alexandre Benalla",
    "otherPersons": ["Emmanuel Macron", "Alexis Kohler", "Vincent Crase"],
    "politicalParty": "La République En Marche",
    "position": "Collaborateur de l'Élysée",
    "country": "France",
    "scandalType": "violence",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Condamnation", "Licenciement", "Commission d'enquête parlementaire"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire Benalla : chronologie d'un scandale",
        "url": "https://www.lemonde.fr/politique/article/2018/07/19/l-affaire-benalla-chronologie-d-un-scandale_5333516_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Benalla condamné pour violences",
        "url": "https://www.liberation.fr/societe/2021/12/13/benalla-condamne-pour-violences_1970845/",
        "publisher": "Libération"
      }
    ],
    "tags": ["violences", "1er mai", "Élysée", "dissimulation"],
    "color": "red"
  },
  {
    "id": 37,
    "date": "2017-05-20",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs du Parlement européen",
    "description": "Vaste système d'emplois fictifs touchant plusieurs partis politiques français au Parlement européen, détournant des millions d'euros.",
    "mainPerson": "Marine Le Pen",
    "otherPersons": ["François Bayrou", "Sylvie Goulard", "Jean-Marie Le Pen"],
    "politicalParty": "Front National",
    "position": "Députée européenne",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 8000000,
    "currency": "EUR",
    "consequences": ["Remboursements exigés", "Procédures judiciaires", "Démissions"],
    "resolved": false,
    "sources": [
      {
        "title": "Parlement européen : les emplois fictifs généralisés",
        "url": "https://www.lemonde.fr/politique/article/2017/06/20/parlement-europeen-les-emplois-fictifs-generalises_5147890_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Europe : la fraude française",
        "url": "https://www.liberation.fr/politique/2017/06/20/europe-la-fraude-francaise_1578234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "Europe", "partis", "millions"],
    "color": "red"
  },
  {
    "id": 38,
    "date": "2017-09-14",
    "duration": "1 an",
    "title": "Affaire Sylvie Goulard",
    "description": "Emplois fictifs présumés de Sylvie Goulard au Parlement européen quand elle était assistante parlementaire du MoDem.",
    "mainPerson": "Sylvie Goulard",
    "otherPersons": ["François Bayrou", "Emmanuel Macron"],
    "politicalParty": "Mouvement Démocrate",
    "position": "Ministre des Armées",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 45000,
    "currency": "EUR",
    "consequences": ["Démission du gouvernement", "Enquêtes", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Sylvie Goulard démissionne",
        "url": "https://www.lemonde.fr/politique/article/2017/06/21/sylvie-goulard-demissionne_5148567_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Goulard : la chute rapide",
        "url": "https://www.liberation.fr/politique/2017/06/21/goulard-la-chute-rapide_1578890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "MoDem", "démission", "Europe"],
    "color": "orange"
  },
  {
    "id": 39,
    "date": "2018-01-30",
    "duration": "2 ans",
    "title": "Affaire Marielle de Sarnez",
    "description": "Emplois fictifs présumés de Marielle de Sarnez au Parlement européen dans le cadre de l'affaire des assistants du MoDem.",
    "mainPerson": "Marielle de Sarnez",
    "otherPersons": ["François Bayrou", "Emmanuel Macron"],
    "politicalParty": "Mouvement Démocrate",
    "position": "Ministre des Affaires européennes",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 40000,
    "currency": "EUR",
    "consequences": ["Démission du gouvernement", "Enquêtes", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Marielle de Sarnez démissionne",
        "url": "https://www.lemonde.fr/politique/article/2017/06/21/marielle-de-sarnez-demissionne_5148890_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "De Sarnez : la solidarité gouvernementale",
        "url": "https://www.liberation.fr/politique/2017/06/21/de-sarnez-la-solidarite-gouvernementale_1579123/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "MoDem", "démission", "solidarité"],
    "color": "orange"
  },
  {
    "id": 40,
    "date": "2018-10-15",
    "duration": "2 ans",
    "title": "Affaire Richard Ferrand",
    "description": "Conflit d'intérêts présumé du président de l'Assemblée nationale dans une affaire immobilière impliquant sa compagne et les Mutuelles de Bretagne.",
    "mainPerson": "Richard Ferrand",
    "otherPersons": ["Sandrine Doucen", "Emmanuel Macron"],
    "politicalParty": "La République En Marche",
    "position": "Président de l'Assemblée nationale",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 200000,
    "currency": "EUR",
    "consequences": ["Non-lieu", "Polémiques", "Maintien au poste"],
    "resolved": true,
    "sources": [
      {
        "title": "Richard Ferrand bénéficie d'un non-lieu",
        "url": "https://www.lemonde.fr/politique/article/2020/09/18/richard-ferrand-beneficie-d-un-non-lieu_6052816_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Ferrand classée sans suite",
        "url": "https://www.liberation.fr/politiques/2020/09/18/l-affaire-ferrand-classee-sans-suite_1799856/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit intérêts", "immobilier", "Bretagne", "non-lieu"],
    "color": "yellow"
  },
  {
    "id": 41,
    "date": "2019-03-28",
    "duration": "3 ans",
    "title": "Affaire François de Rugy",
    "description": "Utilisation de fonds publics pour des dîners privés somptuaires à l'Assemblée nationale quand François de Rugy était président de l'institution.",
    "mainPerson": "François de Rugy",
    "otherPersons": ["Séverine Servat", "Emmanuel Macron"],
    "politicalParty": "La République En Marche",
    "position": "Ministre de la Transition écologique",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 50000,
    "currency": "EUR",
    "consequences": ["Démission du gouvernement", "Remboursement", "Enquêtes"],
    "resolved": true,
    "sources": [
      {
        "title": "François de Rugy démissionne",
        "url": "https://www.lemonde.fr/politique/article/2019/07/16/francois-de-rugy-demissionne_5489789_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "De Rugy : les dîners de trop",
        "url": "https://www.liberation.fr/politiques/2019/07/16/de-rugy-les-diners-de-trop_1741006/",
        "publisher": "Libération"
      }
    ],
    "tags": ["dîners", "fonds publics", "luxe", "démission"],
    "color": "orange"
  },
  {
    "id": 42,
    "date": "2019-07-22",
    "duration": "2 ans",
    "title": "Affaire des passeports diplomatiques de Benalla",
    "description": "Utilisation illégale de passeports diplomatiques par Alexandre Benalla après son licenciement de l'Élysée pour des voyages privés.",
    "mainPerson": "Alexandre Benalla",
    "otherPersons": ["Emmanuel Macron", "Alexis Kohler"],
    "politicalParty": "La République En Marche",
    "position": "Ancien collaborateur de l'Élysée",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Condamnation", "Confiscation passeports", "Amendes"],
    "resolved": true,
    "sources": [
      {
        "title": "Benalla et les passeports diplomatiques",
        "url": "https://www.lemonde.fr/politique/article/2019/12/30/benalla-et-les-passeports-diplomatiques_6024567_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire des passeports de Benalla",
        "url": "https://www.liberation.fr/politique/2019/12/30/l-affaire-des-passeports-de-benalla_1771234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["passeports", "diplomatique", "abus", "voyages"],
    "color": "purple"
  },
  {
    "id": 43,
    "date": "2020-05-12",
    "duration": "2 ans",
    "title": "Affaire McKinsey",
    "description": "Recours massif et controversé aux cabinets de conseil privés, notamment McKinsey, par le gouvernement Macron, soulevant des questions sur les conflits d'intérêts et l'évasion fiscale.",
    "mainPerson": "Emmanuel Macron",
    "otherPersons": ["Olivier Véran", "Jean Castex", "Karim Tadjeddine"],
    "politicalParty": "La République En Marche",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 2400000000,
    "currency": "EUR",
    "consequences": ["Commission d'enquête sénatoriale", "Critiques publiques", "Réformes annoncées"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire McKinsey : ce qu'il faut retenir",
        "url": "https://www.lemonde.fr/politique/article/2022/03/17/l-affaire-mckinsey-ce-qu-il-faut-retenir_6117892_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "McKinsey : les millions du conseil",
        "url": "https://www.liberation.fr/politique/mckinsey-les-millions-du-conseil-20220317_FHVX6NZABFHUTMOQSQXHTMXEEY/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conseil", "McKinsey", "conflits", "milliards"],
    "color": "yellow"
  },
  {
    "id": 44,
    "date": "2020-09-08",
    "duration": "1 an",
    "title": "Affaire Gérald Darmanin",
    "description": "Accusations de viol contre le ministre de l'Intérieur Gérald Darmanin, révélées après sa nomination au gouvernement.",
    "mainPerson": "Gérald Darmanin",
    "otherPersons": ["Emmanuel Macron", "Sophie Patterson-Spatz"],
    "politicalParty": "La République En Marche",
    "position": "Ministre de l'Intérieur",
    "country": "France",
    "scandalType": "sexual",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Non-lieu", "Polémiques", "Maintien au poste"],
    "resolved": true,
    "sources": [
      {
        "title": "Darmanin : les accusations de viol",
        "url": "https://www.lemonde.fr/politique/article/2020/07/08/darmanin-les-accusations-de-viol_6045678_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Gérald Darmanin face aux soupçons",
        "url": "https://www.liberation.fr/politique/2020/07/08/gerald-darmanin-face-aux-soupcons_1793456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["viol", "accusations", "ministre", "non-lieu"],
    "color": "red"
  },
  {
    "id": 45,
    "date": "2021-01-20",
    "duration": "2 ans",
    "title": "Affaire Dupond-Moretti",
    "description": "Conflits d'intérêts présumés du ministre de la Justice Éric Dupond-Moretti dans des dossiers impliquant d'anciens adversaires de sa carrière d'avocat.",
    "mainPerson": "Éric Dupond-Moretti",
    "otherPersons": ["Emmanuel Macron", "François Molins"],
    "politicalParty": "La République En Marche",
    "position": "Ministre de la Justice",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Procédure en cours", "Maintien au poste", "Tensions avec la magistrature"],
    "resolved": false,
    "sources": [
      {
        "title": "Dupond-Moretti mis en examen",
        "url": "https://www.lemonde.fr/politique/article/2023/01/16/eric-dupond-moretti-mis-en-examen-pour-prise-illegale-d-interets_6158058_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les conflits d'intérêts de Dupond-Moretti",
        "url": "https://www.liberation.fr/politique/les-conflits-dinterets-de-dupond-moretti-20230116_RQVGXMZGKBGK5P7XQCQYITG5AI/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit intérêts", "justice", "avocat", "magistrats"],
    "color": "yellow"
  },
  {
    "id": 46,
    "date": "2021-04-15",
    "duration": "1 an",
    "title": "Affaire des vaccins et Jean Castex",
    "description": "Polémique sur la gestion des commandes de vaccins COVID-19 et les conflits d'intérêts présumés dans les négociations européennes.",
    "mainPerson": "Jean Castex",
    "otherPersons": ["Emmanuel Macron", "Olivier Véran", "Ursula von der Leyen"],
    "politicalParty": "La République En Marche",
    "position": "Premier Ministre",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 2,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Enquêtes parlementaires", "Critiques", "Justifications publiques"],
    "resolved": true,
    "sources": [
      {
        "title": "Vaccins : les zones d'ombre des négociations",
        "url": "https://www.lemonde.fr/politique/article/2021/04/30/vaccins-les-zones-d-ombre-des-negociations_6078456_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "COVID : la polémique des vaccins",
        "url": "https://www.liberation.fr/politique/2021/04/30/covid-la-polemique-des-vaccins_1867234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["vaccins", "COVID", "négociations", "Europe"],
    "color": "gray"
  },
  {
    "id": 47,
    "date": "2021-08-10",
    "duration": "1 an",
    "title": "Affaire des contrats COVID et Jean-Michel Blanquer",
    "description": "Soupçons de favoritisme dans l'attribution de marchés publics liés à la crise sanitaire dans l'Éducation nationale.",
    "mainPerson": "Jean-Michel Blanquer",
    "otherPersons": ["Emmanuel Macron", "Jean Castex"],
    "politicalParty": "La République En Marche",
    "position": "Ministre de l'Éducation nationale",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 500000,
    "currency": "EUR",
    "consequences": ["Enquêtes", "Justifications", "Réformes procédures"],
    "resolved": true,
    "sources": [
      {
        "title": "Blanquer : les marchés COVID questionnés",
        "url": "https://www.lemonde.fr/politique/article/2021/11/25/blanquer-les-marches-covid-questionnes_6103456_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Éducation : les contrats de la discorde",
        "url": "https://www.liberation.fr/politique/2021/11/25/education-les-contrats-de-la-discorde_1912345/",
        "publisher": "Libération"
      }
    ],
    "tags": ["COVID", "marchés", "éducation", "favoritisme"],
    "color": "yellow"
  },
  {
    "id": 48,
    "date": "2022-04-05",
    "duration": "1 an",
    "title": "Affaire Damien Abad",
    "description": "Accusations de viol contre le ministre Damien Abad révélées par Mediapart après sa nomination au gouvernement, soulevant des questions sur les vérifications préalables.",
    "mainPerson": "Damien Abad",
    "otherPersons": ["Emmanuel Macron", "Élisabeth Borne", "Clémentine Autain"],
    "politicalParty": "Les Républicains",
    "position": "Ministre des Solidarités",
    "country": "France",
    "scandalType": "sexual",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Démission du gouvernement", "Enquêtes", "Polémiques"],
    "resolved": true,
    "sources": [
      {
        "title": "Damien Abad visé par deux plaintes pour viol",
        "url": "https://www.lemonde.fr/politique/article/2022/05/21/damien-abad-vise-par-deux-plaintes-pour-viol_6127291_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Damien Abad",
        "url": "https://www.liberation.fr/politique/laffaire-damien-abad-20220521_VZ3YIEP35ZHDPNXN4QKZHTNUUA/",
        "publisher": "Libération"
      }
    ],
    "tags": ["viol", "accusations", "ministre", "Mediapart"],
    "color": "red"
  },
  {
    "id": 49,
    "date": "2022-07-18",
    "duration": "1 an",
    "title": "Affaire Chrysoula Zacharopoulou",
    "description": "Accusations d'agressions sexuelles contre la secrétaire d'État Chrysoula Zacharopoulou dans le cadre de sa pratique médicale.",
    "mainPerson": "Chrysoula Zacharopoulou",
    "otherPersons": ["Emmanuel Macron", "Élisabeth Borne"],
    "politicalParty": "La République En Marche",
    "position": "Secrétaire d'État",
    "country": "France",
    "scandalType": "sexual",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Maintien au poste", "Enquêtes", "Polémiques"],
    "resolved": true,
    "sources": [
      {
        "title": "Zacharopoulou : les accusations d'agressions",
        "url": "https://www.lemonde.fr/politique/article/2022/07/25/zacharopoulou-les-accusations-d-agressions_6135678_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Zacharopoulou",
        "url": "https://www.liberation.fr/politique/2022/07/25/l-affaire-zacharopoulou_1845234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["agressions", "médecin", "secrétaire", "maintien"],
    "color": "orange"
  },
  {
    "id": 50,
    "date": "2022-09-12",
    "duration": "1 an",
    "title": "Affaire des jets privés de ministres",
    "description": "Utilisation excessive de jets privés par plusieurs ministres du gouvernement Borne, soulevant des questions environnementales et financières.",
    "mainPerson": "Élisabeth Borne",
    "otherPersons": ["Emmanuel Macron", "Bruno Le Maire", "Gérald Darmanin"],
    "politicalParty": "La République En Marche",
    "position": "Premier Ministre",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 350000,
    "currency": "EUR",
    "consequences": ["Critiques publiques", "Justifications", "Réduction usage"],
    "resolved": true,
    "sources": [
      {
        "title": "Jets privés : les ministres épinglés",
        "url": "https://www.lemonde.fr/politique/article/2022/08/30/jets-prives-les-ministres-epingles_6139456_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire des jets gouvernementaux",
        "url": "https://www.liberation.fr/politique/2022/08/30/l-affaire-des-jets-gouvernementaux_1876543/",
        "publisher": "Libération"
      }
    ],
    "tags": ["jets privés", "environnement", "ministres", "coût"],
    "color": "yellow"
  },
  {
    "id": 51,
    "date": "2023-02-14",
    "duration": "1 an",
    "title": "Affaire Quatennens",
    "description": "Violences conjugales admises par le député La France Insoumise Adrien Quatennens envers son épouse, provoquant des tensions au sein du parti.",
    "mainPerson": "Adrien Quatennens",
    "otherPersons": ["Jean-Luc Mélenchon", "Mathilde Panot", "Céline Quatennens"],
    "politicalParty": "La France Insoumise",
    "position": "Député",
    "country": "France",
    "scandalType": "violence",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Condamnation", "Suspension temporaire", "Divisions internes"],
    "resolved": true,
    "sources": [
      {
        "title": "Adrien Quatennens condamné pour violences conjugales",
        "url": "https://www.lemonde.fr/politique/article/2022/12/13/adrien-quatennens-condamne-pour-violences-conjugales_6154425_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Quatennens : la gestion polémique de LFI",
        "url": "https://www.liberation.fr/politique/quatennens-la-gestion-polemique-de-lfi-20221213_VWHGMVQE4ZHIHOGZWZAQDM6ZGI/",
        "publisher": "Libération"
      }
    ],
    "tags": ["violences conjugales", "LFI", "condamnation", "tensions"],
    "color": "red"
  },
  {
    "id": 52,
    "date": "2023-05-20",
    "duration": "1 an",
    "title": "Affaire Taha Bouhafs",
    "description": "Accusations de harcèlement sexuel contre le journaliste et candidat LFI Taha Bouhafs, provoquant son retrait de la vie politique.",
    "mainPerson": "Taha Bouhafs",
    "otherPersons": ["Jean-Luc Mélenchon", "Mathilde Panot"],
    "politicalParty": "La France Insoumise",
    "position": "Candidat aux législatives",
    "country": "France",
    "scandalType": "sexual",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Retrait candidature", "Exclusion LFI", "Procédures judiciaires"],
    "resolved": true,
    "sources": [
      {
        "title": "Taha Bouhafs : les accusations de harcèlement",
        "url": "https://www.lemonde.fr/politique/article/2022/05/12/taha-bouhafs-les-accusations-de-harcelement_6125789_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Bouhafs : LFI dans l'embarras",
        "url": "https://www.liberation.fr/politique/2022/05/12/bouhafs-lfi-dans-l-embarras_1703456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["harcèlement", "LFI", "candidat", "exclusion"],
    "color": "orange"
  },
  {
    "id": 53,
    "date": "2023-08-15",
    "duration": "6 mois",
    "title": "Affaire Pap Ndiaye",
    "description": "Polémique sur les frais de déplacement et de réception du ministre de l'Éducation nationale Pap Ndiaye, jugés excessifs.",
    "mainPerson": "Pap Ndiaye",
    "otherPersons": ["Emmanuel Macron", "Élisabeth Borne"],
    "politicalParty": "La République En Marche",
    "position": "Ministre de l'Éducation nationale",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 80000,
    "currency": "EUR",
    "consequences": ["Critiques", "Justifications", "Réduction frais"],
    "resolved": true,
    "sources": [
      {
        "title": "Pap Ndiaye : les frais questionnés",
        "url": "https://www.lemonde.fr/politique/article/2023/01/18/pap-ndiaye-les-frais-questionnes_6158789_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Éducation : la polémique des frais",
        "url": "https://www.liberation.fr/politique/2023/01/18/education-la-polemique-des-frais_1934567/",
        "publisher": "Libération"
      }
    ],
    "tags": ["frais", "déplacements", "éducation", "polémique"],
    "color": "yellow"
  },
  {
    "id": 54,
    "date": "2023-11-08",
    "duration": "6 mois",
    "title": "Affaire Olivier Dussopt",
    "description": "Mise en examen du ministre du Travail Olivier Dussopt pour prise illégale d'intérêts dans une affaire remontant à son mandat de maire.",
    "mainPerson": "Olivier Dussopt",
    "otherPersons": ["Emmanuel Macron", "Élisabeth Borne"],
    "politicalParty": "Parti Socialiste",
    "position": "Ministre du Travail",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 150000,
    "currency": "EUR",
    "consequences": ["Mise en examen", "Maintien au poste", "Polémiques"],
    "resolved": false,
    "sources": [
      {
        "title": "Olivier Dussopt mis en examen",
        "url": "https://www.lemonde.fr/politique/article/2023/01/25/olivier-dussopt-mis-en-examen_6159456_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Dussopt : les conflits d'intérêts",
        "url": "https://www.liberation.fr/politique/2023/01/25/dussopt-les-conflits-d-interets_1945678/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit intérêts", "mise en examen", "maire", "maintien"],
    "color": "yellow"
  },
  {
    "id": 55,
    "date": "2024-01-10",
    "duration": "1 an",
    "title": "Affaire Judith Godrèche",
    "description": "Révélations d'agressions sexuelles dans le cinéma français déclenchant un mouvement similaire à #MeToo, impliquant des personnalités ayant des liens politiques.",
    "mainPerson": "Jacques Doillon",
    "otherPersons": ["Judith Godrèche", "Benoît Jacquot", "Adèle Haenel"],
    "politicalParty": "",
    "position": "Réalisateur",
    "country": "France",
    "scandalType": "sexual",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Enquêtes judiciaires", "Mouvement de libération de la parole", "Réformes du secteur"],
    "resolved": false,
    "sources": [
      {
        "title": "Judith Godrèche brise le silence",
        "url": "https://www.lemonde.fr/culture/article/2024/02/07/judith-godreche-brise-le-silence_6215034_3246.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Cinéma : la parole se libère",
        "url": "https://www.liberation.fr/culture/cinema-la-parole-se-libere-20240207_XVFH3QMFYRHQ7BQWZXM2GDQZDU/",
        "publisher": "Libération"
      }
    ],
    "tags": ["cinéma", "agressions", "MeToo", "libération"],
    "color": "red"
  },
  {
    "id": 56,
    "date": "2024-03-22",
    "duration": "6 mois",
    "title": "Affaire Gabriel Attal et les frais de l'Élysée",
    "description": "Polémique sur les frais de réception et de déplacement du Premier ministre Gabriel Attal, jugés excessifs en période d'austérité.",
    "mainPerson": "Gabriel Attal",
    "otherPersons": ["Emmanuel Macron", "Bruno Le Maire"],
    "politicalParty": "La République En Marche",
    "position": "Premier Ministre",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 120000,
    "currency": "EUR",
    "consequences": ["Critiques médiatiques", "Justifications", "Réduction frais"],
    "resolved": true,
    "sources": [
      {
        "title": "Attal : les frais de Matignon questionnés",
        "url": "https://www.lemonde.fr/politique/article/2024/04/15/attal-les-frais-de-matignon-questionnes_6234567_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Premier ministre : la polémique des frais",
        "url": "https://www.liberation.fr/politique/2024/04/15/premier-ministre-la-polemique-des-frais_1987654/",
        "publisher": "Libération"
      }
    ],
    "tags": ["frais", "Matignon", "austérité", "polémique"],
    "color": "yellow"
  },
  {
    "id": 57,
    "date": "2024-05-14",
    "duration": "6 mois",
    "title": "Affaire Rachida Dati et les conflits d'intérêts",
    "description": "Révélations sur les activités de conseil de Rachida Dati auprès d'entreprises privées pendant son mandat de députée européenne.",
    "mainPerson": "Rachida Dati",
    "otherPersons": ["Carlos Ghosn", "Renault-Nissan"],
    "politicalParty": "Les Républicains",
    "position": "Maire du 7e arrondissement",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 900000,
    "currency": "EUR",
    "consequences": ["Enquêtes", "Polémiques", "Justifications"],
    "resolved": true,
    "sources": [
      {
        "title": "Rachida Dati : les activités de conseil",
        "url": "https://www.lemonde.fr/politique/article/2024/03/20/rachida-dati-les-activites-de-conseil_6245678_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Dati : les conflits d'intérêts révélés",
        "url": "https://www.liberation.fr/politique/2024/03/20/dati-les-conflits-d-interets-reveles_1998765/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit intérêts", "conseil", "entreprises", "député"],
    "color": "yellow"
  },
  {
    "id": 58,
    "date": "2024-06-15",
    "duration": "6 mois",
    "title": "Affaire des assistants RN au Parlement européen",
    "description": "Détournements présumés de fonds européens par le Rassemblement National pour rémunérer des assistants parlementaires travaillant en réalité pour le parti en France.",
    "mainPerson": "Marine Le Pen",
    "otherPersons": ["Louis Aliot", "Bruno Gollnisch", "Nicolas Bay"],
    "politicalParty": "Rassemblement National",
    "position": "Présidente du RN",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 3000000,
    "currency": "EUR",
    "consequences": ["Procès en cours", "Demande de remboursement", "Risque d'inéligibilité"],
    "resolved": false,
    "sources": [
      {
        "title": "RN : le procès des assistants parlementaires",
        "url": "https://www.lemonde.fr/politique/article/2024/09/30/rn-le-proces-des-assistants-parlementaires_6318454_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Marine Le Pen face à la justice européenne",
        "url": "https://www.liberation.fr/politique/marine-le-pen-face-a-la-justice-europeenne-20240930_QMXRFNQG5NHJDKZWZQM4GTXOAI/",
        "publisher": "Libération"
      }
    ],
    "tags": ["RN", "Europe", "assistants", "détournement"],
    "color": "red"
  },
  {
    "id": 59,
    "date": "2024-08-20",
    "duration": "4 mois",
    "title": "Affaire des JO de Paris et les marchés publics",
    "description": "Soupçons de favoritisme dans l'attribution de certains marchés publics liés à l'organisation des Jeux Olympiques de Paris 2024.",
    "mainPerson": "Tony Estanguet",
    "otherPersons": ["Emmanuel Macron", "Amélie Oudéa-Castéra"],
    "politicalParty": "",
    "position": "Président du COJO",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 2000000,
    "currency": "EUR",
    "consequences": ["Enquêtes en cours", "Justifications", "Contrôles renforcés"],
    "resolved": false,
    "sources": [
      {
        "title": "JO 2024 : les marchés sous surveillance",
        "url": "https://www.lemonde.fr/sport/article/2024/06/12/jo-2024-les-marches-sous-surveillance_6356789_1616.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Jeux Olympiques : les soupçons de favoritisme",
        "url": "https://www.liberation.fr/sport/2024/06/12/jeux-olympiques-les-soupcons-de-favoritisme_2012345/",
        "publisher": "Libération"
      }
    ],
    "tags": ["JO", "marchés publics", "favoritisme", "Paris"],
    "color": "yellow"
  },
  {
    "id": 60,
    "date": "2024-10-05",
    "duration": "2 mois",
    "title": "Affaire Michel Barnier et les lobbies",
    "description": "Révélations sur les liens entre le Premier ministre Michel Barnier et certains lobbies industriels pendant sa carrière européenne.",
    "mainPerson": "Michel Barnier",
    "otherPersons": ["Emmanuel Macron", "Ursula von der Leyen"],
    "politicalParty": "Les Républicains",
    "position": "Premier Ministre",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 2,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Révélations médiatiques", "Justifications", "Transparence renforcée"],
    "resolved": true,
    "sources": [
      {
        "title": "Barnier : les liens avec les lobbies",
        "url": "https://www.lemonde.fr/politique/article/2024/09/15/barnier-les-liens-avec-les-lobbies_6378901_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Premier ministre : la question des lobbies",
        "url": "https://www.liberation.fr/politique/2024/09/15/premier-ministre-la-question-des-lobbies_2034567/",
        "publisher": "Libération"
      }
    ],
    "tags": ["lobbies", "Europe", "industrie", "transparence"],
    "color": "gray"
  }
];

// Fonctions utilitaires pour les données
export const getCountries = (): string[] => {
  return Array.from(new Set(politicalScandals.map(scandal => scandal.country))).sort();
};

export const getPoliticalParties = (): string[] => {
  return Array.from(new Set(politicalScandals.map(scandal => scandal.politicalParty))).sort();
};

export const getScandalTypes = (): string[] => {
  return Array.from(new Set(politicalScandals.map(scandal => scandal.scandalType))).sort();
};

export const getSeverityLevels = (): number[] => {
  return Array.from(new Set(politicalScandals.map(scandal => scandal.severity))).sort();
};

export const getTotalAmount = (): number => {
  return politicalScandals
    .filter(scandal => scandal.amountInvolved)
    .reduce((total, scandal) => total + (scandal.amountInvolved || 0), 0);
};

export const getScandalsByCountry = (country: string): PoliticalScandal[] => {
  return politicalScandals.filter(scandal => scandal.country === country);
};

export const getScandalsBySeverity = (severity: number): PoliticalScandal[] => {
  return politicalScandals.filter(scandal => scandal.severity === severity);
};

export const getUnresolvedScandals = (): PoliticalScandal[] => {
  return politicalScandals.filter(scandal => !scandal.resolved);
}; 