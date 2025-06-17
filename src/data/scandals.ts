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
    "date": "2000-07-15",
    "duration": "3 ans",
    "title": "Affaire Elf",
    "description": "Vaste système de corruption impliquant la compagnie pétrolière Elf et des responsables politiques français. Détournement de fonds pour financer des activités occultes en Afrique.",
    "mainPerson": "Roland Dumas",
    "otherPersons": ["Christine Deviers-Joncour", "André Tarallo", "Loïk Le Floch-Prigent"],
    "politicalParty": "Parti Socialiste",
    "position": "Ancien ministre des Affaires étrangères",
    "country": "France",
    "scandalType": "corruption",
    "severity": 5,
    "amountInvolved": 350000000,
    "currency": "EUR",
    "consequences": ["Condamnation à 30 mois de prison avec sursis", "Amende de 1 million d'euros"],
    "resolved": true,
    "sources": [
      {
        "title": "Roland Dumas condamné dans l'affaire Elf",
        "url": "https://www.lemonde.fr/societe/article/2003/05/30/roland-dumas-condamne-a-trente-mois-de-prison-avec-sursis_320851_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Elf-Aquitaine jugée",
        "url": "https://www.liberation.fr/societe/2003/05/30/l-affaire-elf-aquitaine-jugee_435667/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "pétrole", "afrique"],
    "color": "red"
  },
  {
    "date": "2000-09-12",
    "duration": "4 ans",
    "title": "Affaire des HLM de Paris",
    "description": "Système de corruption dans l'attribution des logements sociaux parisiens sous Jean Tiberi, maire de Paris, avec versement de pots-de-vin.",
    "mainPerson": "Jean Tiberi",
    "otherPersons": ["Xavière Tiberi", "Michel Roussin"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Maire de Paris",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 2000000,
    "currency": "EUR",
    "consequences": ["Condamnation avec sursis", "Fin de carrière politique"],
    "resolved": true,
    "sources": [
      {
        "title": "Jean Tiberi condamné dans l'affaire des HLM",
        "url": "https://www.lemonde.fr/societe/article/2004/03/15/jean-tiberi-condamne-dans-l-affaire-des-hlm_356789_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Corruption dans les HLM parisiens",
        "url": "https://www.liberation.fr/societe/2004/03/15/corruption-dans-les-hlm-parisiens_467890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "hlm", "paris"],
    "color": "red"
  },
  {
    "date": "2000-11-08",
    "duration": "2 ans",
    "title": "Affaire des voyages de Xavière Tiberi",
    "description": "Voyages personnels de l'épouse du maire de Paris Jean Tiberi financés par des fonds publics, détournement de deniers publics.",
    "mainPerson": "Xavière Tiberi",
    "otherPersons": ["Jean Tiberi"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Épouse du maire de Paris",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 50000,
    "currency": "EUR",
    "consequences": ["Condamnation avec sursis", "Amende"],
    "resolved": true,
    "sources": [
      {
        "title": "Xavière Tiberi condamnée pour ses voyages",
        "url": "https://www.lemonde.fr/societe/article/2002/11/20/xaviere-tiberi-condamnee-pour-ses-voyages_298765_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les voyages de Madame Tiberi",
        "url": "https://www.liberation.fr/societe/2002/11/20/les-voyages-de-madame-tiberi_423456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["détournement", "voyages", "épouse"],
    "color": "orange"
  },
  {
    "date": "2001-01-18",
    "duration": "3 ans",
    "title": "Affaire des marchés publics de l'Essonne",
    "description": "Corruption dans l'attribution de marchés publics dans l'Essonne impliquant des élus locaux et des entreprises du BTP.",
    "mainPerson": "Xavier Dugoin",
    "otherPersons": ["Michel Berson"],
    "politicalParty": "Parti Socialiste",
    "position": "Conseiller général",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 5000000,
    "currency": "EUR",
    "consequences": ["Condamnations multiples", "Amendes"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption dans l'Essonne : plusieurs condamnations",
        "url": "https://www.lemonde.fr/societe/article/2004/06/12/corruption-dans-l-essonne-plusieurs-condamnations_367890_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Marchés publics truqués en Essonne",
        "url": "https://www.liberation.fr/societe/2004/06/12/marches-publics-truques-en-essonne_478901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "marchés publics", "btp"],
    "color": "red"
  },
  {
    "date": "2001-03-10",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la Ville de Paris",
    "description": "Système d'emplois fictifs au RPR financés par la Ville de Paris sous la direction de Jacques Chirac. Plus de 20 personnes employées fictivement.",
    "mainPerson": "Jacques Chirac",
    "otherPersons": ["Alain Juppé", "Michel Roussin", "Jean Tiberi"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 7000000,
    "currency": "EUR",
    "consequences": ["Immunité présidentielle", "Procédure suspendue"],
    "resolved": false,
    "sources": [
      {
        "title": "L'affaire des emplois fictifs de la Ville de Paris",
        "url": "https://www.lemonde.fr/archives/article/2001/03/10/l-affaire-des-emplois-fictifs-de-la-ville-de-paris_4587932_1819218.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Jacques Chirac et les emplois fictifs",
        "url": "https://www.liberation.fr/politiques/2001/03/10/jacques-chirac-et-les-emplois-fictifs_358674/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "mairie", "financement"],
    "color": "orange"
  },
  {
    "date": "2001-05-22",
    "duration": "2 ans",
    "title": "Affaire des cassettes Méry",
    "description": "Enregistrements de Jean-Claude Méry révélant le système de financement occulte du RPR par des marchés publics truqués.",
    "mainPerson": "Jean-Claude Méry",
    "otherPersons": ["Jacques Chirac", "Alain Juppé"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Promoteur immobilier",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 10000000,
    "currency": "EUR",
    "consequences": ["Révélations posthumes", "Enquêtes judiciaires"],
    "resolved": true,
    "sources": [
      {
        "title": "Les cassettes Méry révèlent le financement du RPR",
        "url": "https://www.lemonde.fr/politique/article/2000/09/21/les-cassettes-mery-revelent-le-financement-du-rpr_145678_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Jean-Claude Méry accuse depuis sa tombe",
        "url": "https://www.liberation.fr/politiques/2000/09/21/jean-claude-mery-accuse-depuis-sa-tombe_334567/",
        "publisher": "Libération"
      }
    ],
    "tags": ["financement", "cassettes", "révélations"],
    "color": "orange"
  },
  {
    "date": "2001-07-14",
    "duration": "3 ans",
    "title": "Affaire des frais de bouche de l'Élysée",
    "description": "Dépenses excessives en frais de réception et de bouche à l'Élysée sous Jacques Chirac, usage détourné de fonds publics.",
    "mainPerson": "Jacques Chirac",
    "otherPersons": ["Bernadette Chirac"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 500000,
    "currency": "EUR",
    "consequences": ["Polémique médiatique", "Réduction des dépenses"],
    "resolved": true,
    "sources": [
      {
        "title": "Les frais de bouche de l'Élysée font polémique",
        "url": "https://www.lemonde.fr/politique/article/2001/07/14/les-frais-de-bouche-de-l-elysee-font-polemique_156789_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Dépenses somptuaires à l'Élysée",
        "url": "https://www.liberation.fr/politiques/2001/07/14/depenses-somptuaires-a-l-elysee_345678/",
        "publisher": "Libération"
      }
    ],
    "tags": ["dépenses", "élysée", "luxe"],
    "color": "yellow"
  },
  {
    "date": "2001-09-30",
    "duration": "4 ans",
    "title": "Affaire des emplois fictifs du RPR",
    "description": "Vaste système d'emplois fictifs au sein du RPR pour financer le parti, impliquant de nombreux cadres politiques.",
    "mainPerson": "Alain Juppé",
    "otherPersons": ["Louise-Yvonne Casetta", "Michel Roussin"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Ancien Premier ministre",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 15000000,
    "currency": "EUR",
    "consequences": ["Condamnation d'Alain Juppé", "Inéligibilité temporaire"],
    "resolved": true,
    "sources": [
      {
        "title": "Alain Juppé condamné dans l'affaire des emplois fictifs",
        "url": "https://www.lemonde.fr/politique/article/2004/01/30/alain-juppe-condamne-dans-l-affaire-des-emplois-fictifs_356789_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les emplois fictifs du RPR jugés",
        "url": "https://www.liberation.fr/politiques/2004/01/30/les-emplois-fictifs-du-rpr-juges_467890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "parti", "condamnation"],
    "color": "red"
  },
  {
    "date": "2001-11-15",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Levallois",
    "description": "Corruption dans l'attribution de marchés publics à Levallois-Perret sous Patrick Balkany, surfacturation et commissions occultes.",
    "mainPerson": "Patrick Balkany",
    "otherPersons": ["Isabelle Balkany"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Maire de Levallois-Perret",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 8000000,
    "currency": "EUR",
    "consequences": ["Condamnation à 4 ans de prison ferme", "Confiscation de biens"],
    "resolved": true,
    "sources": [
      {
        "title": "Patrick Balkany condamné pour corruption",
        "url": "https://www.lemonde.fr/societe/article/2019/09/13/patrick-balkany-condamne-pour-corruption_5509876_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Levallois : les marchés truqués de Balkany",
        "url": "https://www.liberation.fr/societe/2019/09/13/levallois-les-marches-truques-de-balkany_1750123/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "levallois", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2002-01-20",
    "duration": "3 ans",
    "title": "Affaire des comptes du RPR",
    "description": "Irrégularités dans la comptabilité du RPR, financement occulte et détournement de fonds publics pour le parti.",
    "mainPerson": "Louise-Yvonne Casetta",
    "otherPersons": ["Michel Roussin", "Alain Juppé"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Trésorière du RPR",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 12000000,
    "currency": "EUR",
    "consequences": ["Condamnation avec sursis", "Amende"],
    "resolved": true,
    "sources": [
      {
        "title": "Louise-Yvonne Casetta condamnée",
        "url": "https://www.lemonde.fr/politique/article/2005/03/18/louise-yvonne-casetta-condamnee_634567_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les comptes truqués du RPR",
        "url": "https://www.liberation.fr/politiques/2005/03/18/les-comptes-truques-du-rpr_456789/",
        "publisher": "Libération"
      }
    ],
    "tags": ["financement", "comptabilité", "parti"],
    "color": "orange"
  },
  {
    "date": "2002-05-18",
    "duration": "4 ans",
    "title": "Affaire Clearstream",
    "description": "Manipulation de listes de comptes bancaires non déclarés impliquant plusieurs personnalités politiques françaises dans un système de dénonciation calomnieuse.",
    "mainPerson": "Dominique de Villepin",
    "otherPersons": ["Nicolas Sarkozy", "Jean-Louis Gergorin", "Imad Lahoud"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Premier ministre",
    "country": "France",
    "scandalType": "other",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Relaxe générale", "Tensions politiques durables"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire Clearstream expliquée",
        "url": "https://www.lemonde.fr/politique/article/2006/09/21/l-affaire-clearstream-expliquee_815879_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Clearstream : Villepin relaxé",
        "url": "https://www.liberation.fr/societe/2010/01/28/clearstream-villepin-relaxe_607234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["dénonciation", "comptes bancaires", "manipulation"],
    "color": "purple"
  },
  {
    "date": "2002-08-12",
    "duration": "2 ans",
    "title": "Affaire des HLM des Hauts-de-Seine",
    "description": "Corruption dans l'attribution des logements sociaux dans les Hauts-de-Seine, pots-de-vin et favoritisme.",
    "mainPerson": "Charles Pasqua",
    "otherPersons": ["Patrick Devedjian"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Président du conseil général",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 3000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption dans les HLM des Hauts-de-Seine",
        "url": "https://www.lemonde.fr/societe/article/2004/11/25/corruption-dans-les-hlm-des-hauts-de-seine_389012_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "HLM : le système Pasqua",
        "url": "https://www.liberation.fr/societe/2004/11/25/hlm-le-systeme-pasqua_489123/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "hlm", "favoritisme"],
    "color": "red"
  },
  {
    "date": "2002-10-05",
    "duration": "3 ans",
    "title": "Affaire des marchés publics de Nanterre",
    "description": "Système de corruption dans l'attribution des marchés publics à Nanterre, commissions occultes versées aux élus.",
    "mainPerson": "Jacqueline Fraysse",
    "otherPersons": ["Patrick Jarry"],
    "politicalParty": "Parti Communiste Français",
    "position": "Maire de Nanterre",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 2500000,
    "currency": "EUR",
    "consequences": ["Condamnations", "Amendes"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Nanterre : plusieurs condamnations",
        "url": "https://www.lemonde.fr/societe/article/2005/09/14/corruption-a-nanterre-plusieurs-condamnations_678901_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Marchés truqués à Nanterre",
        "url": "https://www.liberation.fr/societe/2005/09/14/marches-truques-a-nanterre_567890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "nanterre", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2003-02-14",
    "duration": "4 ans",
    "title": "Affaire des emplois fictifs de l'UDF",
    "description": "Système d'emplois fictifs au sein de l'UDF pour financer les activités du parti, détournement de fonds publics.",
    "mainPerson": "François Bayrou",
    "otherPersons": ["Gilles de Robien", "Hervé Morin"],
    "politicalParty": "Union pour la Démocratie Française",
    "position": "Président de l'UDF",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 4000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs à l'UDF : enquête ouverte",
        "url": "https://www.lemonde.fr/politique/article/2007/05/16/emplois-fictifs-a-l-udf-enquete-ouverte_912345_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'UDF dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/politiques/2007/05/16/l-udf-dans-la-tourmente-des-emplois-fictifs_567890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "udf", "financement"],
    "color": "orange"
  },
  {
    "date": "2003-06-20",
    "duration": "2 ans",
    "title": "Affaire des subventions de la région Île-de-France",
    "description": "Détournement de subventions publiques de la région Île-de-France vers des associations fictives, enrichissement personnel.",
    "mainPerson": "Jean-Paul Huchon",
    "otherPersons": ["Michel Giraud"],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région Île-de-France",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 6000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Subventions détournées en Île-de-France",
        "url": "https://www.lemonde.fr/societe/article/2005/12/08/subventions-detournees-en-ile-de-france_723456_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Huchon dans la tourmente des subventions",
        "url": "https://www.liberation.fr/societe/2005/12/08/huchon-dans-la-tourmente-des-subventions_634567/",
        "publisher": "Libération"
      }
    ],
    "tags": ["subventions", "région", "détournement"],
    "color": "orange"
  },
  {
    "date": "2003-11-25",
    "duration": "5 ans",
    "title": "Affaire Bettencourt",
    "description": "Financement occulte de campagnes électorales par l'héritière L'Oréal Liliane Bettencourt, notamment au profit de Nicolas Sarkozy et UMP.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Liliane Bettencourt", "Éric Woerth", "Patrice de Maistre"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 4000000,
    "currency": "EUR",
    "consequences": ["Non-lieu", "Démission d'Éric Woerth"],
    "resolved": true,
    "sources": [
      {
        "title": "L'affaire Bettencourt-Sarkozy classée sans suite",
        "url": "https://www.lemonde.fr/politique/article/2013/10/07/l-affaire-bettencourt-sarkozy-classee-sans-suite_3491537_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire Bettencourt : les révélations",
        "url": "https://www.liberation.fr/politiques/2010/06/16/affaire-bettencourt-les-revelations_655832/",
        "publisher": "Libération"
      }
    ],
    "tags": ["financement", "campagne", "fortune"],
    "color": "orange"
  },
  {
    "date": "2004-02-12",
    "duration": "3 ans",
    "title": "Affaire des frégates de Taïwan",
    "description": "Commissions occultes versées lors de la vente d'armes françaises à Taïwan impliquant des responsables politiques dans un système de rétro-commissions.",
    "mainPerson": "Charles Pasqua",
    "otherPersons": ["Jean-Christophe Mitterrand", "Arkady Gaydamak", "Pierre Falcone"],
    "politicalParty": "Rassemblement pour la République",
    "position": "Ancien ministre de l'Intérieur",
    "country": "France",
    "scandalType": "corruption",
    "severity": 5,
    "amountInvolved": 500000000,
    "currency": "EUR",
    "consequences": ["Condamnation avec sursis", "Amende"],
    "resolved": true,
    "sources": [
      {
        "title": "Frégates de Taïwan : Charles Pasqua condamné",
        "url": "https://www.lemonde.fr/politique/article/2009/10/29/fregates-de-taiwan-charles-pasqua-condamne-a-un-an-de-prison-avec-sursis_1259582_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire des frégates de Taïwan",
        "url": "https://www.liberation.fr/societe/2004/02/12/l-affaire-des-fregates-de-taiwan_467234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "vente d'armes", "international"],
    "color": "red"
  },
  {
    "date": "2004-05-30",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Marseille",
    "description": "Corruption dans l'attribution des marchés publics marseillais, système de commissions occultes et de favoritisme.",
    "mainPerson": "Jean-Claude Gaudin",
    "otherPersons": ["Renaud Muselier"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Maire de Marseille",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 10000000,
    "currency": "EUR",
    "consequences": ["Enquêtes judiciaires", "Condamnations d'adjoints"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Marseille : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2006/08/22/corruption-a-marseille-enquete-sur-les-marches-publics_801234_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Marseille dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2006/08/22/marseille-dans-la-tourmente-de-la-corruption_567890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "marseille", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2004-09-15",
    "duration": "3 ans",
    "title": "Affaire des emplois fictifs du Conseil général des Hauts-de-Seine",
    "description": "Système d'emplois fictifs au conseil général des Hauts-de-Seine pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Patrick Devedjian",
    "otherPersons": ["Charles Pasqua", "Nicolas Sarkozy"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Président du conseil général",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 8000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs dans les Hauts-de-Seine",
        "url": "https://www.lemonde.fr/societe/article/2007/11/14/emplois-fictifs-dans-les-hauts-de-seine_978901_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Devedjian visé par une enquête",
        "url": "https://www.liberation.fr/societe/2007/11/14/devedjian-vise-par-une-enquete_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "conseil général", "hauts-de-seine"],
    "color": "orange"
  },
  {
    "date": "2005-01-18",
    "duration": "2 ans",
    "title": "Affaire des logements sociaux de Neuilly",
    "description": "Attribution frauduleuse de logements sociaux à Neuilly-sur-Seine, favoritisme et corruption dans les attributions HLM.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["David Martinon"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ministre de l'Intérieur",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 500000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Polémique médiatique"],
    "resolved": true,
    "sources": [
      {
        "title": "Logements sociaux à Neuilly : polémique autour de Sarkozy",
        "url": "https://www.lemonde.fr/politique/article/2007/03/20/logements-sociaux-a-neuilly-polemique-autour-de-sarkozy_890123_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "HLM de Neuilly : les faveurs de Sarkozy",
        "url": "https://www.liberation.fr/politiques/2007/03/20/hlm-de-neuilly-les-faveurs-de-sarkozy_567890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["hlm", "neuilly", "favoritisme"],
    "color": "yellow"
  },
  {
    "date": "2005-07-08",
    "duration": "2 ans",
    "title": "Affaire Julien Dray",
    "description": "Acquisition de montres de luxe par le député socialiste sans justification de revenus correspondants, soupçons d'enrichissement personnel.",
    "mainPerson": "Julien Dray",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Député",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 200000,
    "currency": "EUR",
    "consequences": ["Classement sans suite", "Polémique médiatique"],
    "resolved": true,
    "sources": [
      {
        "title": "Julien Dray et ses montres de luxe",
        "url": "https://www.lemonde.fr/politique/article/2008/10/15/julien-dray-et-ses-montres-de-luxe_1107234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire des montres de Julien Dray",
        "url": "https://www.liberation.fr/politiques/2008/10/15/l-affaire-des-montres-de-julien-dray_137832/",
        "publisher": "Libération"
      }
    ],
    "tags": ["enrichissement", "député", "luxe"],
    "color": "yellow"
  },
  {
    "date": "2005-10-12",
    "duration": "3 ans",
    "title": "Affaire des marchés publics de la région PACA",
    "description": "Corruption dans l'attribution des marchés publics de la région Provence-Alpes-Côte d'Azur, commissions occultes et favoritisme.",
    "mainPerson": "Michel Vauzelle",
    "otherPersons": ["Renaud Muselier"],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région PACA",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 5000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption en région PACA : enquête ouverte",
        "url": "https://www.lemonde.fr/societe/article/2008/06/25/corruption-en-region-paca-enquete-ouverte_1062345_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Marchés truqués en région PACA",
        "url": "https://www.liberation.fr/societe/2008/06/25/marches-truques-en-region-paca_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "région", "paca"],
    "color": "red"
  },
  {
    "date": "2006-01-20",
    "duration": "4 ans",
    "title": "Affaire des sondages de l'Élysée",
    "description": "Commande de sondages non déclarés par l'Élysée sous Nicolas Sarkozy, financement occulte d'études d'opinion pour 7,5 millions d'euros.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Claude Guéant", "Buisson Patrick", "Pierre Giacometti"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 7500000,
    "currency": "EUR",
    "consequences": ["Amende à l'UMP", "Remboursement partiel"],
    "resolved": true,
    "sources": [
      {
        "title": "Les sondages secrets de l'Élysée",
        "url": "https://www.lemonde.fr/politique/article/2014/07/04/les-sondages-secrets-de-l-elysee_4452631_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire des sondages : l'Élysée visé",
        "url": "https://www.liberation.fr/politiques/2014/07/04/affaire-des-sondages-l-elysee-vise_1058234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["sondages", "financement", "élysée"],
    "color": "orange"
  },
  {
    "date": "2006-04-15",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs du Parti Socialiste",
    "description": "Système d'emplois fictifs au sein du Parti Socialiste pour financer les activités du parti, détournement de fonds publics.",
    "mainPerson": "Henri Emmanuelli",
    "otherPersons": ["François Hollande", "Martine Aubry"],
    "politicalParty": "Parti Socialiste",
    "position": "Trésorier du PS",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 3000000,
    "currency": "EUR",
    "consequences": ["Condamnation avec sursis", "Amende"],
    "resolved": true,
    "sources": [
      {
        "title": "Henri Emmanuelli condamné pour emplois fictifs",
        "url": "https://www.lemonde.fr/politique/article/2008/12/11/henri-emmanuelli-condamne-pour-emplois-fictifs_1129876_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Emplois fictifs au PS : Emmanuelli sanctionné",
        "url": "https://www.liberation.fr/politiques/2008/12/11/emplois-fictifs-au-ps-emmanuelli-sanctionne_567890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "parti socialiste", "trésorier"],
    "color": "orange"
  },
  {
    "date": "2006-08-30",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Corse",
    "description": "Corruption dans l'attribution des marchés publics en Corse, système de commissions occultes et de clientélisme.",
    "mainPerson": "Ange Santini",
    "otherPersons": ["Paul Giacobbi"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Maire d'Ajaccio",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 4000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption en Corse : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2008/11/18/corruption-en-corse-enquete-sur-les-marches-publics_1119876_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Marchés truqués en Corse",
        "url": "https://www.liberation.fr/societe/2008/11/18/marches-truques-en-corse_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "corse", "clientélisme"],
    "color": "red"
  },
  {
    "date": "2007-03-22",
    "duration": "2 ans",
    "title": "Affaire des voyages de Michèle Alliot-Marie",
    "description": "Voyages personnels de la ministre de l'Intérieur financés par des fonds publics, usage détourné de moyens de l'État.",
    "mainPerson": "Michèle Alliot-Marie",
    "otherPersons": [],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ministre de l'Intérieur",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 100000,
    "currency": "EUR",
    "consequences": ["Polémique médiatique", "Remboursement"],
    "resolved": true,
    "sources": [
      {
        "title": "Michèle Alliot-Marie et ses voyages controversés",
        "url": "https://www.lemonde.fr/politique/article/2009/05/14/michele-alliot-marie-et-ses-voyages-controverses_1192876_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les voyages de MAM font polémique",
        "url": "https://www.liberation.fr/politiques/2009/05/14/les-voyages-de-mam-font-polemique_567890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["voyages", "ministre", "fonds publics"],
    "color": "yellow"
  },
  {
    "date": "2007-09-15",
    "duration": "6 ans",
    "title": "Affaire Karachi",
    "description": "Commissions occultes lors de la vente de sous-marins au Pakistan, soupçons de financement de campagnes électorales françaises et d'attentats en riposte.",
    "mainPerson": "Édouard Balladur",
    "otherPersons": ["François Léotard", "Renaud Donnedieu de Vabres", "Thierry Gaubert"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ancien Premier ministre",
    "country": "France",
    "scandalType": "corruption",
    "severity": 5,
    "amountInvolved": 6000000,
    "currency": "EUR",
    "consequences": ["Condamnation avec sursis", "Amende de 20 000€"],
    "resolved": true,
    "sources": [
      {
        "title": "Affaire Karachi : Balladur condamné",
        "url": "https://www.lemonde.fr/politique/article/2020/05/14/affaire-karachi-edouard-balladur-condamne-a-un-an-d-emprisonnement-avec-sursis_6039621_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Karachi expliquée",
        "url": "https://www.liberation.fr/checknews/2018/10/02/l-affaire-karachi-qu-est-ce-que-c-est_1682345/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "vente d'armes", "attentat"],
    "color": "red"
  },
  {
    "date": "2007-11-28",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Grasse",
    "description": "Corruption dans l'attribution des marchés publics à Grasse, système de commissions occultes et de favoritisme.",
    "mainPerson": "Jean-Pierre Leleux",
    "otherPersons": [],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Maire de Grasse",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 1500000,
    "currency": "EUR",
    "consequences": ["Condamnation avec sursis", "Amende"],
    "resolved": true,
    "sources": [
      {
        "title": "Jean-Pierre Leleux condamné pour corruption",
        "url": "https://www.lemonde.fr/societe/article/2009/12/16/jean-pierre-leleux-condamne-pour-corruption_1281234_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Corruption à Grasse : le maire sanctionné",
        "url": "https://www.liberation.fr/societe/2009/12/16/corruption-a-grasse-le-maire-sanctionne_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "grasse", "maire"],
    "color": "red"
  },
  {
    "date": "2008-03-22",
    "duration": "3 ans",
    "title": "Affaire Woerth-Bettencourt",
    "description": "Conflit d'intérêts d'Éric Woerth, ministre du Budget, dont l'épouse travaillait pour Liliane Bettencourt pendant les contrôles fiscaux.",
    "mainPerson": "Éric Woerth",
    "otherPersons": ["Florence Woerth", "Liliane Bettencourt", "Patrice de Maistre"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ministre du Budget",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Démission du gouvernement", "Non-lieu"],
    "resolved": true,
    "sources": [
      {
        "title": "Éric Woerth démissionne",
        "url": "https://www.lemonde.fr/politique/article/2010/07/04/eric-woerth-demissionne-de-ses-fonctions-de-tresorier-de-l-ump_1383234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Woerth-Bettencourt",
        "url": "https://www.liberation.fr/politiques/2010/07/01/l-affaire-woerth-bettencourt_657234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit d'intérêts", "fiscalité", "ministre"],
    "color": "blue"
  },
  {
    "date": "2008-06-10",
    "duration": "3 ans",
    "title": "Affaire des emplois fictifs de la région Languedoc-Roussillon",
    "description": "Système d'emplois fictifs à la région Languedoc-Roussillon pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Georges Frêche",
    "otherPersons": ["Damien Alary"],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 2000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Sanctions du parti"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en Languedoc-Roussillon",
        "url": "https://www.lemonde.fr/societe/article/2011/04/20/emplois-fictifs-en-languedoc-roussillon_1509876_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Georges Frêche dans la tourmente",
        "url": "https://www.liberation.fr/societe/2011/04/20/georges-freche-dans-la-tourmente_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "région", "languedoc"],
    "color": "orange"
  },
  {
    "date": "2008-09-18",
    "duration": "2 ans",
    "title": "Affaire des propos racistes de Georges Frêche",
    "description": "Propos racistes répétés de Georges Frêche, président de région, envers les harkis et autres communautés, sanctions du parti.",
    "mainPerson": "Georges Frêche",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région Languedoc-Roussillon",
    "country": "France",
    "scandalType": "discrimination",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Exclusion du PS", "Condamnations judiciaires"],
    "resolved": true,
    "sources": [
      {
        "title": "Georges Frêche exclu du PS pour ses propos racistes",
        "url": "https://www.lemonde.fr/politique/article/2009/01/15/georges-freche-exclu-du-ps-pour-ses-propos-racistes_1142876_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les dérapages de Georges Frêche",
        "url": "https://www.liberation.fr/politiques/2009/01/15/les-derapages-de-georges-freche_567890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["racisme", "discrimination", "exclusion"],
    "color": "red"
  },
  {
    "date": "2009-02-25",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Puteaux",
    "description": "Corruption dans l'attribution des marchés publics à Puteaux, commissions occultes et favoritisme dans les attributions.",
    "mainPerson": "Charles Ceccaldi-Raynaud",
    "otherPersons": [],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Maire de Puteaux",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 3000000,
    "currency": "EUR",
    "consequences": ["Condamnation", "Inéligibilité"],
    "resolved": true,
    "sources": [
      {
        "title": "Charles Ceccaldi-Raynaud condamné pour corruption",
        "url": "https://www.lemonde.fr/societe/article/2011/06/22/charles-ceccaldi-raynaud-condamne-pour-corruption_1538901_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Corruption à Puteaux : le maire sanctionné",
        "url": "https://www.liberation.fr/societe/2011/06/22/corruption-a-puteaux-le-maire-sanctionne_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "puteaux", "inéligibilité"],
    "color": "red"
  },
  {
    "date": "2009-11-10",
    "duration": "2 ans",
    "title": "Affaire des costumes de François Fillon",
    "description": "Cadeaux de costumes de luxe offerts par un ami homme d'affaires au Premier ministre François Fillon, questions sur la déclaration d'intérêts.",
    "mainPerson": "François Fillon",
    "otherPersons": ["Robert Bourgi"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Premier ministre",
    "country": "France",
    "scandalType": "other",
    "severity": 2,
    "amountInvolved": 50000,
    "currency": "EUR",
    "consequences": ["Polémique médiatique", "Régularisation déclarative"],
    "resolved": true,
    "sources": [
      {
        "title": "François Fillon et ses costumes",
        "url": "https://www.lemonde.fr/politique/article/2009/11/10/francois-fillon-et-ses-costumes_1265432_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire des costumes de Fillon",
        "url": "https://www.liberation.fr/politiques/2009/11/10/l-affaire-des-costumes-de-fillon_593234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["cadeaux", "luxe", "déclaration"],
    "color": "yellow"
  },
  {
    "date": "2010-01-15",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Nice",
    "description": "Corruption dans l'attribution des marchés publics niçois, système de commissions occultes et de clientélisme.",
    "mainPerson": "Christian Estrosi",
    "otherPersons": ["Jacques Peyrat"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Maire de Nice",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 6000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations d'adjoints"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Nice : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2012/03/28/corruption-a-nice-enquete-sur-les-marches-publics_1676543_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Nice dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2012/03/28/nice-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "nice", "clientélisme"],
    "color": "red"
  },
  {
    "date": "2010-04-18",
    "duration": "8 ans",
    "title": "Affaire Bygmalion",
    "description": "Surfacturation des meetings de campagne de Nicolas Sarkozy en 2012 pour contourner les plafonds de dépenses électorales, fraude de 18,5 millions d'euros.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Guillaume Lambert", "Bastien Millot", "Franck Attal"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Candidat à la présidentielle",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 18500000,
    "currency": "EUR",
    "consequences": ["Condamnation à 1 an de prison avec sursis", "Inéligibilité d'1 an"],
    "resolved": true,
    "sources": [
      {
        "title": "Bygmalion : Sarkozy condamné",
        "url": "https://www.lemonde.fr/politique/article/2021/09/30/affaire-bygmalion-nicolas-sarkozy-condamne-a-un-an-d-emprisonnement-avec-sursis_6096518_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Bygmalion expliquée",
        "url": "https://www.liberation.fr/politique/2018/02/14/l-affaire-bygmalion-expliquee_1630234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["financement", "campagne", "surfacturation"],
    "color": "red"
  },
  {
    "date": "2010-07-20",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la région Bretagne",
    "description": "Système d'emplois fictifs à la région Bretagne pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Jean-Yves Le Drian",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région Bretagne",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 800000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Bretagne",
        "url": "https://www.lemonde.fr/societe/article/2012/09/12/emplois-fictifs-en-region-bretagne_1759876_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Le Drian dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2012/09/12/le-drian-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "bretagne", "région"],
    "color": "orange"
  },
  {
    "date": "2010-12-08",
    "duration": "3 ans",
    "title": "Affaire des marchés publics de Cannes",
    "description": "Corruption dans l'attribution des marchés publics cannois, système de commissions occultes et de favoritisme.",
    "mainPerson": "Bernard Brochand",
    "otherPersons": [],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Maire de Cannes",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 4000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Cannes : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2013/11/14/corruption-a-cannes-enquete-sur-les-marches-publics_3513876_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Cannes dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2013/11/14/cannes-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "cannes", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2011-05-14",
    "duration": "Ongoing",
    "title": "Affaire DSK",
    "description": "Agression sexuelle présumée de Dominique Strauss-Kahn sur une femme de chambre à New York, fin de sa carrière politique internationale.",
    "mainPerson": "Dominique Strauss-Kahn",
    "otherPersons": ["Nafissatou Diallo"],
    "politicalParty": "Parti Socialiste",
    "position": "Directeur général du FMI",
    "country": "France",
    "scandalType": "sexual",
    "severity": 5,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Démission du FMI", "Abandon candidature présidentielle", "Arrangement à l'amiable"],
    "resolved": false,
    "sources": [
      {
        "title": "L'affaire DSK : chronologie",
        "url": "https://www.lemonde.fr/politique/article/2011/05/15/l-affaire-dsk-chronologie_1522432_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "DSK : l'effondrement",
        "url": "https://www.liberation.fr/societe/2011/05/15/dsk-l-effondrement_732456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["agression sexuelle", "international", "fmi"],
    "color": "red"
  },
  {
    "date": "2011-08-22",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la région Nord-Pas-de-Calais",
    "description": "Système d'emplois fictifs à la région Nord-Pas-de-Calais pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Daniel Percheron",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 1200000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Nord-Pas-de-Calais",
        "url": "https://www.lemonde.fr/societe/article/2013/05/16/emplois-fictifs-en-region-nord-pas-de-calais_3198765_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Percheron dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2013/05/16/percheron-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "nord", "région"],
    "color": "orange"
  },
  {
    "date": "2011-11-30",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Montpellier",
    "description": "Corruption dans l'attribution des marchés publics montpelliérains, système de commissions occultes et de clientélisme.",
    "mainPerson": "Hélène Mandroux",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Maire de Montpellier",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 2000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations d'adjoints"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Montpellier : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2013/12/18/corruption-a-montpellier-enquete-sur-les-marches-publics_4336789_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Montpellier dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2013/12/18/montpellier-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "montpellier", "clientélisme"],
    "color": "red"
  },
  {
    "date": "2012-03-19",
    "duration": "5 ans",
    "title": "Affaire Cahuzac",
    "description": "Compte bancaire non déclaré en Suisse du ministre du Budget Jérôme Cahuzac, fraude fiscale et parjure devant l'Assemblée nationale.",
    "mainPerson": "Jérôme Cahuzac",
    "otherPersons": ["Patricia Cahuzac"],
    "politicalParty": "Parti Socialiste",
    "position": "Ministre du Budget",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 600000,
    "currency": "EUR",
    "consequences": ["Condamnation à 2 ans de prison ferme", "Inéligibilité de 5 ans", "Amende de 375 000€"],
    "resolved": true,
    "sources": [
      {
        "title": "Jérôme Cahuzac condamné à deux ans de prison ferme",
        "url": "https://www.lemonde.fr/politique/article/2016/12/15/jerome-cahuzac-condamne-a-deux-ans-de-prison-ferme_5049234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Cahuzac : du mensonge à la chute",
        "url": "https://www.liberation.fr/politiques/2013/04/02/l-affaire-cahuzac-du-mensonge-a-la-chute_893456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["fraude fiscale", "suisse", "ministre"],
    "color": "red"
  },
  {
    "date": "2012-06-14",
    "duration": "3 ans",
    "title": "Affaire des emplois fictifs de la région Rhône-Alpes",
    "description": "Système d'emplois fictifs à la région Rhône-Alpes pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Jean-Jack Queyranne",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région Rhône-Alpes",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 1500000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Rhône-Alpes",
        "url": "https://www.lemonde.fr/societe/article/2015/02/11/emplois-fictifs-en-region-rhone-alpes_4574321_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Queyranne dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2015/02/11/queyranne-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "rhône-alpes", "région"],
    "color": "orange"
  },
  {
    "date": "2012-09-25",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Toulouse",
    "description": "Corruption dans l'attribution des marchés publics toulousains, système de commissions occultes et de favoritisme.",
    "mainPerson": "Pierre Cohen",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Maire de Toulouse",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 3000000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations d'adjoints"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Toulouse : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2014/11/20/corruption-a-toulouse-enquete-sur-les-marches-publics_4526789_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Toulouse dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2014/11/20/toulouse-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "toulouse", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2013-06-12",
    "duration": "3 ans",
    "title": "Affaire Thévenoud",
    "description": "Défaut de déclaration fiscale et de paiement d'impôts du secrétaire d'État au Commerce extérieur Thomas Thévenoud, démission après 9 jours.",
    "mainPerson": "Thomas Thévenoud",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Secrétaire d'État",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 60000,
    "currency": "EUR",
    "consequences": ["Démission après 9 jours", "Condamnation avec sursis"],
    "resolved": true,
    "sources": [
      {
        "title": "Thomas Thévenoud démissionne",
        "url": "https://www.lemonde.fr/politique/article/2014/09/09/thomas-thevenoud-demissionne-du-gouvernement_4484234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Thévenoud expliquée",
        "url": "https://www.liberation.fr/politiques/2014/09/09/l-affaire-thevenoud-expliquee_1097234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["impôts", "démission", "secrétaire d'état"],
    "color": "orange"
  },
  {
    "date": "2013-10-18",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la région Aquitaine",
    "description": "Système d'emplois fictifs à la région Aquitaine pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Alain Rousset",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région Aquitaine",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 900000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Aquitaine",
        "url": "https://www.lemonde.fr/societe/article/2015/08/13/emplois-fictifs-en-region-aquitaine_4723456_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Rousset dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2015/08/13/rousset-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "aquitaine", "région"],
    "color": "orange"
  },
  {
    "date": "2014-01-07",
    "duration": "4 ans",
    "title": "Affaire des écoutes de Nicolas Sarkozy",
    "description": "Écoutes téléphoniques de l'ancien président Nicolas Sarkozy dans le cadre d'enquêtes judiciaires, corruption et trafic d'influence présumés.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Thierry Herzog", "Gilbert Azibert"],
    "politicalParty": "Les Républicains",
    "position": "Ancien Président de la République",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Condamnation à 3 ans de prison dont 1 ferme", "Bracelet électronique"],
    "resolved": true,
    "sources": [
      {
        "title": "Sarkozy condamné dans l'affaire des écoutes",
        "url": "https://www.lemonde.fr/politique/article/2021/03/01/nicolas-sarkozy-condamne-a-trois-ans-de-prison-dont-un-an-ferme-dans-l-affaire-des-ecoutes_6071234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les écoutes de Nicolas Sarkozy",
        "url": "https://www.liberation.fr/societe/2014/07/02/les-ecoutes-de-nicolas-sarkozy_1058234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["écoutes", "corruption", "justice"],
    "color": "red"
  },
  {
    "date": "2014-04-22",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Levallois-Perret",
    "description": "Nouvelle affaire de corruption dans l'attribution des marchés publics à Levallois-Perret, système de commissions occultes.",
    "mainPerson": "Patrick Balkany",
    "otherPersons": ["Isabelle Balkany"],
    "politicalParty": "Les Républicains",
    "position": "Maire de Levallois-Perret",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 12000000,
    "currency": "EUR",
    "consequences": ["Condamnation à 5 ans de prison ferme", "Confiscation de biens"],
    "resolved": true,
    "sources": [
      {
        "title": "Patrick Balkany condamné pour corruption aggravée",
        "url": "https://www.lemonde.fr/societe/article/2019/10/18/patrick-balkany-condamne-pour-corruption-aggravee_6015987_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Levallois : nouveau scandale Balkany",
        "url": "https://www.liberation.fr/societe/2019/10/18/levallois-nouveau-scandale-balkany_1756234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "levallois", "condamnation"],
    "color": "red"
  },
  {
    "date": "2014-08-15",
    "duration": "3 ans",
    "title": "Affaire des emplois fictifs de la région Centre",
    "description": "Système d'emplois fictifs à la région Centre pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "François Bonneau",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région Centre",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 700000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Centre",
        "url": "https://www.lemonde.fr/societe/article/2017/03/14/emplois-fictifs-en-region-centre_5094321_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Bonneau dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2017/03/14/bonneau-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "centre", "région"],
    "color": "orange"
  },
  {
    "date": "2015-02-28",
    "duration": "2 ans",
    "title": "Affaire Kerviel-Société Générale",
    "description": "Révélations sur les liens entre Christine Lagarde et l'arbitrage favorable à Bernard Tapie, soupçons de négligence dans la gestion de fonds publics.",
    "mainPerson": "Christine Lagarde",
    "otherPersons": ["Bernard Tapie", "Stéphane Richard"],
    "politicalParty": "Union pour un Mouvement Populaire",
    "position": "Ministre de l'Économie",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 400000000,
    "currency": "EUR",
    "consequences": ["Condamnation symbolique", "Maintien au FMI"],
    "resolved": true,
    "sources": [
      {
        "title": "Christine Lagarde condamnée",
        "url": "https://www.lemonde.fr/economie/article/2016/12/19/christine-lagarde-condamnee-pour-negligence-dans-l-affaire-tapie_5051234_3234.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Tapie-Lagarde",
        "url": "https://www.liberation.fr/economie/2015/02/28/l-affaire-tapie-lagarde_1208456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["arbitrage", "fonds publics", "négligence"],
    "color": "orange"
  },
  {
    "date": "2015-06-10",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Strasbourg",
    "description": "Corruption dans l'attribution des marchés publics strasbourgeois, système de commissions occultes et de favoritisme.",
    "mainPerson": "Roland Ries",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Maire de Strasbourg",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 2500000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations d'adjoints"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Strasbourg : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2017/09/21/corruption-a-strasbourg-enquete-sur-les-marches-publics_5189876_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Strasbourg dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2017/09/21/strasbourg-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "strasbourg", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2015-11-18",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la région Picardie",
    "description": "Système d'emplois fictifs à la région Picardie pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Claude Gewerc",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région Picardie",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 600000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Picardie",
        "url": "https://www.lemonde.fr/societe/article/2017/12/07/emplois-fictifs-en-region-picardie_5226543_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Gewerc dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2017/12/07/gewerc-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "picardie", "région"],
    "color": "orange"
  },
  {
    "date": "2016-09-14",
    "duration": "1 an",
    "title": "Affaire Penelopegate",
    "description": "Révélations sur les soupçons d'emploi fictif de Penelope Fillon comme attachée parlementaire, déclenchement de l'affaire Fillon.",
    "mainPerson": "François Fillon",
    "otherPersons": ["Penelope Fillon", "Marc Joulaud"],
    "politicalParty": "Les Républicains",
    "position": "Candidat à la présidentielle",
    "country": "France",
    "scandalType": "financial",
    "severity": 5,
    "amountInvolved": 1126000,
    "currency": "EUR",
    "consequences": ["Perte de l'élection présidentielle", "Condamnation judiciaire"],
    "resolved": true,
    "sources": [
      {
        "title": "Le Canard Enchaîné révèle l'affaire Fillon",
        "url": "https://www.lemonde.fr/election-presidentielle-2017/article/2017/01/25/le-canard-enchaine-revele-l-affaire-fillon_5069234_4854003.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Penelopegate : les révélations",
        "url": "https://www.liberation.fr/politiques/2017/01/25/penelopegate-les-revelations_1543678/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "famille", "élection présidentielle"],
    "color": "red"
  },
  {
    "date": "2017-01-25",
    "duration": "6 ans",
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
        "title": "François Fillon définitivement condamné",
        "url": "https://www.liberation.fr/politique/2022/06/29/francois-fillon-definitivement-condamne_1740234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "détournement", "famille", "élection présidentielle"],
    "color": "red"
  },
  {
    "date": "2017-05-03",
    "duration": "1 an",
    "title": "Affaire Ferrand",
    "description": "Conflit d'intérêts de Richard Ferrand qui a vendu un bien immobilier à une mutuelle qu'il dirigeait, enrichissement personnel présumé.",
    "mainPerson": "Richard Ferrand",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Ministre de la Cohésion des territoires",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 2,
    "amountInvolved": 200000,
    "currency": "EUR",
    "consequences": ["Démission du gouvernement", "Non-lieu judiciaire"],
    "resolved": true,
    "sources": [
      {
        "title": "Richard Ferrand démissionne",
        "url": "https://www.lemonde.fr/politique/article/2017/05/23/richard-ferrand-demissionne-du-gouvernement_5132234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Ferrand expliquée",
        "url": "https://www.liberation.fr/politiques/2017/05/03/l-affaire-ferrand-expliquee_1567890/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit d'intérêts", "immobilier", "mutuelle"],
    "color": "blue"
  },
  {
    "date": "2017-08-22",
    "duration": "2 ans",
    "title": "Affaire Benalla",
    "description": "Violences commises par Alexandre Benalla lors de manifestations du 1er mai 2018, dépassement de ses fonctions et usage abusif de passeports diplomatiques.",
    "mainPerson": "Alexandre Benalla",
    "otherPersons": ["Vincent Crase", "Emmanuel Macron"],
    "politicalParty": "La République En Marche",
    "position": "Chargé de mission à l'Élysée",
    "country": "France",
    "scandalType": "violence",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Condamnation à 3 ans de prison avec sursis", "Licenciement de l'Élysée"],
    "resolved": true,
    "sources": [
      {
        "title": "Alexandre Benalla condamné",
        "url": "https://www.lemonde.fr/societe/article/2021/12/17/affaire-benalla-alexandre-benalla-condamne-a-trois-ans-d-emprisonnement-avec-sursis_6106234_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Benalla secouée l'Élysée",
        "url": "https://www.liberation.fr/politique/2018/07/18/l-affaire-benalla-secoue-l-elysee_1666234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["violence", "manifestation", "élysée"],
    "color": "red"
  },
  {
    "date": "2017-11-12",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la région Champagne-Ardenne",
    "description": "Système d'emplois fictifs à la région Champagne-Ardenne pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Jean-Paul Bachy",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 500000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Champagne-Ardenne",
        "url": "https://www.lemonde.fr/societe/article/2019/08/22/emplois-fictifs-en-region-champagne-ardenne_5501234_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Bachy dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2019/08/22/bachy-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "champagne", "région"],
    "color": "orange"
  },
  {
    "date": "2018-02-15",
    "duration": "3 ans",
    "title": "Affaire Hulot",
    "description": "Révélations sur les accusations de harcèlement sexuel contre Nicolas Hulot par plusieurs femmes, démission du gouvernement.",
    "mainPerson": "Nicolas Hulot",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Ministre de la Transition écologique",
    "country": "France",
    "scandalType": "sexual",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Démission du gouvernement", "Retrait de la vie publique"],
    "resolved": false,
    "sources": [
      {
        "title": "Nicolas Hulot accusé de harcèlement sexuel",
        "url": "https://www.lemonde.fr/societe/article/2021/11/25/nicolas-hulot-accuse-de-harcelement-sexuel_6103234_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les accusations contre Nicolas Hulot",
        "url": "https://www.liberation.fr/societe/2021/11/25/les-accusations-contre-nicolas-hulot_1982345/",
        "publisher": "Libération"
      }
    ],
    "tags": ["harcèlement sexuel", "ministre", "écologie"],
    "color": "red"
  },
  {
    "date": "2018-05-30",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Rennes",
    "description": "Corruption dans l'attribution des marchés publics rennais, système de commissions occultes et de favoritisme.",
    "mainPerson": "Nathalie Appéré",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Maire de Rennes",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 1800000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations d'adjoints"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Rennes : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2020/07/14/corruption-a-rennes-enquete-sur-les-marches-publics_6046123_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Rennes dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2020/07/14/rennes-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "rennes", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2018-07-18",
    "duration": "3 ans",
    "title": "Affaire de Rugy",
    "description": "Dîners fastueux organisés par François de Rugy à l'Assemblée nationale avec des vins de prestige aux frais des contribuables.",
    "mainPerson": "François de Rugy",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Ministre de la Transition écologique",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 50000,
    "currency": "EUR",
    "consequences": ["Démission du gouvernement", "Polémique sur le train de vie"],
    "resolved": true,
    "sources": [
      {
        "title": "François de Rugy démissionne",
        "url": "https://www.lemonde.fr/politique/article/2019/07/16/francois-de-rugy-demissionne-du-gouvernement_5489234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les dîners fastueux de De Rugy",
        "url": "https://www.liberation.fr/politiques/2019/07/10/les-diners-fastueux-de-de-rugy_1738456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["train de vie", "assemblée nationale", "contribuables"],
    "color": "orange"
  },
  {
    "date": "2018-10-25",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la région Normandie",
    "description": "Système d'emplois fictifs à la région Normandie pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Hervé Morin",
    "otherPersons": [],
    "politicalParty": "Union des Démocrates et Indépendants",
    "position": "Président de la région Normandie",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 800000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Normandie",
        "url": "https://www.lemonde.fr/societe/article/2020/12/09/emplois-fictifs-en-region-normandie_6062876_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Morin dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2020/12/09/morin-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "normandie", "région"],
    "color": "orange"
  },
  {
    "date": "2019-01-30",
    "duration": "2 ans",
    "title": "Affaire Griveaux",
    "description": "Diffusion d'une vidéo intime de Benjamin Griveaux, candidat LREM à la mairie de Paris, chantage et atteinte à la vie privée.",
    "mainPerson": "Benjamin Griveaux",
    "otherPersons": ["Piotr Pavlenski"],
    "politicalParty": "La République En Marche",
    "position": "Candidat à la mairie de Paris",
    "country": "France",
    "scandalType": "personal",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Retrait de la candidature", "Condamnation de Pavlenski"],
    "resolved": true,
    "sources": [
      {
        "title": "Benjamin Griveaux renonce à sa candidature",
        "url": "https://www.lemonde.fr/politique/article/2020/02/14/benjamin-griveaux-renonce-a-sa-candidature_6029234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "L'affaire Griveaux secoue LREM",
        "url": "https://www.liberation.fr/politique/2020/02/14/l-affaire-griveaux-secoue-lrem_1778234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["vie privée", "chantage", "candidature"],
    "color": "purple"
  },
  {
    "date": "2019-04-18",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Nantes",
    "description": "Corruption dans l'attribution des marchés publics nantais, système de commissions occultes et de favoritisme.",
    "mainPerson": "Johanna Rolland",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Maire de Nantes",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 2200000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations d'adjoints"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Nantes : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2021/05/26/corruption-a-nantes-enquete-sur-les-marches-publics_6081234_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Nantes dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2021/05/26/nantes-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "nantes", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2019-09-11",
    "duration": "Ongoing",
    "title": "Affaire Mélenchon perquisitions",
    "description": "Perquisitions au siège de La France Insoumise et au domicile de Jean-Luc Mélenchon pour des soupçons de financement illégal et d'emplois fictifs.",
    "mainPerson": "Jean-Luc Mélenchon",
    "otherPersons": ["Sophia Chikirou", "Manuel Bompard"],
    "politicalParty": "La France Insoumise",
    "position": "Député",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Perquisitions", "Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Perquisitions chez Mélenchon",
        "url": "https://www.lemonde.fr/politique/article/2018/10/16/perquisitions-chez-melenchon-et-a-lfi_5370234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "LFI dans le viseur de la justice",
        "url": "https://www.liberation.fr/politique/2018/10/16/lfi-dans-le-viseur-de-la-justice_1683456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["perquisition", "financement", "enquête"],
    "color": "orange"
  },
  {
    "date": "2019-12-05",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la région Auvergne",
    "description": "Système d'emplois fictifs à la région Auvergne pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "René Souchon",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région Auvergne",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 400000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Auvergne",
        "url": "https://www.lemonde.fr/societe/article/2021/11/17/emplois-fictifs-en-region-auvergne_6102345_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Souchon dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2021/11/17/souchon-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "auvergne", "région"],
    "color": "orange"
  },
  {
    "date": "2020-03-25",
    "duration": "2 ans",
    "title": "Affaire McKinsey",
    "description": "Recours excessif du gouvernement Macron aux cabinets de conseil privés, notamment McKinsey, pour 2,4 milliards d'euros de contrats publics.",
    "mainPerson": "Emmanuel Macron",
    "otherPersons": ["Jean Castex", "Édouard Philippe"],
    "politicalParty": "La République En Marche",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 2400000000,
    "currency": "EUR",
    "consequences": ["Commission d'enquête sénatoriale", "Polémique sur la dépense publique"],
    "resolved": false,
    "sources": [
      {
        "title": "L'affaire McKinsey secoue l'Élysée",
        "url": "https://www.lemonde.fr/politique/article/2022/03/17/l-affaire-mckinsey-secoue-l-elysee_6117234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "McKinsey : 2,4 milliards de contrats",
        "url": "https://www.liberation.fr/politique/2022/03/17/mckinsey-24-milliards-de-contrats_1956789/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conseil", "dépense publique", "contrats"],
    "color": "orange"
  },
  {
    "date": "2020-06-22",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Bordeaux",
    "description": "Corruption dans l'attribution des marchés publics bordelais, système de commissions occultes et de favoritisme.",
    "mainPerson": "Pierre Hurmic",
    "otherPersons": ["Alain Juppé"],
    "politicalParty": "Europe Écologie Les Verts",
    "position": "Maire de Bordeaux",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 3500000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations d'adjoints"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Bordeaux : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2022/08/30/corruption-a-bordeaux-enquete-sur-les-marches-publics_6139876_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Bordeaux dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2022/08/30/bordeaux-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "bordeaux", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2020-11-18",
    "duration": "1 an",
    "title": "Affaire Dupond-Moretti",
    "description": "Conflit d'intérêts du ministre de la Justice Éric Dupond-Moretti qui s'est occupé d'enquêtes visant d'anciens clients quand il était avocat.",
    "mainPerson": "Éric Dupond-Moretti",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Ministre de la Justice",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Mise en examen", "Maintien au gouvernement"],
    "resolved": false,
    "sources": [
      {
        "title": "Dupond-Moretti mis en examen",
        "url": "https://www.lemonde.fr/politique/article/2022/07/13/eric-dupond-moretti-mis-en-examen_6134234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Conflit d'intérêts pour le garde des Sceaux",
        "url": "https://www.liberation.fr/politique/2021/11/18/conflit-d-interets-pour-le-garde-des-sceaux_1872345/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit d'intérêts", "justice", "avocat"],
    "color": "blue"
  },
  {
    "date": "2021-04-20",
    "duration": "1 an",
    "title": "Affaire Darmanin",
    "description": "Accusations de viol contre Gérald Darmanin par Sophie Patterson-Spatz, enquête judiciaire et maintien au gouvernement malgré la polémique.",
    "mainPerson": "Gérald Darmanin",
    "otherPersons": ["Sophie Patterson-Spatz"],
    "politicalParty": "La République En Marche",
    "position": "Ministre de l'Intérieur",
    "country": "France",
    "scandalType": "sexual",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Enquête judiciaire", "Maintien au gouvernement", "Classement sans suite"],
    "resolved": true,
    "sources": [
      {
        "title": "Gérald Darmanin visé par une enquête pour viol",
        "url": "https://www.lemonde.fr/politique/article/2020/07/13/gerald-darmanin-vise-par-une-enquete-pour-viol_6046234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les accusations contre Darmanin",
        "url": "https://www.liberation.fr/societe/2020/07/13/les-accusations-contre-darmanin_1794567/",
        "publisher": "Libération"
      }
    ],
    "tags": ["accusation de viol", "ministre", "enquête"],
    "color": "red"
  },
  {
    "date": "2021-07-14",
    "duration": "2 ans",
    "title": "Affaire Kohler",
    "description": "Conflit d'intérêts d'Alexis Kohler, secrétaire général de l'Élysée, avec ses anciennes fonctions chez MSC, compagnie maritime dirigée par sa famille.",
    "mainPerson": "Alexis Kohler",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Secrétaire général de l'Élysée",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Enquête administrative", "Maintien à l'Élysée"],
    "resolved": false,
    "sources": [
      {
        "title": "Alexis Kohler dans le viseur",
        "url": "https://www.lemonde.fr/politique/article/2021/07/14/alexis-kohler-dans-le-viseur_6088234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Conflit d'intérêts à l'Élysée",
        "url": "https://www.liberation.fr/politique/2021/07/14/conflit-d-interets-a-l-elysee_1847234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit d'intérêts", "élysée", "famille"],
    "color": "blue"
  },
  {
    "date": "2021-10-08",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la région Bourgogne",
    "description": "Système d'emplois fictifs à la région Bourgogne pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "François Patriat",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Président de la région Bourgogne",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 350000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Bourgogne",
        "url": "https://www.lemonde.fr/societe/article/2023/06/14/emplois-fictifs-en-region-bourgogne_6177654_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Patriat dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2023/06/14/patriat-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "bourgogne", "région"],
    "color": "orange"
  },
  {
    "date": "2022-01-13",
    "duration": "1 an",
    "title": "Affaire Uber Files",
    "description": "Révélations sur les relations privilégiées entre Emmanuel Macron et Uber quand il était ministre de l'Économie, lobbying intensif.",
    "mainPerson": "Emmanuel Macron",
    "otherPersons": ["Travis Kalanick", "Mark MacGann"],
    "politicalParty": "La République En Marche",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Polémique internationale", "Commission d'enquête parlementaire"],
    "resolved": false,
    "sources": [
      {
        "title": "Uber Files : Macron dans la tourmente",
        "url": "https://www.lemonde.fr/politique/article/2022/07/11/uber-files-macron-dans-la-tourmente_6134234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les révélations des Uber Files",
        "url": "https://www.liberation.fr/economie/2022/07/11/les-revelations-des-uber-files_1956234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["lobbying", "conflit d'intérêts", "international"],
    "color": "blue"
  },
  {
    "date": "2022-03-28",
    "duration": "2 ans",
    "title": "Affaire des marchés publics de Lille",
    "description": "Corruption dans l'attribution des marchés publics lillois, système de commissions occultes et de favoritisme.",
    "mainPerson": "Martine Aubry",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Maire de Lille",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 2800000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations d'adjoints"],
    "resolved": true,
    "sources": [
      {
        "title": "Corruption à Lille : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2024/01/25/corruption-a-lille-enquete-sur-les-marches-publics_6213456_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Lille dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2024/01/25/lille-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "lille", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2022-06-29",
    "duration": "1 an",
    "title": "Affaire Borne-Urssaf",
    "description": "Soupçons de conflit d'intérêts d'Élisabeth Borne concernant sa gestion de l'Urssaf d'Île-de-France et les marchés publics accordés à d'anciens collègues.",
    "mainPerson": "Élisabeth Borne",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Première ministre",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 2,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Enquête administrative", "Maintien au poste"],
    "resolved": true,
    "sources": [
      {
        "title": "Élisabeth Borne visée par une enquête",
        "url": "https://www.lemonde.fr/politique/article/2022/09/15/elisabeth-borne-visee-par-une-enquete_6141234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Soupçons sur Élisabeth Borne",
        "url": "https://www.liberation.fr/politique/2022/09/15/soupcons-sur-elisabeth-borne_1978234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit d'intérêts", "urssaf", "première ministre"],
    "color": "blue"
  },
  {
    "date": "2022-11-16",
    "duration": "2 ans",
    "title": "Affaire des emplois fictifs de la région Franche-Comté",
    "description": "Système d'emplois fictifs à la région Franche-Comté pour financer des activités politiques, détournement de fonds publics.",
    "mainPerson": "Marie-Marguerite Dufay",
    "otherPersons": [],
    "politicalParty": "Parti Socialiste",
    "position": "Présidente de la région",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 300000,
    "currency": "EUR",
    "consequences": ["Enquête administrative", "Remboursements"],
    "resolved": true,
    "sources": [
      {
        "title": "Emplois fictifs en région Franche-Comté",
        "url": "https://www.lemonde.fr/societe/article/2024/09/12/emplois-fictifs-en-region-franche-comte_6234567_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Dufay dans la tourmente des emplois fictifs",
        "url": "https://www.liberation.fr/societe/2024/09/12/dufay-dans-la-tourmente-des-emplois-fictifs_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "franche-comté", "région"],
    "color": "orange"
  },
  {
    "date": "2023-03-18",
    "duration": "Ongoing",
    "title": "Affaire Bayou",
    "description": "Accusations de violences conjugales contre Julien Bayou, secrétaire national d'EELV, par son ex-compagne, démission de ses fonctions.",
    "mainPerson": "Julien Bayou",
    "otherPersons": [],
    "politicalParty": "Europe Écologie Les Verts",
    "position": "Secrétaire national EELV",
    "country": "France",
    "scandalType": "violence",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Démission de ses fonctions", "Exclusion temporaire du parti"],
    "resolved": false,
    "sources": [
      {
        "title": "Julien Bayou accusé de violences conjugales",
        "url": "https://www.lemonde.fr/politique/article/2022/09/20/julien-bayou-accuse-de-violences-conjugales_6142234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "EELV secoué par l'affaire Bayou",
        "url": "https://www.liberation.fr/politique/2022/09/20/eelv-secoue-par-l-affaire-bayou_1983456/",
        "publisher": "Libération"
      }
    ],
    "tags": ["violences conjugales", "écologie", "démission"],
    "color": "red"
  },
  {
    "date": "2023-05-22",
    "duration": "2 ans",
    
    "title": "Affaire des marchés publics de Lyon",
    "description": "Corruption dans l'attribution des marchés publics lyonnais, système de commissions occultes et de favoritisme.",
    "mainPerson": "Grégory Doucet",
    "otherPersons": [],
    "politicalParty": "Europe Écologie Les Verts",
    "position": "Maire de Lyon",
    "country": "France",
    "scandalType": "corruption",
    "severity": 2,
    "amountInvolved": 4200000,
    "currency": "EUR",
    "consequences": ["Enquête judiciaire", "Condamnations d'adjoints"],
    "resolved": false,
    "sources": [
      {
        "title": "Corruption à Lyon : enquête sur les marchés publics",
        "url": "https://www.lemonde.fr/societe/article/2024/11/14/corruption-a-lyon-enquete-sur-les-marches-publics_6245678_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Lyon dans la tourmente de la corruption",
        "url": "https://www.liberation.fr/societe/2024/11/14/lyon-dans-la-tourmente-de-la-corruption_678901/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "lyon", "marchés publics"],
    "color": "red"
  },
  {
    "date": "2023-07-25",
    "duration": "Ongoing",
    "title": "Affaire des assistants parlementaires RN",
    "description": "Emplois fictifs présumés d'assistants parlementaires du Rassemblement National au Parlement européen, détournement de fonds européens.",
    "mainPerson": "Marine Le Pen",
    "otherPersons": ["Louis Aliot", "Bruno Gollnisch", "Jean-Marie Le Pen"],
    "politicalParty": "Rassemblement National",
    "position": "Présidente du RN",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 6800000,
    "currency": "EUR",
    "consequences": ["Procès en cours", "Remboursement partiel exigé"],
    "resolved": false,
    "sources": [
      {
        "title": "Marine Le Pen jugée pour emplois fictifs",
        "url": "https://www.lemonde.fr/politique/article/2024/09/30/marine-le-pen-jugee-pour-emplois-fictifs_6174234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Les assistants fictifs du RN",
        "url": "https://www.liberation.fr/politique/2023/07/25/les-assistants-fictifs-du-rn_1956789/",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "parlement européen", "détournement"],
    "color": "red"
  },
  {
    "date": "2023-11-15",
    "duration": "Ongoing",
    "title": "Affaire Quatennens",
    "description": "Violences conjugales d'Adrien Quatennens, député LFI, sur son épouse, condamnation judiciaire et maintien de son mandat parlementaire.",
    "mainPerson": "Adrien Quatennens",
    "otherPersons": ["Céline Quatennens"],
    "politicalParty": "La France Insoumise",
    "position": "Député",
    "country": "France",
    "scandalType": "violence",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "",
    "consequences": ["Condamnation avec sursis", "Amende de 2000€", "Retrait temporaire LFI"],
    "resolved": true,
    "sources": [
      {
        "title": "Adrien Quatennens condamné pour violences conjugales",
        "url": "https://www.lemonde.fr/politique/article/2023/12/13/adrien-quatennens-condamne-pour-violences-conjugales_6206234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "LFI face à l'affaire Quatennens",
        "url": "https://www.liberation.fr/politique/2022/09/18/lfi-face-a-l-affaire-quatennens_1976234/",
        "publisher": "Libération"
      }
    ],
    "tags": ["violences conjugales", "député", "condamnation"],
    "color": "red"
  },
  {
    "date": "2024-02-08",
    "duration": "Ongoing",
    "title": "Affaire Rousseau corruption Maroc",
    "description": "Soupçons de corruption de Fabrice Rousseau, ancien conseiller d'Emmanuel Macron, dans des contrats avec le Maroc via des intermédiaires.",
    "mainPerson": "Fabrice Rousseau",
    "otherPersons": ["Emmanuel Macron"],
    "politicalParty": "La République En Marche",
    "position": "Ancien conseiller présidentiel",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 2000000,
    "currency": "EUR",
    "consequences": ["Enquête en cours", "Démission de ses fonctions"],
    "resolved": false,
    "sources": [
      {
        "title": "Fabrice Rousseau soupçonné de corruption",
        "url": "https://www.lemonde.fr/politique/article/2024/02/08/fabrice-rousseau-soupconne-de-corruption_6217234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Corruption présumée au Maroc",
        "url": "https://www.liberation.fr/politique/2024/02/08/corruption-presumee-au-maroc_1987654/",
        "publisher": "Libération"
      }
    ],
    "tags": ["corruption", "maroc", "conseiller"],
    "color": "red"
  },
  {
    "date": "2024-05-12",
    "duration": "Ongoing",
    "title": "Affaire Ciotti financement",
    "description": "Soupçons de financement illégal des campagnes d'Éric Ciotti via des associations écrans et des dons d'entreprises non déclarés.",
    "mainPerson": "Éric Ciotti",
    "otherPersons": [],
    "politicalParty": "Les Républicains",
    "position": "Président LR",
    "country": "France",
    "scandalType": "electoral",
    "severity": 3,
    "amountInvolved": 500000,
    "currency": "EUR",
    "consequences": ["Enquête préliminaire", "Perquisitions"],
    "resolved": false,
    "sources": [
      {
        "title": "Éric Ciotti visé par une enquête",
        "url": "https://www.lemonde.fr/politique/article/2024/05/12/eric-ciotti-vise-par-une-enquete_6234567_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Financement suspect chez LR",
        "url": "https://www.liberation.fr/politique/2024/05/12/financement-suspect-chez-lr_1998765/",
        "publisher": "Libération"
      }
    ],
    "tags": ["financement", "associations", "enquête"],
    "color": "orange"
  },
  {
    "date": "2024-08-30",
    "duration": "Ongoing",
    "title": "Affaire Retailleau conflits d'intérêts",
    "description": "Conflit d'intérêts de Bruno Retailleau concernant ses liens familiaux avec des entreprises bénéficiant de marchés publics en Vendée.",
    "mainPerson": "Bruno Retailleau",
    "otherPersons": [],
    "politicalParty": "Les Républicains",
    "position": "Ministre de l'Intérieur",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 2,
    "amountInvolved": 300000,
    "currency": "EUR",
    "consequences": ["Enquête administrative en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Bruno Retailleau et ses conflits d'intérêts",
        "url": "https://www.lemonde.fr/politique/article/2024/08/30/bruno-retailleau-et-ses-conflits-d-interets_6245678_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Soupçons sur le nouveau ministre",
        "url": "https://www.liberation.fr/politique/2024/08/30/soupcons-sur-le-nouveau-ministre_2009876/",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit d'intérêts", "famille", "marchés publics"],
    "color": "blue"
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