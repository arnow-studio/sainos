// Kids mode “How does it grow?”: window.SAISON_POUSSE[slug]
// Z(place, duration, emojis for the 6 steps separated by |, [6 bubbles], [level, text], [question, [3 choices], correct index, explanation])
// “at home” levels: oui (in the garden), pot (even in a pot), jardin (with a big garden), non (not easy here)
(function () {
  function Z(lieu, duree, e, b, chez, quiz) { return { lieu: lieu, duree: duree, e: e.split('|'), b: b, chez: chez, quiz: quiz }; }
  window.SAISON_POUSSE = {
    carotte: Z('🟫 Underground', 'about 4 months', '🌱|🌿|🌼|🚜|📦|🚚', [
      'It all starts with a tiny seed, sown in spring in nice light soil with no stones.',
      'My leaves grow up towards the sky, and I grow bigger in secret under the ground. I’m a root!',
      'If you left me in the ground for 2 years, I’d grow white umbrella-shaped flowers. But I’m picked before that.',
      'After 3 to 5 months, a machine pulls me out of the ground. In the garden, you pull me out by hand by my leafy tops.',
      'I keep for months somewhere cool and dark. That’s why you can find me all year round!',
      'I often come from the Landes or Normandy. A lorry takes me to the shop.'
    ], ['pot', 'Easy in the garden, and possible in a deep pot. Sow in spring, harvest in summer.'],
    ['Which part of the carrot do we eat?', ['The stem', 'The root', 'The flower'], 1, 'Its root! It stores sugar there so it can flower the following year.']),

    tomate: Z('🏡 Outdoors or in a greenhouse', '4 to 5 months', '🌱|🪴|🌼|🧺|🏠|🚚', [
      'My seed is sown somewhere warm at the end of winter, in a little pot. Outside, it’s still too cold for me.',
      'In May, I’m planted outside. I climb so high that I’m tied to a stake so I don’t fall over.',
      'I grow little yellow flowers. Bumblebees make them vibrate, and each flower becomes a tomato!',
      'In summer, I turn from green to red. I’m picked by hand, one by one.',
      'Never in the fridge! The cold makes me lose my taste. I keep for a few days in the kitchen.',
      'In summer, I come from France. In winter, I often travel from Spain or Morocco by lorry.'
    ], ['pot', 'A big pot in the sun on a balcony is enough. Remember to water it often!'],
    ['Who helps the tomato flower turn into a fruit?', ['The bumblebee', 'The butterfly', 'The ladybird'], 0, 'The bumblebee makes the flower vibrate: the pollen falls and the tomato can form.']),

    aubergine: Z('🏡 Outdoors or in a greenhouse', 'about 5 months', '🌱|🪴|🌸|✂️|🧊|🚚', [
      'My seed needs lots of heat to sprout. It is sown somewhere warm from February.',
      'I become a little bush with soft leaves. I love the sun and hate the cold.',
      'My flowers are purple, just like me! Each one can become an aubergine.',
      'In summer, I’m cut with secateurs when my skin is nice and shiny.',
      'I don’t keep for long: a few days somewhere cool, then quickly into the pan!',
      'I come mainly from the south of France or Spain, by lorry.'
    ], ['pot', 'Possible in a big pot, in the sun and sheltered from the wind.'],
    ['What colour is the aubergine flower?', ['Yellow', 'Purple', 'White'], 1, 'Purple, like the fruit! And yes, for botanists, the aubergine is a fruit.']),

    courgette: Z('🌱 Outdoors', 'about 2 months', '🌱|🌿|🌼|🧺|🧊|🚚', [
      'My big flat seed is sown in May, when the soil is nice and warm.',
      'I become a huge plant with giant leaves. Careful, my stems are a bit prickly!',
      'I grow big yellow flowers. Bees go from flower to flower to help me.',
      'I grow so fast that I’m picked almost every day in summer. Otherwise, I get enormous!',
      'I keep for about a week in the fridge, in the vegetable drawer.',
      'I often come from a field not far away, in France. The lorry does the rest.'
    ], ['oui', 'Very easy in the garden. One or two plants are enough for the whole family!'],
    ['How many courgettes can one plant give in a summer?', ['2 or 3', 'About twenty', 'More than 1,000'], 1, 'About twenty! It’s a very generous plant.']),

    concombre: Z('🏡 Outdoors or in a greenhouse', '2 to 3 months', '🌱|🌿|🌼|🧺|🧊|🚚', [
      'My seed is sown in spring, nice and warm. I feel the cold!',
      'I creep or I climb. I cling on everywhere with my little corkscrew tendrils.',
      'My flowers are yellow. When the flower fades, a little cucumber appears just behind it.',
      'I’m picked in summer, when I’m nice and green and firm, before I get too big.',
      'I keep for a few days somewhere cool. I’m full of water, so I get tired quickly.',
      'I often come from greenhouses in France or Spain, by lorry.'
    ], ['pot', 'Possible in a big pot, with a net or trellis so it can climb.'],
    ['A cucumber is made of…?', ['More than 95 % water', 'Half water, half sugar', 'Mostly fibre'], 0, 'More than 95 % water! That’s why it’s so refreshing.']),

    poivron: Z('🏡 Outdoors or in a greenhouse', 'about 5 months', '🌱|🪴|🌼|🧺|🧊|🚚', [
      'My seed is sown somewhere warm in winter. I need more than 20 °C to sprout!',
      'I become a little bush that loves heat and sunshine.',
      'My flowers are white and tiny. They pollinate themselves almost on their own.',
      'I can be picked green. If you wait, I turn yellow then red, and even sweeter!',
      'I keep for about a week somewhere cool.',
      'I come from the south of France, or from Spain and Morocco, by lorry.'
    ], ['pot', 'In a big pot in the sun, on a nice warm balcony.'],
    ['A green pepper and a red pepper are…?', ['Two different plants', 'The same one, picked later', 'A painted pepper'], 1, 'The same! The red one just had more time to ripen.']),

    piment: Z('🌱 Outdoors', 'about 5 months', '🌱|🪴|🌼|🧺|☀️|🚚', [
      'Like my cousin the pepper, my seed sprouts somewhere warm at the end of winter.',
      'I grow into a little bush. I don’t sting: it’s my fruits that will be hot!',
      'I grow little white flowers that become chillies.',
      'I’m picked at the end of summer. In Espelette, people hang me in garlands on their houses.',
      'Dried, I keep for months. I’m even ground into powder.',
      'I come from the Basque Country or Spain. As powder, I travel in a little jar.'
    ], ['pot', 'Pretty in a pot in the sun. But never taste one without an adult!'],
    ['Where is most of a chilli’s heat hidden?', ['In the skin', 'In the seeds and the white part', 'In the stalk'], 1, 'In the seeds and the white part inside. Never rub your eyes afterwards!']),

    brocoli: Z('🌱 Outdoors', 'about 3 months', '🌱|🌿|🌼|🔪|🧊|🚚', [
      'My seed is sown in spring or summer, then I’m replanted in the field.',
      'I become a big plant with bluish leaves. In the middle, a head forms.',
      'My head is full of flower buds! If you wait, they open into yellow flowers.',
      'I’m cut with a knife before my flowers open, when my head is tight and green.',
      'I keep for a few days in the fridge. If I turn yellow, it means I’m flowering!',
      'I come mainly from Brittany, by lorry.'
    ], ['oui', 'In the garden, yes. It needs space and lots of water.'],
    ['When you eat broccoli, you’re eating…?', ['Leaves', 'Flowers that haven’t opened yet', 'Roots'], 1, 'Flower buds! They’re picked just before they bloom.']),

    chou: Z('🌱 Outdoors', '4 to 6 months', '🌱|🥬|🌼|❄️|🧊|🚚', [
      'My seed is sown in spring. Then I’m replanted in the field.',
      'My leaves wrap around each other to form a tight ball.',
      'If you left me until the next spring, I’d grow yellow flowers with 4 petals.',
      'I’m harvested in autumn and winter. I can even survive frost!',
      'I keep for a long time somewhere cool. And after the cold, I get sweeter.',
      'I come from Brittany or Normandy, by lorry.'
    ], ['oui', 'In the garden, yes. Watch out for caterpillars, who love its leaves!'],
    ['What does frost do to cabbage?', ['It makes it rot', 'It makes it sweeter', 'It turns it purple'], 1, 'To protect itself from the cold, cabbage makes sugar. It gets sweeter!']),

    laitue: Z('🌱 Outdoors', 'about 2 months', '🌱|🥬|🌼|🔪|🧊|🚚', [
      'My seed is tiny. It’s sown in spring, almost on the surface of the soil.',
      'My leaves grow in a rosette, tightly packed in the middle. That middle is called the heart.',
      'If you leave me, I shoot up a stem and grow little yellow flowers. But I turn bitter.',
      'I’m cut at the base, by hand, when my heart is well formed.',
      'I’m delicate: a few days in the fridge, wrapped in a damp cloth.',
      'I come from a nearby field: I don’t like long journeys at all.'
    ], ['pot', 'Very easy, even in a window box.'],
    ['What do we call the tight middle of a lettuce?', ['The heart', 'The core', 'The stone'], 0, 'The heart! When it forms, we say the lettuce is “hearting up”.']),

    epinard: Z('🌱 Outdoors', 'about 2 months', '🌱|🌿|🌼|✂️|🧊|🚚', [
      'My seed is sown in spring or at the end of summer. I like it cool.',
      'I make a rosette of tender green leaves, close to the ground.',
      'When it’s too hot, I shoot up into flowers and my leaves get tough.',
      'My leaves are cut before I flower, by hand or by machine.',
      'I wilt quickly: two or three days in the fridge, no more.',
      'I come from fields in France, often in the north or west.'
    ], ['pot', 'Easy in a window box, in spring or autumn.'],
    ['Which cartoon sailor gets strong by eating spinach?', ['Popeye', 'Tintin', 'Asterix'], 0, 'Popeye! Spinach is full of good things, but it doesn’t give you superpowers.']),

    'pomme-de-terre': Z('🟫 Underground', '3 to 4 months', '🥔|🌿|🌸|🚜|📦|🚚', [
      'I don’t grow from a seed: you plant an old potato that has sprouted!',
      'My stems and leaves grow above ground. Underground, new potatoes swell up.',
      'I grow pretty white or purple flowers. My little green fruits must not be eaten!',
      'When my leaves dry up, I’m dug out of the ground with a machine or a fork.',
      'In the dark and cool, I keep for months. In the light, I turn green: not good!',
      'I come mainly from the north of France, by lorry.'
    ], ['pot', 'Possible in a big bag or bucket full of soil. One potato gives about ten!'],
    ['What do you plant to grow potatoes?', ['Seeds', 'Potatoes', 'Leaves'], 1, 'Whole potatoes, called seed potatoes. Each one gives about ten more.']),

    mais: Z('🌱 Outdoors', 'about 4 months', '🌱|🌾|🌬️|🌽|🍳|🚚', [
      'My kernels are sown in spring, when the soil has warmed up.',
      'I grow very fast: in summer, I can be taller than 2 metres!',
      'My flowers are right at the top, like a feather duster. The wind drops their pollen onto the silky threads of my cobs.',
      'The cob is picked in summer, when the kernels are tender and juicy.',
      'I lose my sugar quickly: I must be cooked right after picking.',
      'I come mainly from the south-west of France, by lorry.'
    ], ['oui', 'In the garden, planting several plants side by side so the wind can do its job.'],
    ['Who carries maize pollen?', ['Bees', 'The wind', 'Birds'], 1, 'The wind! It blows the pollen from the tassel to the threads of the cob.']),

    'petit-pois': Z('🌱 Outdoors', 'about 3 months', '🌱|🌿|🌸|🧺|❄️|🚚', [
      'My seeds are sown at the end of winter. They’re dried peas!',
      'I’m a climbing plant: I cling to a trellis with my tendrils.',
      'I grow white flowers that look like little butterflies.',
      'At the start of summer, my pods are picked when they’re nice and plump.',
      'I’m best really fresh. Otherwise, I’m frozen very soon after harvest.',
      'I come from France. Frozen, I travel in refrigerated lorries.'
    ], ['oui', 'Easy in the garden, with a little trellis to climb.'],
    ['How many peas are in a pod, on average?', ['1 or 2', '5 to 10', 'More than 50'], 1, 'Between 5 and 10. Count them next time you shell peas!']),

    'haricot-vert': Z('🌱 Outdoors', '2 to 3 months', '🫘|🌱|🌸|🧺|🧊|🚚', [
      'My seed is sown in May, when it’s mild. My seed is a dried bean!',
      'My seed comes out of the ground lifting two big leaves. Then I grow fast.',
      'I grow little white or purple flowers. Each one becomes a pod.',
      'My pods are picked young and thin, before the seeds inside get big.',
      'I keep for 2 or 3 days in the fridge. Otherwise, in a jar or in the freezer.',
      'In summer, I come from France. In winter, sometimes from Kenya… by plane.'
    ], ['pot', 'Sprout a dried bean in damp cotton wool, then plant it in a pot!'],
    ['A green bean is…?', ['A pod eaten young', 'A root', 'A rolled-up leaf'], 0, 'A pod picked young. If you wait, you get dried beans!']),

    potiron: Z('🌱 Outdoors', '4 to 5 months', '🌱|🌿|🌼|✂️|🏠|🚚', [
      'It all starts in May: my big flat seed is sown in nice warm soil. I hate frost!',
      'I creep everywhere! My stems can be several metres long and my leaves are as big as umbrellas.',
      'In summer, I grow big yellow flowers. Bees go from flower to flower so I can become a squash.',
      'In autumn, when my stalk is nice and dry, I’m cut with secateurs. I often weigh more than 5 kilos!',
      'My thick skin protects me: somewhere dry and cool, I keep for several months. Sometimes all winter!',
      'I often come from the west of France. A lorry takes me to market, no need for a plane.'
    ], ['oui', 'In the garden, yes! Plant a seed in May, somewhere it can spread over 2 metres. Water well in summer.'],
    ['How long can a whole squash keep?', ['A week', 'A month', 'Several months'], 2, 'Several months, somewhere dry and cool. Its thick skin works like armour.']),

    ail: Z('🟫 Underground', 'about 8 months', '🧄|🌿|🌸|🧺|☀️|🚚', [
      'I don’t grow from a seed: you plant a garlic clove in autumn.',
      'I spend the winter underground. In spring, my long leaves come out.',
      'I grow a stem with a ball of little flowers. It’s often cut so my bulb gets bigger.',
      'In summer, when my leaves turn yellow, I’m pulled out of the ground.',
      'I’m dried in the sun. Then I keep until winter.',
      'I come from the south of France (Drôme, Tarn…) or Spain, by lorry.'
    ], ['pot', 'Plant a clove in a pot in autumn: you’ll have a garlic bulb the next summer.'],
    ['How many cloves can a garlic bulb hold?', ['2', '10 to 15', '100'], 1, 'About ten, sometimes more. And each one can grow a new bulb!']),

    oignon: Z('🟫 Underground', 'about 5 months', '🌱|🌿|🌸|🧺|☀️|🚚', [
      'My seed is sown in spring, or a tiny onion is planted.',
      'My leaves are hollow tubes. Down below, under the ground, my bulb grows bigger.',
      'The next year, I’d grow a big ball of white flowers. Bees love them!',
      'At the end of summer, when my leaves flop over, I’m pulled up.',
      'Well dried, I keep for months somewhere dry.',
      'I come from France, like the pink Roscoff onion from Brittany.'
    ], ['pot', 'Got a sprouting onion? Plant it in a pot: it will grow leaves again!'],
    ['Why do onions make you cry?', ['They are sad', 'They release a gas when you cut them', 'They are too sour'], 1, 'When cut, they release a gas that stings your eyes. Tears protect them.']),

    champignon: Z('🕳️ In a cave', 'about 1 month', '✨|🌑|🍄|🖐️|🧊|🚚', [
      'No seeds for me! I start from spores, a dust so fine you can’t see it.',
      'I grow in the dark, in caves, on a mix of straw and manure. No need for sunshine!',
      'I don’t make flowers. What you eat is my cap: that’s what releases my spores.',
      'I’m picked by hand, very gently, while my cap is still closed.',
      'I keep for 3 or 4 days in the fridge, in a paper bag.',
      'I often come from the Saumur area, where there are big caves dug into the rock.'
    ], ['pot', 'With a mushroom kit, they grow in a cardboard box in 2 weeks!'],
    ['A mushroom is…?', ['A vegetable', 'A plant', 'Neither'], 2, 'Neither plant nor vegetable! Mushrooms are a world of their own.']),

    'patate-douce': Z('🟫 Underground', 'about 5 months', '💧|🌿|🌸|🧺|🏠|🚢', [
      'A sweet potato is sprouted in water, then its little shoots are planted.',
      'I’m a vine that creeps along the ground. Underground, my roots swell up.',
      'I grow trumpet-shaped flowers, pink or purple. But here, it’s rare.',
      'In autumn, I’m dug up gently: my skin is delicate!',
      'I keep for a few weeks somewhere dry. Never in the fridge!',
      'I often come from Spain by lorry, or from the United States by ship.'
    ], ['pot', 'Stick toothpicks in a sweet potato and rest it over a glass of water: it will grow leaves!'],
    ['Is the sweet potato a cousin of the potato?', ['Yes, a sister', 'No, not at all', 'Only in America'], 1, 'No! It’s in the bindweed family. Only their names are alike.']),

    fraise: Z('🏡 Outdoors or in a greenhouse', 'about 1 year', '🌿|🪴|🌸|🧺|🧊|🚚', [
      'No need for seeds: my plant sends out runners, long stems that make new plants.',
      'I’m a small, low plant. I’m planted at the end of summer.',
      'In spring, I grow white flowers. Bees come to visit them.',
      'From May to July, I’m picked by hand, one by one. Careful, I don’t ripen any more after that!',
      'I’m delicate: two days somewhere cool, no more.',
      'I come from France (Lot-et-Garonne, Brittany…) or Spain, by lorry.'
    ], ['pot', 'Perfect in a pot or window box on a sunny balcony.'],
    ['Where are the strawberry’s real seeds?', ['Inside', 'On its skin', 'In the stalk'], 1, 'The little grains on its skin are the real fruits, with a seed inside!']),

    cerise: Z('🌳 On a tree', '3 to 5 years', '🌱|🌳|🌸|🪜|🧊|🚚', [
      'No seeds are sown: a young cherry tree is grafted in a nursery so it gives good cherries.',
      'The cherry tree grows slowly. It can live for more than 50 years!',
      'In spring, it’s covered in white flowers. Bees adore them.',
      'In June, I’m picked by hand with my stalk. You often need a ladder!',
      'I only keep for a few days somewhere cool.',
      'I come from France (Provence, Rhône valley), by lorry.'
    ], ['jardin', 'You need a garden and patience. There are also dwarf cherry trees for big pots.'],
    ['How many years before a cherry tree gives its first cherries?', ['1 year', '3 to 5 years', '20 years'], 1, 'You have to be patient: 3 to 5 years after planting.']),

    peche: Z('🌳 On a tree', 'about 3 years', '🌱|🌳|🌸|🧺|🍑|🚚', [
      'It all starts with a little peach tree grafted in a nursery.',
      'The peach tree loves the southern sun. It grows fast.',
      'In spring, it’s covered in pretty pink flowers.',
      'In summer, I’m picked by hand when I smell good and feel soft.',
      'I keep for a few days, out of the fridge to keep my scent.',
      'I come from the Rhône valley or Spain, by lorry.'
    ], ['jardin', 'Possible in the garden, in the sun. You can even plant a stone to see what grows!'],
    ['What colour are peach tree flowers?', ['Pink', 'Blue', 'Black'], 0, 'Pink! A peach orchard in blossom in spring is beautiful.']),

    melon: Z('🌱 Outdoors', '3 to 4 months', '🌱|🌿|🌼|🧺|🧊|🚚', [
      'My seed is sown somewhere warm in spring.',
      'I creep along the ground, like my cousins the courgette and the squash.',
      'I grow yellow flowers. Bees help me make melons.',
      'In summer, when my stalk comes off on its own, I’m ripe!',
      'I keep for a few days. Once cut open, into the fridge.',
      'I come from the south of France (Cavaillon, Charente…) or Spain, by lorry.'
    ], ['oui', 'In the garden, in the sun. It loves heat.'],
    ['How do you know a melon is ripe?', ['It’s all green', 'Its stalk comes off easily', 'It makes a noise'], 1, 'When the stalk comes off, it’s ready. And it smells good too!']),

    pasteque: Z('🌱 Outdoors', '3 to 4 months', '🌱|🌿|🌼|🧺|🧊|🚚', [
      'My black seeds are sown somewhere warm in spring.',
      'I’m a creeping plant that takes up lots of space.',
      'Bees visit my yellow flowers.',
      'In summer, I’m picked when the little tendril near my stalk is dry.',
      'Whole, I keep for more than a week somewhere cool.',
      'I often come from Spain, by lorry. And I’m heavy!'
    ], ['jardin', 'Possible in the garden in the south; it needs lots of heat.'],
    ['How much can a watermelon weigh?', ['100 grams', 'Often 5 to 10 kilos', '1 tonne'], 1, 'Often 5 to 10 kilos! Records are even over 100 kilos.']),

    myrtille: Z('🌿 On a shrub', '2 to 3 years', '🌱|🌿|🔔|🧺|❄️|🚚', [
      'I grow on a little bush, in the mountains or in woodland.',
      'I like acid soil, like in pine forests.',
      'In spring, I grow flowers shaped like little bells.',
      'In summer, I’m picked by hand or with a special comb.',
      'I keep for a few days in the fridge. And I freeze really well!',
      'I come from the Vosges or the Cévennes… or from much further away in winter.'
    ], ['pot', 'In a big pot, with ericaceous (acid) compost.'],
    ['What do blueberry flowers look like?', ['Little bells', 'Stars', 'Daisies'], 0, 'Little white or pink bells.']),

    raisin: Z('🍇 On a vine', 'about 3 years', '🌱|🌿|🌼|✂️|🧊|🚚', [
      'A little vine is planted. It will give grapes after 3 years.',
      'I’m a climber: I cling to wires with my tendrils.',
      'My flowers are tiny and green. You can hardly see them!',
      'In September it’s harvest time: I’m cut in whole bunches.',
      'I keep for a few days somewhere cool.',
      'I come from France, like Moissac Chasselas, by lorry.'
    ], ['jardin', 'Possible in the garden, against a sunny wall.'],
    ['What is the grape harvest called?', ['The crop', 'The vintage', 'The picking'], 1, 'The vintage! It happens at the end of summer.']),

    pomme: Z('🌳 On a tree', '3 to 5 years', '🌱|🌳|🌸|🧺|❄️|🚚', [
      'A pip doesn’t give the same apple as its mum! So young apple trees are grafted.',
      'The apple tree grows in an orchard. It can live a very long time.',
      'In spring, it’s covered in white and pink flowers. Bees come to visit.',
      'In autumn, I’m picked by hand with a gentle twist.',
      'In big cold rooms, I keep all winter.',
      'I often come from France (Loire Valley, south-east), by lorry.'
    ], ['jardin', 'In the garden, yes. There are also dwarf apple trees for pots.'],
    ['If you plant a Golden apple pip, you get…?', ['A Golden apple', 'A different apple', 'A pear'], 1, 'A different apple! That’s why apple trees are grafted.']),

    poire: Z('🌳 On a tree', '3 to 5 years', '🌱|🌳|🌸|🧺|🏠|🚚', [
      'Like the apple tree, the young pear tree is grafted in a nursery.',
      'The pear tree grows in an orchard. It can live for 100 years!',
      'In spring, it’s covered in white flowers.',
      'Surprise: I’m picked before I’m ripe! I finish ripening in the kitchen.',
      'Somewhere cool, some varieties keep until winter.',
      'I come from France (Loire Valley, Rhône valley), by lorry.'
    ], ['jardin', 'In the garden, yes, with a little patience.'],
    ['When are pears picked?', ['When they fall', 'Before they are ripe', 'In winter under the snow'], 1, 'Before! If it ripens on the tree, it goes floury.']),

    chataigne: Z('🌳 On a tree', '5 to 10 years', '🌰|🌳|🌼|🍂|☀️|🚚', [
      'I grow on the chestnut tree, a big forest tree.',
      'The chestnut tree can live for several hundred years!',
      'In summer, it grows long fluffy flowers that smell very strong.',
      'In autumn, I fall to the ground in my spiky husk. People pick me up!',
      'Dried or as flour, I keep for a long time.',
      'I come from Ardèche, the Cévennes or Corsica.'
    ], ['non', 'A chestnut tree gets huge. Better to go and gather chestnuts in the forest!'],
    ['What is the chestnut’s spiky case called?', ['The husk', 'The shell', 'The armour'], 0, 'The husk (or burr)! It protects 2 or 3 chestnuts.']),

    kiwi: Z('🌿 On a vine', '3 to 4 years', '🌱|🌿|🌼|🧺|❄️|🚢', [
      'I grow on a vine that is planted and trained to climb.',
      'My vine climbs on wires, like a grapevine.',
      'You need a male plant and a female plant! Bees carry the pollen from one to the other.',
      'In November, I’m picked while still hard. I ripen afterwards.',
      'Somewhere cool, I keep for months.',
      'I come from the south-west (Adour valley), or from New Zealand by ship.'
    ], ['jardin', 'In the garden, against a trellis, with a male and a female plant.'],
    ['To get kiwis, you need…?', ['Just one plant', 'A male and a female plant', 'Lots of snow'], 1, 'A male and a female! Only the female makes fruit.']),

    clementine: Z('🌳 On a tree', '3 to 4 years', '🌱|🌳|🌸|✂️|🏠|🚢', [
      'I grow on a little tree, the clementine tree, which loves the sun.',
      'Its leaves stay green all year.',
      'In spring, its white flowers smell lovely.',
      'In winter, I’m cut with my leaves, especially in Corsica.',
      'I keep for one to two weeks.',
      'I come from Corsica by ship, or from Spain by lorry.'
    ], ['non', 'It’s too cold in most regions. Only in a big pot, brought inside for winter.'],
    ['Why do Corsican clementines keep their leaves?', ['For decoration', 'To show they are fresh', 'To protect them from the cold'], 1, 'The leaves show they were picked not long ago.']),

    orange: Z('🌳 On a tree', '3 to 4 years', '🌱|🌳|🌸|🧺|🏠|🚚', [
      'I grow on the orange tree, a tree from hot countries.',
      'The orange tree keeps its leaves all year.',
      'Its white flowers are called orange blossom. They’re used to make perfume!',
      'In winter, I’m picked by hand.',
      'I keep for one to two weeks.',
      'I come from Spain or Morocco, by lorry.'
    ], ['non', 'Too cold here to grow outdoors. A dwarf orange tree in a pot, brought in for winter, can work.'],
    ['Orange blossom is used to make…?', ['Perfume and cakes', 'Orange juice', 'Chocolate'], 0, 'Orange blossom water, which flavours cakes and pancakes!']),

    citron: Z('🌳 On a tree', '3 to 4 years', '🌱|🌳|🌸|🧺|🏠|🚚', [
      'I grow on the lemon tree, a tree that loves the sun.',
      'It keeps its leaves all year and can flower several times a year.',
      'Its white and mauve flowers smell lovely.',
      'I’m picked by hand, yellow or sometimes still green.',
      'I keep for several weeks.',
      'I come from Spain by lorry, or from Menton, on the French Riviera.'
    ], ['pot', 'In a big pot, in the sun, brought under cover during winter.'],
    ['A lemon tree can have at the same time…?', ['Flowers and fruit', 'Apples', 'Snow'], 0, 'Yes! It flowers several times a year.']),

    avocat: Z('🌳 On a tree', '4 to 5 years', '🌱|🌳|🌼|🧺|🏠|🚢', [
      'I grow on a big tree, the avocado tree.',
      'It comes from the Americas and loves heat.',
      'It grows thousands of tiny green flowers.',
      'I’m picked while still hard: I never ripen on the tree!',
      'In the kitchen, I ripen in a few days.',
      'I come from Spain by lorry, or from Peru by ship.'
    ], ['pot', 'Sprout a stone in a glass of water, held up by 3 toothpicks. Be patient!'],
    ['Does an avocado ripen on the tree?', ['Yes', 'No, only after picking', 'Only at night'], 1, 'No! It only ripens once picked.']),

    banane: Z('🌴 On a banana plant', '9 months to 1 year', '🌱|🌴|🌺|🔪|🏠|🚢', [
      'Surprise: the banana plant isn’t a tree, it’s a giant herb!',
      'New shoots come out at its base. They are replanted.',
      'A huge purple flower hangs down, and behind it a bunch of bananas grows.',
      'The bunch is cut while the bananas are still green.',
      'I ripen while travelling, then in a special room.',
      'I come from the French Caribbean, by ship.'
    ], ['non', 'It needs tropical heat. Too cold here!'],
    ['The banana plant is…?', ['A tree', 'A giant herb', 'A cactus'], 1, 'A giant herb! It has no wood.']),

    ananas: Z('🌱 Outdoors', 'about 18 months', '👑|🌱|🌸|🔪|🏠|🚢', [
      'You plant the crown of leaves from a pineapple!',
      'I grow close to the ground, with long, pointed leaves.',
      'In the middle, I grow lots of little purple flowers.',
      'Each flower becomes a piece of pineapple. I need a year and a half to be ready!',
      'I keep for a few days, in the kitchen.',
      'I come from Costa Rica, by ship.'
    ], ['pot', 'Plant the crown in a pot, somewhere warm. You’ll need lots of patience!'],
    ['How long does it take to grow a pineapple?', ['1 month', 'About 18 months', '10 years'], 1, 'About a year and a half!']),

    mangue: Z('🌳 On a tree', '4 to 6 years', '🌱|🌳|🌸|🧺|🏠|🚢', [
      'I grow on the mango tree, a big tropical tree.',
      'The mango tree can live a very long time and get huge.',
      'It grows clusters of little flowers.',
      'I’m picked by hand.',
      'I finish ripening in the kitchen.',
      'I come from Peru or Brazil, by ship or by plane.'
    ], ['non', 'It needs tropical heat.'],
    ['A mango tree can be…?', ['1 metre tall', 'More than 30 metres tall', '10 centimetres tall'], 1, 'More than 30 metres! A real giant.']),

    basilic: Z('🏡 Outdoors or in a greenhouse', 'about 2 months', '🌱|🌿|🌼|✂️|🥛|🚚', [
      'My little black seeds are sown somewhere warm in spring.',
      'My leaves grow fast in the sun. They smell lovely when you rub them.',
      'My flowers are pinched off so I grow more leaves.',
      'My leaves are cut as and when needed.',
      'Never in the fridge! I keep like a bunch of flowers, in a glass of water.',
      'I come from France in summer.'
    ], ['pot', 'Perfect in a pot, in the sun, near the window.'],
    ['Where should you keep basil?', ['In the fridge', 'In a glass of water', 'In the oven'], 1, 'Like a bunch of flowers!']),

    menthe: Z('🌱 Outdoors', 'about 2 months', '🌿|🌿|🌸|✂️|☀️|🚚', [
      'You plant a little piece of root… and off it goes!',
      'My roots run underground and I grow everywhere.',
      'I grow little mauve flowers.',
      'My stems are cut when needed.',
      'Dried, I keep for herbal teas.',
      'I come from France or Morocco.'
    ], ['pot', 'In a pot, yes! In the garden, it would take over everything.'],
    ['Why is mint planted in a pot?', ['It takes over everything', 'It’s afraid of the dark', 'It’s too small'], 0, 'It takes over everything! The pot keeps it under control.']),

    persil: Z('🌱 Outdoors', 'about 3 months', '🌱|🌿|🌼|✂️|🥛|🚚', [
      'My seed takes a very long time to sprout: sometimes more than 3 weeks!',
      'I make a rosette of leaves, flat or curly.',
      'In my second year, I grow umbrella-shaped flowers, like my cousin the carrot.',
      'My leaves are cut when needed.',
      'In a glass of water, or frozen.',
      'I come from France.'
    ], ['pot', 'Very easy in a pot, on the windowsill.'],
    ['Which vegetable is a cousin of parsley?', ['The carrot', 'The tomato', 'The strawberry'], 0, 'The carrot! They have the same umbrella-shaped flowers.']),

    ciboulette: Z('🌱 Outdoors', 'about 2 months', '🌱|🌿|🌸|✂️|❄️|🚚', [
      'My seed is sown in spring, or a clump is divided.',
      'My leaves are thin tubes, like straws.',
      'I grow pretty mauve pompom flowers, which you can eat!',
      'My leaves are cut with scissors, and they grow back.',
      'I keep for a few days in the fridge, or snipped in the freezer.',
      'I come from France.'
    ], ['pot', 'Very easy in a pot. It grows back every time you cut it!'],
    ['Can you eat chive flowers?', ['Yes', 'No', 'Only cooked'], 0, 'Yes! They have a little onion taste.']),

    thym: Z('🌿 On a little shrub', 'about 1 year', '🌱|🌿|🌸|✂️|☀️|🚚', [
      'I’m a tiny shrub from the hills of the south, the garrigue.',
      'I like the sun and dry, stony soil.',
      'I grow tiny mauve flowers. Bees love them!',
      'My branches are cut.',
      'Dried, I keep for months.',
      'I come from Provence.'
    ], ['pot', 'In a pot, in the sun, with little watering.'],
    ['Where does wild thyme grow?', ['In the garrigue', 'In the sea', 'Under the snow'], 0, 'In the garrigue, the dry hills of the south.']),

    gingembre: Z('🟫 Underground', '8 to 10 months', '🫚|🌿|🌺|🧺|☀️|🚢', [
      'You plant a piece of root, the rhizome.',
      'My stems look like reeds.',
      'I grow pretty flowers, but it’s rare.',
      'I’m dug up after 8 to 10 months.',
      'I keep for a few weeks somewhere cool, and I freeze really well.',
      'I come from Peru or China, by ship.'
    ], ['pot', 'Plant a piece with little buds in a pot, somewhere warm.'],
    ['Which part of ginger do we eat?', ['The flower', 'The rhizome, an underground stem', 'The leaves'], 1, 'The rhizome: a stem that grows underground.'])
  };
})();
