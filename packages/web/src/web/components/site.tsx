import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Globe2,
  Smartphone,
  Layers3,
  ShieldCheck,
  Plus,
} from "lucide-react";

export const services = [
  {
    slug: "plateformes-web",
    name: "Plateformes web",
    short: "Un socle solide pour vos ambitions.",
    desc: "Du site institutionnel à la plateforme métier, donnez une forme utile à votre projet numérique.",
    icon: Globe2,
    tag: "CONCEVOIR & DÉVELOPPER",
    needs: [
      "Présenter votre activité clairement",
      "Simplifier un parcours ou un processus métier",
      "Faire évoluer une plateforme existante",
    ],
    offer: [
      "Cadrage et conception UX/UI",
      "Développement de plateformes web",
      "Évolution et maintenance",
    ],
    note: "Périmètre, technologies et modalités de maintenance à confirmer par GSTech.",
  },
  {
    slug: "applications-mobiles",
    name: "Applications mobiles",
    short: "Votre projet, à portée de main.",
    desc: "Imaginez une expérience mobile pensée pour les usages réels de vos utilisateurs.",
    icon: Smartphone,
    tag: "CONNECTER & SIMPLIFIER",
    needs: [
      "Rendre un service accessible sur mobile",
      "Simplifier les interactions au quotidien",
      "Accompagner une idée de produit mobile",
    ],
    offer: [
      "Cadrage des usages et des parcours",
      "Design et développement mobile",
      "Accompagnement à la mise en ligne",
    ],
    note: "Plateformes prises en charge et modalités de publication à confirmer par GSTech.",
  },
  {
    slug: "cybersecurite",
    name: "Cybersécurité",
    short: "La confiance se construit.",
    desc: "Comprenez vos risques et identifiez les actions adaptées pour renforcer votre environnement numérique.",
    icon: ShieldCheck,
    tag: "ÉVALUER & PROTÉGER",
    needs: [
      "Identifier les risques de votre infrastructure",
      "Prioriser les actions de sécurisation",
      "Faire des choix techniques éclairés",
    ],
    offer: [
      "Audit de cybersécurité",
      "Conseil et recommandations",
      "Sécurisation des infrastructures",
    ],
    note: "Périmètre des audits, méthodes et compétences à confirmer. Aucune certification ni garantie de sécurité n’est revendiquée.",
  },
];
export const apps = [
  { slug: "samagp", name: "SamaGP", index: "01", tone: "mint" },
  { slug: "cybersentinels", name: "CyberSentinels", index: "02", tone: "blue" },
];
export function Button({
  to,
  children,
  secondary = false,
}: {
  to: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link href={to} className={`button ${secondary ? "secondary" : ""}`}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}
export function Proposal({
  children = "Textes proposés à valider par GSTech.",
}: {
  children?: React.ReactNode;
}) {
  return (
    <p className="proposal">
      <span>NOTE DE CONCEPTION</span>
      {children}
    </p>
  );
}
export function Missing({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="missing">
      <Plus size={20} />
      <strong>{title}</strong>
      <p>{children}</p>
      <span>CONTENU À FOURNIR</span>
    </div>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [loc] = useLocation();
  useEffect(() => {
    setOpen(false);
    document.querySelectorAll("header details").forEach((e) => e.removeAttribute("open"));
  }, [loc]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.querySelectorAll("header details").forEach((el) => el.removeAttribute("open"));
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" aria-label="GSTech — Accueil" className="logo">
          <img src="/images/gstech-logo.jpeg" alt="GSTech" width="828" height="518" />
        </Link>
        <nav aria-label="Navigation principale" className="desktop-nav">
          <Link href="/" className={loc === "/" ? "active" : ""}>
            Accueil
          </Link>
          <details>
            <summary className={loc.startsWith("/services") ? "active" : ""}>
              Nos services <ChevronDown size={13} />
            </summary>
            <div className="dropdown">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  <s.icon size={18} />
                  {s.name}
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          </details>
          <details>
            <summary className={loc.startsWith("/applications") ? "active" : ""}>
              Nos applications <ChevronDown size={13} />
            </summary>
            <div className="dropdown">
              {apps.map((a) => (
                <Link key={a.slug} href={`/applications/${a.slug}`}>
                  {a.name}
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          </details>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Button to="/contact?mode=devis">Parlons de votre projet</Button>
          <button
            className="menu-toggle"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Navigation mobile">
          <Link href="/">Accueil</Link>
          <p>Nos services</p>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              {s.name}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <p>Nos applications</p>
          {apps.map((a) => (
            <Link key={a.slug} href={`/applications/${a.slug}`}>
              {a.name}
              <ArrowUpRight size={16} />
            </Link>
          ))}
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/conception">Voir le dossier UX/UI</Link>
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div>
          <Link href="/" className="footer-brand">
            GSTech<span>.</span>
          </Link>
          <p>
            Des idées aux solutions.
            <br />
            Le numérique, avec du sens.
          </p>
          <small>Signature proposée à valider.</small>
        </div>
        <div>
          <h3>Expertises</h3>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div>
          <h3>Explorer</h3>
          {apps.map((a) => (
            <Link key={a.slug} href={`/applications/${a.slug}`}>
              {a.name}
            </Link>
          ))}
          <Link href="/a-propos">À propos de GSTech</Link>
          <Link href="/conception">
            Dossier UX/UI <ArrowUpRight size={13} />
          </Link>
        </div>
        <div>
          <h3>Échangeons</h3>
          <Link href="/contact?mode=devis">
            Demander un devis <ArrowUpRight size={13} />
          </Link>
          <Link href="/contact">Nous contacter</Link>
          <small>
            Coordonnées et réseaux sociaux
            <br />à fournir par GSTech.
          </small>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} GSTech · Prototype de conception</span>
        <div>
          <Link href="/legal/mentions-legales">Mentions légales</Link>
          <Link href="/legal/confidentialite">Confidentialité</Link>
          <Link href="/legal/cookies">Cookies</Link>
          <Link href="/legal/cgu">CGU</Link>
        </div>
      </div>
      <div className="prototype-note">
        Prototype — textes proposés à valider · contenus manquants signalés · aucun formulaire
        envoyé
      </div>
    </footer>
  );
}
export function CTA() {
  return (
    <section className="cta-section container">
      <div>
        <Eyebrow>ET SI ON COMMENÇAIT ?</Eyebrow>
        <h2>
          Votre prochain projet
          <br />
          commence par un échange.
        </h2>
      </div>
      <div>
        <p>
          Un besoin précis ou une idée à explorer ?<br />
          Présentez-nous votre projet.
        </p>
        <Button to="/contact?mode=devis">Parlons de votre projet</Button>
      </div>
    </section>
  );
}
export function Diagram({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`diagram ${compact ? "compact" : ""}`}
      aria-label="Illustration abstraite des trois expertises GSTech"
    >
      <div className="diagram-grid" />
      <div className="diagram-orbit one" />
      <div className="diagram-orbit two" />
      <div className="architecture">
        <div className="architecture-top">
          <Layers3 size={30} />
          <span>
            UN ÉCOSYSTÈME
            <br />
            <strong>Trois expertises.</strong>
          </span>
          <span className="live-dot" />
        </div>
        {services.map((s, i) => (
          <div className={`architecture-layer layer-${i}`} key={s.slug}>
            <span className="layer-icon">
              <s.icon size={23} />
            </span>
            <span>
              <small>0{i + 1}</small>
              <strong>{s.name}</strong>
            </span>
            <ArrowUpRight size={18} />
          </div>
        ))}
        <div className="architecture-base">CONCEVOIR. CONNECTER. PROTÉGER.</div>
      </div>
      <div className="float-label top">
        <span />
        Une vision d’ensemble
      </div>
      <div className="float-label bottom">
        <span className="amber-dot" />
        Des solutions qui se complètent
      </div>
      <div className="diagram-corner">GST / DIGITAL ECOSYSTEM</div>
    </div>
  );
}
export function ServiceRows() {
  return (
    <div className="service-rows">
      {services.map((s, i) => (
        <Link key={s.slug} href={`/services/${s.slug}`} className="service-row">
          <span className="row-number">0{i + 1}</span>
          <div className="row-title">
            <s.icon size={24} />
            <h3>{s.name}</h3>
          </div>
          <p>{s.short}</p>
          <span className="circle-arrow">
            <ArrowUpRight size={22} />
          </span>
        </Link>
      ))}
    </div>
  );
}
export function AppPanels() {
  return (
    <div className="app-panels">
      {apps.map((a) => (
        <Link key={a.slug} href={`/applications/${a.slug}`} className={`app-panel ${a.tone}`}>
          <div className="app-panel-top">
            <span>APPLICATION GSTECH / {a.index}</span>
            <ArrowUpRight size={24} />
          </div>
          <h3>{a.name}</h3>
          <p>Découvrez l’application et ses informations utiles.</p>
          <div className="app-placeholder">
            <Smartphone size={28} />
            <span>Visuel officiel à fournir</span>
          </div>
          <div className="app-panel-bottom">
            Explorer l’application <ArrowRight size={18} />
          </div>
        </Link>
      ))}
    </div>
  );
}
export function Breadcrumb({
  current,
  parent = "Services",
  parentPath = "/services",
}: {
  current: string;
  parent?: string;
  parentPath?: string;
}) {
  return (
    <div className="breadcrumb">
      <Link href="/">Accueil</Link>
      <span>/</span>
      <Link href={parentPath}>{parent}</Link>
      <span>/</span>
      <span>{current}</span>
    </div>
  );
}
