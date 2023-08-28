import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import NotFound from "./pages/NotFoundPage/NotFoundPage";

import LandingPage from "./pages/LandingPage/LandingPage";

import AccueilLoups from "./pages/PtitsLoups/Accueil";
import PresentationLoups from "./pages/PtitsLoups/Presentation";
import ContactLoups from "./pages/PtitsLoups/Contact";
import PersonnelLoups from "./pages/PtitsLoups/Personnel";
import PreInscriptionLoups from "./pages/PtitsLoups/PreInscription";
import ProjetLoups from "./pages/PtitsLoups/Projet";
import TarifsLoups from "./pages/PtitsLoups/Tarifs";

import AccueilCalinous from "./pages/Calinous/Accueil";
import PresentationCalinous from "./pages/Calinous/Presentation";
import ContactCalinous from "./pages/Calinous/Contact";
import PersonnelCalinous from "./pages/Calinous/Personnel";
import PreInscriptionCalinous from "./pages/Calinous/PreInscription";
import ProjetCalinous from "./pages/Calinous/Projet";
import TarifsCalinous from "./pages/Calinous/Tarifs";

import Footer from "./components/Footer";
import MentionsLegales from "./pages/Footer/MentionsLegales";
import PolitiqueConfidentialite from "./pages/Footer/PolitiqueConfidentialite";
import Plan from "./pages/Footer/Plan";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Routes>

          {/* Page 404 */}

          <Route path="*" element={<NotFound />} />

          {/* Page d'accueil */}

          <Route exact path="/" element={<LandingPage />} />

          {/* Les P'tits Loups */}

          <Route
            exact
            path="/les-p-tits-loups-coulommiers"
            element={<AccueilLoups />}
          />
          <Route
            exact
            path="/les-p-tits-loups-coulommiers/presentation"
            element={<PresentationLoups />}
          />
          <Route
            exact
            path="/les-p-tits-loups-coulommiers/nous-contacter"
            element={<ContactLoups />}
          />
          <Route
            exact
            path="/les-p-tits-loups-coulommiers/le-personnel"
            element={<PersonnelLoups />}
          />
          <Route
            exact
            path="/les-p-tits-loups-coulommiers/preinscription"
            element={<PreInscriptionLoups />}
          />
          <Route
            exact
            path="/les-p-tits-loups-coulommiers/projet"
            element={<ProjetLoups />}
          />
          <Route
            exact
            path="/les-p-tits-loups-coulommiers/nos-tarifs"
            element={<TarifsLoups />}
          />

          {/* Câlinous et Galipettes */}

          <Route
            exact
            path="/calinous-et-galipettes-saint-simeon"
            element={<AccueilCalinous />}
          />
          <Route
            exact
            path="/calinous-et-galipettes-saint-simeon/presentation"
            element={<PresentationCalinous />}
          />
          <Route
            exact
            path="/calinous-et-galipettes-saint-simeon/nous-contacter"
            element={<ContactCalinous />}
          />
          <Route
            exact
            path="/calinous-et-galipettes-saint-simeon/le-personnel"
            element={<PersonnelCalinous />}
          />
          <Route
            exact
            path="/calinous-et-galipettes-saint-simeon/preinscription"
            element={<PreInscriptionCalinous />}
          />
          <Route
            exact
            path="/calinous-et-galipettes-saint-simeon/projet"
            element={<ProjetCalinous />}
          />
          <Route
            exact
            path="/calinous-et-galipettes-saint-simeon/nos-tarifs"
            element={<TarifsCalinous />}
          />

          {/* Liens du footer */}

          <Route exact path="/mentions-legales" element={<MentionsLegales />} />
          <Route exact path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route exact path="/plan-du-site" element={<Plan />} />

        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
