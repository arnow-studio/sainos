// Shared data: seasonal product catalogue + glossary. Loaded by every page (window.SAISON).
(function () {
  var ORIG = {
    FR: { flag: '🇫🇷', label: 'France', fr: true },
    AN: { flag: '🇫🇷', label: 'French Caribbean', fr: true },
    CO: { flag: '🇫🇷', label: 'Corsica', fr: true },
    ES: { flag: '🇪🇸', label: 'Spain', fr: false },
    IT: { flag: '🇮🇹', label: 'Italy', fr: false },
    PE: { flag: '🇵🇪', label: 'Peru', fr: false },
    CR: { flag: '🇨🇷', label: 'Costa Rica', fr: false }
  };
  var ALL = [1,2,3,4,5,6,7,8,9,10,11,12];
  function P(s, n, e, t, o, m, f, fam, d) { return { s: s, n: n, e: e, t: t, o: o, m: m, f: f, fam: fam, d: d }; }
  var produits = [
    P('carotte','Carrot','🥕','legume','FR',ALL,[9,10,11,12],'Apiaceae','A crunchy, sweet root, available all year round thanks to how well it keeps.'),
    P('tomate','Tomato','🍅','legume','FR',[6,7,8,9],[7,8],'Solanaceae','A fruit in botanical terms, cooked as a vegetable; it only has real flavour in high summer.'),
    P('aubergine','Aubergine','🍆','legume','FR',[6,7,8,9],[7,8],'Solanaceae','Melting flesh that soaks up oil; the star of ratatouille and aubergine dip.'),
    P('courgette','Courgette','🥒','legume','FR',[6,7,8,9],[7,8],'Cucurbitaceae','Productive and mild, eaten raw in ribbons or pan-fried in minutes.'),
    P('concombre','Cucumber','🥒','legume','FR',[5,6,7,8,9],[6,7,8],'Cucurbitaceae','More than 95 % water, the most refreshing summer vegetable.'),
    P('poivron','Pepper','🫑','legume','FR',[7,8,9,10],[8,9],'Solanaceae','Green, yellow then red: it’s the same plant, picked at different stages of ripeness.'),
    P('piment','Chilli','🌶️','legume','FR',[7,8,9,10],[8,9],'Solanaceae','The pepper’s fiery cousin; Espelette pepper has a PDO.'),
    P('brocoli','Broccoli','🥦','legume','FR',[6,7,8,9,10,11],[9,10],'Brassicaceae','We eat its flower buds before they open; cook it briefly to keep it green.'),
    P('chou','Cabbage','🥬','legume','FR',[1,2,3,10,11,12],[11,12,1],'Brassicaceae','The ultimate winter vegetable, milder after the first frosts.'),
    P('laitue','Lettuce','🥬','legume','FR',[4,5,6,7,8,9,10],[5,6],'Asteraceae','Tender leaves to eat quickly, ideally on the day you buy them.'),
    P('epinard','Spinach','🥬','legume','FR',[3,4,5,9,10,11],[4,10],'Amaranthaceae','Spring and autumn leaves, eaten raw in salads or just wilted.'),
    P('pomme-de-terre','Potato','🥔','legume','FR',ALL,[9,10],'Solanaceae','New potatoes in spring, stored ones the rest of the year: each variety has its use.'),
    P('mais','Sweetcorn','🌽','legume','FR',[8,9,10],[8,9],'Poaceae','Sweet kernels to grill or boil right after picking, before the sugar turns to starch.'),
    P('petit-pois','Pea','🫛','legume','FR',[5,6,7],[6],'Fabaceae','A short, precious season: shell and cook them the same day.'),
    P('haricot-vert','Green bean','🫛','legume','FR',[6,7,8,9],[7,8],'Fabaceae','A whole pod eaten young, before the bean forms inside.'),
    P('potiron','Squash','🎃','legume','FR',[9,10,11,12,1],[10,11],'Cucurbitaceae','Keeps for months somewhere dry; perfect in soup.'),
    P('ail','Garlic','🧄','legume','FR',[6,7,8,9,10],[7,8],'Amaryllidaceae','Fresh garlic arrives in June; dried, it keeps until winter.'),
    P('oignon','Onion','🧅','legume','FR',[1,2,3,7,8,9,10,11,12],[9,10],'Amaryllidaceae','The base of almost every cuisine; the pink Roscoff onion has a PDO.'),
    P('champignon','Button mushroom','🍄‍🟫','legume','FR',ALL,[10,11],'Agaricaceae','Grown in caves all year round; it’s a mushroom, neither fruit nor vegetable in botanical terms.'),
    P('patate-douce','Sweet potato','🍠','legume','ES',[10,11,12,1,2,3],[11,12],'Convolvulaceae','A sweet tuber that is not related to the potato at all.'),
    P('fraise','Strawberry','🍓','fruit','FR',[4,5,6,7],[5,6],'Rosaceae','Its real fruits are the little grains on its surface: the achenes.'),
    P('cerise','Cherry','🍒','fruit','FR',[5,6,7],[6],'Rosaceae','A drupe with a very short season; it doesn’t ripen any more once picked.'),
    P('peche','Peach','🍑','fruit','FR',[6,7,8,9],[7,8],'Rosaceae','A juicy drupe: choose it fragrant and soft under your finger.'),
    P('melon','Melon','🍈','fruit','FR',[6,7,8,9],[7,8],'Cucurbitaceae','A good melon is heavy for its size and its stalk comes away on its own.'),
    P('pasteque','Watermelon','🍉','fruit','ES',[6,7,8],[7,8],'Cucurbitaceae','More than 90 % water; a hollow sound when you tap it is a good sign.'),
    P('myrtille','Blueberry','🫐','fruit','FR',[7,8,9],[8],'Ericaceae','A small berry from woodlands and mountains, rich in antioxidant pigments.'),
    P('raisin','Grape','🍇','fruit','FR',[8,9,10],[9],'Vitaceae','Each grape is a berry; Moissac Chasselas has a PDO.'),
    P('pomme','Apple','🍎','fruit','FR',[1,2,3,4,8,9,10,11,12],[9,10,11],'Rosaceae','The most eaten fruit in France; late varieties keep all winter.'),
    P('poire','Pear','🍐','fruit','FR',[8,9,10,11,12,1],[9,10],'Rosaceae','Picked before it’s ripe, it finishes ripening at room temperature.'),
    P('chataigne','Chestnut','🌰','fruit','FR',[10,11,12],[10,11],'Fagaceae','A nut from the forests of Ardèche and the Cévennes, to roast or turn into spread.'),
    P('kiwi','Kiwi','🥝','fruit','FR',[11,12,1,2,3,4],[12,1,2],'Actinidiaceae','Adour kiwis have a PGI and a Label Rouge.'),
    P('clementine','Clementine','🍊','fruit','CO',[11,12,1,2],[12,1],'Rutaceae','The Corsican clementine PGI is recognisable by the leaves left on the fruit.'),
    P('orange','Orange','🍊','fruit','ES',[12,1,2,3,4],[1,2],'Rutaceae','A winter citrus; blood oranges arrive in January.'),
    P('citron','Lemon','🍋','fruit','ES',[11,12,1,2,3,4,5],[1,2,3],'Rutaceae','A sour citrus whose zest adds as much flavour as its juice.'),
    P('avocat','Avocado','🥑','fruit','ES',[11,12,1,2,3,4],[1,2,3],'Lauraceae','Botanically a berry; it only ripens once picked.'),
    P('banane','Banana','🍌','fruit','AN',ALL,[],'Musaceae','Harvested all year round in the French Caribbean, with no real season.'),
    P('ananas','Pineapple','🍍','fruit','CR',ALL,[3,4],'Bromeliaceae','A multiple fruit: each scale is a flower turned into a berry.'),
    P('mangue','Mango','🥭','fruit','PE',[11,12,1,2,3],[12,1],'Anacardiaceae','A large tropical drupe; the Peruvian season covers our winter.'),
    P('basilic','Basil','🌿','herbe','FR',[5,6,7,8,9],[7,8],'Lamiaceae','A sun-loving herb that hates the cold: never put it in the fridge.'),
    P('menthe','Mint','🌿','herbe','FR',[5,6,7,8,9],[6,7],'Lamiaceae','Invasive in the garden, fresh in cooking and in infusions.'),
    P('persil','Parsley','🌿','herbe','FR',[3,4,5,6,7,8,9,10,11],[5,6],'Apiaceae','Flat or curly, a botanical cousin of the carrot.'),
    P('ciboulette','Chives','🌱','herbe','FR',[3,4,5,6,7,8,9,10],[4,5],'Amaryllidaceae','A mild onion flavour, to snip at the last minute.'),
    P('thym','Thyme','🌿','herbe','FR',ALL,[5,6],'Lamiaceae','A herb of the Mediterranean scrubland, as good fresh as dried.'),
    P('gingembre','Ginger','🫚','herbe','PE',ALL,[],'Zingiberaceae','A spicy rhizome, imported all year round; it freezes very well.'),
    P("asperge","Asparagus","🌱","legume","FR",[4,5,6],[5],"Asparagaceae","A tender spring shoot: white, green or purple depending on how much sun it saw."),
    P("radis","Radish","🌱","legume","FR",[3,4,5,6,7,8,9,10],[4,5,6],"Brassicaceae","The fastest crop in the garden: one month from sowing to harvest."),
    P("framboise","Raspberry","🍓","fruit","FR",[6,7,8,9,10],[7],"Rosaceae","A delicate summer berry, hollow in the middle once picked."),
    P("abricot","Apricot","🍑","fruit","FR",[6,7,8],[7],"Rosaceae","An orange summer fruit; Roussillon and the Rhône valley are its French heartlands."),
    P("prune","Plum","🫐","fruit","FR",[7,8,9],[8],"Rosaceae","Mirabelle, greengage or damson: plums come in dozens of varieties."),
    P("figue","Fig","🟣","fruit","FR",[8,9,10],[9],"Moraceae","An ancient Mediterranean fruit, best eaten very ripe, fresh or roasted."),
    P("betterave","Beetroot","🌱","legume","FR",[1,2,3,7,8,9,10,11,12],[10,11,12],"Amaranthaceae","A sweet root, sold raw or ready-cooked, whose juice turns everything pink."),
    P("poireau","Leek","🌱","legume","FR",[1,2,3,4,9,10,11,12],[11,12,1],"Amaryllidaceae","A cousin of the onion, king of winter soups and vinaigrette."),
    P("chou-fleur","Cauliflower","🥦","legume","FR",[1,2,3,4,9,10,11,12],[10,11,12,1,2,3],"Brassicaceae","A big white flower head picked before it opens; Brittany is France’s top producer."),
    P("endive","Chicory","🥬","legume","FR",[1,2,3,4,10,11,12],[12,1,2],"Asteraceae","It grows in the dark to stay white; a speciality of northern France."),
    P("rhubarbe","Rhubarb","🌱","fruit","FR",[4,5,6,7],[5,6],"Polygonaceae","Long, tangy spring stalks, cooked like a fruit in tarts or compote."),
    P("cassis","Blackcurrant","🫐","fruit","FR",[6,7,8],[7],"Grossulariaceae","A small black berry with a powerful scent, the emblem of Burgundy."),
    P("coing","Quince","🍐","fruit","FR",[9,10,11,12],[10,11],"Rosaceae","A hard, fragrant fruit, inedible raw, that becomes delicious as jelly or fruit paste."),
    P("artichaut","Artichoke","🌱","legume","FR",[5,6,7,8,9,10],[6,7],"Asteraceae","A big flower bud eaten before it opens; Brittany is France’s top producer."),
    P("fenouil","Fennel","🌱","legume","FR",[6,7,8,9,10,11],[8,9,10],"Apiaceae","A crunchy bulb with an aniseed scent, delicious raw in salad or soft and roasted."),
    P("navet","Turnip","🌱","legume","FR",[1,2,3,4,5,10,11,12],[10,11,12],"Brassicaceae","A white and purple root with a mild taste, star of stews and pot-au-feu."),
    P("panais","Parsnip","🌱","legume","FR",[1,2,3,10,11,12],[11,12,1],"Apiaceae","A white, sweet root with a nutty taste, back in fashion as mash and chips."),
    P("coriandre","Coriander","🌿","herbe","FR",[5,6,7,8,9,10],[6,7,8],"Apiaceae","A fresh herb with a lemony scent, essential in Asian, North African and Latin American cooking."),
    P("romarin","Rosemary","🌿","herbe","FR",[1,2,3,4,5,6,7,8,9,10,11,12],[5,6,7],"Lamiaceae","A Mediterranean shrub with fragrant needles, perfect with grilled meat and potatoes."),
    P("estragon","Tarragon","🌿","herbe","FR",[5,6,7,8,9,10],[6,7,8],"Asteraceae","A delicate herb with an aniseed taste, essential in béarnaise sauce."),
    P("feve","Broad bean",'🫘','legumineuse','FR',[4,5,6,7],[5,6],"Fabaceae","A spring pod: shell it, then slip the beans out of their skins for a sweet, tender taste."),
    P("haricot-coco","Coco bean",'🫘','legumineuse','FR',[7,8,9,10],[8,9],"Fabaceae","A fresh shelling bean, white or speckled pink: quick to cook, no soaking, and wonderfully creamy."),
    P("flageolet","Flageolet bean",'🫘','legumineuse','FR',[7,8,9,10],[8,9],"Fabaceae","A small, pale green bean picked before it fully ripens: fresh in late summer, dried the rest of the year."),
    P("lentille","Lentil",'🫘','legumineuse','FR',[1,2,3,4,5,6,7,8,9,10,11,12],[9,10,11],"Fabaceae","Harvested in summer and dried, it keeps all year and cooks in 20 minutes with no soaking."),
    P("pois-chiche","Chickpea",'🫘','legumineuse','FR',[1,2,3,4,5,6,7,8,9,10,11,12],[9,10,11],"Fabaceae","Harvested at the end of summer, it keeps for a year once dried; the base of hummus and falafel."),
    P("haricot-sec","Dried bean",'🫘','legumineuse','FR',[1,2,3,4,5,6,7,8,9,10,11,12],[10,11,12,1,2],"Fabaceae","Lingot, Tarbais, mogette: storage beans harvested in autumn and simmered all winter.")
  ];
  var IMGS = {"feve":"../images/proteines/feve.webp","haricot-coco":"../images/proteines/haricot-coco.webp","flageolet":"../images/proteines/flageolet.webp","lentille":"../images/proteines/lentille.webp","pois-chiche":"../images/proteines/pois-chiche.webp","haricot-sec":"../images/proteines/haricot-sec.webp","rhubarbe":"../images/rhubarbe.webp","cassis":"../images/cassis.webp","coing":"../images/coing.webp","artichaut":"../images/artichaut.webp","fenouil":"../images/fenouil.webp","navet":"../images/navet.webp","panais":"../images/panais.webp","coriandre":"../images/coriandre.webp","romarin":"../images/romarin.webp","estragon":"../images/estragon.webp","asperge":"../images/asperge.webp","radis":"../images/radis.webp","framboise":"../images/framboise.webp","abricot":"../images/abricot.webp","prune":"../images/prune.webp","figue":"../images/figue.webp","betterave":"../images/betterave.webp","poireau":"../images/poireau.webp","chou-fleur":"../images/chou-fleur.webp","endive":"../images/endive.webp","ail":"../images/ail.webp","ananas":"../images/ananas.webp","aubergine":"../images/aubergine.webp","avocat":"../images/avocat.webp","banane":"../images/banane.webp","basilic":"../images/basilic.webp","brocoli":"../images/brocoli.webp","carotte":"../images/carotte.webp","cerise":"../images/cerise.webp","champignon":"../images/champignon.webp","chataigne":"../images/chataigne.webp","chou":"../images/chou.webp","ciboulette":"../images/ciboulette.webp","citron":"../images/citron.webp","clementine":"../images/clementine.webp","concombre":"../images/concombre.webp","courgette":"../images/courgette.webp","epinard":"../images/epinard.webp","fraise":"../images/fraise.webp","gingembre":"../images/gingembre.webp","haricot-vert":"../images/haricot-vert.webp","kiwi":"../images/kiwi.webp","laitue":"../images/laitue.webp","mais":"../images/mais.webp","mangue":"../images/mangue.webp","melon":"../images/melon.webp","menthe":"../images/menthe.webp","myrtille":"../images/myrtille.webp","oignon":"../images/oignon.webp","orange":"../images/orange.webp","pasteque":"../images/pasteque.webp","patate-douce":"../images/patate-douce.webp","peche":"../images/peche.webp","persil":"../images/persil.webp","petit-pois":"../images/petit-pois.webp","piment":"../images/piment.webp","poire":"../images/poire.webp","poivron":"../images/poivron.webp","pomme-de-terre":"../images/pomme-de-terre.webp","pomme":"../images/pomme.webp","potiron":"../images/potiron.webp","raisin":"../images/raisin.webp","thym":"../images/thym.webp","tomate":"../images/tomate.webp"};
  produits.forEach(function (p) { p.orig = ORIG[p.o]; p.img = IMGS[p.s] || ''; });

  var carotte = produits[0];
  carotte.detail = {
    title: 'Carrots in season: origin, benefits & calendar',
    intro: 'France’s most eaten orange root, the carrot is on market stalls all year round. Bunched new carrots with their tops in spring, stored carrots from autumn to winter: here is how to choose, keep and cook them at the right time.',
    regions: 'Nouvelle-Aquitaine (Landes), Normandy, Hauts-de-France, Brittany',
    variete: 'Nantes, Chantenay, Flakkee, heritage carrots (yellow, purple, white)',
    nutrition: [
      ['Energy', '≈ 36 kcal'],
      ['Carbohydrates', '≈ 6.6 g'],
      ['of which sugars', '≈ 4.9 g'],
      ['Fibre', '≈ 2.5 g'],
      ['Beta-carotene', '≈ 7 mg'],
      ['Potassium', '≈ 300 mg']
    ],
    bienfaits: [
      ['Beta-carotene', 'The orange pigment is turned into vitamin A by the body, useful for eyesight and skin. A drizzle of oil helps absorption.'],
      ['Gentle fibre', 'Raw or cooked, it provides well-tolerated fibre that supports healthy digestion.'],
      ['Low in calories', 'About 36 kcal per 100 g: a light, filling base for soups and purées.']
    ],
    choisir: 'Choose firm, smooth carrots with a bright colour and no cracks. In bunches, the tops should be bright green: it’s the best sign of freshness.',
    conserver: 'Cut off the tops as soon as you get home (they draw moisture from the root). Keep carrots in the fridge’s vegetable drawer: 1 to 2 weeks for new carrots, several weeks for stored carrots.',
    recettes: [
      ['Grated carrots with lemon', 'Raw, with a drizzle of olive oil, lemon juice and parsley.'],
      ['Carrot and cumin soup', 'Carrots, onion and a hint of cumin, blended with the cooking stock.'],
      ['Honey-roasted carrots', 'Whole in the oven, with thyme and a spoonful of honey.']
    ],
    saviez: 'Carrots weren’t always orange: the first cultivated carrots were purple or yellow. Orange took over through selective breeding in the Netherlands in the 17th century.',
    faq: [
      ['When are carrots in season?', 'Carrots are available all year round in France. New carrots arrive from May to July, stored carrots from September to March; the peak season is September to December.'],
      ['Do you need to peel carrots?', 'No, if they are organic or well washed: a simple scrub is enough and keeps the nutrients just under the skin.'],
      ['Can you eat carrot tops?', 'Yes, fresh carrot tops can be made into pesto, soup or tempura, like an aromatic herb.']
    ],
    lexique: ['apiacees', 'primeur', 'legume-racine', 'bio']
  };

  var lexique = [
    { id: 'agrume', fam: ['potager'], terme: 'Citrus fruit', cat: 'botanique', def: 'A fruit of the Rutaceae family (orange, lemon, clementine…), with flesh divided into segments and skin rich in essential oils.', ex: ['orange','citron','clementine'] },
    { id: 'akene', fam: ['potager'], terme: 'Achene', cat: 'botanique', def: 'A small dry fruit that doesn’t open and contains a single seed. The “seeds” on a strawberry are achenes.', ex: ['fraise'] },
    { id: 'amaryllidacees', fam: ['potager'], terme: 'Amaryllidaceae', cat: 'famille', def: 'A botanical family that includes garlic, onion, shallot, leek and chives.', ex: ['ail','oignon','ciboulette'] },
    { id: 'apiacees', fam: ['potager'], terme: 'Apiaceae', cat: 'famille', def: 'Formerly Umbelliferae: plants with umbrella-shaped flowers. It includes carrot, celery, fennel and parsley.', ex: ['carotte','persil'] },
    { id: 'baie', fam: ['potager'], terme: 'Berry', cat: 'botanique', def: 'A fleshy fruit containing several seeds without a hard stone: grape, blueberry, tomato and even avocado and banana.', ex: ['raisin','myrtille','tomate'] },
    { id: 'brassicacees', fam: ['potager'], terme: 'Brassicaceae', cat: 'famille', def: 'Formerly Cruciferae: the family of cabbages, broccoli, radish and turnip.', ex: ['brocoli','chou'] },
    { id: 'cucurbitacees', fam: ['potager'], terme: 'Cucurbitaceae', cat: 'famille', def: 'Trailing plants with large fruits: courgette, cucumber, melon, watermelon, squash.', ex: ['courgette','melon','potiron'] },
    { id: 'drupe', fam: ['potager'], terme: 'Drupe', cat: 'botanique', def: 'A fleshy fruit with a hard stone holding a single seed: cherry, peach, apricot, plum, mango, olive.', ex: ['cerise','peche','mangue'] },
    { id: 'fabacees', fam: ['potager'], terme: 'Fabaceae', cat: 'famille', def: 'Formerly Leguminosae: plants with pods (pea, bean, lentil) that can fix nitrogen from the air.', ex: ['petit-pois','haricot-vert'] },
    { id: 'legume-racine', fam: ['potager'], terme: 'Root vegetable', cat: 'botanique', def: 'A vegetable whose fleshy root, the plant’s food store, is eaten: carrot, beetroot, radish, parsnip.', ex: ['carotte'] },
    { id: 'primeur', fam: ['potager'], terme: 'New produce (primeur)', cat: 'botanique', def: 'A fruit or vegetable harvested before full maturity, at the start of its season. Tender and delicate, it doesn’t keep long.', ex: ['carotte','pomme-de-terre'] },
    { id: 'rhizome', fam: ['potager'], terme: 'Rhizome', cat: 'botanique', def: 'An underground stem that grows horizontally and stores reserves, like ginger.', ex: ['gingembre'] },
    { id: 'rosacees', fam: ['potager'], terme: 'Rosaceae', cat: 'famille', def: 'The rose family, which also gives most of our orchard fruits: apple, pear, cherry, peach, strawberry.', ex: ['pomme','poire','fraise'] },
    { id: 'solanacees', fam: ['potager'], terme: 'Solanaceae', cat: 'famille', def: 'The family of tomato, aubergine, pepper, chilli and potato. Their leaves are often toxic.', ex: ['tomate','aubergine','pomme-de-terre'] },
    { id: 'tubercule', fam: ['potager'], terme: 'Tuber', cat: 'botanique', def: 'A swollen underground organ that stores starch and lets the plant regrow: potato, sweet potato.', ex: ['pomme-de-terre','patate-douce'] },
    { id: 'bio', fam: ['potager','fromage'], terme: 'AB – Organic farming', cat: 'label', def: 'The official French label guaranteeing production without synthetic pesticides or chemical fertilisers, and no GMOs, checked by a certification body.', ex: [] },
    { id: 'aop', fam: ['potager','fromage'], terme: 'PDO – Protected Designation of Origin', cat: 'label', def: 'A European label: every stage of production takes place in a defined area, following recognised know-how. E.g. sweet Cévennes onion, Espelette pepper.', ex: ['oignon','piment'] },
    { id: 'igp', fam: ['potager','fromage'], terme: 'PGI – Protected Geographical Indication', cat: 'label', def: 'A European label: at least one stage of production takes place in the region that gives the product its reputation. E.g. Corsican clementine, Adour kiwi.', ex: ['clementine','kiwi'] },
    { id: 'label-rouge', fam: ['potager','fromage'], terme: 'Label Rouge', cat: 'label', def: 'A French national label certifying better taste than standard products, verified by tasting tests.', ex: ['kiwi'] },
    { id: 'hve', fam: ['potager'], terme: 'HVE – High Environmental Value', cat: 'label', def: 'A French farm certification assessing biodiversity and the management of inputs and water. Less demanding than organic.', ex: [] },
    { id: 'origine-france', fam: ['potager'], terme: 'Fruits et Légumes de France', cat: 'label', def: 'An industry logo guaranteeing that the product was grown and harvested in France.', ex: [] },
    { id: 'annuelle', fam: ['jardin'], terme: 'Annual', cat: 'jardinage', def: 'A plant that germinates, flowers, sets seed and dies within a single year: cosmos, nasturtium, zinnia.', ex: [] },
    { id: 'bisannuelle', fam: ['jardin'], terme: 'Biennial', cat: 'jardinage', def: 'A plant that grows leaves in its first year and flowers in its second before dying: pansy, foxglove, forget-me-not.', ex: [] },
    { id: 'vivace', fam: ['jardin'], terme: 'Perennial', cat: 'jardinage', def: 'A plant that lives for several years: its top growth often dies back in winter, then regrows from the base in spring.', ex: [] },
    { id: 'semis', fam: ['jardin'], terme: 'Sowing', cat: 'jardinage', def: 'Putting seeds in the ground, either directly outdoors or under cover in small pots before planting out.', ex: [] },
    { id: 'repiquage', fam: ['jardin'], terme: 'Pricking out', cat: 'jardinage', def: 'Moving a young seedling from its pot or tray to its final spot so it has room to grow.', ex: [] },
    { id: 'bouture', fam: ['jardin'], terme: 'Cutting', cat: 'jardinage', def: 'A piece of stem or leaf taken from a plant and rooted to grow a new, identical plant.', ex: [] },
    { id: 'paillage', fam: ['jardin'], terme: 'Mulching', cat: 'jardinage', def: 'Spreading a layer of material (straw, dead leaves, dry grass clippings) around plants to keep moisture in and weeds down.', ex: [] },
    { id: 'affinage', fam: ['fromage'], terme: 'Ripening', cat: 'fromagerie', def: 'The time a cheese spends maturing in a cellar while it develops its rind, texture and flavour. It can last from a few days to several years.', ex: [] },
    { id: 'lait-cru', fam: ['fromage'], terme: 'Raw milk', cat: 'fromagerie', def: 'Milk that hasn’t been heated above 40 °C. It keeps its natural flora and makes cheeses with a richer taste.', ex: [] },
    { id: 'presure', fam: ['fromage'], terme: 'Rennet', cat: 'fromagerie', def: 'An enzyme that curdles milk, separating the curd, which becomes the cheese, from the whey.', ex: [] },
    { id: 'croute-fleurie', fam: ['fromage'], terme: 'Bloomy rind', cat: 'fromagerie', def: 'A white, downy rind formed by a mould (Penicillium candidum): camembert, brie.', ex: [] },
    { id: 'croute-lavee', fam: ['fromage'], terme: 'Washed rind', cat: 'fromagerie', def: 'An orange, sticky rind rubbed with brine during ripening. It gives cheeses a strong flavour: munster, maroilles.', ex: [] },
    { id: 'pate-pressee-cuite', fam: ['fromage'], terme: 'Cooked pressed cheese', cat: 'fromagerie', def: 'Curd that is heated, then pressed to remove the whey: large wheels that keep for a long time, such as comté and beaufort.', ex: [] },
    { id: 'pate-persillee', fam: ['fromage'], terme: 'Blue cheese', cat: 'fromagerie', def: 'Cheese with blue or green mould veins that grow inside it: roquefort, bleu d’Auvergne.', ex: [] },
    { id: 'fermier', fam: ['fromage'], terme: 'Farmhouse', cat: 'fromagerie', def: 'Cheese made on the farm, using only milk from the farm’s own herd.', ex: [] },
    { id: 'frai', fam: ['poisson'], terme: "Spawning", cat: 'peche', def: "The period when fish lay their eggs. It is best not to catch or buy them then, so the species can renew itself.", ex: [] },
    { id: 'peche-ligne', fam: ['poisson'], terme: "Line fishing", cat: 'peche', def: "Fishing with hooks, one fish at a time. Very selective, it barely damages the fish or the seabed.", ex: [] },
    { id: 'casier', fam: ['poisson'], terme: "Pot (creel)", cat: 'peche', def: "A cage set on the seabed to catch crabs, lobsters, langoustines or cuttlefish. Undersized animals are released alive.", ex: [] },
    { id: 'chalut', fam: ['poisson'], terme: "Trawl", cat: 'peche', def: "A large funnel-shaped net towed by a boat. Efficient but not very selective when it scrapes the seabed.", ex: [] },
    { id: 'bolinche', fam: ['poisson'], terme: "Purse seine", cat: 'peche', def: "A net that encircles a school of fish, like sardines or anchovies, then closes at the bottom.", ex: [] },
    { id: 'palangre', fam: ['poisson'], terme: "Longline", cat: 'peche', def: "A long line with many hooks, set on the seabed or left drifting.", ex: [] },
    { id: 'prise-accessoire', fam: ['poisson'], terme: "By-catch", cat: 'peche', def: "A species caught without being targeted, often thrown back. Selective methods limit it.", ex: [] },
    { id: 'taille-minimale', fam: ['poisson'], terme: "Minimum size", cat: 'peche', def: "The size below which a fish or shellfish may not be kept: it must have had time to breed.", ex: [] },
    { id: 'fermeture-peche', fam: ['poisson'], terme: "Fishing closure", cat: 'peche', def: "A period when fishing a species is banned by law, like summer for scallops.", ex: [] },
    { id: 'mollusque', fam: ['poisson'], terme: "Mollusc", cat: 'peche', def: "A soft-bodied animal, often protected by a shell: oyster, mussel, whelk, but also cuttlefish and squid.", ex: [] },
    { id: 'bivalve', fam: ['poisson'], terme: "Bivalve", cat: 'peche', def: "A mollusc with two hinged shells: oyster, mussel, clam, cockle, scallop.", ex: [] },
    { id: 'cephalopode', fam: ['poisson'], terme: "Cephalopod", cat: 'peche', def: "A mollusc with suckered arms, like cuttlefish, squid or octopus.", ex: [] },
    { id: 'crustace', fam: ['poisson'], terme: "Crustacean", cat: 'peche', def: "An animal with a shell and jointed legs: crab, lobster, langoustine, shrimp.", ex: [] },
    { id: 'poisson-plat', fam: ['poisson'], terme: "Flatfish", cat: 'peche', def: "A fish that lies flat on the seabed, with both eyes on the same side: sole, plaice, turbot.", ex: [] },
    { id: 'ouies', fam: ['poisson'], terme: "Gills", cat: 'peche', def: "The organs fish breathe with. Bright red gills are a sign of freshness.", ex: [] },
    { id: 'bouchot', fam: ['poisson'], terme: "Bouchot", cat: 'peche', def: "A wooden stake planted in the sea, on which mussels are farmed.", ex: [] },
    { id: 'corail', fam: ['poisson'], terme: "Coral (roe)", cat: 'peche', def: "The orange part of a scallop or sea urchin: its reproductive organs, much prized.", ex: [] },
    { id: 'triploide', fam: ['poisson'], terme: "Triploid oyster", cat: 'peche', def: "A hatchery oyster that does not breed, so it is never milky in summer. “Born at sea” oysters are preferred.", ex: [] },
    { id: 'msc', fam: ['poisson'], terme: "MSC", cat: 'peche', def: "An international label guaranteeing sustainable fishing: healthy stocks and limited environmental impact.", ex: [] }
  ];

  var MOIS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var MOIS_C = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var TYPES = { fruit: { label: 'Fruit', one: 'Fruit', e: '🍊' }, legume: { label: 'Vegetables', one: 'Vegetable', e: '🥦' }, legumineuse: { label: 'Pulses', one: 'Pulse', e: '🫘' }, herbe: { label: 'Herbs', one: 'Herb', e: '🌿' } };

  function url(p, prefix) {
    prefix = prefix || '';
    return prefix + 'produits/' + p.s + '.html';
  }
  function bySlug(s) { for (var i = 0; i < produits.length; i++) if (produits[i].s === s) return produits[i]; return null; }
  function vis(p, prefix) { var u = p.img ? (prefix || '') + p.img : ''; return { e: p.e, img: u, imgBg: u ? 'center / contain no-repeat url("' + u + '")' : 'none', noImg: !p.img }; }

  var RECETTES = {"rhubarbe":["Rhubarb crumble"],"cassis":["Blackcurrant jam"],"coing":["Quince paste"],"artichaut":["Stuffed artichokes"],"fenouil":["Roasted fennel"],"navet":["Lamb navarin with turnips"],"panais":["Roasted parsnips"],"coriandre":["Coriander chutney"],"romarin":["Rosemary roast lamb"],"estragon":["Tarragon chicken"],"asperge":["Asparagus with hollandaise"],"radis":["Radish salad"],"framboise":["Raspberry tart"],"abricot":["Apricot crumble"],"prune":["Plum crumble"],"figue":["Roasted figs with honey"],"betterave":["Beetroot salad"],"poireau":["Leek and potato soup"],"chou-fleur":["Cauliflower cheese"],"endive":["Braised chicory"],"carotte":["Vichy carrots"],"tomate":["Stuffed tomatoes"],"aubergine":["Baba ganoush"],"courgette":["Courgette gratin"],"concombre":["Tzatziki"],"poivron":["Piperade"],"piment":["Chilli con carne"],"brocoli":["Broccoli cheese"],"chou":["Stuffed cabbage"],"laitue":["Caesar salad"],"epinard":["Creamed spinach"],"pomme-de-terre":["Gratin dauphinois"],"mais":["Grilled corn on the cob"],"petit-pois":["French-style peas"],"haricot-vert":["Garlic green beans"],"potiron":["Squash soup"],"ail":["Garlic soup"],"oignon":["French onion soup"],"champignon":["Garlic mushrooms"],"patate-douce":["Sweet potato mash"],"fraise":["Strawberry tart"],"cerise":["Cherry clafoutis"],"peche":["Roasted peaches"],"melon":["Melon feta salad"],"pasteque":["Watermelon feta salad"],"myrtille":["Blueberry muffins"],"raisin":["Grape clafoutis"],"pomme":["Tarte tatin"],"poire":["Poached pears"],"chataigne":["Chestnut soup"],"kiwi":["Fruit salad"],"clementine":["Candied clementines"],"orange":["Orange salad"],"citron":["Lemon meringue pie"],"avocat":["Guacamole"],"banane":["Banana bread"],"ananas":["Roasted pineapple"],"mangue":["Mango lassi"],"basilic":["Basil pesto"],"menthe":["Tabbouleh"],"persil":["Chimichurri"],"ciboulette":["Chive omelette"],"thym":["Roast chicken with thyme and lemon"],"gingembre":["Ginger carrots"]};
  var RSEARCH = 'https://www.bbcgoodfood.com/search?q=';
  function recette750(p) { var r = RECETTES[p.s]; var nom = p.n.toLowerCase(); return { titre: r ? r[0] : '', url: r ? (r[1] || RSEARCH + encodeURIComponent(r[0])) : '', toutes: RSEARCH + encodeURIComponent(nom), has: !!r }; }
  function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }

  window.SAISON = { recette750: recette750, produits: produits, lexique: lexique, MOIS: MOIS, MOIS_C: MOIS_C, TYPES: TYPES, ORIG: ORIG, url: url, vis: vis, bySlug: bySlug, norm: norm, lang: 'en' };
})();
