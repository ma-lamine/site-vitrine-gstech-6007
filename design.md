# GSTech — direction de conception

## Fondement UX
Référence consultée : cofounder.co et /how-to/build. Retenir : navigation concise, action constante, proposition de valeur en tête, rythme éditorial et sommaire des pages longues. Ne reprendre ni pixel art, ni assets, ni textes, ni composition exacte.

## Identité et tokens
Logo JPEG officiel fourni, affiché sans retracé ni déformation. Un SVG est souhaitable avant publication.
Encre #132d36 ; action #006b62 avec texte blanc ; menthe #e9f4f0 ; texte secondaire #5a6c70 ; papier #fafbf8 ; séparateur #d9e3df ; ambre #edb951. Dégradé discret réservé au diagramme abstrait original.
Manrope pour les titres, Poppins pour le corps, sans-serif en secours. Titre accueil 76px desktop / 43px mobile ; sections 42/32 ; corps 16px, interligne 1.7.
Espacements : 4, 8, 12, 16, 24, 32, 48, 64, 96. Largeur max 1280px. Marges desktop 64px, mobile 22px.

## Composants et responsive
Header clair, navigation concise, menus natifs desktop et tiroir mobile. Boutons de 46px minimum, focus visible. Services en rangées éditoriales à séparateurs. Illustrations géométriques abstraites, aucune fausse interface d'application. Captures manquantes explicitement identifiées. Footer structuré. Formulaire labellisé, erreurs liées aux champs, confirmation simulée explicite.
Mobile : une colonne, titres réduits, pas de débordement, zones tactiles confortables. Respect du mouvement réduit. Objectif WCAG 2.1 AA sans prétendre à une conformité auditée.

## Pages et parcours
Accueil, trois services, SamaGP, CyberSentinels, contact/devis ; hubs services/applications, à propos, pages légales de structure. /conception : analyse, palette, arborescence, wireframes, composants et inspecteur ordinateur/mobile.
Parcours PME Sénégal : accueil → service → devis. Parcours utilisateur : accueil → application → informations/contact.

## Architecture et limites
Interface web uniquement dans packages/web/src/web ; assets dans packages/web/public. Aucun ajout API, table, auth ou paiement. Formulaire local sans envoi ni stockage. Blog, CMS, newsletter et réalisations restent dans l'architecture future.
Textes commerciaux proposés à valider. Aucun client, résultat, certification, fonctionnalité d'application, coordonnées, témoignage ou lien store inventé.
