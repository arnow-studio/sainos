// Mode enfant « Comment ça pousse ? » : window.SAISON_POUSSE[slug]
// Z(lieu, duree, emojis des 6 cases séparés par |, [6 bulles], [niveau, texte], [question, [3 choix], index bonne réponse, explication])
// niveaux « chez toi » : oui (au jardin), pot (même en pot), jardin (avec un grand jardin), non (pas facile chez nous)
(function () {
  function Z(lieu, duree, e, b, chez, quiz) { return { lieu: lieu, duree: duree, e: e.split('|'), b: b, chez: chez, quiz: quiz }; }
  window.SAISON_POUSSE = {
    carotte: Z('🟫 Sous la terre', 'environ 4 mois', '🌱|🌿|🌼|🚜|📦|🚚', [
      'Tout commence par une graine minuscule, semée au printemps dans une terre bien légère, sans cailloux.',
      'Mes feuilles poussent vers le ciel, et moi je grossis en cachette sous la terre. Je suis une racine !',
      'Si on me laissait 2 ans en terre, je ferais des fleurs blanches en ombrelle. Mais on me récolte avant.',
      'Après 3 à 5 mois, une machine me tire de terre. Au jardin, on me sort à la main en tirant sur mes fanes.',
      'Je me garde des mois au frais et dans le noir. C’est pour ça qu’on me trouve toute l’année !',
      'Je viens souvent des Landes ou de Normandie. Un camion m’emmène jusqu’au magasin.'
    ], ['pot', 'Facile au jardin, et possible dans un pot profond. Sème au printemps, récolte en été.'],
    ['Quelle partie de la carotte mange-t-on ?', ['La tige', 'La racine', 'La fleur'], 1, 'Sa racine ! Elle y stocke du sucre pour pouvoir fleurir l’année suivante.']),

    tomate: Z('🏡 En pleine terre ou sous serre', '4 à 5 mois', '🌱|🪴|🌼|🧺|🏠|🚚', [
      'Ma graine est semée au chaud à la fin de l’hiver, dans un petit pot. Dehors, il fait encore trop froid pour moi.',
      'En mai, on me plante dehors. Je grimpe si haut qu’on m’attache à un tuteur pour ne pas tomber.',
      'Je fais des petites fleurs jaunes. Les bourdons les font vibrer, et chaque fleur devient une tomate !',
      'En été, je passe du vert au rouge. On me cueille à la main, une par une.',
      'Jamais au frigo ! Le froid me fait perdre mon goût. Je me garde quelques jours dans la cuisine.',
      'En été, je viens de France. En hiver, je voyage souvent depuis l’Espagne ou le Maroc en camion.'
    ], ['pot', 'Un grand pot au soleil sur le balcon suffit. Pense à l’arroser souvent !'],
    ['Qui aide la fleur de tomate à devenir un fruit ?', ['Le bourdon', 'Le papillon', 'La coccinelle'], 0, 'Le bourdon fait vibrer la fleur : le pollen tombe et la tomate peut se former.']),

    aubergine: Z('🏡 En pleine terre ou sous serre', 'environ 5 mois', '🌱|🪴|🌸|✂️|🧊|🚚', [
      'Ma graine a besoin de beaucoup de chaleur pour germer. On la sème au chaud dès le mois de février.',
      'Je deviens un petit buisson aux feuilles douces. J’adore le soleil et je déteste le froid.',
      'Mes fleurs sont violettes, comme moi ! Chacune peut devenir une aubergine.',
      'En été, on me coupe avec un sécateur quand ma peau est bien brillante.',
      'Je ne me garde pas longtemps : quelques jours au frais, puis vite à la poêle !',
      'Je viens surtout du sud de la France ou d’Espagne, en camion.'
    ], ['pot', 'Possible en grand pot, au soleil et bien à l’abri du vent.'],
    ['De quelle couleur est la fleur d’aubergine ?', ['Jaune', 'Violette', 'Blanche'], 1, 'Violette, comme le fruit ! Et oui, pour les botanistes, l’aubergine est un fruit.']),

    courgette: Z('🌱 En pleine terre', 'environ 2 mois', '🌱|🌿|🌼|🧺|🧊|🚚', [
      'On sème ma grosse graine plate en mai, quand la terre est bien chaude.',
      'Je deviens une énorme plante aux feuilles géantes. Attention, mes tiges piquent un peu !',
      'Je fais de grandes fleurs jaunes. Les abeilles passent de fleur en fleur pour m’aider.',
      'Je grandis si vite qu’on me cueille presque tous les jours en été. Sinon, je deviens énorme !',
      'Je me garde environ une semaine au frigo, dans le bac à légumes.',
      'Je viens souvent d’un champ pas loin, en France. Le camion fait le reste.'
    ], ['oui', 'Très facile au jardin. Une ou deux plantes suffisent pour toute la famille !'],
    ['Combien de courgettes un seul pied peut-il donner en un été ?', ['2 ou 3', 'Une vingtaine', 'Plus de 1 000'], 1, 'Une vingtaine ! C’est une plante très généreuse.']),

    concombre: Z('🏡 En pleine terre ou sous serre', '2 à 3 mois', '🌱|🌿|🌼|🧺|🧊|🚚', [
      'Ma graine est semée au printemps, bien au chaud. Je suis frileux !',
      'Je rampe ou je grimpe. Je m’accroche partout avec mes petites vrilles en tire-bouchon.',
      'Mes fleurs sont jaunes. Quand la fleur fane, un petit concombre apparaît juste derrière.',
      'On me cueille en été, quand je suis bien vert et ferme, avant que je devienne trop gros.',
      'Je me garde quelques jours au frais. Je suis plein d’eau, alors je me fatigue vite.',
      'Je viens souvent de serres en France ou en Espagne, en camion.'
    ], ['pot', 'Possible en grand pot, avec un filet ou un grillage pour qu’il grimpe.'],
    ['Le concombre est fait de… ?', ['Plus de 95 % d’eau', 'Moitié eau, moitié sucre', 'Surtout de fibres'], 0, 'Plus de 95 % d’eau ! C’est pour ça qu’il est si rafraîchissant.']),

    poivron: Z('🏡 En pleine terre ou sous serre', 'environ 5 mois', '🌱|🪴|🌼|🧺|🧊|🚚', [
      'Ma graine est semée au chaud en hiver. Il me faut plus de 20 °C pour germer !',
      'Je deviens un petit buisson qui adore la chaleur et le soleil.',
      'Mes fleurs sont blanches et toutes petites. Elles se fécondent presque toutes seules.',
      'On peut me cueillir vert. Si on attend, je deviens jaune puis rouge, et encore plus sucré !',
      'Je me garde environ une semaine au frais.',
      'Je viens du sud de la France, ou d’Espagne et du Maroc, en camion.'
    ], ['pot', 'En grand pot au soleil, sur un balcon bien chaud.'],
    ['Poivron vert et poivron rouge, c’est… ?', ['Deux plantes différentes', 'Le même, cueilli plus tard', 'Un poivron peint'], 1, 'C’est le même ! Le rouge a juste eu plus de temps pour mûrir.']),

    piment: Z('🌱 En pleine terre', 'environ 5 mois', '🌱|🪴|🌼|🧺|☀️|🚚', [
      'Comme mon cousin le poivron, ma graine germe au chaud, à la fin de l’hiver.',
      'Je pousse en petit buisson. Moi je ne pique pas : ce sont mes fruits qui piqueront !',
      'Je fais des petites fleurs blanches qui deviennent des piments.',
      'On me cueille à la fin de l’été. À Espelette, on m’accroche en guirlandes sur les maisons.',
      'Séché, je me garde des mois. On me réduit même en poudre.',
      'Je viens du Pays basque ou d’Espagne. En poudre, je voyage dans un petit pot.'
    ], ['pot', 'Joli en pot au soleil. Mais on ne le goûte jamais sans un adulte !'],
    ['Où se cache surtout le piquant du piment ?', ['Dans la peau', 'Dans les graines et la partie blanche', 'Dans la queue'], 1, 'Dans les graines et la partie blanche à l’intérieur. Ne te frotte jamais les yeux après !']),

    brocoli: Z('🌱 En pleine terre', 'environ 3 mois', '🌱|🌿|🌼|🔪|🧊|🚚', [
      'On sème ma graine au printemps ou en été, puis on me replante dans le champ.',
      'Je deviens une grande plante aux feuilles bleutées. Au centre, une tête se forme.',
      'Ma tête, c’est plein de boutons de fleurs ! Si on attend, ils s’ouvrent en fleurs jaunes.',
      'On me coupe au couteau avant que mes fleurs s’ouvrent, quand ma tête est bien serrée et verte.',
      'Je me garde quelques jours au frigo. Si je jaunis, c’est que je fleuris !',
      'Je viens surtout de Bretagne, en camion.'
    ], ['oui', 'Au jardin, oui. Il lui faut de la place et beaucoup d’eau.'],
    ['Quand on mange du brocoli, on mange… ?', ['Des feuilles', 'Des fleurs pas encore ouvertes', 'Des racines'], 1, 'Des boutons de fleurs ! On les cueille juste avant qu’ils fleurissent.']),

    chou: Z('🌱 En pleine terre', '4 à 6 mois', '🌱|🥬|🌼|❄️|🧊|🚚', [
      'Ma graine est semée au printemps. Ensuite, on me replante dans le champ.',
      'Mes feuilles s’enroulent les unes sur les autres pour former une boule bien serrée.',
      'Si on me laissait jusqu’au printemps suivant, je ferais des fleurs jaunes à 4 pétales.',
      'On me récolte en automne et en hiver. Je résiste même au gel !',
      'Je me garde longtemps au frais. Et après le froid, je deviens plus doux.',
      'Je viens de Bretagne ou de Normandie, en camion.'
    ], ['oui', 'Au jardin, oui. Attention aux chenilles qui adorent ses feuilles !'],
    ['Que fait le gel au chou ?', ['Il le fait pourrir', 'Il le rend plus doux', 'Il le rend violet'], 1, 'Pour se protéger du froid, le chou fabrique du sucre. Il devient plus doux !']),

    laitue: Z('🌱 En pleine terre', 'environ 2 mois', '🌱|🥬|🌼|🔪|🧊|🚚', [
      'Ma graine est minuscule. On la sème au printemps, presque à la surface de la terre.',
      'Mes feuilles poussent en rosette, bien serrées au centre. Ce cœur, on l’appelle la pomme.',
      'Si on me laisse, je monte en tige et je fais des petites fleurs jaunes. Mais je deviens amère.',
      'On me coupe au pied, à la main, quand ma pomme est bien formée.',
      'Je suis fragile : quelques jours au frigo, enroulée dans un linge humide.',
      'Je viens d’un champ proche : je n’aime pas du tout les longs voyages.'
    ], ['pot', 'Très facile, même dans une jardinière au bord de la fenêtre.'],
    ['Comment appelle-t-on le cœur bien serré d’une salade ?', ['La pomme', 'La poire', 'Le noyau'], 0, 'On dit que la laitue « pomme » quand son cœur se forme.']),

    epinard: Z('🌱 En pleine terre', 'environ 2 mois', '🌱|🌿|🌼|✂️|🧊|🚚', [
      'On sème ma graine au printemps ou à la fin de l’été. J’aime la fraîcheur.',
      'Je fais une rosette de feuilles vertes et tendres, au ras du sol.',
      'Quand il fait trop chaud, je monte en fleurs et mes feuilles deviennent dures.',
      'On coupe mes feuilles avant que je fleurisse, à la main ou à la machine.',
      'Je fane vite : deux ou trois jours au frigo, pas plus.',
      'Je viens de champs en France, souvent du Nord ou de l’Ouest.'
    ], ['pot', 'Facile en jardinière, au printemps ou à l’automne.'],
    ['Quel marin de dessin animé devient fort en mangeant des épinards ?', ['Popeye', 'Tintin', 'Astérix'], 0, 'Popeye ! Les épinards sont pleins de bonnes choses, mais ils ne donnent pas de super-pouvoirs.']),

    'pomme-de-terre': Z('🟫 Sous la terre', '3 à 4 mois', '🥔|🌿|🌸|🚜|📦|🚚', [
      'Je ne pousse pas d’une graine : on plante une vieille pomme de terre qui a fait des germes !',
      'Mes tiges et mes feuilles poussent en haut. Sous terre, de nouvelles pommes de terre grossissent.',
      'Je fais de jolies fleurs blanches ou violettes. Mes petits fruits verts, eux, ne se mangent pas !',
      'Quand mes feuilles sèchent, on me sort de terre avec une machine ou une fourche.',
      'Dans le noir et au frais, je me garde des mois. À la lumière, je deviens verte : pas bon !',
      'Je viens surtout du Nord de la France, en camion.'
    ], ['pot', 'Possible dans un grand sac ou un seau rempli de terre. Une pomme de terre en donne une dizaine !'],
    ['Que plante-t-on pour faire pousser des pommes de terre ?', ['Des graines', 'Des pommes de terre', 'Des feuilles'], 1, 'Des pommes de terre entières, qu’on appelle des plants. Chacune en redonne une dizaine.']),

    mais: Z('🌱 En pleine terre', 'environ 4 mois', '🌱|🌾|🌬️|🌽|🍳|🚚', [
      'On sème mes grains au printemps, quand la terre est bien réchauffée.',
      'Je grandis très vite : en été, je peux dépasser 2 mètres de haut !',
      'Mes fleurs sont tout en haut, en plumeau. Le vent fait tomber leur pollen sur les fils de mes épis.',
      'On cueille l’épi en été, quand les grains sont tendres et pleins de jus.',
      'Je perds vite mon sucre : il faut me cuisiner juste après la cueillette.',
      'Je viens surtout du Sud-Ouest de la France, en camion.'
    ], ['oui', 'Au jardin, en plantant plusieurs pieds côte à côte pour que le vent fasse son travail.'],
    ['Qui transporte le pollen du maïs ?', ['Les abeilles', 'Le vent', 'Les oiseaux'], 1, 'Le vent ! Il fait voler le pollen du plumeau jusqu’aux fils de l’épi.']),

    'petit-pois': Z('🌱 En pleine terre', 'environ 3 mois', '🌱|🌿|🌸|🧺|❄️|🚚', [
      'On sème mes graines à la fin de l’hiver. Ce sont des petits pois secs !',
      'Je suis une plante grimpante : je m’accroche à un grillage avec mes vrilles.',
      'Je fais des fleurs blanches qui ressemblent à des petits papillons.',
      'Au début de l’été, on cueille mes gousses quand elles sont bien gonflées.',
      'Je suis meilleur tout frais. Sinon, on me congèle très vite après la récolte.',
      'Je viens de France. Surgelé, je voyage dans des camions frigorifiques.'
    ], ['oui', 'Facile au jardin, avec un petit grillage pour grimper.'],
    ['Combien de petits pois dans une gousse, en moyenne ?', ['1 ou 2', '5 à 10', 'Plus de 50'], 1, 'Entre 5 et 10. À toi de compter la prochaine fois que tu écosses !']),

    'haricot-vert': Z('🌱 En pleine terre', '2 à 3 mois', '🫘|🌱|🌸|🧺|🧊|🚚', [
      'On sème ma graine en mai, quand il fait doux. Ma graine, c’est un haricot sec !',
      'Ma graine sort de terre en soulevant deux grosses feuilles. Ensuite, je pousse vite.',
      'Je fais des petites fleurs blanches ou violettes. Chacune devient une gousse.',
      'On cueille mes gousses jeunes et fines, avant que les graines grossissent dedans.',
      'Je me garde 2 ou 3 jours au frigo. Sinon, en bocal ou au congélateur.',
      'En été, je viens de France. En hiver, parfois du Kenya… en avion.'
    ], ['pot', 'Fais germer un haricot sec dans du coton humide, puis plante-le dans un pot !'],
    ['Le haricot vert, c’est… ?', ['Une gousse qu’on mange jeune', 'Une racine', 'Une feuille roulée'], 0, 'Une gousse cueillie jeune. Si on attend, on obtient des haricots secs !']),

    potiron: Z('🌱 En pleine terre', '4 à 5 mois', '🌱|🌿|🌼|✂️|🏠|🚚', [
      'Tout commence en mai : on sème ma grosse graine plate dans une terre bien chaude. Je déteste le gel !',
      'Je rampe partout ! Mes tiges peuvent faire plusieurs mètres et mes feuilles sont grandes comme des parapluies.',
      'En été, je fais de grandes fleurs jaunes. Les abeilles passent de fleur en fleur pour que je devienne un potiron.',
      'En automne, quand ma queue est bien sèche, on me coupe au sécateur. Je pèse souvent plus de 5 kilos !',
      'Ma peau épaisse me protège : dans un endroit sec et frais, je me garde plusieurs mois. Tout l’hiver parfois !',
      'Je viens souvent de l’Ouest de la France. Un camion m’emmène au marché, pas besoin de prendre l’avion.'
    ], ['oui', 'Au jardin, oui ! Plante une graine en mai, à un endroit où il pourra s’étaler sur 2 mètres. Arrose bien en été.'],
    ['Combien de temps peut se garder un potiron entier ?', ['Une semaine', 'Un mois', 'Plusieurs mois'], 2, 'Plusieurs mois, dans un endroit sec et frais. Sa peau épaisse fait comme une armure.']),

    ail: Z('🟫 Sous la terre', 'environ 8 mois', '🧄|🌿|🌸|🧺|☀️|🚚', [
      'Je ne pousse pas d’une graine : on plante une gousse d’ail en automne.',
      'Je passe l’hiver sous terre. Au printemps, mes longues feuilles sortent.',
      'Je fais une tige avec une boule de petites fleurs. On la coupe souvent pour que ma tête grossisse.',
      'En été, quand mes feuilles jaunissent, on m’arrache de terre.',
      'On me fait sécher au soleil. Ensuite, je me garde jusqu’à l’hiver.',
      'Je viens du sud de la France (Drôme, Tarn…) ou d’Espagne, en camion.'
    ], ['pot', 'Plante une gousse en automne dans un pot : tu auras une tête d’ail l’été suivant.'],
    ['Combien de gousses peut contenir une tête d’ail ?', ['2', '10 à 15', '100'], 1, 'Une dizaine, parfois plus. Et chacune peut redonner une nouvelle tête !']),

    oignon: Z('🟫 Sous la terre', 'environ 5 mois', '🌱|🌿|🌸|🧺|☀️|🚚', [
      'On sème ma graine au printemps, ou on plante un tout petit oignon.',
      'Mes feuilles sont des tubes creux. En bas, sous la terre, mon bulbe grossit.',
      'L’année suivante, je ferais une grosse boule de fleurs blanches. Les abeilles adorent !',
      'À la fin de l’été, quand mes feuilles se couchent, on m’arrache.',
      'Bien séché, je me garde des mois dans un endroit sec.',
      'Je viens de France, comme l’oignon rosé de Roscoff, en Bretagne.'
    ], ['pot', 'Un oignon qui a germé ? Plante-le dans un pot : il refera des feuilles !'],
    ['Pourquoi l’oignon fait-il pleurer ?', ['Il est triste', 'Il libère un gaz quand on le coupe', 'Il est trop acide'], 1, 'En le coupant, il libère un gaz qui pique les yeux. Les larmes les protègent.']),

    champignon: Z('🕳️ Dans une cave', 'environ 1 mois', '✨|🌑|🍄|🖐️|🧊|🚚', [
      'Pas de graine pour moi ! Je pars de spores, une poussière si fine qu’on ne la voit pas.',
      'Je pousse dans le noir, dans des caves, sur un mélange de paille et de fumier. Pas besoin de soleil !',
      'Je ne fais pas de fleur. Ce que tu manges, c’est mon chapeau : c’est lui qui lance mes spores.',
      'On me cueille à la main, tout doucement, quand mon chapeau est encore bien fermé.',
      'Je me garde 3 ou 4 jours au frigo, dans un sac en papier.',
      'Je viens souvent de la région de Saumur, où il y a de grandes caves creusées dans la roche.'
    ], ['pot', 'Avec un kit à champignons, ils poussent dans une boîte en carton en 2 semaines !'],
    ['Le champignon, c’est… ?', ['Un légume', 'Une plante', 'Ni l’un ni l’autre'], 2, 'Ni plante ni légume ! Les champignons forment un monde à part.']),

    'patate-douce': Z('🟫 Sous la terre', 'environ 5 mois', '💧|🌿|🌸|🧺|🏠|🚢', [
      'On fait germer une patate douce dans l’eau, puis on plante ses petites pousses.',
      'Je suis une liane qui rampe sur le sol. Sous terre, mes racines gonflent.',
      'Je fais des fleurs en trompette, roses ou violettes. Mais chez nous, c’est rare.',
      'En automne, on me déterre doucement : ma peau est fragile !',
      'Je me garde quelques semaines au sec. Jamais au frigo !',
      'Je viens souvent d’Espagne en camion, ou des États-Unis en bateau.'
    ], ['pot', 'Pique une patate douce avec des cure-dents au-dessus d’un verre d’eau : elle fera des feuilles !'],
    ['La patate douce est-elle cousine de la pomme de terre ?', ['Oui, une sœur', 'Non, pas du tout', 'Seulement en Amérique'], 1, 'Non ! Elle est de la famille du liseron. Seul leur nom se ressemble.']),

    fraise: Z('🏡 En pleine terre ou sous serre', 'environ 1 an', '🌿|🪴|🌸|🧺|🧊|🚚', [
      'Pas besoin de graine : mon pied fait des stolons, de longues tiges qui donnent de nouvelles plantes.',
      'Je suis une petite plante toute basse. On me plante à la fin de l’été.',
      'Au printemps, je fais des fleurs blanches. Les abeilles viennent les butiner.',
      'De mai à juillet, on me cueille à la main, une par une. Attention, je ne mûris plus après !',
      'Je suis fragile : deux jours au frais, pas plus.',
      'Je viens de France (Lot-et-Garonne, Bretagne…) ou d’Espagne, en camion.'
    ], ['pot', 'Parfait en pot ou en jardinière sur un balcon ensoleillé.'],
    ['Où sont les vraies graines de la fraise ?', ['À l’intérieur', 'Sur sa peau', 'Dans la queue'], 1, 'Les petits grains sur sa peau sont les vrais fruits, avec une graine dedans !']),

    cerise: Z('🌳 Sur un arbre', '3 à 5 ans', '🌱|🌳|🌸|🪜|🧊|🚚', [
      'On ne sème pas de graine : on greffe un petit cerisier en pépinière, pour qu’il donne de bonnes cerises.',
      'Le cerisier grandit doucement. Il peut vivre plus de 50 ans !',
      'Au printemps, il se couvre de fleurs blanches. Les abeilles en raffolent.',
      'En juin, on me cueille à la main avec ma queue. Il faut souvent une échelle !',
      'Je ne me garde que quelques jours au frais.',
      'Je viens de France (Provence, vallée du Rhône), en camion.'
    ], ['jardin', 'Il faut un jardin et de la patience. Il existe aussi des cerisiers nains pour les grands pots.'],
    ['Après combien d’années un cerisier donne-t-il ses premières cerises ?', ['1 an', '3 à 5 ans', '20 ans'], 1, 'Il faut être patient : 3 à 5 ans après la plantation.']),

    peche: Z('🌳 Sur un arbre', 'environ 3 ans', '🌱|🌳|🌸|🧺|🍑|🚚', [
      'Tout commence par un petit pêcher greffé en pépinière.',
      'Le pêcher aime le soleil du Sud. Il grandit vite.',
      'Au printemps, il se couvre de jolies fleurs roses.',
      'En été, on me cueille à la main quand je sens bon et que je suis souple.',
      'Je me garde quelques jours, hors du frigo pour garder mon parfum.',
      'Je viens de la vallée du Rhône ou d’Espagne, en camion.'
    ], ['jardin', 'Possible au jardin, au soleil. Tu peux même planter un noyau pour voir ce qui pousse !'],
    ['De quelle couleur sont les fleurs du pêcher ?', ['Roses', 'Bleues', 'Noires'], 0, 'Roses ! Un verger de pêchers en fleurs au printemps, c’est magnifique.']),

    melon: Z('🌱 En pleine terre', '3 à 4 mois', '🌱|🌿|🌼|🧺|🧊|🚚', [
      'Ma graine est semée au chaud au printemps.',
      'Je rampe au sol, comme mes cousins la courgette et le potiron.',
      'Je fais des fleurs jaunes. Les abeilles m’aident à faire des melons.',
      'En été, quand ma queue se détache toute seule, je suis mûr !',
      'Je me garde quelques jours. Une fois ouvert, direction le frigo.',
      'Je viens du sud de la France (Cavaillon, Charentes…) ou d’Espagne, en camion.'
    ], ['oui', 'Au jardin, au soleil. Il adore la chaleur.'],
    ['Comment sait-on qu’un melon est mûr ?', ['Il est tout vert', 'Sa queue se détache facilement', 'Il fait du bruit'], 1, 'Quand la queue se détache, il est prêt. Et en plus, il sent bon !']),

    pasteque: Z('🌱 En pleine terre', '3 à 4 mois', '🌱|🌿|🌼|🧺|🧊|🚚', [
      'Mes graines noires sont semées au chaud, au printemps.',
      'Je suis une plante qui rampe et qui prend beaucoup de place.',
      'Mes fleurs jaunes sont visitées par les abeilles.',
      'En été, on me cueille quand la petite vrille près de ma queue est sèche.',
      'Entière, je me garde plus d’une semaine au frais.',
      'Je viens souvent d’Espagne, en camion. Et je suis lourde !'
    ], ['jardin', 'Possible au jardin dans le sud, il lui faut beaucoup de chaleur.'],
    ['Combien peut peser une pastèque ?', ['100 grammes', 'Souvent 5 à 10 kilos', '1 tonne'], 1, 'Souvent 5 à 10 kilos ! Les records dépassent même 100 kilos.']),

    myrtille: Z('🌿 Sur un arbuste', '2 à 3 ans', '🌱|🌿|🔔|🧺|❄️|🚚', [
      'Je pousse sur un petit buisson, à la montagne ou dans les sous-bois.',
      'J’aime les terres acides, comme celles des forêts de pins.',
      'Au printemps, je fais des fleurs en forme de petites clochettes.',
      'En été, on me cueille à la main ou avec un peigne spécial.',
      'Je me garde quelques jours au frigo. Et je me congèle très bien !',
      'Je viens des Vosges ou des Cévennes… ou de bien plus loin en hiver.'
    ], ['pot', 'En grand pot, avec de la terre de bruyère.'],
    ['À quoi ressemblent les fleurs de myrtille ?', ['À des clochettes', 'À des étoiles', 'À des marguerites'], 0, 'À de petites clochettes blanches ou roses.']),

    raisin: Z('🍇 Sur une vigne', 'environ 3 ans', '🌱|🌿|🌼|✂️|🧊|🚚', [
      'On plante un petit pied de vigne. Il donnera du raisin au bout de 3 ans.',
      'Je suis une liane : je m’accroche aux fils avec mes vrilles.',
      'Mes fleurs sont minuscules et vertes. On les remarque à peine !',
      'En septembre, ce sont les vendanges : on me coupe par grappes entières.',
      'Je me garde quelques jours au frais.',
      'Je viens de France, comme le chasselas de Moissac, en camion.'
    ], ['jardin', 'Possible au jardin, contre un mur bien ensoleillé.'],
    ['Comment appelle-t-on la récolte du raisin ?', ['La moisson', 'Les vendanges', 'La cueillette'], 1, 'Les vendanges ! Elles ont lieu à la fin de l’été.']),

    pomme: Z('🌳 Sur un arbre', '3 à 5 ans', '🌱|🌳|🌸|🧺|❄️|🚚', [
      'Un pépin ne donne pas la même pomme que sa maman ! Alors on greffe les jeunes pommiers.',
      'Le pommier grandit dans un verger. Il peut vivre très longtemps.',
      'Au printemps, il se couvre de fleurs blanches et roses. Les abeilles butinent.',
      'En automne, on me cueille à la main, en me tournant doucement.',
      'Dans des grandes chambres froides, je me garde tout l’hiver.',
      'Je viens souvent de France (Val de Loire, Sud-Est), en camion.'
    ], ['jardin', 'Au jardin, oui. Il existe aussi des pommiers nains en pot.'],
    ['Si on plante un pépin de pomme Golden, on obtient… ?', ['Une pomme Golden', 'Une pomme différente', 'Une poire'], 1, 'Une pomme différente ! C’est pour ça qu’on greffe les pommiers.']),

    poire: Z('🌳 Sur un arbre', '3 à 5 ans', '🌱|🌳|🌸|🧺|🏠|🚚', [
      'Comme le pommier, le jeune poirier est greffé en pépinière.',
      'Le poirier grandit dans un verger. Il peut vivre 100 ans !',
      'Au printemps, il se couvre de fleurs blanches.',
      'Surprise : on me cueille avant que je sois mûre ! Je finis de mûrir dans la cuisine.',
      'Au frais, certaines variétés se gardent jusqu’à l’hiver.',
      'Je viens de France (Val de Loire, vallée du Rhône), en camion.'
    ], ['jardin', 'Au jardin, oui, avec un peu de patience.'],
    ['Quand cueille-t-on la poire ?', ['Quand elle tombe', 'Avant qu’elle soit mûre', 'En hiver sous la neige'], 1, 'Avant ! Si elle mûrit sur l’arbre, elle devient farineuse.']),

    chataigne: Z('🌳 Sur un arbre', '5 à 10 ans', '🌰|🌳|🌼|🍂|☀️|🚚', [
      'Je pousse sur le châtaignier, un grand arbre des forêts.',
      'Le châtaignier peut vivre plusieurs centaines d’années !',
      'En été, il fait de longues fleurs en plumeau, qui sentent très fort.',
      'En automne, je tombe par terre dans ma bogue pleine de piquants. On me ramasse !',
      'Séchée ou en farine, je me garde longtemps.',
      'Je viens d’Ardèche, des Cévennes ou de Corse.'
    ], ['non', 'Un châtaignier devient immense. Mieux vaut aller ramasser des châtaignes en forêt !'],
    ['Comment s’appelle l’enveloppe piquante de la châtaigne ?', ['La bogue', 'La coque', 'La carapace'], 0, 'La bogue ! Elle protège 2 ou 3 châtaignes.']),

    kiwi: Z('🌿 Sur une liane', '3 à 4 ans', '🌱|🌿|🌼|🧺|❄️|🚢', [
      'Je pousse sur une liane qu’on plante et qu’on fait grimper.',
      'Ma liane grimpe sur des fils, comme la vigne.',
      'Il faut un pied mâle et un pied femelle ! Les abeilles portent le pollen de l’un à l’autre.',
      'En novembre, on me cueille encore dur. Je mûris ensuite.',
      'Au frais, je me garde des mois.',
      'Je viens du Sud-Ouest (vallée de l’Adour), ou de Nouvelle-Zélande en bateau.'
    ], ['jardin', 'Au jardin, contre un grillage, avec un pied mâle et un pied femelle.'],
    ['Pour avoir des kiwis, il faut… ?', ['Une seule plante', 'Une plante mâle et une femelle', 'Beaucoup de neige'], 1, 'Une mâle et une femelle ! Seule la femelle fait des fruits.']),

    clementine: Z('🌳 Sur un arbre', '3 à 4 ans', '🌱|🌳|🌸|✂️|🏠|🚢', [
      'Je pousse sur un petit arbre, le clémentinier, qui adore le soleil.',
      'Son feuillage reste vert toute l’année.',
      'Au printemps, ses fleurs blanches sentent très bon.',
      'En hiver, on me coupe avec mes feuilles, surtout en Corse.',
      'Je me garde une à deux semaines.',
      'Je viens de Corse en bateau, ou d’Espagne en camion.'
    ], ['non', 'Il fait trop froid dans la plupart des régions. Seulement en grand pot, rentré l’hiver.'],
    ['Pourquoi les clémentines corses gardent-elles leurs feuilles ?', ['Pour décorer', 'Pour montrer qu’elles sont fraîches', 'Pour les protéger du froid'], 1, 'Les feuilles montrent qu’elles ont été cueillies il y a peu de temps.']),

    orange: Z('🌳 Sur un arbre', '3 à 4 ans', '🌱|🌳|🌸|🧺|🏠|🚚', [
      'Je pousse sur l’oranger, un arbre des pays chauds.',
      'L’oranger garde ses feuilles toute l’année.',
      'Ses fleurs blanches s’appellent fleurs d’oranger. On en fait un parfum !',
      'En hiver, on me cueille à la main.',
      'Je me garde une à deux semaines.',
      'Je viens d’Espagne ou du Maroc, en camion.'
    ], ['non', 'Trop froid chez nous pour la pleine terre. Un oranger nain en pot, rentré l’hiver, peut marcher.'],
    ['Avec la fleur d’oranger, on fait… ?', ['Du parfum et des gâteaux', 'Du jus d’orange', 'Du chocolat'], 0, 'De l’eau de fleur d’oranger, qui parfume les gâteaux et les crêpes !']),

    citron: Z('🌳 Sur un arbre', '3 à 4 ans', '🌱|🌳|🌸|🧺|🏠|🚚', [
      'Je pousse sur le citronnier, un arbre qui aime le soleil.',
      'Il garde ses feuilles toute l’année et peut fleurir plusieurs fois par an.',
      'Ses fleurs blanches et mauves sentent très bon.',
      'On me cueille à la main, jaune ou parfois encore vert.',
      'Je me garde plusieurs semaines.',
      'Je viens d’Espagne en camion, ou de Menton, sur la Côte d’Azur.'
    ], ['pot', 'En grand pot, au soleil, rentré à l’abri pendant l’hiver.'],
    ['Un citronnier peut avoir en même temps… ?', ['Des fleurs et des fruits', 'Des pommes', 'De la neige'], 0, 'Oui ! Il fleurit plusieurs fois par an.']),

    avocat: Z('🌳 Sur un arbre', '4 à 5 ans', '🌱|🌳|🌼|🧺|🏠|🚢', [
      'Je pousse sur un grand arbre, l’avocatier.',
      'Il vient d’Amérique et il adore la chaleur.',
      'Il fait des milliers de petites fleurs vertes.',
      'On me cueille encore dur : je ne mûris jamais sur l’arbre !',
      'Dans la cuisine, je mûris en quelques jours.',
      'Je viens d’Espagne en camion, ou du Pérou en bateau.'
    ], ['pot', 'Fais germer un noyau dans un verre d’eau, tenu par 3 cure-dents. Patience !'],
    ['L’avocat mûrit-il sur l’arbre ?', ['Oui', 'Non, seulement après la cueillette', 'Seulement la nuit'], 1, 'Non ! Il mûrit seulement une fois cueilli.']),

    banane: Z('🌴 Sur un bananier', '9 mois à 1 an', '🌱|🌴|🌺|🔪|🏠|🚢', [
      'Surprise : le bananier n’est pas un arbre, c’est une herbe géante !',
      'De nouvelles pousses sortent à son pied. On les replante.',
      'Une énorme fleur violette pend, et derrière elle pousse un régime de bananes.',
      'On coupe le régime quand les bananes sont encore vertes.',
      'Je mûris en voyageant, puis dans une salle spéciale.',
      'Je viens des Antilles françaises, en bateau.'
    ], ['non', 'Il lui faut la chaleur des tropiques. Trop froid chez nous !'],
    ['Le bananier est… ?', ['Un arbre', 'Une herbe géante', 'Un cactus'], 1, 'Une herbe géante ! Il n’a pas de bois.']),

    ananas: Z('🌱 En pleine terre', 'environ 18 mois', '👑|🌱|🌸|🔪|🏠|🚢', [
      'On plante la couronne de feuilles d’un ananas !',
      'Je pousse au ras du sol, avec des feuilles longues et pointues.',
      'Au centre, je fais plein de petites fleurs violettes.',
      'Chaque fleur devient un morceau d’ananas. Il me faut un an et demi pour être prêt !',
      'Je me garde quelques jours, dans la cuisine.',
      'Je viens du Costa Rica, en bateau.'
    ], ['pot', 'Plante la couronne dans un pot, au chaud. Il faudra beaucoup de patience !'],
    ['Combien de temps faut-il pour faire pousser un ananas ?', ['1 mois', 'Environ 18 mois', '10 ans'], 1, 'Environ un an et demi !']),

    mangue: Z('🌳 Sur un arbre', '4 à 6 ans', '🌱|🌳|🌸|🧺|🏠|🚢', [
      'Je pousse sur le manguier, un grand arbre des tropiques.',
      'Le manguier peut vivre très longtemps et devenir immense.',
      'Il fait des grappes de petites fleurs.',
      'On me cueille à la main.',
      'Je finis de mûrir dans la cuisine.',
      'Je viens du Pérou ou du Brésil, en bateau ou en avion.'
    ], ['non', 'Il lui faut la chaleur des tropiques.'],
    ['Un manguier peut mesurer… ?', ['1 mètre', 'Plus de 30 mètres', '10 centimètres'], 1, 'Plus de 30 mètres ! Un vrai géant.']),

    basilic: Z('🏡 En pleine terre ou sous serre', 'environ 2 mois', '🌱|🌿|🌼|✂️|🥛|🚚', [
      'On sème mes petites graines noires au chaud, au printemps.',
      'Mes feuilles poussent vite au soleil. Elles sentent très bon quand on les frotte.',
      'On pince mes fleurs pour que je fasse plus de feuilles.',
      'On coupe mes feuilles au fur et à mesure.',
      'Jamais au frigo ! Je me garde comme un bouquet, dans un verre d’eau.',
      'Je viens de France en été.'
    ], ['pot', 'Parfait en pot, au soleil, près de la fenêtre.'],
    ['Où garder le basilic ?', ['Au frigo', 'Dans un verre d’eau', 'Dans le four'], 1, 'Comme un bouquet de fleurs !']),

    menthe: Z('🌱 En pleine terre', 'environ 2 mois', '🌿|🌿|🌸|✂️|☀️|🚚', [
      'On plante un petit morceau de racine… et c’est parti !',
      'Mes racines courent sous terre et je pousse partout.',
      'Je fais des petites fleurs mauves.',
      'On coupe mes tiges quand on en a besoin.',
      'Séchée, je me garde pour les infusions.',
      'Je viens de France ou du Maroc.'
    ], ['pot', 'En pot, oui ! Au jardin, elle envahirait tout.'],
    ['Pourquoi plante-t-on la menthe en pot ?', ['Elle envahit tout', 'Elle a peur du noir', 'Elle est trop petite'], 0, 'Elle envahit tout ! Le pot la garde sage.']),

    persil: Z('🌱 En pleine terre', 'environ 3 mois', '🌱|🌿|🌼|✂️|🥛|🚚', [
      'Ma graine met très longtemps à germer : parfois plus de 3 semaines !',
      'Je fais une rosette de feuilles, plates ou frisées.',
      'La deuxième année, je fais des fleurs en ombrelle, comme ma cousine la carotte.',
      'On coupe mes feuilles quand on en a besoin.',
      'Dans un verre d’eau, ou congelé.',
      'Je viens de France.'
    ], ['pot', 'Très facile en pot, sur le rebord de la fenêtre.'],
    ['Quel légume est un cousin du persil ?', ['La carotte', 'La tomate', 'La fraise'], 0, 'La carotte ! Ils ont les mêmes fleurs en ombrelle.']),

    ciboulette: Z('🌱 En pleine terre', 'environ 2 mois', '🌱|🌿|🌸|✂️|❄️|🚚', [
      'On sème ma graine au printemps, ou on divise une touffe.',
      'Mes feuilles sont des tubes fins, comme des pailles.',
      'Je fais de jolies fleurs mauves en pompon, qui se mangent !',
      'On coupe mes feuilles avec des ciseaux, elles repoussent.',
      'Je me garde quelques jours au frigo, ou ciselée au congélateur.',
      'Je viens de France.'
    ], ['pot', 'En pot, très facile. Elle repousse à chaque coupe !'],
    ['La fleur de ciboulette se mange-t-elle ?', ['Oui', 'Non', 'Seulement cuite'], 0, 'Oui ! Elle a un petit goût d’oignon.']),

    thym: Z('🌿 Sur un petit arbuste', 'environ 1 an', '🌱|🌿|🌸|✂️|☀️|🚚', [
      'Je suis un tout petit arbuste des collines du Sud, la garrigue.',
      'J’aime le soleil et la terre sèche, pleine de cailloux.',
      'Je fais de minuscules fleurs mauves. Les abeilles adorent !',
      'On coupe mes branches.',
      'Séché, je me garde des mois.',
      'Je viens de Provence.'
    ], ['pot', 'En pot, au soleil, peu arrosé.'],
    ['Où pousse le thym sauvage ?', ['Dans la garrigue', 'Dans la mer', 'Sous la neige'], 0, 'Dans la garrigue, les collines sèches du Sud.']),

    gingembre: Z('🟫 Sous la terre', '8 à 10 mois', '🫚|🌿|🌺|🧺|☀️|🚢', [
      'On plante un morceau de racine, le rhizome.',
      'Mes tiges ressemblent à des roseaux.',
      'Je fais de jolies fleurs, mais c’est rare.',
      'On me déterre au bout de 8 à 10 mois.',
      'Je me garde quelques semaines au frais, et je me congèle très bien.',
      'Je viens du Pérou ou de Chine, en bateau.'
    ], ['pot', 'Plante un morceau qui a des petits bourgeons dans un pot, au chaud.'],
    ['Quelle partie du gingembre mange-t-on ?', ['La fleur', 'Le rhizome, une tige sous la terre', 'Les feuilles'], 1, 'Le rhizome : une tige qui pousse sous la terre.']),
    "asperge": Z("🟫 Sous la terre", "2 à 3 ans", "🌱|🌿|🟫|🔪|🧊|🚚", ["On plante des « griffes », des racines qui ressemblent à des araignées.","Pendant 2 ans, on me laisse tranquille : je deviens une plante haute et légère comme une plume.","Au printemps, on recouvre mes racines d’une butte de sable.","Mes pousses percent la terre : on les coupe une par une, à la main, chaque matin.","Je suis vite mise au frais, debout, les pieds dans l’eau.","Je viens des Landes, de Sologne ou d’Alsace, en camion."], ["jardin","Au jardin, avec de la place et beaucoup de patience."], ["Combien de temps attend-on avant la première récolte ?",["Une semaine","2 à 3 ans","10 ans"],1,"2 à 3 ans ! Mais ensuite, la même plante donne des asperges pendant 10 ans."]),
    "radis": Z("🟫 Sous la terre", "environ 1 mois", "🌱|🌿|🔴|✋|💧|🚚", ["On sème de toutes petites graines rondes dans une terre fraîche.","Quelques jours plus tard, mes deux premières feuilles sortent déjà !","Sous la terre, ma racine gonfle et devient toute rose.","Au bout d’un mois, on me tire de terre en tenant mes feuilles.","On me lave et on m’attache en bottes.","Je viens souvent d’une ferme pas très loin de chez toi."], ["pot","Très facile, même dans une jardinière sur un balcon."], ["Quelle partie du radis mange-t-on ?",["La fleur","La racine","Les graines"],1,"La racine ! Et ses feuilles se mangent aussi, en soupe."]),
    "framboise": Z("🌿 Sur un arbuste", "1 à 2 ans", "🌱|🌿|🌸|🫳|🧺|🚚", ["On plante un jeune framboisier, souvent en automne.","Mes tiges poussent et piquent un peu. On les attache à des fils.","Au printemps, je fais de petites fleurs blanches que les abeilles adorent.","Je suis si fragile qu’on me cueille à la main, une par une.","On me pose dans de petites barquettes, sans m’empiler.","Je viens de Corrèze, des Vosges ou de Bretagne, très vite, car je ne me garde pas."], ["oui","Facile au jardin, et il en donne beaucoup."], ["Combien de framboises peut donner un framboisier ?",["2 ou 3","Environ 1 kilo par an","100 kilos"],1,"Environ 1 kilo par an, cueilli au fil de l’été !"]),
    "abricot": Z("🌳 Sur un arbre", "3 à 4 ans", "🌱|🌳|🌸|🧺|🏠|🚚", ["Le jeune abricotier est greffé en pépinière.","Il grandit dans un verger bien ensoleillé.","À la fin de l’hiver, il fleurit très tôt, en blanc et rose. Gare au gel !","En été, on me cueille à la main quand je suis bien orange.","Je me garde quelques jours seulement : il faut vite me manger.","Je viens de la Drôme ou du Roussillon, en camion."], ["jardin","Au jardin, dans un coin bien chaud et abrité."], ["Pourquoi l’abricotier craint-il le gel ?",["Il fleurit très tôt, à la fin de l’hiver","Il n’aime pas la neige","Ses feuilles sont fragiles"],0,"Il fleurit très tôt : un coup de froid peut geler ses fleurs, et alors pas d’abricots !"]),
    "prune": Z("🌳 Sur un arbre", "3 à 5 ans", "🌱|🌳|🌸|🧺|☀️|🚚", ["Le jeune prunier est greffé en pépinière.","Il grandit dans un verger ou au fond d’un jardin.","Au printemps, il se couvre de petites fleurs blanches.","En fin d’été, on me cueille ou on secoue l’arbre pour me faire tomber dans des filets.","Certaines prunes sont séchées au four pour devenir des pruneaux.","Je viens de Lorraine, d’Alsace ou du Sud-Ouest, en camion."], ["jardin","Au jardin, oui : le prunier est robuste et donne beaucoup."], ["C’est quoi la poudre blanche sur une prune ?",["Du sucre","De la pruine, qui la protège","De la poussière"],1,"C’est la pruine, une cire naturelle qui protège le fruit."]),
    "figue": Z("🌳 Sur un arbre", "2 à 3 ans", "🌱|🌳|🟢|🧺|☀️|🚚", ["On plante une bouture : un bout de branche qui fait des racines.","Le figuier grandit vite au soleil. Ses grandes feuilles sentent bon.","Je pousse sans fleur visible : mes fleurs sont cachées à l’intérieur de moi !","On me cueille à la main quand je suis toute molle et que je penche.","Je suis très fragile : il faut me manger vite, ou me faire sécher.","Je viens de Provence ou de Corse, en camion."], ["jardin","Au jardin dans le Sud, ou dans un grand pot abrité ailleurs."], ["Où sont cachées les fleurs du figuier ?",["Sous la terre","À l’intérieur de la figue","Sur les feuilles"],1,"À l’intérieur de la figue ! C’est pour ça qu’on ne les voit jamais."]),
    "betterave": Z("🟫 Sous la terre", "3 à 4 mois", "🌱|🌿|🟣|🚜|📦|🚚", ["On sème mes graines au printemps. Chaque graine en contient plusieurs !","Mes feuilles poussent, avec de jolies nervures rouges.","Sous la terre, ma racine grossit et devient toute ronde.","En automne, on me sort de terre.","Je me garde des mois au frais. On me vend souvent déjà cuite.","Je viens du Nord ou de Normandie, en camion."], ["pot","Facile au jardin, et possible dans un pot assez profond."], ["Pourquoi la betterave tache-t-elle les doigts ?",["À cause de son jus coloré","Elle est peinte","Elle est sale"],0,"Son jus contient un pigment rouge très puissant, qui colore tout !"]),
    "poireau": Z("🌱 Dans un champ", "5 à 6 mois", "🌱|🌿|🟫|🚜|❄️|🚚", ["Je commence comme une graine, qui donne une pousse fine comme un fil.","On me repique dans un champ, dans un petit trou bien profond.","On ramène de la terre contre mon pied pour qu’il reste bien blanc.","En automne et en hiver, on me sort de terre.","Je résiste au froid : je peux rester dehors même quand il gèle !","Je viens de la région de Nantes ou de Normandie, en camion."], ["oui","Facile au jardin, et il reste en terre tout l’hiver."], ["Pourquoi le bas du poireau est-il blanc ?",["On le décolore","Il est caché sous la terre","Il a peur"],1,"Il est caché sous la terre : sans lumière, il reste blanc et devient plus doux."]),
    "chou-fleur": Z("🌱 Dans un champ", "4 à 6 mois", "🌱|🌿|⚪|🔪|📦|🚚", ["On sème mes graines, puis on me repique dans un champ.","Mes grandes feuilles bleu-vert poussent tout autour de moi.","Au centre, une grosse boule blanche apparaît : ce sont mes fleurs, encore fermées.","On me coupe au couteau, à la main, quand je suis bien serré.","On me laisse quelques feuilles pour me protéger pendant le voyage.","Je viens souvent de Bretagne, en camion."], ["jardin","Au jardin, avec de la place, de l’eau et un peu d’expérience."], ["Pourquoi le chou-fleur reste-t-il blanc ?",["Ses feuilles le protègent du soleil","Il a froid","On le lave à l’eau de javel"],0,"Ses grandes feuilles le cachent du soleil, comme un parasol."]),
    "endive": Z("🌑 Dans le noir", "environ 6 mois", "🌱|🌿|🥕|🌑|📦|🚚", ["Au printemps, on sème mes graines dans un champ.","Tout l’été, je fais de grandes feuilles vertes et une grosse racine.","En automne, on m’arrache et on coupe mes feuilles. Ma racine ressemble à une carotte blanche !","On me plante dans une salle toute noire et chaude : en 3 semaines, une pousse blanche sort de ma racine.","On cueille cette pousse : c’est le chicon !","Je viens du Nord de la France, en camion."], ["non","Difficile à la maison : il faut une cave bien noire et de la patience."], ["Combien de fois l’endive pousse-t-elle ?",["Une fois","Deux fois : la racine, puis le chicon","Dix fois"],1,"Deux fois ! D’abord la racine au champ, puis le chicon dans le noir."]),
    "rhubarbe": Z("🌱 Dans un jardin", "1 à 2 ans", "🌱|🌿|🍃|✋|🧊|🚚", ["On plante un morceau de racine, appelé souche, au printemps ou en automne.","La première année, on me laisse grandir sans me cueillir.","Je fais d’énormes feuilles, larges comme un parapluie !","Au printemps, on tire mes tiges à la main, d’un petit coup sec.","On coupe mes feuilles et on garde mes tiges au frais.","Je viens souvent d’Alsace ou du jardin d’un voisin !"], ["oui","Très facile au jardin : un seul pied donne pendant 10 ans."], ["Que faut-il faire des feuilles de rhubarbe ?",["Les manger en salade","Ne jamais les manger, elles sont toxiques","En faire une tarte"],1,"Ne jamais les manger ! Seules les tiges sont comestibles."]),
    "cassis": Z("🌿 Sur un arbuste", "2 ans", "🌱|🌿|🌸|🫐|🧺|🚚", ["On plante un petit arbuste, ou une simple branche qui fait des racines.","Je grandis jusqu’à la taille d’un enfant.","Au printemps, je fais de petites fleurs vertes et roses.","En juillet, mes baies deviennent toutes noires, en petites grappes.","On me cueille à la main ou avec une machine qui secoue l’arbuste.","Je viens souvent de Bourgogne, en camion."], ["oui","Facile au jardin, il pousse même à l’ombre."], ["De quelle couleur sont les baies de cassis mûres ?",["Rouges","Noires","Jaunes"],1,"Noires ! C’est pour ça qu’en anglais on l’appelle « blackcurrant »."]),
    "coing": Z("🌳 Sur un arbre", "3 à 5 ans", "🌱|🌳|🌸|🧺|🏠|🚚", ["Le jeune cognassier est planté dans un verger ou un jardin.","Il grandit doucement et reste assez petit.","Au printemps, il fait de grandes fleurs blanches et roses.","En automne, on me cueille quand je suis bien jaune.","Je me garde plusieurs semaines au frais et je parfume toute la cave.","Je viens du Sud de la France, en camion."], ["jardin","Au jardin, oui : le cognassier est robuste."], ["Comment mange-t-on le coing ?",["Cru, comme une pomme","Cuit, en gelée ou en pâte","Congelé"],1,"Cuit ! Cru, il est bien trop dur."]),
    "artichaut": Z("🌱 Dans un champ", "1 an", "🌱|🌿|🟢|🔪|📦|🚚", ["On plante un rejeton : une petite pousse prise sur un vieux pied.","Je fais de grandes feuilles argentées et découpées.","Au centre, une tige monte et porte un gros bouton : c’est moi !","On me coupe au couteau, à la main, avant que je fleurisse.","Un même pied donne des artichauts pendant plusieurs années.","Je viens souvent de Bretagne, en camion."], ["jardin","Au jardin, avec de la place et du soleil."], ["L’artichaut, c’est quelle partie de la plante ?",["Une racine","Un bouton de fleur","Un fruit"],1,"Un bouton de fleur ! Si on le laisse, il devient une grande fleur violette."]),
    "fenouil": Z("🌱 Dans un champ", "3 mois", "🌱|🌿|⚪|🔪|📦|🚚", ["On sème mes graines au début de l’été.","Mes feuilles poussent, fines comme des plumes.","À leur base, je gonfle et je deviens tout blanc et rond.","On me coupe à la main au ras du sol.","On garde un peu de mes plumes pour montrer que je suis frais.","Je viens de Provence, en camion."], ["jardin","Au jardin, avec beaucoup d’eau et de soleil."], ["Quelles parties du fenouil se mangent ?",["Seulement les graines","Le bulbe, les feuilles et les graines","Rien du tout"],1,"Presque tout ! Le bulbe, les feuilles en plumes et même les graines."]),
    "navet": Z("🟫 Sous la terre", "2 à 3 mois", "🌱|🌿|🟣|✋|📦|🚚", ["On sème mes petites graines rondes au printemps ou à la fin de l’été.","Mes feuilles poussent très vite.","Sous la terre, ma racine gonfle. Le haut dépasse et devient violet.","On me tire de terre à la main, comme un radis géant.","Je me garde bien au frais pendant l’hiver.","Je viens souvent d’une ferme pas très loin de chez toi."], ["pot","Facile au jardin, et possible dans un grand pot."], ["Que mangeait-on avant l’arrivée de la pomme de terre ?",["Des frites","Beaucoup de navets","Des pâtes"],1,"Beaucoup de navets ! C’était un des légumes de base des campagnes."]),
    "panais": Z("🟫 Sous la terre", "4 à 6 mois", "🌱|🌿|🟫|❄️|🚜|🚚", ["On sème mes graines au printemps. Je suis lent à sortir de terre !","Mes feuilles ressemblent à celles du céleri.","Sous la terre, ma longue racine blanche grossit tout l’été.","Avec le froid de l’hiver, je deviens encore plus sucré.","On me sort de terre en automne et en hiver.","Je viens de l’Ouest ou du Nord, en camion."], ["jardin","Au jardin, dans une terre profonde et sans cailloux."], ["Qu’est-ce qui rend le panais plus sucré ?",["Le soleil","Le froid de l’hiver","La pluie"],1,"Le froid ! Pour se protéger du gel, il transforme son amidon en sucre."]),
    "coriandre": Z("🌱 Dans un jardin", "1 à 2 mois", "🌱|🌿|🌸|✂️|💧|🚚", ["On sème mes graines rondes au printemps.","Mes premières feuilles ressemblent à celles du persil.","Quand il fait trop chaud, je fais vite de petites fleurs blanches.","On coupe mes feuilles avec des ciseaux, au fur et à mesure.","Je suis vendue en bouquet, les pieds dans l’eau.","Je viens souvent de Provence ou d’une ferme près de chez toi."], ["pot","Facile dans un pot, à la mi-ombre."], ["Quelles parties de la coriandre se mangent ?",["Seulement les feuilles","Les feuilles, les tiges, les racines et les graines","Seulement les fleurs"],1,"Toute la plante ! Même les racines, très utilisées en cuisine thaïe."]),
    "romarin": Z("☀️ Dans la garrigue", "1 an", "🌱|🌿|💙|✂️|☀️|🚚", ["On plante une bouture : un petit bout de branche qui fait des racines.","Je grandis lentement et je deviens un petit buisson.","À la fin de l’hiver, je me couvre de fleurs bleues.","On coupe mes branches avec des ciseaux, toute l’année.","On peut me sécher : je garde tout mon parfum.","Je viens de Provence, en camion."], ["pot","Très facile, même dans un pot au soleil."], ["Le romarin perd-il ses feuilles en hiver ?",["Oui, toutes","Non, il reste vert toute l’année","Seulement s’il pleut"],1,"Non ! Il reste vert toute l’année, on peut le cueillir même en hiver."]),
    "estragon": Z("🌱 Dans un jardin", "1 an", "🌱|🌿|🍃|✂️|💧|🚚", ["On plante un petit morceau de racine, car je ne fais presque pas de graines.","Mes tiges poussent droites, avec de fines feuilles allongées.","Je deviens un petit buisson qui sent bon l’anis.","On coupe mes tiges avec des ciseaux, tout l’été.","En hiver, je disparais sous terre, puis je repousse au printemps.","Je viens souvent d’une ferme près de chez toi."], ["pot","Facile dans un pot, au soleil."], ["D’où vient le nom « estragon » ?",["D’un mot qui veut dire « petit dragon »","D’un roi","D’une ville"],0,"D’un mot qui veut dire « petit dragon », à cause de ses racines en forme de serpent !"])
  };
})();
