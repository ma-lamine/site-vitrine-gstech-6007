import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import {
  Home,
  ServicePage,
  ApplicationPage,
  Hub,
  About,
  Legal,
  Contact,
  NotFound,
} from "./pages/gstech";
import Conception from "./pages/conception";
import { Header, Footer } from "./components/site";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const titles: Record<string, string> = {
      "/": "Web, mobile & cybersécurité",
      "/contact": "Contact & demande de devis",
      "/conception": "Dossier UX/UI",
      "/services/plateformes-web": "Plateformes web",
      "/services/applications-mobiles": "Applications mobiles",
      "/services/cybersecurite": "Cybersécurité",
      "/applications/samagp": "SamaGP",
      "/applications/cybersentinels": "CyberSentinels",
      "/a-propos": "À propos",
    };
    document.title = `GSTech — ${titles[location] || "Solutions numériques"}`;
  }, [location]);
  return (
    <Provider>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services">
            <Hub type="services" />
          </Route>
          <Route path="/services/:slug">{(params) => <ServicePage slug={params.slug} />}</Route>
          <Route path="/applications">
            <Hub type="applications" />
          </Route>
          <Route path="/applications/:slug">
            {(params) => <ApplicationPage slug={params.slug} />}
          </Route>
          <Route path="/contact" component={Contact} />
          <Route path="/a-propos" component={About} />
          <Route path="/conception" component={Conception} />
          <Route path="/legal/:slug">{(params) => <Legal slug={params.slug} />}</Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
