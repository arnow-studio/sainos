# Sainos — sainos.fr

Site statique (HTML/CSS/JS, sans build) sur les fruits, légumes, fromages, poissons et jardin de saison, avec Tom, le petit fermier. Ce dossier EST le code de production : on le modifie directement, il n’y a rien à transpiler.

## Déploiement
- Hébergé sur Cloudflare (domaine dans `CNAME`). On déploie le contenu de ce dossier tel quel.
- À chaque changement de HTML, JS ou image mise en cache : incrémenter `V` dans `sw.js` (actuellement `sainos-v19`), sinon les utilisateurs de l’app hors ligne gardent l’ancienne version.
- Tenir `sitemap.xml` à jour quand une page est ajoutée.

## Structure
- Pages FR à la racine (`index.html`, `legumes.html`, `fruits.html`, `liste.html`, `recettes.html`, `jardin.html`, `fromages.html`, `poissonnerie.html`, `tom.html`, `histoires.html`, `jeux.html`, `quiz.html`…), version anglaise dans `en/`.
- Fiches générées : `produits/`, `fromages/`, `jardin/`, `poissons/` (FR et EN).
- Données : `produits-*.js`, `fromages-*.js`, `jardin-*.js`, `poissons-*.js`, `recettes-data.js`, `histoires-data.js`. Toute modification de contenu passe d’abord par ces fichiers, puis par les fiches générées concernées.
- `recherche.js` (recherche), `profil.js` (profil local, badges), `support.js` (runtime partagé), `sw.js` (hors ligne), `manifest.webmanifest` (PWA).
- Images dans `images/` (WebP). Les illustrations de Tom sont dans `images/tom/` et `images/histoires/`.
- `_ds/organic-…/` : feuille de style du design system Organic (tokens `--color-*`, `--space-*`, `--radius-*`, `--shadow-*`).

## Règles de design
- Polices : titres en **DynaPuff** (`--font-heading`), texte en **Nunito** (`--font-body`), chargées depuis Google Fonts. Jamais Caprasimo ni Figtree (polices par défaut d’Organic) : on redéfinit les variables.
- Couleurs, espacements, rayons, ombres : toujours via les variables du design system, pas de valeurs codées en dur.
- Masques d’images (illustrations, portraits) toujours légèrement irréguliers : `border-radius` asymétrique et différent d’une image à l’autre, jamais un cercle parfait ni un rectangle arrondi régulier. Pour les grandes illustrations rectangulaires, rester discret (environ 16 à 28px).
- Icônes Lucide, trait épais (2.75).

## Règles éditoriales
- Typographie française : espace insécable avant `! ? : ;` et apostrophe typographique (’).
- Ton chaleureux, simple, adapté aux enfants comme aux parents. FR et EN restent alignés : un changement de texte FR doit être reporté dans `en/`.
- Pilou est un patou (chien de montagne des Pyrénées) qui veille sur les poules, pas un golden retriever.
- Statistiques : Plausible (snippet présent sur chaque page, à garder sur les nouvelles pages).
