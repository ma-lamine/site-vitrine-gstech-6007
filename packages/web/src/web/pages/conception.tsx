import { useState } from "react";
import { Monitor, Smartphone, ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import { Eyebrow, Proposal, services, apps } from "../components/site";

const screens = [
  { name: "Accueil", url: "/" },
  ...services.map((s) => ({ name: s.name, url: `/services/${s.slug}` })),
  ...apps.map((a) => ({ name: a.name, url: `/applications/${a.slug}` })),
  { name: "Contact / devis", url: "/contact" },
];
const frames = [
  {
    name: "Accueil",
    blocks: [
      "Navigation + devis",
      "Proposition de valeur / 3 expertises",
      "Liste des services",
      "SamaGP / CyberSentinels",
      "Démarche proposée",
      "Contact / pied de page",
    ],
  },
  {
    name: "Service",
    blocks: [
      "Navigation / fil d’Ariane",
      "Service + bénéfice proposé",
      "Sommaire / besoins",
      "Prestations / démarche",
      "Expertise à compléter",
      "Appel à contact",
    ],
  },
  {
    name: "Application",
    blocks: [
      "Navigation / fil d’Ariane",
      "Nom / présentation à fournir",
      "Capture officielle à fournir",
      "Objectif / fonctionnalités / accès",
      "FAQ à compléter",
      "Contact / pied de page",
    ],
  },
  {
    name: "Contact",
    blocks: [
      "Navigation / introduction",
      "Coordonnées à fournir",
      "Choix devis ou question",
      "Identité / expertise / projet",
      "Information données / validation",
      "Confirmation simulée",
    ],
  },
];
export default function Conception() {
  const [screen, setScreen] = useState("/");
  const [device, setDevice] = useState("mobile");
  const [tab, setTab] = useState("apercus");
  return (
    <>
      <section className="design-heading container">
        <Eyebrow>DOSSIER DE CONCEPTION / GSTECH</Eyebrow>
        <h1>
          Une identité claire.
          <br />
          <span>Un parcours utile.</span>
        </h1>
        <p>Direction artistique, principes UX et vues responsive du prototype.</p>
        <div className="design-tabs">
          {[
            ["apercus", "Maquettes responsive"],
            ["ux", "Structure & wireframes"],
            ["system", "Mini design system"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              aria-pressed={tab === id}
              className={tab === id ? "active" : ""}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
      <section className="container design-section">
        {tab === "apercus" ? (
          <>
            <div className="preview-controls">
              <label>
                Page à examiner
                <select value={screen} onChange={(e) => setScreen(e.target.value)}>
                  {screens.map((s) => (
                    <option value={s.url} key={s.url}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
              <div className="device-switch">
                <button onClick={() => setDevice("desktop")} aria-pressed={device === "desktop"}>
                  <Monitor size={17} />
                  Ordinateur
                </button>
                <button onClick={() => setDevice("mobile")} aria-pressed={device === "mobile"}>
                  <Smartphone size={17} />
                  Mobile
                </button>
              </div>
              <Link className="text-link" href={screen}>
                Ouvrir la page <ArrowUpRight size={17} />
              </Link>
            </div>
            <p className="preview-caption">
              {device === "mobile"
                ? "Vue mobile · 390 × 844 px"
                : "Vue ordinateur · 1440 × 900 px · aperçu défilable horizontalement si nécessaire"}{" "}
              — navigation et formulaires interactifs.
            </p>
            <div className={`preview-stage ${device}`}>
              <iframe
                key={`${screen}-${device}`}
                title={`Maquette ${device} — ${screens.find((s) => s.url === screen)?.name}`}
                src={`${screen}?embedded=1`}
                width={device === "mobile" ? 390 : 1440}
                height={device === "mobile" ? 844 : 900}
              />
            </div>
            <Proposal>
              Les maquettes se redimensionnent aussi dans votre navigateur. Cette vue n’est pas une
              capture figée.
            </Proposal>
          </>
        ) : tab === "ux" ? (
          <>
            <Eyebrow>01 / ANALYSE DE LA RÉFÉRENCE</Eyebrow>
            <h2>Des principes, pas une copie.</h2>
            <div className="principle-grid">
              {[
                [
                  "Hiérarchie immédiate",
                  "Sur cofounder.co : un titre dominant, une explication courte et une action principale. Chez GSTech : trois expertises identifiables et un devis visible.",
                ],
                [
                  "Navigation orientée action",
                  "Une navigation courte réduit les hésitations. GSTech regroupe les services et applications avec des libellés explicites et garde le contact accessible.",
                ],
                [
                  "Progression éditoriale",
                  "La référence déroule ses capacités par chapitres. GSTech passe des expertises aux applications, puis à la démarche et au contact.",
                ],
                [
                  "Lecture des pages internes",
                  "La référence utilise un sommaire latéral. Les pages services GSTech reprennent le principe d’orientation, avec une mise en page et un style propres.",
                ],
              ].map(([t, d]) => (
                <article key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
            <p>
              Non repris : illustrations pixel art, palettes, textes, interfaces, chiffres, logos et
              code de la référence. Diagramme GSTech original et abstrait ; aucune fausse capture
              produit.
            </p>
            <div className="design-block">
              <Eyebrow>02 / ARBORESCENCE</Eyebrow>
              <h2>Un socle simple, prêt à grandir.</h2>
              <div className="sitemap">
                <div>
                  <strong>GSTech / Accueil</strong>
                  <span>Point d’entrée principal</span>
                </div>
                <div className="sitemap-columns">
                  <article>
                    <h3>Services</h3>
                    {services.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`}>
                        {s.name}
                      </Link>
                    ))}
                  </article>
                  <article>
                    <h3>Applications</h3>
                    {apps.map((a) => (
                      <Link key={a.slug} href={`/applications/${a.slug}`}>
                        {a.name}
                      </Link>
                    ))}
                  </article>
                  <article>
                    <h3>L’entreprise</h3>
                    <Link href="/a-propos">À propos</Link>
                    <span>Réalisations · phase suivante</span>
                    <span>Blog · phase suivante</span>
                    <span>Carrières · facultatif</span>
                  </article>
                  <article>
                    <h3>Contact & cadre</h3>
                    <Link href="/contact">Contact / demande de devis</Link>
                    <Link href="/legal/mentions-legales">Mentions légales</Link>
                    <Link href="/legal/confidentialite">Confidentialité</Link>
                    <Link href="/legal/cookies">Cookies</Link>
                    <Link href="/legal/cgu">CGU</Link>
                  </article>
                </div>
              </div>
              <div className="journeys">
                <p>
                  <strong>PME au Sénégal</strong> Accueil → expertise → formulaire devis →
                  confirmation
                </p>
                <p>
                  <strong>Utilisateur d’application</strong> Accueil → SamaGP ou CyberSentinels →
                  informations officielles → contact
                </p>
              </div>
            </div>
            <div className="design-block">
              <Eyebrow>03 / WIREFRAMES</Eyebrow>
              <h2>La structure avant le détail.</h2>
              <div className="wireframe-grid">
                {frames.map((f) => (
                  <article key={f.name}>
                    <h3>{f.name}</h3>
                    <div className="wireframe">
                      {f.blocks.map((b, i) => (
                        <div key={b} className={`wire-block block-${i}`}>
                          <span>0{i + 1}</span>
                          {b}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              <p>
                Ordre de lecture mobile conservé. Sur ordinateur : hero en deux colonnes, sommaire
                latéral pour les services, coordonnées à gauche du formulaire.
              </p>
            </div>
            <div className="design-block">
              <Eyebrow>04 / APRÈS LE PROTOTYPE</Eyebrow>
              <h2>Ce qui reste à préparer.</h2>
              <ul className="check-list">
                {[
                  "Valider les textes, prestations et étapes de travail.",
                  "Fournir logo vectoriel, captures officielles, coordonnées, réalisations et autorisations.",
                  "Configurer un back-office, les articles, la recherche et les formulaires réels.",
                  "Prévoir anti-spam côté serveur, gestion des données et consentement des scripts.",
                  "Vérifier accessibilité, SEO, performance et sécurité avant publication.",
                  "Préparer les contenus français et leur traduction anglaise ultérieure.",
                ].map((t) => (
                  <li key={t}>
                    <Check size={17} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <Eyebrow>01 / PALETTE</Eyebrow>
            <h2>La couleur, avec mesure.</h2>
            <div className="swatches">
              {[
                ["Encre", "#132d36"],
                ["Turquoise action", "#006b62"],
                ["Menthe", "#e9f4f0"],
                ["Papier", "#fafbf8"],
                ["Gris texte", "#5a6c70"],
                ["Ambre accent", "#edb951"],
              ].map(([n, c]) => (
                <div key={n}>
                  <div style={{ background: c }} />
                  <strong>{n}</strong>
                  <code>{c}</code>
                </div>
              ))}
            </div>
            <p>
              Le turquoise foncé porte les actions avec du texte blanc. L’ambre reste décoratif. Le
              dégradé du logo n’est pas utilisé derrière les textes essentiels.
            </p>
            <div className="design-block">
              <Eyebrow>02 / TYPOGRAPHIE & ESPACEMENT</Eyebrow>
              <div className="type-showcase">
                <h2>
                  Le numérique.
                  <br />
                  Au service de vos ambitions.
                </h2>
                <div>
                  <h3>Manrope / Titres</h3>
                  <p>Poppins / Corps de texte</p>
                  <span>
                    H1 : 76 / 43 px · H2 : 42 / 32 px
                    <br />
                    Corps : 16 px · interligne 1,7
                    <br />
                    Échelle : 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96
                  </span>
                </div>
              </div>
            </div>
            <div className="design-block">
              <Eyebrow>03 / COMPOSANTS & ÉTATS</Eyebrow>
              <h2>La même logique, partout.</h2>
              <div className="component-demo">
                <Link href="/contact" className="button">
                  Action principale <ArrowUpRight size={18} />
                </Link>
                <Link href="/services" className="button secondary">
                  Action secondaire <ArrowUpRight size={18} />
                </Link>
                <button className="button" disabled>
                  Action indisponible
                </button>
              </div>
              <div className="demo-fields">
                <div className="field">
                  <label htmlFor="example-normal">Champ standard</label>
                  <input
                    id="example-normal"
                    aria-label="Champ standard"
                    placeholder="Une instruction claire"
                  />
                </div>
                <div className="field">
                  <label htmlFor="example-error">Champ avec erreur</label>
                  <input
                    id="example-error"
                    aria-label="Champ avec erreur"
                    aria-invalid="true"
                    aria-describedby="example-error-message"
                    defaultValue="adresse incomplète"
                  />
                  <small id="example-error-message" className="field-error">
                    Indiquez une adresse e-mail valide.
                  </small>
                </div>
              </div>
              <div className="principle-grid">
                <article>
                  <h3>Navigation & cartes</h3>
                  <p>
                    Menus clavier et tactile, fermeture avec Échap, page active, séparateurs et
                    flèches explicites. Footer par familles de liens.
                  </p>
                </article>
                <article>
                  <h3>Hover & focus</h3>
                  <p>
                    Changement de fond et déplacement léger des flèches au survol. Contour de focus
                    visible. Pas d’information uniquement au survol.
                  </p>
                </article>
                <article>
                  <h3>Chargement & validation</h3>
                  <p>
                    Bouton désactivé pendant la simulation, retour visible, erreurs associées aux
                    champs, focus sur la première erreur.
                  </p>
                </article>
                <article>
                  <h3>Mobile & accessibilité</h3>
                  <p>
                    Une colonne sous 760 px, menu compact, contrôles d’au moins 44 px, lien
                    d’évitement, ordre de titres logique et mouvement réduit.
                  </p>
                </article>
              </div>
            </div>
            <Proposal>
              Objectif WCAG 2.1 AA. Ce prototype ne constitue pas une certification d’accessibilité.
              Les textes affichés sont des propositions à valider.
            </Proposal>
          </>
        )}
      </section>
    </>
  );
}
