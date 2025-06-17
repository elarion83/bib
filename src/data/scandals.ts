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
    "date": "2010-01-12",
    "duration": "4 ans",
    "title": "Affaire Woerth-Bettencourt",
    "description": "Financement illégal de la campagne de Nicolas Sarkozy et évasion fiscale présumée de Liliane Bettencourt.",
    "mainPerson": "Éric Woerth",
    "otherPersons": ["Nicolas Sarkozy", "Liliane Bettencourt"],
    "politicalParty": "UMP",
    "position": "Ministre du Travail",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 150000,
    "currency": "EUR",
    "consequences": ["Non-lieu partiel", "Affaire classée sans suite pour Woerth"],
    "resolved": true,
    "sources": [
      {
        "title": "Affaire Woerth-Bettencourt: le parquet requiert un non-lieu",
        "url": "https://www.lefigaro.fr/actualite-france/2015/10/23/01016-20151023ARTFIG00292-affaire-woerth-bettencourt-le-parquet-requiert-un-non-lieu.php",
        "publisher": "Le Figaro"
      },
      {
        "title": "Affaire Bettencourt: Eric Woerth bénéficie d'un non-lieu",
        "url": "https://www.lexpress.fr/actualite/societe/justice/affaire-bettencourt-eric-woerth-beneficie-d-un-non-lieu_1733464.html",
        "publisher": "L'Express"
      }
    ],
    "tags": ["financement", "campagne", "évasion fiscale"],
    "color": "red"
  },
  {
    "date": "2011-05-16",
    "duration": "3 ans",
    "title": "Affaire des écoutes de l'Élysée",
    "description": "Mise en place d'un système d'écoutes illégales au sein de l'Élysée sous Nicolas Sarkozy.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Claude Guéant"],
    "politicalParty": "UMP",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "espionage",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Enquête classée sans suite"],
    "resolved": true,
    "sources": [
      {
        "title": "Affaire des écoutes de l'Élysée: Sarkozy et Guéant mis en examen",
        "url": "https://www.lemonde.fr/societe/article/2014/03/20/affaire-des-ecoutes-de-l-elysee-sarkozy-et-gueant-mis-en-examen_4386445_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Écoutes de l'Élysée: l'enquête classée sans suite",
        "url": "https://www.lepoint.fr/justice/ecoutes-de-l-elysee-l-enquete-classee-sans-suite-20-03-2014-1801665_2386.php",
        "publisher": "Le Point"
      }
    ],
    "tags": ["écoutes", "illégal"],
    "color": "purple"
  },
  {
    "date": "2012-09-30",
    "duration": "5 ans",
    "title": "Affaire Cahuzac",
    "description": "Fraude fiscale et mensonge sous serment du ministre du Budget Jérôme Cahuzac.",
    "mainPerson": "Jérôme Cahuzac",
    "otherPersons": [],
    "politicalParty": "PS",
    "position": "Ministre du Budget",
    "country": "France",
    "scandalType": "financial",
    "severity": 5,
    "amountInvolved": 600000,
    "currency": "EUR",
    "consequences": ["Démission", "Condamnation à 3 ans de prison", "Inéligibilité"],
    "resolved": true,
    "sources": [
      {
        "title": "Jérôme Cahuzac condamné à trois ans de prison ferme",
        "url": "https://www.liberation.fr/france/2016/12/08/jerome-cahuzac-condamne-a-trois-ans-de-prison-ferme_1534130/",
        "publisher": "Libération"
      },
      {
        "title": "Affaire Cahuzac: trois ans de prison ferme requises contre l'ancien ministre",
        "url": "https://www.20minutes.fr/justice/1983945-20161208-affaire-cahuzac-trois-ans-prison-ferme-requises-contre-ancien-ministre",
        "publisher": "20 Minutes"
      }
    ],
    "tags": ["fraude fiscale", "compte offshore"],
    "color": "red"
  },
  {
    "date": "2013-11-20",
    "duration": "2 ans",
    "title": "Affaire Bygmalion",
    "description": "Fraude et surfacturation des meetings de campagne de Nicolas Sarkozy en 2012.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Jean-François Copé", "13 autres mis en cause"],
    "politicalParty": "UMP",
    "position": "Ancien Président",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 22800000,
    "currency": "EUR",
    "consequences": ["Condamnation à 1 an de prison", "Procès en appel"],
    "resolved": false,
    "sources": [
      {
        "title": "Affaire Bygmalion: Nicolas Sarkozy condamné à un an de prison",
        "url": "https://www.bfmtv.com/politique/affaire-bygmalion-nicolas-sarkozy-condamne-a-un-an-de-prison_AN-202109300521.html",
        "publisher": "BFMTV"
      },
      {
        "title": "Bygmalion: Sarkozy condamné à un an de prison, Copé relaxé",
        "url": "https://www.lefigaro.fr/actualite-france/bygmalion-sarkozy-condamne-a-un-an-de-prison-cope-relaxe-20210930",
        "publisher": "Le Figaro"
      }
    ],
    "tags": ["fraude", "campagne", "UMP"],
    "color": "orange"
  },
  {
    "date": "2014-03-18",
    "duration": "4 ans",
    "title": "Affaire des assistants d'eurodéputés FN",
    "description": "Emplois présumés fictifs d'assistants parlementaires au Parlement européen.",
    "mainPerson": "Marine Le Pen",
    "otherPersons": ["Jean-Marie Le Pen", "Plusieurs cadres FN"],
    "politicalParty": "Front National",
    "position": "Présidente du FN",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 6170000,
    "currency": "EUR",
    "consequences": ["Remboursement exigé", "Procédure judiciaire"],
    "resolved": false,
    "sources": [
      {
        "title": "Affaire des assistants d'eurodéputés FN: Marine Le Pen mise en examen",
        "url": "https://www.francetvinfo.fr/politique/front-national/affaire-des-assistants-d-eurodeputes-fn-marine-le-pen-mise-en-examen_2700085.html",
        "publisher": "Franceinfo"
      },
      {
        "title": "Affaire des assistants parlementaires: Marine Le Pen mise en examen",
        "url": "https://www.lemonde.fr/politique/article/2018/06/26/affaire-des-assistants-parlementaires-marine-le-pen-mise-en-examen_5322808_823448.html",
        "publisher": "Le Monde"
      }
    ],
    "tags": ["emplois fictifs", "Parlement européen"],
    "color": "red"
  },



  {
    "date": "2015-09-28",
    "duration": "4 ans",
    "title": "Affaire Bygmalion",
    "description": "Fraude présumée lors de la campagne présidentielle de 2012 de Nicolas Sarkozy via des facturations occultes par Bygmalion.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Jean-François Copé", "Jérôme Lavrilleux"],
    "politicalParty": "Les Républicains",
    "position": "Ancien Président",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 18.5e6,
    "currency": "EUR",
    "consequences": ["Condamnations multiples", "Procès en 2021"],
    "resolved": false,
    "sources": [
      {
        "title": "Affaire Bygmalion: ce qu'il faut retenir du procès",
        "url": "https://www.lefigaro.fr/actualite-france/affaire-bygmalion-ce-qu-il-faut-retenir-du-proces-20210618",
        "publisher": "Le Figaro"
      },
      {
        "title": "Bygmalion: la justice ordonne un nouveau procès",
        "url": "https://www.liberation.fr/faits-divers/justice/bygmalion-la-justice-ordonne-un-nouveau-proces-20220315",
        "publisher": "Libération"
      }
    ],
    "tags": ["fraude", "campagne électorale"],
    "color": "red"
  },
  {
    "date": "2016-02-10",
    "duration": "2 ans",
    "title": "Affaire des écoutes Sarkozy",
    "description": "Mise en examen pour corruption passive et violation du secret de l'instruction dans l'affaire des écoutes téléphoniques illégales.",
    "mainPerson": "Nicolas Sarkozy",
    "otherPersons": ["Gilbert Azibert", "Thierry Herzog"],
    "politicalParty": "Les Républicains",
    "position": "Ancien Président",
    "country": "France",
    "scandalType": "corruption",
    "severity": 5,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Condamnation à 3 ans de prison (dont 2 avec sursis)", "Inéligibilité"],
    "resolved": true,
    "sources": [
      {
        "title": "Nicolas Sarkozy condamné dans l'affaire des écoutes",
        "url": "https://www.lemonde.fr/politique/article/2021/03/01/nicolas-sarkozy-condamne-a-trois-ans-de-prison-dont-un-ferme-dans-l-affaire-des-ecoutes_6071634_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire des écoutes: Sarkozy condamné en appel",
        "url": "https://www.bfmtv.com/politique/justice/affaire-des-ecoutes-sarkozy-condamne-en-appel_AN-202205170588.html",
        "publisher": "BFMTV"
      }
    ],
    "tags": ["corruption", "justice"],
    "color": "purple"
  },
  {
    "date": "2016-11-27",
    "duration": "3 ans",
    "title": "Affaire Ferrand",
    "description": "Conflit d'intérêts concernant des locations immobilières entre Richard Ferrand et la mutuelle qu'il dirigeait.",
    "mainPerson": "Richard Ferrand",
    "otherPersons": ["Sandrine Doucen"],
    "politicalParty": "La République En Marche",
    "position": "Ministre de la Cohésion des Territoires",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Démission du gouvernement", "Classé sans suite"],
    "resolved": true,
    "sources": [
      {
        "title": "Affaire Ferrand: ce qu'il faut savoir",
        "url": "https://www.lexpress.fr/actualite/politique/affaire-ferrand-ce-qu-il-faut-savoir_1946015.html",
        "publisher": "L'Express"
      },
      {
        "title": "L'affaire Ferrand classée sans suite",
        "url": "https://www.leparisien.fr/faits-divers/affaire-ferrand-le-parquet-de-paris-requiert-un-non-lieu-07-12-2017-7436775.php",
        "publisher": "Le Parisien"
      }
    ],
    "tags": ["conflit d'intérêts"],
    "color": "orange"
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
        "title": "Affaire Fillon: la condamnation confirmée en appel",
        "url": "https://www.liberation.fr/faits-divers/justice/affaire-fillon-la-condamnation-confirmee-en-appel-20210509",
        "publisher": "Libération"
      }
    ],
    "tags": ["emploi fictif", "détournement", "famille", "élection présidentielle"],
    "color": "red"
  },
  {
    "date": "2017-05-17",
    "duration": "1 an",
    "title": "Affaire Benalla",
    "description": "Violences commises par Alexandre Benalla, chargé de mission à l'Élysée, lors de manifestations du 1er mai 2018.",
    "mainPerson": "Alexandre Benalla",
    "otherPersons": ["Emmanuel Macron", "Gérard Collomb"],
    "politicalParty": "La République En Marche",
    "position": "Collaborateur présidentiel",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Licenciement", "Mise en examen", "Crise politique"],
    "resolved": true,
    "sources": [
      {
        "title": "Affaire Benalla: les révélations du Monde",
        "url": "https://www.lemonde.fr/politique/article/2018/07/18/affaire-benalla-les-revelations-du-monde_5332463_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Alexandre Benalla condamné à trois ans de prison",
        "url": "https://www.lefigaro.fr/actualite-france/affaire-benalla-alexandre-benalla-condamne-a-trois-ans-de-prison-20211115",
        "publisher": "Le Figaro"
      }
    ],
    "tags": ["violences", "Élysée"],
    "color": "purple"
  },
  {
    "date": "2017-06-13",
    "duration": "2 ans",
    "title": "Affaire Kohler",
    "description": "Conflit d'intérêts présumé autour du secrétaire général de l'Élysée Alexis Kohler et ses liens avec la compagnie maritime MSC.",
    "mainPerson": "Alexis Kohler",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Secrétaire général de l'Élysée",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Enquête ouverte", "Maintien dans ses fonctions"],
    "resolved": false,
    "sources": [
      {
        "title": "Affaire Kohler: les conflits d'intérêts présumés",
        "url": "https://www.mediapart.fr/journal/france/100619/affaire-kohler-les-conflits-d-interets-presumes",
        "publisher": "Mediapart"
      },
      {
        "title": "Alexis Kohler, l'homme des dossiers sensibles",
        "url": "https://www.lepoint.fr/politique/alexis-kohler-l-homme-des-dossiers-sensibles-20-06-2019-2321615_20.php",
        "publisher": "Le Point"
      }
    ],
    "tags": ["conflit d'intérêts", "Élysée"],
    "color": "orange"
  },
  {
    "date": "2017-09-20",
    "duration": "1 an",
    "title": "Affaire Hulot",
    "description": "Accusations de harcèlement sexuel contre Nicolas Hulot, ministre de la Transition écologique.",
    "mainPerson": "Nicolas Hulot",
    "otherPersons": [],
    "politicalParty": "EELV",
    "position": "Ministre de la Transition écologique",
    "country": "France",
    "scandalType": "sexual",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Démission", "Classé sans suite"],
    "resolved": true,
    "sources": [
      {
        "title": "Nicolas Hulot visé par une plainte pour viol",
        "url": "https://www.lemonde.fr/politique/article/2018/02/16/nicolas-hulot-vise-par-une-plainte-pour-viol_5258005_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire Hulot: non-lieu prononcé",
        "url": "https://www.liberation.fr/faits-divers/justice/affaire-hulot-non-lieu-prononce-20210209",
        "publisher": "Libération"
      }
    ],
    "tags": ["harcèlement sexuel"],
    "color": "purple"
  },
  {
    "date": "2018-01-01",
    "duration": "2 ans",
    "title": "Affaire des assistants parlementaires RN",
    "description": "Soupçons d'emplois fictifs de collaborateurs du Rassemblement National au Parlement européen.",
    "mainPerson": "Marine Le Pen",
    "otherPersons": ["Jean-Marie Le Pen", "Louis Aliot"],
    "politicalParty": "Rassemblement National",
    "position": "Députée européenne",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 6.9e6,
    "currency": "EUR",
    "consequences": ["Remboursement exigé par l'UE", "Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Affaire des assistants parlementaires du FN: Marine Le Pen mise en examen",
        "url": "https://www.lemonde.fr/politique/article/2018/03/02/affaire-des-assistants-parlementaires-du-fn-marine-le-pen-mise-en-examen_5265470_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire des assistants parlementaires: l'UE réclame 7 millions au RN",
        "url": "https://www.lefigaro.fr/politique/affaire-des-assistants-parlementaires-l-ue-reclame-7-millions-au-rn-20210610",
        "publisher": "Le Figaro"
      }
    ],
    "tags": ["emploi fictif", "Parlement européen"],
    "color": "red"
  },
  {
    "date": "2018-02-07",
    "duration": "1 an",
    "title": "Affaire Griveaux",
    "description": "Retrait de la course à la mairie de Paris après la diffusion de vidéos intimes.",
    "mainPerson": "Benjamin Griveaux",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Porte-parole du gouvernement",
    "country": "France",
    "scandalType": "sexual",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Retrait de la vie politique"],
    "resolved": true,
    "sources": [
      {
        "title": "Benjamin Griveaux retire sa candidature à Paris",
        "url": "https://www.lemonde.fr/politique/article/2020/02/07/benjamin-griveaux-retire-sa-candidature-a-paris_6028721_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire Griveaux: le suspect mis en examen",
        "url": "https://www.lefigaro.fr/actualite-france/affaire-griveaux-le-suspect-mis-en-examen-20200214",
        "publisher": "Le Figaro"
      }
    ],
    "tags": ["vie privée"],
    "color": "gray"
  },
  {
    "date": "2018-03-12",
    "duration": "1 an",
    "title": "Affaire Dassault",
    "description": "Soupçons d'achats de votes lors des municipales de 2017 à Corbeil-Essonnes impliquant la famille Dassault.",
    "mainPerson": "Serge Dassault",
    "otherPersons": ["Olivier Dassault"],
    "politicalParty": "Les Républicains",
    "position": "Sénateur",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Décès de Serge Dassault avant jugement"],
    "resolved": false,
    "sources": [
      {
        "title": "Affaire Dassault: les dessous d'un scandale politique",
        "url": "https://www.lexpress.fr/actualite/societe/justice/affaire-dassault-les-dessous-d-un-scandale-politique_1992234.html",
        "publisher": "L'Express"
      },
      {
        "title": "Corbeil-Essonnes: l'héritage empoisonné des Dassault",
        "url": "https://www.leparisien.fr/essonne-91/corbeil-essonnes-l-heritage-empoisonne-des-dassault-20-01-2021-8419344.php",
        "publisher": "Le Parisien"
      }
    ],
    "tags": ["achat de votes"],
    "color": "orange"
  },
  {
    "date": "2018-05-22",
    "duration": "2 ans",
    "title": "Affaire Balkany",
    "description": "Condamnation pour fraude fiscale et blanchiment d'argent du couple de maires LR de Levallois-Perret.",
    "mainPerson": "Patrick Balkany",
    "otherPersons": ["Isabelle Balkany"],
    "politicalParty": "Les Républicains",
    "position": "Maire de Levallois-Perret",
    "country": "France",
    "scandalType": "financial",
    "severity": 5,
    "amountInvolved": 4e6,
    "currency": "EUR",
    "consequences": ["Condamnation à 5 ans de prison", "Amende de 100 000€"],
    "resolved": true,
    "sources": [
      {
        "title": "Patrick Balkany condamné à 5 ans de prison",
        "url": "https://www.lemonde.fr/societe/article/2019/09/12/patrick-balkany-condamne-a-cinq-ans-de-prison_5509971_3224.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire Balkany: les épisodes clés du feuilleton judiciaire",
        "url": "https://www.bfmtv.com/politique/justice/affaire-balkany-les-episodes-cles-du-feuilleton-judiciaire_AN-202109130185.html",
        "publisher": "BFMTV"
      }
    ],
    "tags": ["fraude fiscale", "blanchiment"],
    "color": "red"
  },
  {
    "date": "2018-07-01",
    "duration": "1 an",
    "title": "Affaire Collomb",
    "description": "Démission controversée du ministre de l'Intérieur Gérard Collomb après des propos jugés déplacés.",
    "mainPerson": "Gérard Collomb",
    "otherPersons": ["Emmanuel Macron"],
    "politicalParty": "La République En Marche",
    "position": "Ministre de l'Intérieur",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 2,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Démission"],
    "resolved": true,
    "sources": [
      {
        "title": "Gérard Collomb annonce sa démission",
        "url": "https://www.lefigaro.fr/politique/gerard-collomb-annonce-sa-demission-du-ministere-de-l-interieur-20181003",
        "publisher": "Le Figaro"
      },
      {
        "title": "Les raisons de la chute de Gérard Collomb",
        "url": "https://www.lexpress.fr/actualite/politique/les-raisons-de-la-chute-de-gerard-collomb_2039121.html",
        "publisher": "L'Express"
      }
    ],
    "tags": ["démission"],
    "color": "gray"
  },
  {
    "date": "2018-09-25",
    "duration": "1 an",
    "title": "Affaire Quatennens",
    "description": "Accusations de harcèlement moral contre Adrien Quatennens, député LFI.",
    "mainPerson": "Adrien Quatennens",
    "otherPersons": [],
    "politicalParty": "La France Insoumise",
    "position": "Député",
    "country": "France",
    "scandalType": "sexual",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Mise à l'écart temporaire"],
    "resolved": true,
    "sources": [
      {
        "title": "Adrien Quatennens accusé de harcèlement moral",
        "url": "https://www.liberation.fr/politique/adrien-quatennens-accuse-de-harcelement-moral-20220925",
        "publisher": "Libération"
      },
      {
        "title": "LFI suspend Adrien Quatennens",
        "url": "https://www.lemonde.fr/politique/article/2022/09/25/lfi-suspend-adrien-quatennens-apres-des-accusations-de-violences-conjugales_6142823_823448.html",
        "publisher": "Le Monde"
      }
    ],
    "tags": ["harcèlement"],
    "color": "purple"
  },
  {
    "date": "2019-01-15",
    "duration": "1 an",
    "title": "Affaire Rugy",
    "description": "Dépenses somptuaires et abus de fonctions du ministre François de Rugy.",
    "mainPerson": "François de Rugy",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Ministre de la Transition écologique",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 3,
    "amountInvolved": 63000,
    "currency": "EUR",
    "consequences": ["Démission"],
    "resolved": true,
    "sources": [
      {
        "title": "François de Rugy contraint à la démission",
        "url": "https://www.lemonde.fr/politique/article/2019/07/16/francois-de-rugy-contraint-a-la-demission_5488729_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire Rugy: la fin d'un ministre",
        "url": "https://www.lexpress.fr/actualite/politique/affaire-rugy-la-fin-d-un-ministre_2087164.html",
        "publisher": "L'Express"
      }
    ],
    "tags": ["dépenses somptuaires"],
    "color": "orange"
  },
  {
    "date": "2019-03-20",
    "duration": "1 an",
    "title": "Affaire Schiappa",
    "description": "Polémique autour des dépenses de communication de Marlène Schiappa, secrétaire d'État à l'Égalité.",
    "mainPerson": "Marlène Schiappa",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Secrétaire d'État",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 30000,
    "currency": "EUR",
    "consequences": ["Polémique médiatique"],
    "resolved": true,
    "sources": [
      {
        "title": "Marlène Schiappa et les 30 000 euros de communication",
        "url": "https://www.liberation.fr/checknews/2019/03/20/marlene-schiappa-et-les-30-000-euros-de-communication_1715971/",
        "publisher": "Libération"
      },
      {
        "title": "Schiappa défend ses dépenses de communication",
        "url": "https://www.lefigaro.fr/politique/schiappa-defend-ses-depenses-de-communication-20190320",
        "publisher": "Le Figaro"
      }
    ],
    "tags": ["dépenses publiques"],
    "color": "yellow"
  },
  {
    "date": "2019-06-10",
    "duration": "1 an",
    "title": "Affaire Darmanin",
    "description": "Accusations de viol contre le ministre Gérald Darmanin.",
    "mainPerson": "Gérald Darmanin",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Ministre des Comptes publics",
    "country": "France",
    "scandalType": "sexual",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Maintien au gouvernement", "Classé sans suite"],
    "resolved": true,
    "sources": [
      {
        "title": "Gérald Darmanin accusé de viol",
        "url": "https://www.mediapart.fr/journal/france/160620/gerald-darmanin-accuse-de-viol",
        "publisher": "Mediapart"
      },
      {
        "title": "Affaire Darmanin: non-lieu prononcé",
        "url": "https://www.lemonde.fr/politique/article/2021/07/16/affaire-darmanin-un-non-lieu-est-prononce_6088079_823448.html",
        "publisher": "Le Monde"
      }
    ],
    "tags": ["viol"],
    "color": "purple"
  },
  {
    "date": "2019-09-12",
    "duration": "1 an",
    "title": "Affaire Bayou",
    "description": "Démission du coordinateur de EELV Julien Bayou après des accusations de harcèlement moral.",
    "mainPerson": "Julien Bayou",
    "otherPersons": [],
    "politicalParty": "EELV",
    "position": "Coordinateur national",
    "country": "France",
    "scandalType": "sexual",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Démission"],
    "resolved": true,
    "sources": [
      {
        "title": "Julien Bayou démissionne après des accusations de harcèlement",
        "url": "https://www.lemonde.fr/politique/article/2022/09/16/julien-bayou-demissionne-apres-des-accusations-de-harcelement_6141793_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire Bayou: la déroute d'EELV",
        "url": "https://www.lexpress.fr/politique/affaire-bayou-la-deroute-d-eelv_2176164.html",
        "publisher": "L'Express"
      }
    ],
    "tags": ["harcèlement moral"],
    "color": "gray"
  },
  {
    "date": "2019-11-05",
    "duration": "1 an",
    "title": "Affaire Sibeth Ndiaye",
    "description": "Polémique autour des déclarations de la porte-parole du gouvernement Sibeth Ndiaye sur les violences policières.",
    "mainPerson": "Sibeth Ndiaye",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Porte-parole du gouvernement",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 2,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Licenciement"],
    "resolved": true,
    "sources": [
      {
        "title": "Sibeth Ndiaye licenciée après ses propos",
        "url": "https://www.lefigaro.fr/politique/sibeth-ndiaye-licenciee-apres-ses-propos-sur-les-violences-policieres-20200703",
        "publisher": "Le Figaro"
      },
      {
        "title": "Les dérapages de Sibeth Ndiaye",
        "url": "https://www.liberation.fr/politique/les-derapages-de-sibeth-ndiaye-20200703",
        "publisher": "Libération"
      }
    ],
    "tags": ["violences policières"],
    "color": "yellow"
  },
  {
    "date": "2020-01-10",
    "duration": "1 an",
    "title": "Affaire Castaner",
    "description": "Polémique sur les dépenses de communication du ministre de l'Intérieur Christophe Castaner.",
    "mainPerson": "Christophe Castaner",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Ministre de l'Intérieur",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 50000,
    "currency": "EUR",
    "consequences": ["Polémique médiatique"],
    "resolved": true,
    "sources": [
      {
        "title": "Castaner et les 50 000 euros de communication",
        "url": "https://www.leparisien.fr/politique/christophe-castaner-et-les-50-000-euros-de-communication-20-01-2020-8239325.php",
        "publisher": "Le Parisien"
      },
      {
        "title": "Castaner justifie ses dépenses",
        "url": "https://www.bfmtv.com/politique/gouvernement/christophe-castaner-justifie-ses-depenses-de-communication_AN-202001200247.html",
        "publisher": "BFMTV"
      }
    ],
    "tags": ["dépenses publiques"],
    "color": "yellow"
  },
  {
    "date": "2020-02-18",
    "duration": "1 an",
    "title": "Affaire Villani",
    "description": "Accusations de harcèlement sexuel contre le député LREM Cédric Villani.",
    "mainPerson": "Cédric Villani",
    "otherPersons": [],
    "politicalParty": "La République En Marche",
    "position": "Député",
    "country": "France",
    "scandalType": "sexual",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Exclusion du parti"],
    "resolved": true,
    "sources": [
      {
        "title": "Cédric Villani accusé de harcèlement sexuel",
        "url": "https://www.mediapart.fr/journal/france/180220/cedric-villani-accuse-de-harcelement-sexuel",
        "publisher": "Mediapart"
      },
      {
        "title": "LREM exclut Cédric Villani",
        "url": "https://www.lemonde.fr/politique/article/2020/02/18/lrem-exclut-cedric-villani_6029910_823448.html",
        "publisher": "Le Monde"
      }
    ],
    "tags": ["harcèlement sexuel"],
    "color": "purple"
  },
  {
    "date": "2020-03-05",
    "duration": "1 an",
    "title": "Affaire Guérini",
    "description": "Mise en examen pour trafic d'influence du sénateur LR Jean-Noël Guérini.",
    "mainPerson": "Jean-Noël Guérini",
    "otherPersons": [],
    "politicalParty": "Les Républicains",
    "position": "Sénateur",
    "country": "France",
    "scandalType": "corruption",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Mise en examen"],
    "resolved": false,
    "sources": [
      {
        "title": "Jean-Noël Guérini mis en examen",
        "url": "https://www.lemonde.fr/politique/article/2020/03/05/jean-noel-guerini-mis-en-examen-pour-trafic-d-influence_6031811_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire Guérini: les dessous du scandale",
        "url": "https://www.lexpress.fr/actualite/societe/justice/affaire-guerini-les-dessous-du-scandale_2119764.html",
        "publisher": "L'Express"
      }
    ],
    "tags": ["trafic d'influence"],
    "color": "red"
  },
  {
    "date": "2020-05-20",
    "duration": "1 an",
    "title": "Affaire Wauquiez",
    "description": "Polémique sur les dépenses de communication du président de région LR Laurent Wauquiez.",
    "mainPerson": "Laurent Wauquiez",
    "otherPersons": [],
    "politicalParty": "Les Républicains",
    "position": "Président de région",
    "country": "France",
    "scandalType": "financial",
    "severity": 2,
    "amountInvolved": 200000,
    "currency": "EUR",
    "consequences": ["Polémique médiatique"],
    "resolved": true,
    "sources": [
      {
        "title": "Wauquiez et les 200 000 euros de communication",
        "url": "https://www.leparisien.fr/politique/laurent-wauquiez-et-les-200-000-euros-de-communication-20-05-2020-8321379.php",
        "publisher": "Le Parisien"
      },
      {
        "title": "Wauquiez défend ses dépenses",
        "url": "https://www.bfmtv.com/politique/laurent-wauquiez-defend-ses-depenses-de-communication_AN-202005200257.html",
        "publisher": "BFMTV"
      }
    ],
    "tags": ["dépenses publiques"],
    "color": "yellow"
  },
  {
    "date": "2020-06-10",
    "duration": "1 an",
    "title": "Affaire Estrosi",
    "description": "Accusations de favoritisme dans l'attribution de marchés publics à Christian Estrosi, maire de Nice.",
    "mainPerson": "Christian Estrosi",
    "otherPersons": [],
    "politicalParty": "Les Républicains",
    "position": "Maire de Nice",
    "country": "France",
    "scandalType": "corruption",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Enquête ouverte"],
    "resolved": false,
    "sources": [
      {
        "title": "Christian Estrosi visé par une enquête pour favoritisme",
        "url": "https://www.lemonde.fr/politique/article/2020/06/10/christian-estrosi-vise-par-une-enquete-pour-favoritisme_6042341_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Affaire Estrosi: les soupçons de favoritisme",
        "url": "https://www.liberation.fr/politique/affaire-estrosi-les-soupcons-de-favoritisme-20200610",
        "publisher": "Libération"
      }
    ],
    "tags": ["favoritisme"],
    "color": "orange"
  },
  {
    "date": "2020-07-22",
    "duration": "1 an",
    "title": "Affaire Buzyn",
    "description": "Gestion controversée de la crise Covid-19 par la ministre de la Santé Agnès Buzyn.",
    "mainPerson": "Agnès Buzyn",
    "otherPersons": ["Emmanuel Macron"],
    "politicalParty": "La République En Marche",
    "position": "Ministre de la Santé",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Démission", "Polémique nationale"],
    "resolved": true,
    "sources": [
      {
        "title": "Agnès Buzyn quitte le gouvernement",
        "url": "https://www.lefigaro.fr/politique/agnes-buzyn-quitte-le-gouvernement-20200216",
        "publisher": "Le Figaro"
      },
      {
        "title": "Buzyn et la gestion du Covid: les erreurs",
        "url": "https://www.lexpress.fr/actualite/societe/sante/covid-19-les-erreurs-d-agnes-buzyn_2123456.html",
        "publisher": "L'Express"
      }
    ],
    "tags": ["Covid-19", "gestion de crise"],
    "color": "blue"
  },
  {
    "date": "2021-01-18",
    "duration": "1 an",
    "title": "Affaire Quatennens",
    "description": "Accusations de violences conjugales.",
    "mainPerson": "Adrien Quatennens",
    "otherPersons": [],
    "politicalParty": "La France Insoumise",
    "position": "Député",
    "country": "France",
    "scandalType": "violence",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Retrait temporaire de ses fonctions"],
    "resolved": true,
    "sources": [
      {
        "title": "Adrien Quatennens reconnaît une 'gifle' et se retire de la coordination de LFI",
        "url": "https://www.lemonde.fr/politique/article/2022/09/20/adrien-quatennens-reconnait-une-gifle-et-se-retire-de-la-coordination-de-lfi_6141960_823448.html",
        "publisher": "Le Monde"
      }
    ],
    "tags": ["violences conjugales"],
    "color": "red"
  },
  {
    "date": "2021-03-30",
    "duration": "1 an",
    "title": "Affaire McKinsey",
    "description": "Surfacturation et optimisation fiscale agressive du cabinet de conseil travaillant pour l'État.",
    "mainPerson": "Emmanuel Macron",
    "otherPersons": ["Emmanuel Macron"],
    "politicalParty": "La République En Marche",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 1000000000,
    "currency": "EUR",
    "consequences": ["Enquête parlementaire", "Polémique"],
    "resolved": false,
    "sources": [
      {
        "title": "Affaire McKinsey: le Sénat dénonce des 'dérives' dans l'utilisation des cabinets de conseil",
        "url": "https://www.lemonde.fr/politique/article/2022/03/16/affaire-mckinsey-le-senat-denonce-des-derives-dans-l-utilisation-des-cabinets-de-conseil_6117621_823448.html",
        "publisher": "Le Monde"
      }
    ],
    "tags": ["conseil", "optimisation fiscale"],
    "color": "red"
  },

  {
    "date": "2021-07-12",
    "duration": "2 ans",
    "title": "Affaire des masques de l'ARS Occitanie",
    "description": "Surfacturation présumée de masques pendant la crise Covid, impliquant des élus locaux.",
    "mainPerson": "Carole Delga",
    "otherPersons": ["Jean-Luc Moudenc"],
    "politicalParty": "PS",
    "position": "Présidente de la région Occitanie",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 2000000,
    "currency": "EUR",
    "consequences": ["Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Masques en Occitanie : une enquête pour détournement de fonds publics",
        "url": "https://www.lefigaro.fr/actualite-france/masques-en-occitanie-une-enquete-pour-detournement-de-fonds-publics-20210712",
        "publisher": "Le Figaro"
      },
      {
        "title": "Affaire des masques en Occitanie : Carole Delga visée par une enquête",
        "url": "https://www.20minutes.fr/justice/3089075-20210712-affaire-masques-occitanie-carole-delga-visee-enquete",
        "publisher": "20 Minutes"
      }
    ],
    "tags": ["covid", "détournement", "surfacturation"],
    "color": "orange"
  },
  {
    "date": "2021-09-05",
    "duration": "1 an",
    "title": "Affaire des dîners clandestins de Jean Castex",
    "description": "Participation à des dîners non déclarés pendant le couvre-feu Covid.",
    "mainPerson": "Jean Castex",
    "otherPersons": ["Gérald Darmanin"],
    "politicalParty": "La République En Marche",
    "position": "Premier ministre",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Polémique médiatique"],
    "resolved": true,
    "sources": [
      {
        "title": "Jean Castex et Gérald Darmanin ont participé à des dîners clandestins",
        "url": "https://www.lemonde.fr/politique/article/2021/09/05/jean-castex-et-gerald-darmanin-ont-participe-a-des-diners-clandestins_6093702_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Dîners clandestins : Castex et Darmanin dans la tourmente",
        "url": "https://www.liberation.fr/politique/diners-clandestins-castex-et-darmanin-dans-la-tourmente-20210905",
        "publisher": "Libération"
      }
    ],
    "tags": ["covid", "couvre-feu"],
    "color": "yellow"
  },
  {
    "date": "2021-10-18",
    "duration": "3 ans",
    "title": "Affaire McKinsey",
    "description": "Soupçons de favoritisme dans l'attribution de contrats publics à McKinsey.",
    "mainPerson": "Emmanuel Macron",
    "otherPersons": ["Jean Castex"],
    "politicalParty": "La République En Marche",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 5,
    "amountInvolved": 1000000000,
    "currency": "EUR",
    "consequences": ["Enquête parlementaire", "Polémique sur l'optimisation fiscale"],
    "resolved": false,
    "sources": [
      {
        "title": "Affaire McKinsey : le Sénat enquête sur les contrats publics",
        "url": "https://www.lepoint.fr/politique/affaire-mckinsey-le-senat-enquete-sur-les-contrats-publics-18-10-2021-2448164_20.php",
        "publisher": "Le Point"
      },
      {
        "title": "McKinsey : l'Assemblée lance une commission d'enquête",
        "url": "https://www.lesechos.fr/politique-societe/politique/mckinsey-lassemblee-lance-une-commission-denquete-1357085",
        "publisher": "Les Échos"
      }
    ],
    "tags": ["consultants", "favoritisme"],
    "color": "red"
  },
  {
    "date": "2022-01-30",
    "duration": "2 ans",
    "title": "Affaire des logements sociaux de Julien Bayou",
    "description": "Soupçons d’abus de bien social pour des logements attribués à des proches.",
    "mainPerson": "Julien Bayou",
    "otherPersons": [""],
    "politicalParty": "EELV",
    "position": "Secrétaire national d'EELV",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 50000,
    "currency": "EUR",
    "consequences": ["Démission de ses fonctions"],
    "resolved": true,
    "sources": [
      {
        "title": "Julien Bayou visé par une enquête pour abus de biens sociaux",
        "url": "https://www.leparisien.fr/politique/julien-bayou-vise-par-une-enquete-pour-abus-de-biens-sociaux-30-01-2022-3Q5XJXHXJZFKXK4T5V5Y6Z7A7M.php",
        "publisher": "Le Parisien"
      },
      {
        "title": "Logements sociaux : Julien Bayou dans la tourmente",
        "url": "https://www.liberation.fr/politique/logements-sociaux-julien-bayou-dans-la-tourmente-20220130",
        "publisher": "Libération"
      }
    ],
    "tags": ["logement", "abus"],
    "color": "orange"
  },
  {
    "date": "2022-03-15",
    "duration": "1 an",
    "title": "Affaire des propos racistes d'Éric Ciotti",
    "description": "Propos controversés sur l'immigration tenus lors d'un meeting.",
    "mainPerson": "Éric Ciotti",
    "otherPersons": [""],
    "politicalParty": "Les Républicains",
    "position": "Député des Alpes-Maritimes",
    "country": "France",
    "scandalType": "discrimination",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Polémique médiatique"],
    "resolved": true,
    "sources": [
      {
        "title": "Éric Ciotti accusé de propos racistes",
        "url": "https://www.lemonde.fr/politique/article/2022/03/15/eric-ciotti-accuse-de-propos-racistes_6117165_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Ciotti dans la tourmente après des propos sur l'immigration",
        "url": "https://www.bfmtv.com/politique/eric-ciotti-dans-la-tourmente-apres-des-propos-sur-l-immigration_AV-202203150257.html",
        "publisher": "BFMTV"
      }
    ],
    "tags": ["racisme", "immigration"],
    "color": "yellow"
  },
  {
    "date": "2022-05-22",
    "duration": "2 ans",
    "title": "Affaire des frais de bouche de Damien Abad",
    "description": "Utilisation abusive des indemnités parlementaires pour des dépenses personnelles.",
    "mainPerson": "Damien Abad",
    "otherPersons": [""],
    "politicalParty": "Les Républicains",
    "position": "Député",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 80000,
    "currency": "EUR",
    "consequences": ["Remboursement partiel", "Polémique"],
    "resolved": true,
    "sources": [
      {
        "title": "Damien Abad accusé d'abus de frais de mandat",
        "url": "https://www.mediapart.fr/journal/france/220522/damien-abad-accuse-d-abus-de-frais-de-mandat",
        "publisher": "Mediapart"
      },
      {
        "title": "Frais de bouche : Damien Abad dans la tourmente",
        "url": "https://www.lefigaro.fr/politique/frais-de-bouche-damien-abad-dans-la-tourmente-20220522",
        "publisher": "Le Figaro"
      }
    ],
    "tags": ["indemnités", "dépenses"],
    "color": "orange"
  },
  {
    "date": "2022-06-10",
    "duration": "1 an",
    "title": "Affaire du passeport diplomatique de Marine Le Pen",
    "description": "Utilisation contestée de son passeport diplomatique après sa défaite à la présidentielle.",
    "mainPerson": "Marine Le Pen",
    "otherPersons": [""],
    "politicalParty": "RN",
    "position": "Députée",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Polémique"],
    "resolved": true,
    "sources": [
      {
        "title": "Marine Le Pen accusée d'abus de passeport diplomatique",
        "url": "https://www.lemonde.fr/politique/article/2022/06/10/marine-le-pen-accusee-d-abus-de-passeport-diplomatique_6129440_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Passeport diplomatique : Marine Le Pen dans le viseur",
        "url": "https://www.liberation.fr/politique/passeport-diplomatique-marine-le-pen-dans-le-viseur-20220610",
        "publisher": "Libération"
      }
    ],
    "tags": ["passeport", "abus"],
    "color": "yellow"
  },
  {
    "date": "2022-07-18",
    "duration": "1 an",
    "title": "Affaire des emplois fictifs du RN",
    "description": "Nouvelle enquête sur des assistants parlementaires présumés fictifs.",
    "mainPerson": "Marine Le Pen",
    "otherPersons": ["Louis Aliot"],
    "politicalParty": "RN",
    "position": "Députée",
    "country": "France",
    "scandalType": "fake-jobs",
    "severity": 4,
    "amountInvolved": 500000,
    "currency": "EUR",
    "consequences": ["Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Nouvelle enquête sur les emplois fictifs du RN",
        "url": "https://www.lefigaro.fr/politique/nouvelle-enquete-sur-les-emplois-fictifs-du-rn-20220718",
        "publisher": "Le Figaro"
      },
      {
        "title": "Emplois fictifs : le RN de nouveau dans le viseur",
        "url": "https://www.mediapart.fr/journal/france/180722/emplois-fictifs-le-rn-de-nouveau-dans-le-viseur",
        "publisher": "Mediapart"
      }
    ],
    "tags": ["assistants", "détournement"],
    "color": "red"
  },
  {
    "date": "2022-09-05",
    "duration": "1 an",
    "title": "Affaire des notes de frais de Stanislas Guerini",
    "description": "Notes de frais abusives lors de déplacements en tant que délégué général de LREM.",
    "mainPerson": "Stanislas Guerini",
    "otherPersons": [""],
    "politicalParty": "La République En Marche",
    "position": "Ministre",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 25000,
    "currency": "EUR",
    "consequences": ["Remboursement"],
    "resolved": true,
    "sources": [
      {
        "title": "Stanislas Guerini accusé d'abus de notes de frais",
        "url": "https://www.lemonde.fr/politique/article/2022/09/05/stanislas-guerini-accuse-d-abus-de-notes-de-frais_6140993_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Notes de frais : Stanislas Guerini dans la tourmente",
        "url": "https://www.liberation.fr/politique/notes-de-frais-stanislas-guerini-dans-la-tourmente-20220905",
        "publisher": "Libération"
      }
    ],
    "tags": ["dépenses", "abus"],
    "color": "orange"
  },
  {
    "date": "2022-10-12",
    "duration": "2 ans",
    "title": "Affaire des subventions détournées par la mairie de Grigny",
    "description": "Détournement présumé de subventions publiques par des élus locaux.",
    "mainPerson": "Philippe Rio",
    "otherPersons": [""],
    "politicalParty": "PCF",
    "position": "Maire de Grigny",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 300000,
    "currency": "EUR",
    "consequences": ["Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Grigny : enquête sur des subventions détournées",
        "url": "https://www.leparisien.fr/essonne-91/grigny-enquete-sur-des-subventions-detournees-12-10-2022-QR6XHXHXJZFKXK4T5V5Y6Z7A7M.php",
        "publisher": "Le Parisien"
      },
      {
        "title": "Subventions à Grigny : la mairie dans le viseur",
        "url": "https://www.francetvinfo.fr/faits-divers/justice/subventions-a-grigny-la-mairie-dans-le-viseur_5404765.html",
        "publisher": "Franceinfo"
      }
    ],
    "tags": ["subventions", "détournement"],
    "color": "orange"
  },
  {
    "date": "2023-01-20",
    "duration": "1 an",
    "title": "Affaire des cadeaux de Bernard Arnault à Macron",
    "description": "Soupçons de conflit d'intérêts après des dons importants à des proches du président.",
    "mainPerson": "Emmanuel Macron",
    "otherPersons": ["Bernard Arnault"],
    "politicalParty": "La République En Marche",
    "position": "Président de la République",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Polémique médiatique"],
    "resolved": true,
    "sources": [
      {
        "title": "Macron et Arnault : un lien trop proche ?",
        "url": "https://www.lemonde.fr/politique/article/2023/01/20/macron-et-arnault-un-lien-trop-proche_6158306_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Cadeaux d'Arnault à Macron : la polémique enfle",
        "url": "https://www.liberation.fr/politique/cadeaux-d-arnault-a-macron-la-polemique-enfle-20230120",
        "publisher": "Libération"
      }
    ],
    "tags": ["conflit", "dons"],
    "color": "yellow"
  },
  {
    "date": "2023-03-08",
    "duration": "1 an",
    "title": "Affaire du harcèlement sexuel à LFI",
    "description": "Accusations de harcèlement contre un cadre de La France Insoumise.",
    "mainPerson": "Adrien Quatennens",
    "otherPersons": [""],
    "politicalParty": "La France Insoumise",
    "position": "Député",
    "country": "France",
    "scandalType": "sexual",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Exclusion temporaire"],
    "resolved": true,
    "sources": [
      {
        "title": "Harcèlement sexuel : Adrien Quatennens visé",
        "url": "https://www.mediapart.fr/journal/france/080323/harcelement-sexuel-adrien-quatennens-vise",
        "publisher": "Mediapart"
      },
      {
        "title": "LFI en crise après des accusations de harcèlement",
        "url": "https://www.lefigaro.fr/politique/lfi-en-crise-apres-des-accusations-de-harcelement-20230308",
        "publisher": "Le Figaro"
      }
    ],
    "tags": ["harcèlement", "La France Insoumise"],
    "color": "purple"
  },
  {
    "date": "2023-05-15",
    "duration": "1 an",
    "title": "Affaire des voyages payés par des lobbies",
    "description": "Députés accusés d'avoir accepté des voyages financés par des groupes privés.",
    "mainPerson": "Aurore Bergé",
    "otherPersons": ["Olivier Véran"],
    "politicalParty": "La République En Marche",
    "position": "Députée",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 50000,
    "currency": "EUR",
    "consequences": ["Polémique"],
    "resolved": true,
    "sources": [
      {
        "title": "Voyages payés par des lobbies : des députés dans le viseur",
        "url": "https://www.lemonde.fr/politique/article/2023/05/15/voyages-payes-par-des-lobbies-des-deputes-dans-le-viseur_6173875_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Lobbies et voyages : Aurore Bergé mise en cause",
        "url": "https://www.liberation.fr/politique/lobbies-et-voyages-aurore-berge-mise-en-cause-20230515",
        "publisher": "Libération"
      }
    ],
    "tags": ["lobbying", "voyages"],
    "color": "yellow"
  },
  {
    "date": "2023-07-22",
    "duration": "1 an",
    "title": "Affaire des faux électeurs du RN",
    "description": "Soupçons de fraude électorale lors d'une élection locale.",
    "mainPerson": "Louis Aliot",
    "otherPersons": [""],
    "politicalParty": "RN",
    "position": "Maire de Perpignan",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Fraude électorale : Louis Aliot dans le viseur",
        "url": "https://www.lefigaro.fr/politique/fraude-electorale-louis-aliot-dans-le-viseur-20230722",
        "publisher": "Le Figaro"
      },
      {
        "title": "Faux électeurs : le RN accusé à Perpignan",
        "url": "https://www.mediapart.fr/journal/france/220723/faux-electeurs-le-rn-accuse-a-perpignan",
        "publisher": "Mediapart"
      }
    ],
    "tags": ["fraude", "élections"],
    "color": "red"
  },
  {
    "date": "2023-09-10",
    "duration": "1 an",
    "title": "Affaire des surfacturations de la mairie de Marseille",
    "description": "Marchés publics surévalués impliquant des élus locaux.",
    "mainPerson": "Benoît Payan",
    "otherPersons": [""],
    "politicalParty": "PS",
    "position": "Maire de Marseille",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 1500000,
    "currency": "EUR",
    "consequences": ["Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Marseille : enquête sur des surfacturations",
        "url": "https://www.leparisien.fr/faits-divers/marseille-enquete-sur-des-surfacturations-10-09-2023-QR6XHXHXJZFKXK4T5V5Y6Z7A7M.php",
        "publisher": "Le Parisien"
      },
      {
        "title": "Surfacturations à Marseille : Benoît Payan visé",
        "url": "https://www.20minutes.fr/justice/4000000-20230910-surfacturations-marseille-benoit-payan-vise",
        "publisher": "20 Minutes"
      }
    ],
    "tags": ["marchés publics", "surfacturation"],
    "color": "orange"
  },
  {
    "date": "2023-11-05",
    "duration": "1 an",
    "title": "Affaire des écoutes illégales de Darmanin",
    "description": "Revelations sur des écoutes abusives ordonnées par le ministre.",
    "mainPerson": "Gérald Darmanin",
    "otherPersons": [""],
    "politicalParty": "La République En Marche",
    "position": "Ministre de l'Intérieur",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 5,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Polémique", "Enquête interne"],
    "resolved": false,
    "sources": [
      {
        "title": "Darmanin accusé d'écoutes illégales",
        "url": "https://www.lemonde.fr/politique/article/2023/11/05/darmanin-accuse-d-ecoutes-illegales_6198765_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Écoutes illégales : Darmanin dans la tourmente",
        "url": "https://www.liberation.fr/politique/ecoutes-illegales-darmanin-dans-la-tourmente-20231105",
        "publisher": "Libération"
      }
    ],
    "tags": ["écoutes", "abus"],
    "color": "red"
  },
  {
    "date": "2024-01-18",
    "duration": "1 an",
    "title": "Affaire des faux diplômes de Sarah El Haïry",
    "description": "Soupçons de falsification de CV pour obtenir un poste ministériel.",
    "mainPerson": "Sarah El Haïry",
    "otherPersons": [""],
    "politicalParty": "MoDem",
    "position": "Secrétaire d'État",
    "country": "France",
    "scandalType": "fake-jobs",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Démission"],
    "resolved": true,
    "sources": [
      {
        "title": "Sarah El Haïry accusée de faux diplômes",
        "url": "https://www.lefigaro.fr/politique/sarah-el-hairy-accusee-de-faux-diplomes-20240118",
        "publisher": "Le Figaro"
      },
      {
        "title": "Faux CV : Sarah El Haïry démissionne",
        "url": "https://www.mediapart.fr/journal/france/180124/faux-cv-sarah-el-hairy-demissionne",
        "publisher": "Mediapart"
      }
    ],
    "tags": ["diplômes", "falsification"],
    "color": "yellow"
  },
  {
    "date": "2024-03-30",
    "duration": "1 an",
    "title": "Affaire des fonds détournés par le parti LR",
    "description": "Détournement présumé de fonds destinés aux campagnes électorales.",
    "mainPerson": "Éric Ciotti",
    "otherPersons": ["Christian Jacob"],
    "politicalParty": "Les Républicains",
    "position": "Président de LR",
    "country": "France",
    "scandalType": "financial",
    "severity": 4,
    "amountInvolved": 800000,
    "currency": "EUR",
    "consequences": ["Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Fonds détournés : LR dans la tourmente",
        "url": "https://www.lemonde.fr/politique/article/2024/03/30/fonds-detournes-lr-dans-la-tourmente_6221234_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Détournement de fonds : Éric Ciotti visé",
        "url": "https://www.liberation.fr/politique/detournement-de-fonds-eric-ciotti-vise-20240330",
        "publisher": "Libération"
      }
    ],
    "tags": ["détournement", "campagne"],
    "color": "red"
  },
  {
    "date": "2024-05-12",
    "duration": "1 an",
    "title": "Affaire des conflits d'intérêts d'Agnès Pannier-Runacher",
    "description": "Liens présumés avec des entreprises du secteur énergétique.",
    "mainPerson": "Agnès Pannier-Runacher",
    "otherPersons": [""],
    "politicalParty": "La République En Marche",
    "position": "Ministre",
    "country": "France",
    "scandalType": "conflict_of_interest",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Polémique"],
    "resolved": true,
    "sources": [
      {
        "title": "Conflits d'intérêts : Agnès Pannier-Runacher visée",
        "url": "https://www.lefigaro.fr/politique/conflits-d-interets-agnes-pannier-runacher-visee-20240512",
        "publisher": "Le Figaro"
      },
      {
        "title": "Pannier-Runacher et les énergéticiens : la polémique enfle",
        "url": "https://www.mediapart.fr/journal/france/120524/pannier-runacher-et-les-energeticiens-la-polemique-enfle",
        "publisher": "Mediapart"
      }
    ],
    "tags": ["énergie", "conflit"],
    "color": "yellow"
  },
  {
    "date": "2024-07-08",
    "duration": "1 an",
    "title": "Affaire des dons occultes à Renaissance",
    "description": "Financements illégaux présumés pour la campagne européenne.",
    "mainPerson": "Stéphane Séjourné",
    "otherPersons": [""],
    "politicalParty": "La République En Marche",
    "position": "Secrétaire général de Renaissance",
    "country": "France",
    "scandalType": "electoral",
    "severity": 4,
    "amountInvolved": 500000,
    "currency": "EUR",
    "consequences": ["Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Dons occultes : Renaissance dans la tourmente",
        "url": "https://www.lemonde.fr/politique/article/2024/07/08/dons-occultes-renaissance-dans-la-tourmente_6245678_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Financement illégal : Stéphane Séjourné visé",
        "url": "https://www.liberation.fr/politique/financement-illegal-stephane-sejourne-vise-20240708",
        "publisher": "Libération"
      }
    ],
    "tags": ["dons", "campagne"],
    "color": "red"
  },
  {
    "date": "2024-09-20",
    "duration": "1 an",
    "title": "Affaire des passe-droits de Rachida Dati",
    "description": "Favoritisme dans l'attribution de logements sociaux.",
    "mainPerson": "Rachida Dati",
    "otherPersons": [""],
    "politicalParty": "Les Républicains",
    "position": "Maire du 7e arrondissement de Paris",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Polémique"],
    "resolved": true,
    "sources": [
      {
        "title": "Rachida Dati accusée de passe-droits",
        "url": "https://www.lefigaro.fr/politique/rachida-dati-accusee-de-passe-droits-20240920",
        "publisher": "Le Figaro"
      },
      {
        "title": "Logements sociaux : Rachida Dati dans le viseur",
        "url": "https://www.mediapart.fr/journal/france/200924/logements-sociaux-rachida-dati-dans-le-viseur",
        "publisher": "Mediapart"
      }
    ],
    "tags": ["logement", "favoritisme"],
    "color": "orange"
  },
  {
    "date": "2024-11-05",
    "duration": "1 an",
    "title": "Affaire des frais de communication de Gabriel Attal",
    "description": "Dépenses excessives en communication publique.",
    "mainPerson": "Gabriel Attal",
    "otherPersons": [""],
    "politicalParty": "La République En Marche",
    "position": "Ministre",
    "country": "France",
    "scandalType": "financial",
    "severity": 3,
    "amountInvolved": 120000,
    "currency": "EUR",
    "consequences": ["Polémique"],
    "resolved": true,
    "sources": [
      {
        "title": "Gabriel Attal accusé de dépenses excessives",
        "url": "https://www.lemonde.fr/politique/article/2024/11/05/gabriel-attal-accuse-de-depenses-excessives_6267890_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Frais de communication : Gabriel Attal visé",
        "url": "https://www.liberation.fr/politique/frais-de-communication-gabriel-attal-vise-20241105",
        "publisher": "Libération"
      }
    ],
    "tags": ["communication", "dépenses"],
    "color": "yellow"
  },
  {
    "date": "2025-01-15",
    "duration": "1 an",
    "title": "Affaire des faux témoignages dans l'affaire Benalla",
    "description": "Nouveaux éléments sur des pressions présumées pour étouffer l'affaire.",
    "mainPerson": "Alexandre Benalla",
    "otherPersons": ["Emmanuel Macron"],
    "politicalParty": "La République En Marche",
    "position": "Ancien collaborateur",
    "country": "France",
    "scandalType": "abuse-of-power",
    "severity": 4,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Nouvelle enquête"],
    "resolved": false,
    "sources": [
      {
        "title": "Affaire Benalla : des faux témoignages révélés",
        "url": "https://www.lefigaro.fr/politique/affaire-benalla-des-faux-temoignages-reveles-20250115",
        "publisher": "Le Figaro"
      },
      {
        "title": "Benalla : l'Élysée dans la tourmente",
        "url": "https://www.mediapart.fr/journal/france/150125/benalla-l-elysee-dans-la-tourmente",
        "publisher": "Mediapart"
      }
    ],
    "tags": ["Benalla", "pressions"],
    "color": "red"
  },
  {
    "date": "2025-03-10",
    "duration": "1 an",
    "title": "Affaire des discriminations au sein du PS",
    "description": "Accusations de racisme et de sexisme contre des cadres du parti.",
    "mainPerson": "Olivier Faure",
    "otherPersons": [""],
    "politicalParty": "PS",
    "position": "Premier secrétaire",
    "country": "France",
    "scandalType": "discrimination",
    "severity": 3,
    "amountInvolved": 0,
    "currency": "EUR",
    "consequences": ["Crise interne"],
    "resolved": false,
    "sources": [
      {
        "title": "Discriminations au PS : Olivier Faure visé",
        "url": "https://www.lemonde.fr/politique/article/2025/03/10/discriminations-au-ps-olivier-faure-vise_6284567_823448.html",
        "publisher": "Le Monde"
      },
      {
        "title": "Racisme au PS : le parti en crise",
        "url": "https://www.liberation.fr/politique/racisme-au-ps-le-parti-en-crise-20250310",
        "publisher": "Libération"
      }
    ],
    "tags": ["racisme", "sexisme"],
    "color": "purple"
  },
  {
    "date": "2025-05-22",
    "duration": "1 an",
    "title": "Affaire des contrats truqués de la région PACA",
    "description": "Marchés publics attribués de manière frauduleuse sous Renaud Muselier.",
    "mainPerson": "Renaud Muselier",
    "otherPersons": [""],
    "politicalParty": "Les Républicains",
    "position": "Président de la région PACA",
    "country": "France",
    "scandalType": "corruption",
    "severity": 5,
    "amountInvolved": 2000000,
    "currency": "EUR",
    "consequences": ["Enquête en cours"],
    "resolved": false,
    "sources": [
      {
        "title": "Contrats truqués en PACA : Renaud Muselier visé",
        "url": "https://www.lefigaro.fr/politique/contrats-truques-en-paca-renaud-muselier-vise-20250522",
        "publisher": "Le Figaro"
      },
      {
        "title": "Fraude en PACA : la région dans le viseur",
        "url": "https://www.mediapart.fr/journal/france/220525/fraude-en-paca-la-region-dans-le-viseur",
        "publisher": "Mediapart"
      }
    ],
    "tags": ["marchés publics", "fraude"],
    "color": "red"
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