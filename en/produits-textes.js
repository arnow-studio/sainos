// Editorial texts per product: History, Origin, Classification, Benefits (window.SAISON_TEXTES).
(function () {
  function T(h, o, r, l, c, bi, b) { return { histoire: h, origine: o, regions: r, label: l, classification: c, bienfaitsIntro: bi, bienfaits: b }; }
  window.SAISON_TEXTES = {
    carotte: T(
      'Native to Central Asia (today’s Afghanistan), the wild carrot was first grown for its aromatic leaves and seeds. The first roots people ate were purple or yellow. The orange carrot we know today came from selective breeding in the Netherlands in the 17th century, before it spread across Europe.',
      'France is one of Europe’s major carrot producers. They are grown mostly in light, sandy soils that give straight, smooth roots:',
      ['Nouvelle-Aquitaine (Landes)', 'Normandy (Créances)', 'Hauts-de-France', 'Brittany'],
      'The “sand carrots” of the Normandy coast are famous for their fine texture and sweet taste.',
      [['Culinary type', 'Root vegetable: we eat the taproot, the plant’s food store.'], ['Family', 'Apiaceae (Daucus carota), like celery, fennel and parsley.'], ['Main variety in France', 'Nantes, cylindrical, smooth and sweet.'], ['Part eaten', 'Root (the leafy tops are edible too).']],
      'The carrot is a simple, everyday ally:',
      [['Rich in beta-carotene', 'The body turns it into vitamin A, which supports healthy eyes and skin. A drizzle of oil helps absorption.'], ['Gentle fibre', 'Easy to digest, raw or cooked, and good for regularity.'], ['Low in calories', 'About 36 kcal per 100 g: a light base for soups and purées.'], ['Source of potassium', 'Helps fluid balance and muscle function.']]
    ),
    tomate: T(
      'Native to the Andes, the tomato was domesticated in Mexico before Spanish explorers brought it to Europe in the 16th century. A relative of deadly nightshade, it was long thought to be poisonous and grown as an ornamental plant, nicknamed the “love apple”. It only became part of French cooking in the late 18th century, starting in Provence.',
      'France grows tomatoes mostly in greenhouses, and also in open fields in summer:',
      ['Brittany', 'Pays de la Loire', 'Provence-Alpes-Côte d’Azur', 'Occitanie'],
      'Heirloom varieties (Beefsteak, Black Krim, Marmande) are back on summer market stalls.',
      [['Culinary type', 'Botanically a fruit, cooked as a vegetable: a “fruit vegetable”.'], ['Family', 'Solanaceae (Solanum lycopersicum).'], ['Common varieties', 'Vine tomato, beefsteak, Roma plum tomato, cherry tomato.'], ['Fruit type', 'Fleshy berry with many seeds.']],
      'The tomato is a pillar of the Mediterranean diet:',
      [['Rich in lycopene', 'This red antioxidant pigment is better absorbed when the tomato is cooked with a little oil.'], ['Very hydrating', 'About 94 % water, for barely 20 kcal per 100 g.'], ['Source of vitamin C', 'Especially when eaten raw and fully ripe.'], ['Potassium', 'Helps maintain normal blood pressure.']]
    ),
    aubergine: T(
      'Native to India and South-East Asia, the aubergine was spread around the Mediterranean by Arab traders in the Middle Ages, first to Spain. Long viewed with suspicion, it settled in the south of France in the 17th and 18th centuries before becoming a staple of Provençal cooking.',
      'French aubergines grow in the southern sun and under cover:',
      ['Provence-Alpes-Côte d’Azur', 'Occitanie', 'Nouvelle-Aquitaine'],
      '',
      [['Culinary type', 'A botanical fruit eaten as a vegetable; it is always eaten cooked.'], ['Family', 'Solanaceae (Solanum melongena), like the tomato and the pepper.'], ['Main variety in France', 'The long purple aubergine with glossy skin.'], ['Fruit type', 'Berry.']],
      'Light and melting, the aubergine is best cooked with little fat:',
      [['Low in calories', 'About 25 kcal per 100 g, as long as you go easy on the oil, which it soaks up like a sponge.'], ['Fibre', 'Helps you feel full and aids digestion.'], ['Antioxidants in the skin', 'The purple skin contains anthocyanins: no need to peel it.'], ['Potassium', 'Helps fluid balance.']]
    ),
    courgette: T(
      'Squashes come from Central America, where they were grown thousands of years ago. The courgette itself is an Italian selection (the “zucchina”), made by harvesting certain squashes very young. It only really spread in France in the 20th century, especially after the 1950s.',
      'French courgettes are grown mainly in the south-east and west:',
      ['Provence-Alpes-Côte d’Azur', 'Occitanie', 'Pays de la Loire'],
      'The round Nice courgette is a local speciality, perfect for stuffing.',
      [['Culinary type', 'A fruit harvested unripe and eaten as a vegetable.'], ['Family', 'Cucurbitaceae (Cucurbita pepo), like the pumpkin and the cucumber.'], ['Common varieties', 'Long green, white, yellow, round Nice.'], ['Fruit type', 'Pepo (a berry with a rind).']],
      'The courgette is one of the lightest summer vegetables:',
      [['Very hydrating', 'About 95 % water for 16 kcal per 100 g.'], ['Vitamin B9', 'Helps cell renewal.'], ['Potassium', 'Helps fluid balance.'], ['Easy to digest', 'Its thin skin and tender flesh make it gentle on the stomach.']]
    ),
    concombre: T(
      'Native to the foothills of the Himalayas in India, the cucumber has been grown for over 3,000 years. The Romans loved it: Emperor Tiberius demanded it all year round. In France, Charlemagne listed it among the plants to be grown on royal estates in the 9th century.',
      'In France, cucumbers are mostly grown in greenhouses, which extends their season:',
      ['Pays de la Loire', 'Brittany', 'Centre-Val de Loire'],
      '',
      [['Culinary type', 'A botanical fruit eaten as a vegetable, usually raw.'], ['Family', 'Cucurbitaceae (Cucumis sativus); the gherkin is the same species, picked very young.'], ['Main variety in France', 'The long, smooth-skinned Dutch type.'], ['Fruit type', 'Pepo.']],
      'The cucumber is the champion of freshness:',
      [['Maximum hydration', 'About 96 % water for 12 kcal per 100 g.'], ['Vitamin K', 'Found mainly in the skin.'], ['Potassium', 'Helps the body get rid of excess water.'], ['Filling', 'Crunchy and bulky, for very few calories.']]
    ),
    poivron: T(
      'Native to Central and South America, the pepper was brought to Europe by Christopher Columbus as early as 1493. It spread first through Spain, then around the Mediterranean and into Central Europe, where Hungary turned it into its famous paprika.',
      'French peppers grow in the sun or in greenhouses:',
      ['Provence-Alpes-Côte d’Azur', 'Occitanie', 'Brittany (greenhouse)'],
      '',
      [['Culinary type', 'A botanical fruit eaten as a vegetable, raw or cooked.'], ['Family', 'Solanaceae (Capsicum annuum), the same species as many chillies.'], ['Common varieties', 'Bell, Lamuyo (elongated), bull’s horn.'], ['Fruit type', 'Hollow berry.']],
      'Peppers, especially red ones, are packed with vitamins:',
      [['Very rich in vitamin C', 'A red pepper contains more than an orange.'], ['Carotenoids', 'The riper it gets (green → yellow → red), the more it contains.'], ['Low in calories', 'About 25 kcal per 100 g.'], ['Fibre', 'Helps you feel full.']]
    ),
    piment: T(
      'Domesticated in Mexico about 6,000 years ago, the chilli crossed the Atlantic with Christopher Columbus, who thought he had found a new kind of pepper. It reached the Basque Country in the 16th century, where it was first used to preserve meat before becoming an iconic spice.',
      'France’s main chilli production is in the Basque Country:',
      ['Basque Country (Espelette)', 'South-West'],
      'Espelette pepper has a PDO (Protected Designation of Origin), which limits its growing area to about twenty villages.',
      [['Culinary type', 'A fruit used as a condiment or spice, fresh or dried.'], ['Family', 'Solanaceae (Capsicum annuum, “Gorria” variety for Espelette).'], ['Active compound', 'Capsaicin, which causes the burning sensation.'], ['Fruit type', 'Berry.']],
      'Used in small amounts, chilli brings much more than heat:',
      [['Capsaicin', 'It stimulates saliva and gives a feeling of warmth.'], ['Vitamin C', 'Fresh chillies are rich in it.'], ['Flavour without salt', 'It lets you season dishes with less salt.'], ['Carotenoids', 'Especially in ripe red chillies.']]
    ),
    brocoli: T(
      'Broccoli descends from the wild Mediterranean cabbage. It was selected in Italy in ancient times, then developed by Italian gardeners during the Renaissance. It arrived in France in the 16th century, traditionally with Catherine de’ Medici, and was long called “Italian cabbage”.',
      'French broccoli is grown mainly on the mild, damp western coasts:',
      ['Brittany', 'Normandy', 'Pays de la Loire'],
      '',
      [['Culinary type', 'Flower vegetable: we eat the flower buds before they open.'], ['Family', 'Brassicaceae (Brassica oleracea var. italica), like all cabbages.'], ['Main variety in France', 'Green Calabrese broccoli; romanesco is a close cousin.'], ['Part eaten', 'Flower head and stalk.']],
      'Broccoli is one of the most nutrient-dense vegetables:',
      [['Vitamins C and K', 'One serving covers a large share of daily needs.'], ['Sulphur compounds', 'It contains sulforaphane, studied for its protective properties.'], ['Vitamin B9', 'Especially important during pregnancy.'], ['Short cooking', 'A few minutes of steaming keeps its colour and vitamins.']]
    ),
    chou: T(
      'Descended from the wild cabbage of the Atlantic and Mediterranean coasts, cabbage has been eaten since ancient times. The Greeks and Romans credited it with many virtues, and Cato the Elder sang its praises. Easy to grow and store, it became a staple of European country life in the Middle Ages.',
      'Cabbage grows in the cool regions of northern and western France:',
      ['Brittany', 'Hauts-de-France', 'Alsace'],
      'In Alsace, sauerkraut, made from fermented white cabbage, has a PGI.',
      [['Culinary type', 'Leaf vegetable: we eat the “head” formed by tightly packed leaves.'], ['Family', 'Brassicaceae (Brassica oleracea var. capitata).'], ['Main variety', 'Savoy cabbage, with crinkly, blistered leaves.'], ['Part eaten', 'Leaves.']],
      'Cabbage is a precious winter vegetable:',
      [['Vitamin C', 'It keeps well during storage, a plus in winter.'], ['Vitamin K', 'Found in large amounts in green leaves.'], ['Fibre', 'Good for digestion; gentle cooking makes it easier to digest.'], ['Low in calories', 'About 25 kcal per 100 g.']]
    ),
    laitue: T(
      'Native to the Middle East and the Mediterranean, lettuce was already grown by the Egyptians over 4,000 years ago. The Romans served it at the end of meals. Tradition has it that the writer Rabelais brought romaine lettuce seeds back from Italy in the 16th century.',
      'Lettuce is grown all over France, in open fields and under cover:',
      ['Provence-Alpes-Côte d’Azur', 'Occitanie', 'Pays de la Loire', 'Hauts-de-France'],
      '',
      [['Culinary type', 'Leaf vegetable, eaten raw in salads.'], ['Family', 'Asteraceae (Lactuca sativa), like chicory and the artichoke.'], ['Common varieties', 'Batavia, oak leaf, romaine, butterhead.'], ['Part eaten', 'Leaves.']],
      'Lettuce brings freshness and lightness to any meal:',
      [['Very hydrating', 'About 95 % water for 15 kcal per 100 g.'], ['Vitamin B9', 'Especially in the green outer leaves.'], ['Vitamin K', 'Supports normal blood clotting.'], ['Fibre', 'The perfect partner for richer dishes.']]
    ),
    epinard: T(
      'Native to Persia, spinach was introduced to Spain by the Arabs around the 11th century. Catherine de’ Medici, who loved it, is said to have made it popular at the French court: dishes “à la florentine” are named in her honour. Its reputation as a super-rich source of iron is partly a myth, kept alive by Popeye.',
      'Spinach prefers the cool seasons, spring and autumn:',
      ['Hauts-de-France', 'Brittany', 'Normandy', 'Provence'],
      '',
      [['Culinary type', 'Leaf vegetable, eaten raw as baby leaves or cooked.'], ['Family', 'Amaranthaceae (Spinacia oleracea), like beetroot and chard.'], ['Common forms', 'Baby leaves, whole-leaf spinach.'], ['Part eaten', 'Leaves.']],
      'Spinach is rich in micronutrients:',
      [['Vitamin B9', 'One of the best plant sources.'], ['Vitamin K', 'Abundant in the leaves.'], ['Lutein', 'A pigment that supports eye health.'], ['Iron', 'Present, but in a form less easily absorbed than iron from meat.']]
    ),
    'pomme-de-terre': T(
      'Domesticated in the Peruvian Andes about 8,000 years ago, the potato reached Spain in the 16th century. Long kept for livestock in France, it was made popular in the late 18th century by the pharmacist Antoine Parmentier, who is said to have had soldiers guard a field to spark Parisians’ curiosity.',
      'France is one of Europe’s leading potato producers and exporters:',
      ['Hauts-de-France', 'Grand Est', 'Normandy', 'Brittany'],
      'The potato from the Île de Ré has a PDO, as does the Béa du Roussillon.',
      [['Culinary type', 'Tuber: a swollen underground stem, rich in starch.'], ['Family', 'Solanaceae (Solanum tuberosum), like the tomato.'], ['Common varieties', 'Charlotte, Agata, Bintje, Ratte.'], ['Part eaten', 'Tuber (the green parts are toxic).']],
      'The potato is an energy-giving, complete food:',
      [['Complex carbohydrates', 'Its starch provides lasting energy.'], ['Vitamin C', 'Especially in new potatoes.'], ['Potassium', 'An excellent source.'], ['Cooking in the skin', 'Keeps more vitamins and minerals.']]
    ),
    mais: T(
      'Maize was domesticated in Mexico about 9,000 years ago from a wild grass called teosinte. A staple food of the Maya and the Aztecs, it reached Europe with Christopher Columbus. Sweetcorn, which is sweeter, comes from a natural mutation and became popular mainly in the United States.',
      'France is Europe’s leading sweetcorn producer, grown mostly in the south-west:',
      ['Nouvelle-Aquitaine (Landes)', 'Occitanie'],
      '',
      [['Culinary type', 'A cereal eaten as a vegetable when harvested young.'], ['Family', 'Poaceae (Zea mays), the grass family.'], ['Variety', 'Sweetcorn, rich in sugars.'], ['Fruit type', 'Caryopsis (each kernel is a fruit).']],
      'Sweetcorn is tasty and filling:',
      [['Energy', 'Rich in carbohydrates, it keeps you full for a long time.'], ['Fibre', 'Found in the skin of the kernels.'], ['Lutein and zeaxanthin', 'Yellow pigments that support eye health.'], ['Gluten-free', 'Suitable for people with gluten intolerance.']]
    ),
    'petit-pois': T(
      'Native to the Near East, the pea is one of the oldest cultivated plants, grown for about 9,000 years. Long eaten dried, fresh garden peas became all the rage at the court of Louis XIV, where people feasted on them late into the night.',
      'Peas are grown on the great plains of northern France:',
      ['Hauts-de-France', 'Centre-Val de Loire', 'Brittany'],
      '',
      [['Culinary type', 'Legume: we eat the fresh seeds.'], ['Family', 'Fabaceae (Pisum sativum).'], ['Common varieties', 'Shelling peas, mangetout.'], ['Fruit type', 'Pod holding several seeds.']],
      'Peas are more nourishing than most green vegetables:',
      [['Plant protein', 'They contain more than most vegetables.'], ['Fibre', 'Helps you feel full.'], ['Vitamin B1', 'Supports energy metabolism.'], ['Naturally sweet', 'Cook them soon after picking, before their sugars turn to starch.']]
    ),
    'haricot-vert': T(
      'The bean comes from the Americas (Mexico and the Andes), where it was grown alongside maize and squash. Brought to Europe in the 16th century, it spread first to Italy, then to France. It was in France that people began picking it very young, in the pod, as a green bean.',
      'Green beans are grown in several major areas:',
      ['Brittany', 'Pays de la Loire', 'Nouvelle-Aquitaine', 'Hauts-de-France'],
      '',
      [['Culinary type', 'An unripe pod eaten whole as a vegetable.'], ['Family', 'Fabaceae (Phaseolus vulgaris).'], ['Common varieties', 'Fine French beans, snap beans, yellow wax beans.'], ['Fruit type', 'Pod.']],
      'Green beans are light and rich in fibre:',
      [['Low in calories', 'About 30 kcal per 100 g.'], ['Fibre', 'Good for digestion.'], ['Vitamin B9', 'Helps cell renewal.'], ['Vitamin K', 'Present in good amounts.']]
    ),
    potiron: T(
      'Native to South America, the winter squash was among the squashes brought to Europe in the 16th century. It found a place in vegetable gardens for its hardiness and long shelf life. It is often confused with the pumpkin, a related species made famous by Halloween.',
      'French winter squash is grown in the west and centre:',
      ['Pays de la Loire', 'Centre-Val de Loire', 'Nouvelle-Aquitaine'],
      'Rouge vif d’Étampes is a much-loved old French variety.',
      [['Culinary type', 'A botanical fruit eaten as a vegetable, always cooked.'], ['Family', 'Cucurbitaceae (Cucurbita maxima).'], ['Iconic variety', 'Rouge vif d’Étampes, with orange flesh.'], ['Fruit type', 'Pepo.']],
      'Winter squash is mild, light and colourful:',
      [['Beta-carotene', 'Its orange flesh is very rich in it.'], ['Low in calories', 'About 25 kcal per 100 g.'], ['Gentle fibre', 'Perfect in soup and easy to digest.'], ['Potassium', 'Helps fluid balance.']]
    ),
    ail: T(
      'Native to Central Asia, garlic has been grown for more than 5,000 years. The Egyptians gave it to the workers who built the pyramids, and the Romans to their soldiers. Legend has it that the lips of the future King Henri IV were rubbed with a garlic clove at his birth.',
      'France produces renowned garlic, mostly in the south:',
      ['Occitanie (Lomagne, Lautrec)', 'Drôme', 'Provence'],
      'Several French garlics have a PGI, such as white Lomagne garlic, pink Lautrec garlic and Drôme garlic; purple Cadours garlic has a PDO.',
      [['Culinary type', 'A bulb used as a seasoning.'], ['Family', 'Amaryllidaceae (Allium sativum), like the onion and the leek.'], ['Varieties', 'White, pink, purple garlic.'], ['Part eaten', 'Bulb made up of cloves.']],
      'Garlic adds flavour and interesting compounds:',
      [['Allicin', 'Released when you crush a clove, it gives garlic its typical smell.'], ['Sulphur compounds', 'Studied for their role in heart health.'], ['Flavour without salt', 'It helps cut down on salt in dishes.'], ['Small amounts', 'One or two cloves are enough to flavour a dish.']]
    ),
    oignon: T(
      'Native to Central Asia, the onion has been grown for more than 5,000 years. In ancient Egypt, it fed the pyramid builders and symbolised eternity. Easy to store, it became the base of almost every cuisine in the world.',
      'Onions are grown in many French regions:',
      ['Hauts-de-France', 'Grand Est', 'Brittany', 'Cévennes'],
      'The pink Roscoff onion and the sweet Cévennes onion both have a PDO.',
      [['Culinary type', 'A bulb used as a vegetable and seasoning.'], ['Family', 'Amaryllidaceae (Allium cepa).'], ['Common varieties', 'Yellow, red, white, pink.'], ['Part eaten', 'Bulb made of fleshy leaves.']],
      'The onion is humble but precious:',
      [['Quercetin', 'An antioxidant found mostly in the outer layers.'], ['Prebiotic fibre', 'It feeds the gut flora.'], ['Low in calories', 'About 40 kcal per 100 g.'], ['Sulphur compounds', 'They are what makes you cry when you peel it.']]
    ),
    champignon: T(
      'Button mushroom growing began in the 17th century in the market gardens around Paris. In the 19th century it moved into the city’s old underground quarries, which gave it its French name, “champignon de Paris”. It later moved to the tufa-stone caves of the Loire Valley.',
      'Grown away from the light, button mushrooms are produced all year round:',
      ['Loire Valley (Saumur area)', 'Île-de-France', 'Hauts-de-France'],
      '',
      [['Culinary type', 'Neither fruit nor vegetable: a mushroom, part of the Fungi kingdom.'], ['Family', 'Agaricaceae (Agaricus bisporus).'], ['Common forms', 'White, chestnut (brown); the portobello is the same species when mature.'], ['Part eaten', 'The fruiting body (cap and stem).']],
      'Button mushrooms are light and nourishing:',
      [['Very low in calories', 'About 22 kcal per 100 g.'], ['B vitamins', 'Especially B2 and B3, which support energy metabolism.'], ['Selenium', 'An antioxidant trace element.'], ['Meaty texture', 'Great for lightening meat dishes.']]
    ),
    'patate-douce': T(
      'Native to tropical America, the sweet potato was grown by pre-Columbian peoples long before Europeans arrived. Brought to Spain by Christopher Columbus, it was known in Europe before the potato, although the two are not related at all.',
      'Sweet potatoes sold in France come mainly from southern Europe, with a small but growing French production:',
      ['Spain (Andalusia)', 'Portugal', 'South-West France'],
      '',
      [['Culinary type', 'A tuberous root eaten as a vegetable.'], ['Family', 'Convolvulaceae (Ipomoea batatas), like bindweed.'], ['Common varieties', 'Orange flesh (most common), white or purple.'], ['Part eaten', 'Swollen root.']],
      'The sweet potato is sweet and colourful:',
      [['Beta-carotene', 'Its orange flesh is very rich in it.'], ['Fibre', 'Helps you feel full.'], ['Carbohydrates', 'Slower-release energy than the potato.'], ['Potassium', 'Present in good amounts.']]
    ),
    fraise: T(
      'Wild strawberries have been eaten in Europe since ancient times. The big garden strawberry was born in Brittany in the 18th century, from a cross between a Chilean strawberry brought back in 1714 by the officer Amédée-François Frézier and a Virginia strawberry. Plougastel then became its capital.',
      'France grows strawberries in several major areas:',
      ['Nouvelle-Aquitaine (Lot-et-Garonne, Périgord)', 'Brittany (Plougastel)', 'Occitanie (Nîmes)', 'Provence'],
      'Périgord and Nîmes strawberries have a PGI.',
      [['Culinary type', 'False fruit: the fleshy part is a flower receptacle; the real fruits are the achenes.'], ['Family', 'Rosaceae (Fragaria × ananassa).'], ['Common varieties', 'Gariguette, Ciflorette, Mara des bois, Charlotte.'], ['Fruit type', 'Aggregate of achenes.']],
      'The strawberry is as light as it is delicious:',
      [['Very rich in vitamin C', 'A 150 g serving covers daily needs.'], ['Low in calories', 'About 33 kcal per 100 g.'], ['Antioxidants', 'Its red pigments are anthocyanins.'], ['Hydrating', 'About 90 % water.']]
    ),
    cerise: T(
      'Native to Asia Minor, the cherry was already eaten in the Stone Age. Tradition says the Roman general Lucullus brought the cherry tree to Rome in the 1st century BC. Much loved in the Middle Ages, it was celebrated with many festivals and fairs.',
      'Cherry trees grow in regions with mild springs:',
      ['Provence (Vaucluse)', 'Auvergne-Rhône-Alpes', 'Occitanie (Céret)', 'Alsace'],
      'Céret, in the Pyrenees, traditionally ships France’s very first cherries.',
      [['Culinary type', 'Fleshy stone fruit.'], ['Family', 'Rosaceae (Prunus avium for sweet cherries, Prunus cerasus for sour cherries).'], ['Common varieties', 'Burlat, Bigarreau Napoléon, Summit, morello.'], ['Fruit type', 'Drupe.']],
      'Cherries are only around for a few weeks:',
      [['Anthocyanins', 'These red pigments are antioxidants.'], ['Potassium', 'Present in good amounts.'], ['Gentle energy', 'About 56 kcal per 100 g.'], ['Fibre', 'Good for digestion.']]
    ),
    peche: T(
      'Native to China, where it has been grown for thousands of years, the peach reached Europe via Persia, hence its Latin name Prunus persica. The Romans spread it through Gaul. Louis XIV had it grown at Versailles, in the King’s Kitchen Garden.',
      'French peaches grow in sunny valleys:',
      ['Auvergne-Rhône-Alpes (Drôme, Ardèche)', 'Provence-Alpes-Côte d’Azur', 'Occitanie (Roussillon)'],
      'The vineyard peach, small and fragrant, is a sought-after old variety.',
      [['Culinary type', 'Fleshy stone fruit.'], ['Family', 'Rosaceae (Prunus persica).'], ['Common varieties', 'Yellow, white, flat peach; the nectarine is a smooth-skinned peach.'], ['Fruit type', 'Drupe.']],
      'The peach is a juicy, light summer fruit:',
      [['Hydrating', 'About 87 % water.'], ['Low in calories', 'About 40 kcal per 100 g.'], ['Carotenoids', 'Especially in yellow-fleshed varieties.'], ['Fibre', 'In the skin and flesh.']]
    ),
    melon: T(
      'The melon belongs to the Cucurbitaceae family. Native to Africa or Central Asia, it was already grown in ancient Egypt 2,700 years BC. Introduced to Italy and then France in the 15th century, notably by the popes of Avignon, it became a favourite at royal tables under François I and Louis XIV. Alexandre Dumas loved it so much that he gave part of his works to the Cavaillon library in exchange for a lifetime supply of 12 melons a year.',
      'Today France is a major European melon producer, grown mainly in three large areas:',
      ['South-East (Cavaillon, Châteaurenard)', 'South-West (Quercy, Lectoure)', 'Centre-West (Haut-Poitou, Vendée)'],
      'Quercy melons and Haut-Poitou melons have a PGI (Protected Geographical Indication), which guarantees local know-how and a minimum sugar content.',
      [['Culinary type', 'Botanically a fruit, from the same family as the cucumber and courgette; classed as a fruit vegetable by agronomists, it is eaten as a fruit.'], ['Family', 'Cucurbitaceae (Cucumis melo).'], ['Main variety in France', 'Charentais-type cantaloupe: smooth or netted skin, bright orange, very fragrant flesh, marked green grooves.'], ['Fruit type', 'Pepo (berry with a hard rind).']],
      'The melon is the ultimate summer hydration ally:',
      [['Maximum hydration', 'Over 90 % water, it is refreshing and very low in calories (about 34 kcal per 100 g).'], ['Rich in beta-carotene', 'Its bright orange flesh shows a high pro-vitamin A content, good for skin and eyes.'], ['Potassium', 'It helps the body get rid of water and regulate blood pressure.'], ['Source of vitamin C', 'A boost for the immune system in the hot season.']]
    ),
    pasteque: T(
      'Native to Africa, the watermelon was grown in Egypt more than 4,000 years ago: seeds have been found in pharaohs’ tombs. A precious water supply in dry regions, it spread around the Mediterranean and then all over the world.',
      'Watermelons sold in France come mostly from Spain, with some French production in the south:',
      ['Spain (Andalusia, Murcia)', 'Occitanie', 'Provence'],
      '',
      [['Culinary type', 'A botanical fruit eaten as a fruit, raw and chilled.'], ['Family', 'Cucurbitaceae (Citrullus lanatus).'], ['Common varieties', 'Red flesh with or without seeds, yellow flesh.'], ['Fruit type', 'Pepo.']],
      'Watermelon is summer’s most thirst-quenching fruit:',
      [['Maximum hydration', 'About 92 % water.'], ['Lycopene', 'The same red antioxidant pigment as in tomatoes.'], ['Low in calories', 'About 30 kcal per 100 g.'], ['Citrulline', 'An amino acid found in large amounts in its flesh.']]
    ),
    myrtille: T(
      'Wild bilberries grow in the woodlands and mountain heaths of Europe, where they have been picked since prehistoric times. The larger cultivated blueberry comes from an American species bred in the United States in the early 20th century.',
      'French blueberries are picked in the mountains or grown in the lowlands:',
      ['Vosges', 'Massif Central', 'Alps', 'Nouvelle-Aquitaine (cultivated)'],
      '',
      [['Culinary type', 'Small berry fruit (a blue berry), eaten fresh or cooked.'], ['Family', 'Ericaceae (Vaccinium myrtillus for the wild bilberry).'], ['Forms', 'Wild bilberry (coloured flesh) and cultivated blueberry (white flesh).'], ['Fruit type', 'Berry.']],
      'The blueberry packs a lot of goodness into a small fruit:',
      [['Anthocyanins', 'These blue antioxidant pigments are highly concentrated in wild bilberries.'], ['Fibre', 'Good for digestion.'], ['Vitamin K', 'Present in good amounts.'], ['Low in calories', 'About 57 kcal per 100 g.']]
    ),
    raisin: T(
      'Vines have been grown in the Caucasus for about 8,000 years. The Greeks introduced them to Gaul around 600 BC, in Marseille. Under François I, the “King’s Trellis” at Fontainebleau produced a famous Chasselas grape served at the royal table.',
      'French table grapes are grown in the south:',
      ['Occitanie (Tarn-et-Garonne)', 'Provence (Vaucluse)'],
      'Moissac Chasselas and Ventoux Muscat both have a PDO.',
      [['Culinary type', 'Fleshy fruit growing in bunches.'], ['Family', 'Vitaceae (Vitis vinifera).'], ['Table varieties', 'Chasselas, Muscat of Hamburg, Italia.'], ['Fruit type', 'Berry (each grape).']],
      'Grapes are an energy-giving late-summer fruit:',
      [['Polyphenols', 'Especially in the skin and seeds, such as resveratrol.'], ['Quick energy', 'Rich in natural sugars, about 70 kcal per 100 g.'], ['Potassium', 'Present in good amounts.'], ['Hydrating', 'About 80 % water.']]
    ),
    pomme: T(
      'The cultivated apple descends from a wild apple tree from the mountains of Kazakhstan, spread along the Silk Road. The Greeks and Romans developed grafting, and medieval monasteries multiplied the varieties. Today it is the most eaten fruit in France.',
      'France is one of Europe’s leading apple producers:',
      ['Loire Valley', 'Provence-Alpes-Côte d’Azur', 'Nouvelle-Aquitaine', 'Normandy'],
      'Limousin apples have a PDO, and apples from the Alpes de Haute-Durance a PGI.',
      [['Culinary type', 'Fleshy fruit with pips.'], ['Family', 'Rosaceae (Malus domestica).'], ['Common varieties', 'Golden, Gala, Reinette, Pink Lady, Canada grise.'], ['Fruit type', 'Pome (a false fruit formed from the flower receptacle).']],
      'The apple deserves its reputation as a healthy fruit:',
      [['Fibre (pectin)', 'It helps you feel full and aids digestion.'], ['Polyphenols', 'Concentrated in the skin: best eaten whole.'], ['Moderate energy', 'About 52 kcal per 100 g.'], ['Vitamin C', 'Especially in tart varieties.']]
    ),
    poire: T(
      'Native to Asia and the Caucasus, the pear was already enjoyed by the Greeks and Romans. Louis XIV adored it: his gardener Jean-Baptiste de La Quintinie grew hundreds of varieties in the King’s Kitchen Garden at Versailles. Many of today’s varieties were bred in France and Belgium in the 19th century.',
      'French pears are grown mainly in the south-east and west:',
      ['Auvergne-Rhône-Alpes (Savoie)', 'Provence-Alpes-Côte d’Azur', 'Loire Valley'],
      'Savoie pears have a PGI.',
      [['Culinary type', 'Fleshy fruit with pips.'], ['Family', 'Rosaceae (Pyrus communis).'], ['Common varieties', 'Williams, Conference, Doyenné du Comice, Passe-Crassane.'], ['Fruit type', 'Pome.']],
      'The pear is sweet, melting and thirst-quenching:',
      [['Fibre', 'One of the richest fruits in fibre.'], ['Moderate energy', 'About 50 kcal per 100 g.'], ['Potassium', 'Helps fluid balance.'], ['Hydrating', 'About 84 % water.']]
    ),
    chataigne: T(
      'The chestnut tree has grown in southern Europe since ancient times. In the Cévennes, Ardèche and Corsica it was called “the bread tree”: for centuries, its dried and ground fruit fed mountain communities.',
      'French chestnuts grow in mid-mountain regions:',
      ['Ardèche', 'Cévennes', 'Corsica', 'Limousin'],
      'Ardèche chestnuts have a PDO, as does Corsican chestnut flour.',
      [['Culinary type', 'A nut, eaten cooked (roasted, boiled, as a purée).'], ['Family', 'Fagaceae (Castanea sativa), like the oak and the beech.'], ['Chestnut or “marron”?', 'A marron is a chestnut whose nut is not divided inside; the horse chestnut is not edible.'], ['Fruit type', 'Nut, protected by a spiny husk.']],
      'The chestnut is a very nourishing winter fruit:',
      [['Complex carbohydrates', 'Lasting energy, about 180 kcal per 100 g cooked.'], ['Fibre', 'Helps you feel full.'], ['Gluten-free', 'Its flour suits people with gluten intolerance.'], ['Minerals', 'Potassium, magnesium and B vitamins.']]
    ),
    kiwi: T(
      'Native to China, where it was called the “Chinese gooseberry”, the kiwi was developed in New Zealand in the early 20th century. Renamed “kiwi” in 1959 for export, after New Zealand’s national bird, it has been grown in France since the 1960s.',
      'France grows kiwis mainly in the south-west:',
      ['Nouvelle-Aquitaine (Adour, Landes)', 'Corsica', 'Auvergne-Rhône-Alpes'],
      'Adour kiwis have both a PGI and a Label Rouge.',
      [['Culinary type', 'Fleshy fruit with many small black seeds.'], ['Family', 'Actinidiaceae (Actinidia deliciosa).'], ['Main variety', 'Hayward, with green flesh; there are also yellow kiwis.'], ['Fruit type', 'Berry.']],
      'The kiwi is one of the fruits richest in vitamin C:',
      [['Vitamin C', 'A single kiwi covers a large share of daily needs.'], ['Fibre', 'Known to help digestion.'], ['Actinidin', 'An enzyme that helps digest proteins.'], ['Moderate energy', 'About 60 kcal per 100 g.']]
    ),
    clementine: T(
      'The clementine is named after Brother Clément (Vital Rodier), who discovered it around 1902 in the garden of an orphanage near Oran, Algeria. Probably a cross between a mandarin and an orange tree, it was planted in Corsica from the 1920s.',
      'French clementines are grown in Corsica, mainly on the eastern plain:',
      ['Corsica (eastern plain)'],
      'Corsican clementines have a PGI: they are picked ripe and sold with their leaves, a sign of freshness.',
      [['Culinary type', 'Citrus fruit eaten fresh.'], ['Family', 'Rutaceae (Citrus × clementina).'], ['Special feature', 'Few or no pips, thin skin that peels easily.'], ['Fruit type', 'Hesperidium.']],
      'The clementine is winter’s treat fruit:',
      [['Vitamin C', 'Two clementines cover a good share of daily needs.'], ['Moderate energy', 'About 47 kcal per 100 g.'], ['Fibre', 'In the membranes of the segments.'], ['Handy', 'Easy to peel, perfect for snacks.']]
    ),
    orange: T(
      'Native to southern China and South-East Asia, the sweet orange reached Europe in the 15th century thanks to Portuguese sailors. Long reserved for the elite, it was grown in orangeries, like the one at the Palace of Versailles, and given as a precious Christmas present.',
      'Oranges sold in France come mainly from Spain:',
      ['Spain (Valencia, Andalusia)', 'Italy (Sicily)', 'Morocco'],
      '',
      [['Culinary type', 'Citrus fruit eaten fresh or as juice.'], ['Family', 'Rutaceae (Citrus sinensis).'], ['Common varieties', 'Navel, Valencia, blood orange.'], ['Fruit type', 'Hesperidium.']],
      'The orange is a winter classic:',
      [['Vitamin C', 'One orange covers a large share of daily needs.'], ['Flavonoids', 'Such as hesperidin, concentrated in the white pith.'], ['Moderate energy', 'About 47 kcal per 100 g.'], ['Fibre', 'The whole fruit is more filling than the juice.']]
    ),
    citron: T(
      'Native to Asia (north-east India, Burma, China), the lemon reached the Mediterranean with the Arabs in the Middle Ages. In the 18th century, British sailors took lemons on board to fight scurvy, a disease caused by a lack of vitamin C.',
      'Lemons sold in France come mostly from Spain and Italy, with a small, renowned French production:',
      ['Spain (Murcia)', 'Italy (Sicily)', 'France (Menton)'],
      'Menton lemons have a PGI.',
      [['Culinary type', 'Citrus fruit used as a seasoning (juice and zest).'], ['Family', 'Rutaceae (Citrus limon).'], ['Common varieties', 'Eureka, Primofiori, Verna.'], ['Fruit type', 'Hesperidium.']],
      'The lemon adds acidity and vitamins:',
      [['Vitamin C', 'Especially in fresh juice.'], ['Citric acid', 'It lifts dishes and stops cut fruit from browning.'], ['Very low in calories', 'About 29 kcal per 100 g.'], ['Fragrant zest', 'Rich in essential oils; choose unwaxed lemons.']]
    ),
    avocat: T(
      'Native to Mexico and Central America, the avocado was grown by the Aztecs, who called it “ahuacatl”. Spanish conquistadors brought it to Europe in the 16th century. It only became common in France from the 1960s.',
      'Avocados sold in France in winter come mostly from Spain:',
      ['Spain (Andalusia)', 'Israel', 'Peru'],
      '',
      [['Culinary type', 'A fruit eaten like a vegetable, in salads or on toast.'], ['Family', 'Lauraceae (Persea americana), like the bay tree.'], ['Main variety', 'Hass, with bumpy skin that turns black when ripe.'], ['Fruit type', 'Berry with a single large seed.']],
      'The avocado is a rich, filling fruit:',
      [['Good fats', 'Mostly monounsaturated fatty acids, like olive oil.'], ['Fibre', 'It contains a lot, which makes it very filling.'], ['Vitamins E, K and B9', 'Present in good amounts.'], ['Energy-rich', 'About 160 kcal per 100 g: a fruit like no other.']]
    ),
    banane: T(
      'Native to South-East Asia and New Guinea, the banana travelled to Africa, then to the Caribbean in the 16th century with Portuguese and Spanish sailors. It became a common fruit in France in the early 20th century, thanks to refrigerated ships.',
      'French bananas are grown all year round in the French Caribbean:',
      ['Guadeloupe', 'Martinique'],
      'Bananas from the French Caribbean are grown to some of the strictest pesticide standards in the world.',
      [['Culinary type', 'A fruit eaten raw; plantain is cooked like a vegetable.'], ['Family', 'Musaceae (Musa).'], ['Main variety', 'Cavendish.'], ['Fruit type', 'Berry; the banana plant is a giant herb, not a tree.']],
      'The banana is the energy fruit:',
      [['Potassium and magnesium', 'They support healthy muscle function.'], ['Vitamin B6', 'Present in good amounts.'], ['Carbohydrates', 'About 90 kcal per 100 g, ideal for athletes.'], ['Fibre', 'More of it when the banana is less ripe.']]
    ),
    ananas: T(
      'Native to South America (Brazil, Paraguay), the pineapple was discovered by Christopher Columbus in Guadeloupe in 1493. A luxury fruit in Europe, it was grown in hothouses: the first French pineapple is said to have been harvested at Versailles for Louis XV in 1733.',
      'Pineapples sold in France come mainly from Central America, and also from Réunion Island:',
      ['Costa Rica', 'Réunion', 'Ivory Coast'],
      'The small, very fragrant Victoria pineapple from Réunion is highly sought after.',
      [['Culinary type', 'Tropical fruit eaten fresh.'], ['Family', 'Bromeliaceae (Ananas comosus).'], ['Common varieties', 'MD2 (“extra sweet”), Cayenne, Victoria.'], ['Fruit type', 'Multiple fruit: each scale comes from a flower.']],
      'The pineapple is exotic and easy to digest:',
      [['Bromelain', 'An enzyme that helps digest proteins.'], ['Vitamin C', 'Present in good amounts.'], ['Manganese', 'A trace element it is rich in.'], ['Moderate energy', 'About 50 kcal per 100 g.']]
    ),
    mangue: T(
      'Native to India and Burma, the mango has been grown there for more than 4,000 years and has become India’s national fruit. Portuguese sailors spread it to Africa and the Americas from the 16th century.',
      'Mangoes sold in France in winter come mainly from South America:',
      ['Peru', 'Brazil', 'Réunion and the Caribbean'],
      '',
      [['Culinary type', 'Tropical fruit eaten fresh or in desserts.'], ['Family', 'Anacardiaceae (Mangifera indica), like the cashew and the pistachio.'], ['Common varieties', 'Kent, Keitt, Tommy Atkins.'], ['Fruit type', 'Drupe with a large flat stone.']],
      'The mango is delicious and rich in vitamins:',
      [['Beta-carotene', 'Its orange flesh is rich in it.'], ['Vitamin C', 'Present in good amounts.'], ['Moderate energy', 'About 60 kcal per 100 g.'], ['Fibre', 'Good for digestion.']]
    ),
    basilic: T(
      'Native to India, where a close relative (tulsi) is a sacred plant, basil reached the Mediterranean via the Middle East. Its name comes from the Greek “basilikon”, meaning “royal”. It became the iconic herb of Provençal and Italian cooking.',
      'Basil loves heat; it is grown outdoors in summer and in greenhouses:',
      ['Provence-Alpes-Côte d’Azur', 'Occitanie', 'Pays de la Loire (greenhouse)'],
      'Provençal pistou, made with basil, garlic and olive oil, is its most famous use.',
      [['Culinary type', 'Aromatic herb: we eat the fresh leaves.'], ['Family', 'Lamiaceae (Ocimum basilicum), like mint and thyme.'], ['Common varieties', 'Sweet Genovese, purple basil, Thai basil, lemon basil.'], ['Part eaten', 'Leaves.']],
      'Basil brings summer dishes to life:',
      [['Essential oils', 'They give its leaves their powerful scent.'], ['Vitamin K', 'Present in good amounts in the leaves.'], ['Flavour without salt', 'Another way to season dishes.'], ['Add at the end', 'Heat makes its aroma disappear.']]
    ),
    menthe: T(
      'Mint, native to the Mediterranean and Asia, has been used since ancient times. In Greek mythology, the nymph Minthe was turned into a mint plant. The Romans used it to scent their baths and sauces.',
      'French mint is grown in regions known for aromatic plants:',
      ['Île-de-France (Milly-la-Forêt)', 'Pays de la Loire (Anjou)', 'Provence'],
      'Milly-la-Forêt has long been France’s peppermint capital.',
      [['Culinary type', 'Aromatic herb, used fresh or dried.'], ['Family', 'Lamiaceae (Mentha spicata for spearmint, Mentha × piperita for peppermint).'], ['Common varieties', 'Spearmint, peppermint, Moroccan mint.'], ['Part eaten', 'Leaves.']],
      'Mint brings instant freshness:',
      [['Menthol', 'Mainly in peppermint, it creates a cooling sensation.'], ['Digestion', 'Traditionally drunk as an infusion after meals.'], ['Versatile', 'As good in savoury dishes as in desserts.'], ['Flavour without salt', 'It lifts salads and tabbouleh.']]
    ),
    persil: T(
      'Native to the eastern Mediterranean, parsley was used by the Greeks to weave crowns before the Romans turned it into a cooking herb. Charlemagne listed it among the plants to be grown in the gardens of his estates.',
      'Parsley is grown almost everywhere in France:',
      ['Provence-Alpes-Côte d’Azur', 'Brittany', 'Île-de-France'],
      '',
      [['Culinary type', 'Aromatic herb, used fresh.'], ['Family', 'Apiaceae (Petroselinum crispum), like the carrot.'], ['Varieties', 'Flat-leaf parsley (more fragrant) and curly parsley.'], ['Part eaten', 'Leaves and stems.']],
      'Parsley is much more than a garnish:',
      [['Vitamin C', 'It contains a lot, as long as it is eaten raw.'], ['Vitamin K', 'Present in large amounts.'], ['Chlorophyll', 'It freshens the breath.'], ['Flavour without salt', 'Best chopped and added at the end.']]
    ),
    ciboulette: T(
      'Found in the wild in Europe and Asia, chives have been grown in European gardens since the Middle Ages. They are the mildest member of the onion family, loved for their delicate flavour.',
      'Chives grow easily all over France, in gardens and on farms:',
      ['Provence-Alpes-Côte d’Azur', 'Île-de-France', 'Brittany'],
      '',
      [['Culinary type', 'Aromatic herb: we eat the hollow leaves.'], ['Family', 'Amaryllidaceae (Allium schoenoprasum), like garlic and onion.'], ['Special feature', 'Their purple flowers are edible too.'], ['Part eaten', 'Leaves.']],
      'Chives add a gentle onion flavour:',
      [['Vitamin C', 'Present in good amounts when fresh.'], ['Vitamin K', 'Found in their green leaves.'], ['Flavour without salt', 'Perfect in omelettes and soft cheeses.'], ['Snip at the last minute', 'They lose their flavour when cooked.']]
    ),
    thym: T(
      'A wild plant of the Mediterranean scrubland, thyme has been used since ancient times: the Egyptians used it for embalming, the Greeks burned it in temples, and the Romans scented their baths with it.',
      'French thyme is picked wild or grown in the south:',
      ['Provence', 'Occitanie', 'Drôme'],
      'Herbes de Provence, in which thyme is a key ingredient, have a Label Rouge.',
      [['Culinary type', 'Aromatic herb, used fresh or dried.'], ['Family', 'Lamiaceae (Thymus vulgaris).'], ['Form', 'An evergreen perennian sub-shrub.'], ['Part eaten', 'Leaves and flowering tips.']],
      'Thyme is a generous herb:',
      [['Thymol', 'The compound that gives thyme its strong scent.'], ['Infusion', 'Traditionally drunk as a herbal tea in winter.'], ['Stands up to cooking', 'Ideal in slow-cooked dishes.'], ['Flavour without salt', 'It lifts meat, vegetables and sauces.']]
    ),
    gingembre: T(
      'Native to South-East Asia, ginger has been used for thousands of years in India and China, in cooking and in traditional medicine. Imported by the Romans, it became one of Europe’s most prized spices in the Middle Ages.',
      'Ginger sold in France is imported all year round:',
      ['Peru', 'China', 'Brazil'],
      '',
      [['Culinary type', 'Spice and seasoning, used fresh, dried or candied.'], ['Family', 'Zingiberaceae (Zingiber officinale), like turmeric.'], ['Forms', 'Fresh, ground, candied, pickled.'], ['Part eaten', 'Rhizome (underground stem).']],
      'Ginger adds zing and warmth:',
      [['Gingerol', 'The compound behind its spicy taste.'], ['Nausea', 'Traditionally used to ease nausea.'], ['Flavour without salt', 'It lifts stir-fries, soups and infusions.'], ['Freezes well', 'Easy to grate straight from the freezer.']]
    )
  };
})();
