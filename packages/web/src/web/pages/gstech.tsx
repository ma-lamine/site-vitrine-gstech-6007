import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  CheckCircle2,
  MessageSquare,
  Smartphone,
  Loader2,
} from "lucide-react";
import {
  services,
  apps,
  Button,
  Eyebrow,
  Proposal,
  Missing,
  CTA,
  Diagram,
  ServiceRows,
  AppPanels,
  Breadcrumb,
} from "../components/site";

export function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>WEB · MOBILE · CYBERSÉCURITÉ</Eyebrow>
            <h1>
              Le numérique.
              <br />
              Au service de
              <br />
              <span>vos ambitions.</span>
            </h1>
            <p>
              Plateformes web, applications mobiles et cybersécurité. Trois expertises pour donner
              vie à vos projets et faire avancer votre entreprise.
            </p>
            <div className="actions">
              <Button to="/services">Découvrir nos services</Button>
              <Button to="/contact?mode=devis" secondary>
                Demander un devis
              </Button>
            </div>
            <div className="hero-caption">
              <span className="caption-line" />
              Des solutions pensées pour vos besoins.
            </div>
          </div>
          <Diagram />
        </div>
        <div className="container hero-bottom">
          <span>DE L’IDÉE À LA SOLUTION</span>
          <span>Une approche claire. Un projet qui vous ressemble.</span>
          <a href="#expertises" aria-label="Découvrir les expertises">
            <ArrowRight size={20} className="down-arrow" />
          </a>
        </div>
      </section>
      <section id="expertises" className="container section">
        <div className="section-heading">
          <div>
            <Eyebrow>NOS EXPERTISES</Eyebrow>
            <h2>
              Trois expertises.
              <br />
              Une même exigence.
            </h2>
          </div>
          <p>
            Choisissez le point de départ de votre projet.
            <br />
            Nous imaginons la suite avec vous.
          </p>
        </div>
        <ServiceRows />
        <Proposal />
      </section>
      <section className="applications-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <Eyebrow>NOS APPLICATIONS</Eyebrow>
              <h2>
                Le numérique,
                <br />
                au plus près des usages.
              </h2>
            </div>
            <p>
              Retrouvez SamaGP et CyberSentinels,
              <br />
              les applications de GSTech.
            </p>
          </div>
          <AppPanels />
          <Proposal>
            Objectifs, fonctionnalités, captures et liens de téléchargement à fournir pour chaque
            application.
          </Proposal>
        </div>
      </section>
      <section className="container section method-section">
        <div>
          <Eyebrow>NOTRE APPROCHE</Eyebrow>
          <h2>
            Comprendre d’abord.
            <br />
            Construire ensuite.
          </h2>
          <p>
            Un projet numérique commence par les bonnes questions. Voici la démarche que nous
            proposons de présenter pour GSTech.
          </p>
          <Link href="/a-propos" className="text-link">
            Découvrir GSTech <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="method-steps">
          {[
            [
              "01",
              "Écouter & cadrer",
              "Clarifier vos enjeux, vos utilisateurs et les contours du projet.",
            ],
            [
              "02",
              "Concevoir & réaliser",
              "Transformer les besoins en une solution lisible et cohérente.",
            ],
            [
              "03",
              "Accompagner & faire évoluer",
              "Préparer la suite selon les modalités convenues.",
            ],
          ].map(([n, t, d]) => (
            <div key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
          <Proposal>
            Démarche proposée, à confirmer par GSTech. Les références et témoignages ne seront
            ajoutés qu’après validation.
          </Proposal>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function ServicePage({ slug }: { slug: string }) {
  const s = services.find((s) => s.slug === slug);
  if (!s) return <NotFound />;
  return (
    <>
      <section className={`internal-hero ${slug === "cybersecurite" ? "security-hero" : ""}`}>
        <div className="container">
          <Breadcrumb current={s.name} />
          <div className="internal-hero-grid">
            <div>
              <Eyebrow>{s.tag}</Eyebrow>
              <h1>
                {s.name}
                <span>{s.short}</span>
              </h1>
              <p>{s.desc}</p>
              <Button to={`/contact?mode=devis&service=${s.slug}`}>Parler de votre projet</Button>
            </div>
            <div className="service-emblem">
              <div className="emblem-ring" />
              <s.icon size={96} strokeWidth={1} />
              <span>GSTECH / {s.name.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </section>
      <div className="container service-content">
        <aside className="page-toc">
          <span>DANS CETTE PAGE</span>
          <a href="#besoins">Vos besoins</a>
          <a href="#prestations">Nos prestations</a>
          <a href="#demarche">La démarche</a>
          <a href="#expertise">Expertise & références</a>
          <Button to={`/contact?mode=devis&service=${s.slug}`}>Demander un devis</Button>
        </aside>
        <div className="service-body">
          <Proposal />
          <section id="besoins">
            <Eyebrow>01 / VOS ENJEUX</Eyebrow>
            <h2>
              Partir de ce qui compte
              <br />
              pour vous.
            </h2>
            <p>
              Pour les entreprises, PME et organismes qui souhaitent donner une direction claire à
              leur projet.
            </p>
            <ul className="check-list">
              {s.needs.map((n) => (
                <li key={n}>
                  <Check size={18} />
                  {n}
                </li>
              ))}
            </ul>
          </section>
          <section id="prestations">
            <Eyebrow>02 / LES PRESTATIONS</Eyebrow>
            <h2>
              Un accompagnement
              <br />à définir ensemble.
            </h2>
            <div className="offer-list">
              {s.offer.map((o, i) => (
                <div key={o}>
                  <span>0{i + 1}</span>
                  <h3>{o}</h3>
                  <ArrowUpRight size={20} />
                </div>
              ))}
            </div>
            <Proposal>{s.note}</Proposal>
          </section>
          <section id="demarche">
            <Eyebrow>03 / LA DÉMARCHE</Eyebrow>
            <h2>
              De la question
              <br />à la solution.
            </h2>
            <div className="process-grid">
              {[
                ["Cadrer", "Définir le besoin, le périmètre et les priorités."],
                ["Réaliser", "Concevoir et mettre en œuvre la réponse retenue."],
                ["Accompagner", "Prévoir les prochaines étapes du projet."],
              ].map(([t, d], i) => (
                <div key={t}>
                  <span>0{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <Proposal>Étapes indicatives à valider selon le service.</Proposal>
          </section>
          <section id="expertise">
            <Eyebrow>04 / LES ÉLÉMENTS DE CONFIANCE</Eyebrow>
            <h2>
              Une expertise
              <br />à documenter.
            </h2>
            <Missing title="Compétences & réalisations">
              Technologies, compétences confirmées et cas clients autorisés à fournir. Aucune
              certification ni résultat n’est affiché sans validation.
            </Missing>
          </section>
        </div>
      </div>
      <CTA />
    </>
  );
}
export function ApplicationPage({ slug }: { slug: string }) {
  const app = apps.find((a) => a.slug === slug);
  if (!app) return <NotFound />;
  return (
    <>
      <section className={`internal-hero app-hero ${app.tone}`}>
        <div className="container">
          <Breadcrumb current={app.name} parent="Applications" parentPath="/applications" />
          <div className="internal-hero-grid">
            <div>
              <Eyebrow>UNE APPLICATION GSTECH</Eyebrow>
              <h1>
                {app.name}
                <span>Découvrez l’application.</span>
              </h1>
              <p>
                Cette page réunira les informations officielles, les fonctionnalités et les liens
                utiles de {app.name}.
              </p>
              <Button to="/contact?mode=contact">Une question sur l’application ?</Button>
              <Proposal>
                Présentation provisoire : objectif et public à préciser par GSTech.
              </Proposal>
            </div>
            <div className="official-visual">
              <Smartphone size={52} strokeWidth={1} />
              <strong>
                Captures officielles
                <br />à fournir
              </strong>
              <p>
                Aucune interface de {app.name}
                <br />
                n’a été inventée.
              </p>
              <span>EMPLACEMENT VISUEL</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <Eyebrow>À PROPOS DE L’APPLICATION</Eyebrow>
            <h2>Comprendre {app.name}.</h2>
          </div>
          <p>
            Les informations ci-dessous seront complétées
            <br />à partir des contenus validés par GSTech.
          </p>
        </div>
        <div className="info-grid">
          <Missing title="Objectif & public">
            Description officielle de l’application et des utilisateurs auxquels elle s’adresse.
          </Missing>
          <Missing title="Fonctionnalités clés">
            Liste des fonctionnalités validées, sans supposition sur le fonctionnement.
          </Missing>
          <Missing title="Disponibilité">
            Liens officiels App Store, Google Play ou accès web, si disponibles.
          </Missing>
        </div>
      </section>
      <section className="container app-info">
        <div>
          <Eyebrow>LES RÉPONSES UTILES</Eyebrow>
          <h2>Avant de commencer.</h2>
          <p>Une FAQ sera ajoutée lorsque les réponses officielles seront disponibles.</p>
        </div>
        <div>
          <details className="faq">
            <summary>
              Pourquoi n’y a-t-il pas de bouton de téléchargement ? <span>+</span>
            </summary>
            <p>
              Les liens officiels n’ont pas encore été fournis. Aucun lien de téléchargement n’est
              simulé.
            </p>
          </details>
          <details className="faq">
            <summary>
              Comment obtenir des informations ? <span>+</span>
            </summary>
            <p>
              La page contact présente le parcours prévu. Dans ce prototype, aucun message n’est
              envoyé.
            </p>
            <Link href="/contact" className="text-link">
              Voir le parcours de contact <ArrowRight size={16} />
            </Link>
          </details>
          <Proposal>FAQ de conception, non destinée à la publication en l’état.</Proposal>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Hub({ type }: { type: "services" | "applications" }) {
  return (
    <>
      <section className="internal-hero">
        <div className="container">
          <Eyebrow>{type === "services" ? "NOS EXPERTISES" : "NOS APPLICATIONS"}</Eyebrow>
          <h1>
            {type === "services" ? "Quel est votre prochain projet ?" : "Les applications GSTech."}
          </h1>
          <p>
            {type === "services"
              ? "Explorez nos trois pôles de services."
              : "Découvrez SamaGP et CyberSentinels."}
          </p>
        </div>
      </section>
      <section className="container section">
        {type === "services" ? <ServiceRows /> : <AppPanels />}
        <Proposal />
      </section>
      <CTA />
    </>
  );
}

export function About() {
  return (
    <>
      <section className="internal-hero">
        <div className="container">
          <Eyebrow>À PROPOS DE GSTECH</Eyebrow>
          <h1>
            La technique.
            <br />
            <span>Avec une vision d’ensemble.</span>
          </h1>
          <p>
            GSTech intervient dans les plateformes web, les applications mobiles et la
            cybersécurité.
          </p>
          <Proposal>
            Seuls les trois pôles d’activité sont fournis dans le brief. Présentation détaillée à
            compléter.
          </Proposal>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <h2>
            Une entreprise
            <br />à découvrir.
          </h2>
          <p>
            Pas de chiffres, de parcours ni de membres
            <br />
            d’équipe inventés.
          </p>
        </div>
        <div className="info-grid">
          <Missing title="Notre histoire">
            Présentation institutionnelle, implantation et engagements confirmés.
          </Missing>
          <Missing title="L’équipe">Noms, fonctions, biographies et photos autorisées.</Missing>
          <Missing title="Les réalisations">
            Contexte, besoin, réponse et résultats documentés ; logos autorisés.
          </Missing>
        </div>
      </section>
      <CTA />
    </>
  );
}

const legalNames: Record<string, string> = {
  "mentions-legales": "Mentions légales",
  confidentialite: "Politique de confidentialité",
  cookies: "Politique cookies",
  cgu: "Conditions générales d’utilisation",
};
export function Legal({ slug }: { slug: string }) {
  return (
    <section className="container section legal">
      <Eyebrow>PAGE LÉGALE / STRUCTURE</Eyebrow>
      <h1>{legalNames[slug] || "Page légale"}</h1>
      <Missing title="Texte juridique à fournir et valider">
        Raison sociale, responsable de publication, hébergeur, modalités de traitement des données
        et coordonnées sont à renseigner. Ce bloc n’est pas un texte juridique prêt à publier.
      </Missing>
      <p>
        Le formulaire de ce prototype ne transmet et ne stocke aucune demande. Les scripts
        techniques du socle et leur gestion de consentement devront être audités avant toute
        publication.
      </p>
      <Button to="/contact" secondary>
        Retour au contact
      </Button>
    </section>
  );
}
export function NotFound() {
  return (
    <section className="container section">
      <Eyebrow>404</Eyebrow>
      <h1>Cette page n’existe pas.</h1>
      <Button to="/">Retour à l’accueil</Button>
    </section>
  );
}

export function Contact() {
  const query = new URLSearchParams(window.location.search);
  const [mode, setMode] = useState(query.get("mode") === "contact" ? "contact" : "devis");
  const [selected, setSelected] = useState(query.get("service") || "");
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loc] = useLocation();
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    setMode(q.get("mode") === "contact" ? "contact" : "devis");
    setSelected(q.get("service") || "");
  }, [loc]);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(data.get("nom") || "").trim()) errs.nom = "Indiquez votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email") || "")))
      errs.email = "Indiquez une adresse e-mail valide.";
    if (!String(data.get("message") || "").trim()) errs.message = "Décrivez votre demande.";
    if (mode === "devis" && !selected) errs.service = "Choisissez une expertise.";
    setErrors(errs);
    if (Object.keys(errs).length) {
      setTimeout(() => document.getElementById(Object.keys(errs)[0])?.focus(), 0);
      return;
    }
    setState("loading");
    setTimeout(() => setState("success"), 650);
  }
  const field = (key: string, label: string, type = "text", required = true) => (
    <div className="field">
      <label htmlFor={key}>
        {label}
        {required && <span> *</span>}
      </label>
      <input
        id={key}
        aria-label={label}
        name={key}
        type={type}
        autoComplete={key === "nom" ? "name" : key === "email" ? "email" : "organization"}
        required={required}
        aria-invalid={!!errors[key]}
        aria-describedby={errors[key] ? `${key}-error` : undefined}
      />
      {errors[key] && (
        <small id={`${key}-error`} className="field-error">
          {errors[key]}
        </small>
      )}
    </div>
  );
  return (
    <>
      <section className="contact-heading container">
        <Eyebrow>FAISONS CONNAISSANCE</Eyebrow>
        <h1>
          Une idée, un besoin ?<br />
          <span>Parlons-en.</span>
        </h1>
        <p>
          Présentez votre projet en quelques mots.
          <br />
          Le bon point de départ, c’est votre besoin.
        </p>
      </section>
      <section className="container contact-layout">
        <aside>
          <div className="contact-aside">
            <MessageSquare size={28} strokeWidth={1.5} />
            <h2>
              Un échange simple.
              <br />
              Un projet plus clair.
            </h2>
            <p>Web, mobile ou cybersécurité : dites-nous ce que vous souhaitez construire.</p>
            <div className="contact-detail">
              <span>COORDONNÉES GSTECH</span>
              <p>
                E-mail, téléphone et adresse
                <br />à fournir.
              </p>
            </div>
            <div className="contact-detail">
              <span>ET APRÈS ?</span>
              <p>
                Le parcours prévu : réception de votre demande, échange de cadrage puis proposition
                adaptée.
              </p>
              <small>Modalités et délais à valider.</small>
            </div>
          </div>
          <Proposal>Prototype : aucune donnée saisie n’est envoyée ou stockée.</Proposal>
        </aside>
        <div className="contact-form-panel">
          <div className="form-tabs" role="tablist" aria-label="Type de demande">
            <button
              role="tab"
              aria-selected={mode === "devis"}
              onClick={() => {
                setMode("devis");
                setState("idle");
                setErrors({});
              }}
            >
              Demander un devis
            </button>
            <button
              role="tab"
              aria-selected={mode === "contact"}
              onClick={() => {
                setMode("contact");
                setState("idle");
                setErrors({});
              }}
            >
              Autre question
            </button>
          </div>
          {state === "success" ? (
            <div className="success-state" aria-live="polite">
              <CheckCircle2 size={48} />
              <h2>Votre demande est prête.</h2>
              <p>Dans le site final, vous verrez ici la confirmation de réception.</p>
              <div className="simulation">
                Simulation uniquement : aucun message n’a été envoyé à GSTech.
              </div>
              <button className="button" onClick={() => setState("idle")}>
                Faire une nouvelle simulation <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="form-intro">
                <h2>
                  {mode === "devis"
                    ? "Racontez-nous votre projet."
                    : "Comment pouvons-nous vous aider ?"}
                </h2>
                <p>Les champs marqués d’un * sont nécessaires.</p>
              </div>
              <div className="form-grid">
                {field("nom", "Votre nom")}
                {field("entreprise", "Entreprise / Organisation", "text", false)}
              </div>
              {field("email", "Adresse e-mail", "email")}
              {mode === "devis" && (
                <>
                  <fieldset className="service-choice">
                    <legend>Quelle expertise vous intéresse ? *</legend>
                    <div>
                      {services.map((s) => (
                        <label key={s.slug} className={selected === s.slug ? "selected" : ""}>
                          <input
                            type="radio"
                            aria-label={s.name}
                            name="service"
                            id={s.slug === services[0].slug ? "service" : undefined}
                            value={s.slug}
                            checked={selected === s.slug}
                            onChange={() => setSelected(s.slug)}
                            aria-describedby={errors.service ? "service-error" : undefined}
                          />
                          <s.icon size={21} />
                          <span>{s.name}</span>
                        </label>
                      ))}
                    </div>
                    {errors.service && (
                      <small id="service-error" className="field-error">
                        {errors.service}
                      </small>
                    )}
                  </fieldset>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="budget">
                        Budget indicatif <span className="optional">facultatif</span>
                      </label>
                      <select id="budget" name="budget">
                        <option value="">À définir ensemble</option>
                        <option>Moins de 1 million FCFA</option>
                        <option>1 à 5 millions FCFA</option>
                        <option>Plus de 5 millions FCFA</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="delai">
                        Horizon du projet <span className="optional">facultatif</span>
                      </label>
                      <select id="delai" name="delai">
                        <option>À définir ensemble</option>
                        <option>Dès que possible</option>
                        <option>Dans 1 à 3 mois</option>
                        <option>Dans plus de 3 mois</option>
                      </select>
                    </div>
                  </div>
                </>
              )}
              <div className="field">
                <label htmlFor="message">
                  {mode === "devis" ? "Votre projet en quelques mots" : "Votre message"} *
                </label>
                <textarea
                  id="message"
                  aria-label={mode === "devis" ? "Votre projet en quelques mots" : "Votre message"}
                  name="message"
                  rows={5}
                  placeholder="Votre besoin, vos objectifs, ce que vous avez déjà imaginé…"
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <small id="message-error" className="field-error">
                    {errors.message}
                  </small>
                )}
              </div>
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="website">Ne pas remplir</label>
                <input
                  id="website"
                  aria-label="Ne pas remplir"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <p className="privacy-note">
                Dans le site final, ces informations serviront à traiter votre demande.{" "}
                <Link href="/legal/confidentialite">Politique de confidentialité à valider.</Link>{" "}
                Aucune inscription à une newsletter.
              </p>
              <button type="submit" className="button submit" disabled={state === "loading"}>
                {state === "loading" ? (
                  <>
                    <Loader2 className="spin" size={18} />
                    Simulation en cours…
                  </>
                ) : (
                  <>
                    Simuler ma demande <ArrowUpRight size={18} />
                  </>
                )}
              </button>
              <p className="form-disclaimer">Démonstration du parcours · aucun envoi réel</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
