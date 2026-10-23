// Données partagées : catalogue des produits de saison + lexique. Chargé par chaque page (window.SAISON).
(function () {
  var ORIG = {
    FR: { flag: '🇫🇷', label: 'France', fr: true },
    AN: { flag: '🇫🇷', label: 'Antilles', fr: true },
    CO: { flag: '🇫🇷', label: 'Corse', fr: true },
    ES: { flag: '🇪🇸', label: 'Espagne', fr: false },
    IT: { flag: '🇮🇹', label: 'Italie', fr: false },
    PE: { flag: '🇵🇪', label: 'Pérou', fr: false },
    CR: { flag: '🇨🇷', label: 'Costa Rica', fr: false }
  };
  var ALL = [1,2,3,4,5,6,7,8,9,10,11,12];
  function P(s, n, e, t, o, m, f, fam, d) { return { s: s, n: n, e: e, t: t, o: o, m: m, f: f, fam: fam, d: d }; }
  var produits = [
    P('carotte','Carotte','🥕','legume','FR',ALL,[9,10,11,12],'Apiacées','Racine croquante et sucrée, disponible toute l’année grâce à sa très bonne conservation.'),
    P('tomate','Tomate','🍅','legume','FR',[6,7,8,9],[7,8],'Solanacées','Fruit au sens botanique, cuisinée comme un légume ; elle n’a de vraie saveur qu’en plein été.'),
    P('aubergine','Aubergine','🍆','legume','FR',[6,7,8,9],[7,8],'Solanacées','Chair fondante qui boit l’huile ; star de la ratatouille et du caviar d’aubergine.'),
    P('courgette','Courgette','🥒','legume','FR',[6,7,8,9],[7,8],'Cucurbitacées','Productive et douce, elle se mange crue en ruban ou poêlée en quelques minutes.'),
    P('concombre','Concombre','🥒','legume','FR',[5,6,7,8,9],[6,7,8],'Cucurbitacées','Composé à plus de 95 % d’eau, le plus rafraîchissant des légumes d’été.'),
    P('poivron','Poivron','🫑','legume','FR',[7,8,9,10],[8,9],'Solanacées','Vert, jaune puis rouge : c’est la même plante, cueillie à différents stades de maturité.'),
    P('piment','Piment','🌶️','legume','FR',[7,8,9,10],[8,9],'Solanacées','Cousin piquant du poivron ; le piment d’Espelette bénéficie d’une AOP.'),
    P('brocoli','Brocoli','🥦','legume','FR',[6,7,8,9,10,11],[9,10],'Brassicacées','On mange ses boutons floraux avant qu’ils n’éclosent ; à cuire brièvement pour garder le vert.'),
    P('chou','Chou vert','🥬','legume','FR',[1,2,3,10,11,12],[11,12,1],'Brassicacées','Légume d’hiver par excellence, plus doux après les premières gelées.'),
    P('laitue','Laitue','🥬','legume','FR',[4,5,6,7,8,9,10],[5,6],'Astéracées','Feuilles tendres à consommer rapidement, idéalement le jour de l’achat.'),
    P('epinard','Épinard','🥬','legume','FR',[3,4,5,9,10,11],[4,10],'Amaranthacées','Pousses de printemps et d’automne, à manger crues en salade ou juste tombées.'),
    P('pomme-de-terre','Pomme de terre','🥔','legume','FR',ALL,[9,10],'Solanacées','Primeur au printemps, de conservation le reste de l’année : chaque variété a son usage.'),
    P('mais','Maïs doux','🌽','legume','FR',[8,9,10],[8,9],'Poacées','Grain sucré à griller ou à bouillir juste après la cueillette, avant que le sucre ne tourne en amidon.'),
    P('petit-pois','Petit pois','🫛','legume','FR',[5,6,7],[6],'Fabacées','Saison courte et précieuse : à écosser et cuire le jour même.'),
    P('haricot-vert','Haricot vert','🫛','legume','FR',[6,7,8,9],[7,8],'Fabacées','Gousse entière consommée jeune, avant que le grain ne se forme.'),
    P('potiron','Potiron','🎃','legume','FR',[9,10,11,12,1],[10,11],'Cucurbitacées','Se garde des mois dans un endroit sec ; parfait en velouté.'),
    P('ail','Ail','🧄','legume','FR',[6,7,8,9,10],[7,8],'Amaryllidacées','L’ail frais arrive en juin ; séché, il se conserve jusqu’à l’hiver.'),
    P('oignon','Oignon','🧅','legume','FR',[1,2,3,7,8,9,10,11,12],[9,10],'Amaryllidacées','Base de presque toutes les cuisines ; le rosé de Roscoff est AOP.'),
    P('champignon','Champignon de Paris','🍄‍🟫','legume','FR',ALL,[10,11],'Agaricacées','Cultivé en cave toute l’année ; c’est un champignon, ni fruit ni légume au sens botanique.'),
    P('patate-douce','Patate douce','🍠','legume','ES',[10,11,12,1,2,3],[11,12],'Convolvulacées','Tubercule sucré sans lien de parenté avec la pomme de terre.'),
    P('fraise','Fraise','🍓','fruit','FR',[4,5,6,7],[5,6],'Rosacées','Ses vrais fruits sont les petits grains à sa surface : les akènes.'),
    P('cerise','Cerise','🍒','fruit','FR',[5,6,7],[6],'Rosacées','Une drupe à la saison très courte ; ne mûrit plus une fois cueillie.'),
    P('peche','Pêche','🍑','fruit','FR',[6,7,8,9],[7,8],'Rosacées','Drupe juteuse à choisir parfumée et souple sous le doigt.'),
    P('melon','Melon','🍈','fruit','FR',[6,7,8,9],[7,8],'Cucurbitacées','Un bon melon est lourd pour sa taille et son pédoncule se détache tout seul.'),
    P('pasteque','Pastèque','🍉','fruit','ES',[6,7,8],[7,8],'Cucurbitacées','Plus de 90 % d’eau ; un son creux quand on la tapote est bon signe.'),
    P('myrtille','Myrtille','🫐','fruit','FR',[7,8,9],[8],'Éricacées','Petite baie des sous-bois et des montagnes, riche en pigments antioxydants.'),
    P('raisin','Raisin','🍇','fruit','FR',[8,9,10],[9],'Vitacées','Chaque grain est une baie ; le chasselas de Moissac est AOP.'),
    P('pomme','Pomme','🍎','fruit','FR',[1,2,3,4,8,9,10,11,12],[9,10,11],'Rosacées','Fruit le plus consommé en France ; les variétés tardives se gardent tout l’hiver.'),
    P('poire','Poire','🍐','fruit','FR',[8,9,10,11,12,1],[9,10],'Rosacées','Cueillie avant maturité, elle finit de mûrir à température ambiante.'),
    P('chataigne','Châtaigne','🌰','fruit','FR',[10,11,12],[10,11],'Fagacées','Fruit sec des forêts d’Ardèche et des Cévennes, à griller ou en crème.'),
    P('kiwi','Kiwi','🥝','fruit','FR',[11,12,1,2,3,4],[12,1,2],'Actinidiacées','Le kiwi de l’Adour bénéficie d’une IGP et d’un Label Rouge.'),
    P('clementine','Clémentine','🍊','fruit','CO',[11,12,1,2],[12,1],'Rutacées','La clémentine de Corse IGP se reconnaît à ses feuilles laissées sur le fruit.'),
    P('orange','Orange','🍊','fruit','ES',[12,1,2,3,4],[1,2],'Rutacées','Agrume d’hiver ; les oranges sanguines arrivent en janvier.'),
    P('citron','Citron','🍋','fruit','ES',[11,12,1,2,3,4,5],[1,2,3],'Rutacées','Agrume acide dont le zeste parfume autant que le jus.'),
    P('avocat','Avocat','🥑','fruit','ES',[11,12,1,2,3,4],[1,2,3],'Lauracées','Botaniquement une baie ; il mûrit seulement une fois cueilli.'),
    P('banane','Banane','🍌','fruit','AN',ALL,[],'Musacées','Récoltée toute l’année aux Antilles françaises, sans véritable saison.'),
    P('ananas','Ananas','🍍','fruit','CR',ALL,[3,4],'Broméliacées','Un fruit composé : chaque écaille est une fleur devenue baie.'),
    P('mangue','Mangue','🥭','fruit','PE',[11,12,1,2,3],[12,1],'Anacardiacées','Grande drupe tropicale ; la saison péruvienne couvre notre hiver.'),
    P('basilic','Basilic','🌿','herbe','FR',[5,6,7,8,9],[7,8],'Lamiacées','Herbe du soleil, craint le froid : jamais au réfrigérateur.'),
    P('menthe','Menthe','🌿','herbe','FR',[5,6,7,8,9],[6,7],'Lamiacées','Envahissante au jardin, fraîche en cuisine comme en infusion.'),
    P('persil','Persil','🌿','herbe','FR',[3,4,5,6,7,8,9,10,11],[5,6],'Apiacées','Plat ou frisé, cousin botanique de la carotte.'),
    P('ciboulette','Ciboulette','🌱','herbe','FR',[3,4,5,6,7,8,9,10],[4,5],'Amaryllidacées','Parfum doux d’oignon, à ciseler au dernier moment.'),
    P('thym','Thym','🌿','herbe','FR',ALL,[5,6],'Lamiacées','Aromate de garrigue, aussi bon frais que séché.'),
    P('gingembre','Gingembre','🫚','herbe','PE',ALL,[],'Zingibéracées','Rhizome piquant, importé toute l’année ; se congèle très bien.'),
    P("asperge","Asperge","🌱","legume","FR",[4,5,6],[5],"Asparagacées","Pousse tendre du printemps, blanche, verte ou violette selon qu’elle a vu le soleil."),
    P("radis","Radis","🌱","legume","FR",[3,4,5,6,7,8,9,10],[4,5,6],"Brassicacées","Le plus rapide du potager : un mois suffit entre le semis et la récolte."),
    P("framboise","Framboise","🍓","fruit","FR",[6,7,8,9,10],[7],"Rosacées","Petit fruit fragile de l’été, creux en son centre une fois cueilli."),
    P("abricot","Abricot","🍑","fruit","FR",[6,7,8],[7],"Rosacées","Fruit d’été orangé, dont le Roussillon et la vallée du Rhône sont les berceaux français."),
    P("prune","Prune","🫐","fruit","FR",[7,8,9],[8],"Rosacées","Mirabelle, reine-claude ou quetsche : la prune se décline en dizaines de variétés."),
    P("figue","Figue","🟣","fruit","FR",[8,9,10],[9],"Moracées","Fruit méditerranéen très ancien, à manger bien mûr, frais ou rôti."),
    P("betterave","Betterave","🌱","legume","FR",[1,2,3,7,8,9,10,11,12],[10,11,12],"Amaranthacées","Racine sucrée, vendue crue ou déjà cuite, dont le jus colore tout en rose."),
    P("poireau","Poireau","🌱","legume","FR",[1,2,3,4,9,10,11,12],[11,12,1],"Amaryllidacées","Cousin de l’oignon, roi des soupes d’hiver et de la vinaigrette."),
    P("chou-fleur","Chou-fleur","🥦","legume","FR",[1,2,3,4,9,10,11,12],[10,11,12,1,2,3],"Brassicacées","Une grosse fleur blanche récoltée avant d’éclore ; la Bretagne en est le premier producteur."),
    P("endive","Endive","🥬","legume","FR",[1,2,3,4,10,11,12],[12,1,2],"Astéracées","Elle pousse dans le noir pour rester blanche ; spécialité des Hauts-de-France."),
    P("rhubarbe","Rhubarbe","🌱","fruit","FR",[4,5,6,7],[5,6],"Polygonacées","Longues tiges acidulées du printemps, cuisinées comme un fruit en tarte ou en compote."),
    P("cassis","Cassis","🫐","fruit","FR",[6,7,8],[7],"Grossulariacées","Petite baie noire au parfum puissant, emblème de la Bourgogne."),
    P("coing","Coing","🍐","fruit","FR",[9,10,11,12],[10,11],"Rosacées","Fruit dur et parfumé, immangeable cru, qui devient délicieux en gelée ou en pâte de fruits."),
    P("artichaut","Artichaut","🌱","legume","FR",[5,6,7,8,9,10],[6,7],"Astéracées","Une grosse fleur qu’on mange avant qu’elle s’ouvre ; la Bretagne en est le premier producteur."),
    P("fenouil","Fenouil","🌱","legume","FR",[6,7,8,9,10,11],[8,9,10],"Apiacées","Bulbe croquant au parfum anisé, délicieux cru en salade ou fondant au four."),
    P("navet","Navet","🌱","legume","FR",[1,2,3,4,5,10,11,12],[10,11,12],"Brassicacées","Racine blanche et violette au goût doux, star des pot-au-feu et des navarins."),
    P("panais","Panais","🌱","legume","FR",[1,2,3,10,11,12],[11,12,1],"Apiacées","Racine blanche et sucrée au goût de noisette, redevenue à la mode en purée et en frites."),
    P("coriandre","Coriandre","🌿","herbe","FR",[5,6,7,8,9,10],[6,7,8],"Apiacées","Herbe fraîche au parfum citronné, incontournable des cuisines d’Asie, du Maghreb et d’Amérique latine."),
    P("romarin","Romarin","🌿","herbe","FR",[1,2,3,4,5,6,7,8,9,10,11,12],[5,6,7],"Lamiacées","Arbrisseau méditerranéen aux aiguilles parfumées, qui relève les grillades et les pommes de terre."),
    P("estragon","Estragon","🌿","herbe","FR",[5,6,7,8,9,10],[6,7,8],"Astéracées","Herbe fine au goût anisé, indispensable de la sauce béarnaise.")
  ];
  var IMGS = {"rhubarbe":"images/rhubarbe.webp","cassis":"images/cassis.webp","coing":"images/coing.webp","artichaut":"images/artichaut.webp","fenouil":"images/fenouil.webp","navet":"images/navet.webp","panais":"images/panais.webp","coriandre":"images/coriandre.webp","romarin":"images/romarin.webp","estragon":"images/estragon.webp","asperge":"images/asperge.webp","radis":"images/radis.webp","framboise":"images/framboise.webp","abricot":"images/abricot.webp","prune":"images/prune.webp","figue":"images/figue.webp","betterave":"images/betterave.webp","poireau":"images/poireau.webp","chou-fleur":"images/chou-fleur.webp","endive":"images/endive.webp","ail":"images/ail.webp","ananas":"images/ananas.webp","aubergine":"images/aubergine.webp","avocat":"images/avocat.webp","banane":"images/banane.webp","basilic":"images/basilic.webp","brocoli":"images/brocoli.webp","carotte":"images/carotte.webp","cerise":"images/cerise.webp","champignon":"images/champignon.webp","chataigne":"images/chataigne.webp","chou":"images/chou.webp","ciboulette":"images/ciboulette.webp","citron":"images/citron.webp","clementine":"images/clementine.webp","concombre":"images/concombre.webp","courgette":"images/courgette.webp","epinard":"images/epinard.webp","fraise":"images/fraise.webp","gingembre":"images/gingembre.webp","haricot-vert":"images/haricot-vert.webp","kiwi":"images/kiwi.webp","laitue":"images/laitue.webp","mais":"images/mais.webp","mangue":"images/mangue.webp","melon":"images/melon.webp","menthe":"images/menthe.webp","myrtille":"images/myrtille.webp","oignon":"images/oignon.webp","orange":"images/orange.webp","pasteque":"images/pasteque.webp","patate-douce":"images/patate-douce.webp","peche":"images/peche.webp","persil":"images/persil.webp","petit-pois":"images/petit-pois.webp","piment":"images/piment.webp","poire":"images/poire.webp","poivron":"images/poivron.webp","pomme-de-terre":"images/pomme-de-terre.webp","pomme":"images/pomme.webp","potiron":"images/potiron.webp","raisin":"images/raisin.webp","thym":"images/thym.webp","tomate":"images/tomate.webp"};
  produits.forEach(function (p) { p.orig = ORIG[p.o]; p.img = IMGS[p.s] || ''; });

  var carotte = produits[0];
  carotte.detail = {
    title: 'Carotte de saison\u00a0: origine, bienfaits & calendrier',
    intro: 'Racine orange la plus consommée de France, la carotte se trouve toute l’année sur les étals. Primeur et botte de fanes au printemps, carotte de garde de l’automne à l’hiver : voici comment la choisir, la conserver et la cuisiner au bon moment.',
    regions: 'Nouvelle-Aquitaine (Landes), Normandie, Hauts-de-France, Bretagne',
    variete: 'Nantaise, Chantenay, Flakkée, carottes anciennes (jaune, violette, blanche)',
    nutrition: [
      ['Énergie', '≈ 36 kcal'],
      ['Glucides', '≈ 6,6 g'],
      ['dont sucres', '≈ 4,9 g'],
      ['Fibres', '≈ 2,5 g'],
      ['Bêta-carotène', '≈ 7 mg'],
      ['Potassium', '≈ 300 mg']
    ],
    bienfaits: [
      ['Bêta-carotène', 'Le pigment orange est transformé par l’organisme en vitamine A, utile à la vision et à la peau. Un filet d’huile améliore son absorption.'],
      ['Fibres douces', 'Crue ou cuite, elle apporte des fibres bien tolérées qui participent au bon transit.'],
      ['Peu calorique', 'Environ 36 kcal aux 100 g : une base légère et rassasiante pour les soupes et les purées.']
    ],
    choisir: 'Choisissez-la ferme, lisse, d’une couleur vive et sans fissure. En botte, les fanes doivent être bien vertes : c’est le meilleur indicateur de fraîcheur.',
    conserver: 'Coupez les fanes dès le retour du marché (elles pompent l’humidité de la racine). Placez les carottes dans le bac à légumes du réfrigérateur : 1 à 2 semaines pour les primeurs, plusieurs semaines pour les carottes de garde.',
    recettes: [
      ['Carottes râpées au citron', 'Crue, avec un filet d’huile d’olive, du jus de citron et du persil.'],
      ['Velouté carotte-cumin', 'Carottes, oignon et un soupçon de cumin, mixés avec le bouillon de cuisson.'],
      ['Carottes rôties au miel', 'Entières au four, avec du thym et une cuillère de miel.']
    ],
    saviez: 'La carotte n’a pas toujours été orange : les premières carottes cultivées étaient violettes ou jaunes. La couleur orange s’est imposée par sélection aux Pays-Bas, au XVIIᵉ siècle.',
    faq: [
      ['Quelle est la saison de la carotte ?', 'La carotte est disponible toute l’année en France. Les carottes primeurs arrivent de mai à juillet, les carottes de garde de septembre à mars ; la pleine saison se situe de septembre à décembre.'],
      ['Faut-il éplucher les carottes ?', 'Non, si elles sont bio ou bien lavées : un simple brossage suffit et préserve les nutriments situés sous la peau.'],
      ['Peut-on manger les fanes de carotte ?', 'Oui, les fanes fraîches se cuisinent en pesto, en soupe ou en tempura, comme une herbe aromatique.']
    ],
    lexique: ['apiacees', 'primeur', 'legume-racine', 'bio']
  };

  var lexique = [
    { id: 'agrume', fam: ['potager'], terme: 'Agrume', cat: 'botanique', def: 'Fruit de la famille des Rutacées (orange, citron, clémentine…), à pulpe divisée en quartiers et à peau riche en huiles essentielles.', ex: ['orange','citron','clementine'] },
    { id: 'akene', fam: ['potager'], terme: 'Akène', cat: 'botanique', def: 'Petit fruit sec qui ne s’ouvre pas et contient une seule graine. Les « grains » de la fraise sont des akènes.', ex: ['fraise'] },
    { id: 'amaryllidacees', fam: ['potager'], terme: 'Amaryllidacées', cat: 'famille', def: 'Famille botanique qui regroupe l’ail, l’oignon, l’échalote, le poireau et la ciboulette.', ex: ['ail','oignon','ciboulette'] },
    { id: 'apiacees', fam: ['potager'], terme: 'Apiacées', cat: 'famille', def: 'Anciennement Ombellifères : plantes aux fleurs en ombrelle. On y trouve la carotte, le céleri, le fenouil et le persil.', ex: ['carotte','persil'] },
    { id: 'baie', fam: ['potager'], terme: 'Baie', cat: 'botanique', def: 'Fruit charnu contenant plusieurs graines sans noyau dur : raisin, myrtille, tomate et même avocat et banane.', ex: ['raisin','myrtille','tomate'] },
    { id: 'brassicacees', fam: ['potager'], terme: 'Brassicacées', cat: 'famille', def: 'Anciennement Crucifères : la famille des choux, du brocoli, du radis et du navet.', ex: ['brocoli','chou'] },
    { id: 'cucurbitacees', fam: ['potager'], terme: 'Cucurbitacées', cat: 'famille', def: 'Plantes coureuses aux gros fruits : courgette, concombre, melon, pastèque, potiron.', ex: ['courgette','melon','potiron'] },
    { id: 'drupe', fam: ['potager'], terme: 'Drupe', cat: 'botanique', def: 'Fruit charnu à noyau dur qui renferme une seule graine : cerise, pêche, abricot, prune, mangue, olive.', ex: ['cerise','peche','mangue'] },
    { id: 'fabacees', fam: ['potager'], terme: 'Fabacées', cat: 'famille', def: 'Anciennement Légumineuses : plantes à gousses (petit pois, haricot, lentille) capables de fixer l’azote de l’air.', ex: ['petit-pois','haricot-vert'] },
    { id: 'legume-racine', fam: ['potager'], terme: 'Légume-racine', cat: 'botanique', def: 'Légume dont on consomme la racine charnue, réserve nutritive de la plante : carotte, betterave, radis, panais.', ex: ['carotte'] },
    { id: 'primeur', fam: ['potager'], terme: 'Primeur', cat: 'botanique', def: 'Fruit ou légume récolté avant sa pleine maturité, en début de saison. Tendre et fragile, il se conserve peu.', ex: ['carotte','pomme-de-terre'] },
    { id: 'rhizome', fam: ['potager'], terme: 'Rhizome', cat: 'botanique', def: 'Tige souterraine qui pousse à l’horizontale et stocke des réserves, comme le gingembre.', ex: ['gingembre'] },
    { id: 'rosacees', fam: ['potager'], terme: 'Rosacées', cat: 'famille', def: 'La famille du rosier, qui donne aussi la plupart de nos fruits de verger : pomme, poire, cerise, pêche, fraise.', ex: ['pomme','poire','fraise'] },
    { id: 'solanacees', fam: ['potager'], terme: 'Solanacées', cat: 'famille', def: 'Famille de la tomate, de l’aubergine, du poivron, du piment et de la pomme de terre. Leurs feuilles sont souvent toxiques.', ex: ['tomate','aubergine','pomme-de-terre'] },
    { id: 'tubercule', fam: ['potager'], terme: 'Tubercule', cat: 'botanique', def: 'Organe souterrain renflé qui stocke l’amidon et permet à la plante de repousser : pomme de terre, patate douce.', ex: ['pomme-de-terre','patate-douce'] },
    { id: 'bio', fam: ['potager','fromage'], terme: 'AB – Agriculture biologique', cat: 'label', def: 'Label officiel garantissant une production sans pesticides ni engrais chimiques de synthèse, ni OGM, contrôlée par un organisme certificateur.', ex: [] },
    { id: 'aop', fam: ['potager','fromage'], terme: 'AOP – Appellation d’origine protégée', cat: 'label', def: 'Label européen : toutes les étapes de production ont lieu dans une zone géographique délimitée, selon un savoir-faire reconnu. Ex. : oignon doux des Cévennes, piment d’Espelette.', ex: ['oignon','piment'] },
    { id: 'igp', fam: ['potager','fromage'], terme: 'IGP – Indication géographique protégée', cat: 'label', def: 'Label européen : au moins une étape de production a lieu dans la région, qui confère au produit sa réputation. Ex. : clémentine de Corse, kiwi de l’Adour.', ex: ['clementine','kiwi'] },
    { id: 'label-rouge', fam: ['potager','fromage'], terme: 'Label Rouge', cat: 'label', def: 'Label national attestant d’une qualité gustative supérieure à celle des produits courants, vérifiée par des tests.', ex: ['kiwi'] },
    { id: 'hve', fam: ['potager'], terme: 'HVE – Haute valeur environnementale', cat: 'label', def: 'Certification d’exploitation agricole qui évalue la biodiversité, la gestion des intrants et de l’eau. Moins exigeante que le bio.', ex: [] },
    { id: 'origine-france', fam: ['potager'], terme: 'Fruits et Légumes de France', cat: 'label', def: 'Logo interprofessionnel garantissant que le produit a été cultivé et récolté en France.', ex: [] },
    { id: 'annuelle', fam: ['jardin'], terme: 'Annuelle', cat: 'jardinage', def: 'Plante qui germe, fleurit, fait ses graines et meurt en une seule année : cosmos, capucine, zinnia.', ex: [] },
    { id: 'bisannuelle', fam: ['jardin'], terme: 'Bisannuelle', cat: 'jardinage', def: 'Plante qui fait ses feuilles la première année et fleurit la deuxième avant de mourir : pensée, digitale, myosotis.', ex: [] },
    { id: 'vivace', fam: ['jardin'], terme: 'Vivace', cat: 'jardinage', def: 'Plante qui vit plusieurs années : sa partie aérienne disparaît souvent l’hiver, puis repart du pied au printemps.', ex: [] },
    { id: 'semis', fam: ['jardin'], terme: 'Semis', cat: 'jardinage', def: 'Mise en terre des graines, en pleine terre ou à l’abri dans des godets avant de repiquer les plants au jardin.', ex: [] },
    { id: 'repiquage', fam: ['jardin'], terme: 'Repiquage', cat: 'jardinage', def: 'Transplantation d’un jeune plant de son godet ou de sa caissette vers sa place définitive, pour lui laisser de l’espace.', ex: [] },
    { id: 'bouture', fam: ['jardin'], terme: 'Bouture', cat: 'jardinage', def: 'Morceau de tige ou de feuille prélevé sur une plante et mis à raciner pour obtenir une nouvelle plante identique.', ex: [] },
    { id: 'paillage', fam: ['jardin'], terme: 'Paillage', cat: 'jardinage', def: 'Couche de matière (paille, feuilles mortes, tontes sèches) étalée au pied des plantes pour garder l’humidité et limiter les herbes.', ex: [] },
    { id: 'affinage', fam: ['fromage'], terme: 'Affinage', cat: 'fromagerie', def: 'Période de maturation en cave pendant laquelle le fromage développe sa croûte, sa texture et ses arômes. Elle va de quelques jours à plusieurs années.', ex: [] },
    { id: 'lait-cru', fam: ['fromage'], terme: 'Lait cru', cat: 'fromagerie', def: 'Lait qui n’a pas été chauffé au-delà de 40 °C. Il garde sa flore naturelle et donne des fromages au goût plus riche.', ex: [] },
    { id: 'presure', fam: ['fromage'], terme: 'Présure', cat: 'fromagerie', def: 'Enzyme qui fait cailler le lait et sépare le caillé, qui deviendra le fromage, du petit-lait.', ex: [] },
    { id: 'croute-fleurie', fam: ['fromage'], terme: 'Croûte fleurie', cat: 'fromagerie', def: 'Croûte blanche et duveteuse formée par une moisissure (Penicillium candidum) : camembert, brie.', ex: [] },
    { id: 'croute-lavee', fam: ['fromage'], terme: 'Croûte lavée', cat: 'fromagerie', def: 'Croûte orangée et collante, frottée à l’eau salée pendant l’affinage. Elle donne des fromages au goût prononcé : munster, maroilles.', ex: [] },
    { id: 'pate-pressee-cuite', fam: ['fromage'], terme: 'Pâte pressée cuite', cat: 'fromagerie', def: 'Caillé chauffé puis pressé pour en retirer le petit-lait : de grandes meules qui se conservent longtemps, comme le comté et le beaufort.', ex: [] },
    { id: 'pate-persillee', fam: ['fromage'], terme: 'Pâte persillée', cat: 'fromagerie', def: 'Pâte veinée de moisissures bleues ou vertes qui se développent à l’intérieur du fromage : roquefort, bleu d’Auvergne.', ex: [] },
    { id: 'fermier', fam: ['fromage'], terme: 'Fermier', cat: 'fromagerie', def: 'Fromage fabriqué à la ferme, uniquement avec le lait du troupeau de l’exploitation.', ex: [] }
  ];

  var MOIS = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  var MOIS_C = ['Janv.','Févr.','Mars','Avr.','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'];
  var TYPES = { fruit: { label: 'Fruits', one: 'Fruit', e: '🍊' }, legume: { label: 'Légumes', one: 'Légume', e: '🥦' }, herbe: { label: 'Herbes & aromates', one: 'Herbe aromatique', e: '🌿' } };

  function url(p, prefix) {
    prefix = prefix || '';
    return prefix + 'produits/' + p.s + '.html';
  }
  function bySlug(s) { for (var i = 0; i < produits.length; i++) if (produits[i].s === s) return produits[i]; return null; }
  function vis(p, prefix) { var u = p.img ? (prefix || '') + p.img : ''; return { e: p.e, img: u, imgBg: u ? 'center / contain no-repeat url("' + u + '")' : 'none', noImg: !p.img }; }

  var RECETTES_750G = {"rhubarbe":["Tarte à la rhubarbe"],"cassis":["Confiture de cassis"],"coing":["Pâte de coing"],"artichaut":["Artichauts à la barigoule"],"fenouil":["Fenouil braisé"],"navet":["Navarin d’agneau aux navets"],"panais":["Velouté de panais"],"coriandre":["Taboulé à la coriandre"],"romarin":["Gigot au romarin"],"estragon":["Poulet à l’estragon"],"asperge":["Asperges sauce mousseline"],"radis":["Soupe de fanes de radis"],"framboise":["Tarte aux framboises"],"abricot":["Clafoutis aux abricots"],"prune":["Tarte aux quetsches"],"figue":["Figues rôties au miel"],"betterave":["Salade de betteraves"],"poireau":["Poireaux vinaigrette"],"chou-fleur":["Gratin de chou-fleur"],"endive":["Endives au jambon"],"carotte":["Carottes Vichy au beurre et au persil","https://www.750g.com/carottes-vichy-r12143.htm"],"tomate":["Tomates farcies"],"aubergine":["Caviar d’aubergine"],"courgette":["Gratin de courgettes"],"concombre":["Tzatziki"],"poivron":["Piperade basquaise"],"piment":["Axoa de veau au piment d’Espelette"],"brocoli":["Gratin de brocolis"],"chou":["Potée au chou"],"laitue":["Salade César"],"epinard":["Épinards à la crème"],"pomme-de-terre":["Gratin dauphinois"],"mais":["Épis de maïs grillés au beurre"],"petit-pois":["Petits pois à la française"],"haricot-vert":["Haricots verts à l’ail"],"potiron":["Velouté de potiron"],"ail":["Soupe à l’ail"],"oignon":["Soupe à l’oignon gratinée"],"champignon":["Poêlée de champignons à l’ail et au persil"],"patate-douce":["Purée de patate douce"],"fraise":["Tarte aux fraises"],"cerise":["Clafoutis aux cerises"],"peche":["Pêches rôties au miel"],"melon":["Salade de melon, feta et menthe"],"pasteque":["Salade de pastèque à la feta"],"myrtille":["Muffins aux myrtilles"],"raisin":["Clafoutis au raisin"],"pomme":["Tarte Tatin"],"poire":["Poires Belle-Hélène"],"chataigne":["Velouté de châtaignes"],"kiwi":["Salade de fruits au kiwi"],"clementine":["Clémentines confites"],"orange":["Salade d’oranges à la cannelle"],"citron":["Tarte au citron meringuée"],"avocat":["Guacamole"],"banane":["Banana bread"],"ananas":["Ananas rôti à la vanille"],"mangue":["Lassi à la mangue"],"basilic":["Pesto au basilic"],"menthe":["Taboulé à la menthe"],"persil":["Sauce chimichurri"],"ciboulette":["Omelette à la ciboulette"],"thym":["Poulet rôti au thym et au citron"],"gingembre":["Carottes au gingembre"]};
  function recette750(p) { var r = RECETTES_750G[p.s]; var nom = p.n.toLowerCase(); return { titre: r ? r[0] : '', url: r ? (r[1] || 'https://www.750g.com/recherche/?q=' + encodeURIComponent(r[0])) : '', toutes: 'https://www.750g.com/recherche/?q=' + encodeURIComponent(nom), has: !!r }; }
  function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }

  window.SAISON = { recette750: recette750, produits: produits, lexique: lexique, MOIS: MOIS, MOIS_C: MOIS_C, TYPES: TYPES, ORIG: ORIG, url: url, vis: vis, bySlug: bySlug, norm: norm };
})();
