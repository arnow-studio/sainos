// La poissonnerie : poissons et fruits de mer de saison (repères indicatifs, Manche et Atlantique).
// f = pleine saison, x = à éviter (reproduction, ou pêche fermée si c = 1).
(function () {
  window.POISSONS = {
    MOIS: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    MOIS_EN: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    MOIS_C: ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'],
    MOIS_C_EN: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    liste: [
    { s: 'bar', n: "Bar (loup)", en: "Sea bass", t: 'poisson', e: '🐟', f: [6,7,8,9,10,11], x: [1,2,3], c: 0, d: "Chair fine et ferme : choisissez-le de ligne, et laissez-le tranquille en hiver pendant sa reproduction.", den: "Fine, firm flesh: choose line-caught, and leave it alone in winter while it spawns." },
    { s: 'cabillaud', n: "Cabillaud", en: "Cod", t: 'poisson', e: '🐟', f: [9,10,11,12], x: [1,2,3,4], c: 0, d: "Le poisson blanc star des cuisines, à son meilleur à l’automne.", den: "The kitchen’s star white fish, at its best in autumn." },
    { s: 'merlu', n: "Merlu (colin)", en: "Hake", t: 'poisson', e: '🐟', f: [6,7,8,9,10], x: [2,3,4], c: 0, d: "Chair tendre et peu d’arêtes : idéal pour les enfants.", den: "Tender flesh and few bones: ideal for children." },
    { s: 'dorade-royale', n: "Dorade royale", en: "Gilt-head bream", t: 'poisson', e: '🐟', f: [6,7,8,9,10], x: [1,2,3], c: 0, d: "Reconnaissable à son bandeau doré entre les yeux ; délicieuse grillée entière.", den: "Recognisable by the golden band between its eyes; delicious grilled whole." },
    { s: 'dorade-grise', n: "Dorade grise", en: "Black seabream", t: 'poisson', e: '🐟', f: [7,8,9,10,11], x: [3,4,5], c: 0, d: "Moins chère que la royale, tout aussi savoureuse au four.", den: "Cheaper than gilt-head bream, just as tasty roasted." },
    { s: 'lieu-jaune', n: "Lieu jaune", en: "Pollack", t: 'poisson', e: '🐟', f: [5,6,7,8,9,10], x: [1,2,3], c: 0, d: "Un cousin du cabillaud, souvent pêché à la ligne en Bretagne.", den: "A cousin of cod, often line-caught in Brittany." },
    { s: 'lieu-noir', n: "Lieu noir", en: "Saithe", t: 'poisson', e: '🐟', f: [5,6,7,8,9,10,11,12], x: [1,2,3], c: 0, d: "Bon marché et polyvalent : en papillote, en brandade, en pané.", den: "Cheap and versatile: en papillote, in brandade, breaded." },
    { s: 'maquereau', n: "Maquereau", en: "Mackerel", t: 'poisson', e: '🐟', f: [5,6,7,8,9], x: [3,4], c: 0, d: "Riche en oméga-3, il se marie avec la moutarde et le vin blanc.", den: "Rich in omega-3, it pairs with mustard and white wine." },
    { s: 'sardine', n: "Sardine", en: "Sardine", t: 'poisson', e: '🐟', f: [5,6,7,8,9], x: [12,1,2], c: 0, d: "Grasse et goûteuse en été, parfaite au barbecue.", den: "Rich and tasty in summer, perfect on the barbecue." },
    { s: 'anchois', n: "Anchois", en: "Anchovy", t: 'poisson', e: '🐟', f: [4,5,6,7], x: [], c: 0, d: "Frais, il se mange mariné au citron ou frit.", den: "Fresh, it is eaten marinated in lemon or fried." },
    { s: 'merlan', n: "Merlan", en: "Whiting", t: 'poisson', e: '🐟', f: [9,10,11,12], x: [2,3,4], c: 0, d: "Chair très délicate, à cuire doucement au beurre.", den: "Very delicate flesh, to cook gently in butter." },
    { s: 'sole', n: "Sole", en: "Sole", t: 'poisson', e: '🐟', f: [6,7,8,9,10], x: [1,2,3], c: 0, d: "Poisson plat raffiné, la célèbre sole meunière.", den: "A refined flatfish, of sole meunière fame." },
    { s: 'plie', n: "Plie (carrelet)", en: "Plaice", t: 'poisson', e: '🐟', f: [5,6,7,8,9,10,11], x: [1,2,3], c: 0, d: "Poisson plat aux taches orangées, doux et abordable.", den: "Flatfish with orange spots, mild and affordable." },
    { s: 'turbot', n: "Turbot", en: "Turbot", t: 'poisson', e: '🐟', f: [9,10,11,12,1,2], x: [4,5,6], c: 0, d: "Le roi des poissons plats, pour les grandes occasions.", den: "The king of flatfish, for special occasions." },
    { s: 'lotte', n: "Lotte", en: "Monkfish", t: 'poisson', e: '🐟', f: [9,10,11,12], x: [3,4,5], c: 0, d: "Sans arêtes, chair ferme comme du homard : on l’appelle la langouste du pauvre.", den: "Boneless, with flesh as firm as lobster: the “poor man’s lobster”." },
    { s: 'saint-pierre', n: "Saint-Pierre", en: "John Dory", t: 'poisson', e: '🐟', f: [10,11,12,1,2], x: [6,7,8], c: 0, d: "La tache noire sur son flanc serait l’empreinte du pouce de saint Pierre.", den: "The black spot on its side is said to be Saint Peter’s thumbprint." },
    { s: 'rouget', n: "Rouget barbet", en: "Red mullet", t: 'poisson', e: '🐟', f: [8,9,10,11], x: [5,6], c: 0, d: "Petit poisson rouge au goût iodé, à poêler entier.", den: "Small red fish with a briny taste, pan-fried whole." },
    { s: 'eglefin', n: "Églefin (haddock)", en: "Haddock", t: 'poisson', e: '🐟', f: [6,7,8,9,10,11,12], x: [2,3,4], c: 0, d: "Fumé, il devient le haddock des petits-déjeuners anglais.", den: "Smoked, it becomes the haddock of English breakfasts." },
    { s: 'hareng', n: "Hareng", en: "Herring", t: 'poisson', e: '🐟', f: [10,11,12,1,2], x: [], c: 0, d: "Frais en hiver, ou mariné à l’huile avec des pommes de terre.", den: "Fresh in winter, or marinated in oil with potatoes." },
    { s: 'thon-germon', n: "Thon germon", en: "Albacore", t: 'poisson', e: '🐟', f: [6,7,8,9,10], x: [], c: 0, d: "Le thon blanc pêché l’été dans le golfe de Gascogne.", den: "The white tuna caught in summer in the Bay of Biscay." },
    { s: 'huitre', n: "Huître", en: "Oyster", t: 'mer', e: '🦪', f: [9,10,11,12,1,2,3,4], x: [6,7,8], c: 0, d: "Le dicton des « mois en R » : en été elle est laiteuse, car elle se reproduit.", den: "The “months with an R” rule: in summer it turns milky as it spawns." },
    { s: 'moule', n: "Moule de bouchot", en: "Mussel", t: 'mer', e: '🦪', f: [7,8,9,10,11,12,1], x: [], c: 0, d: "Élevée sur des pieux en bord de mer, elle est à son meilleur l’été et l’automne.", den: "Farmed on wooden stakes by the sea, at its best in summer and autumn." },
    { s: 'saint-jacques', n: "Coquille Saint-Jacques", en: "Scallop", t: 'mer', e: '🐚', f: [10,11,12,1,2,3,4,5], x: [6,7,8,9], c: 1, d: "Sa pêche est fermée l’été en France pour protéger l’espèce.", den: "Fishing for it is closed in summer in France to protect the species." },
    { s: 'palourde', n: "Palourde", en: "Clam", t: 'mer', e: '🐚', f: [9,10,11,12,1,2,3,4], x: [6,7,8], c: 0, d: "Délicieuse farcie ou dans des pâtes à l’ail.", den: "Delicious stuffed or in garlic pasta." },
    { s: 'coque', n: "Coque", en: "Cockle", t: 'mer', e: '🐚', f: [9,10,11,12,1,2,3,4], x: [6,7,8], c: 0, d: "Petit coquillage des plages, à faire ouvrir à la poêle.", den: "Small beach shellfish, opened in a hot pan." },
    { s: 'bulot', n: "Bulot", en: "Whelk", t: 'mer', e: '🐚', f: [10,11,12,1,2,3,4], x: [], c: 0, d: "Cuit au court-bouillon, il se déguste avec de la mayonnaise.", den: "Cooked in court-bouillon, eaten with mayonnaise." },
    { s: 'crevette-grise', n: "Crevette grise", en: "Brown shrimp", t: 'mer', e: '🦐', f: [6,7,8,9,10,11], x: [], c: 0, d: "Toute petite et très parfumée, à grignoter à l’apéritif.", den: "Tiny and very fragrant, a classic pre-dinner nibble." },
    { s: 'langoustine', n: "Langoustine", en: "Langoustine", t: 'mer', e: '🦐', f: [4,5,6,7,8], x: [], c: 0, d: "Vivante et frétillante, elle se cuit une minute à peine.", den: "Bought alive, it cooks in barely a minute." },
    { s: 'tourteau', n: "Tourteau", en: "Brown crab", t: 'mer', e: '🦀', f: [6,7,8,9,10], x: [], c: 0, d: "Le crabe des plateaux de fruits de mer, plein de chair en été.", den: "The seafood-platter crab, full of meat in summer." },
    { s: 'araignee', n: "Araignée de mer", en: "Spider crab", t: 'mer', e: '🦀', f: [4,5,6,7], x: [], c: 0, d: "Ses longues pattes cachent une chair fine et sucrée.", den: "Its long legs hide fine, sweet meat." },
    { s: 'homard', n: "Homard breton", en: "Lobster", t: 'mer', e: '🦞', f: [5,6,7,8], x: [], c: 0, d: "Bleu vivant, il devient rouge à la cuisson.", den: "Blue when alive, it turns red when cooked." },
    { s: 'oursin', n: "Oursin", en: "Sea urchin", t: 'mer', e: '🐚', f: [11,12,1,2,3,4], x: [5,6,7,8,9,10], c: 1, d: "Sa pêche n’est autorisée qu’en hiver ; on mange son corail à la cuillère.", den: "Fishing is only allowed in winter; its roe is eaten with a spoon." },
    { s: 'seiche', n: "Seiche", en: "Cuttlefish", t: 'mer', e: '🦑', f: [3,4,5,6], x: [], c: 0, d: "Elle s’approche des côtes au printemps ; son encre colore les risottos.", den: "It comes close to shore in spring; its ink colours risottos." },
    { s: 'encornet', n: "Encornet", en: "Squid", t: 'mer', e: '🦑', f: [9,10,11,12], x: [], c: 0, d: "Frit en anneaux ou farci, il est à son meilleur à l’automne.", den: "Fried in rings or stuffed, at its best in autumn." }
    ]
  };
})();
