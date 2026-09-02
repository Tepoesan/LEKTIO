// Composant commun TabBar

// Outil utilisé pour naviguer entre les pages
import { NavLink } from "react-router-dom";

// Icônes de la barre de navigation
import {
  ShoppingCartIcon,
  BookOpenIcon,
  GearIcon,
} from "@phosphor-icons/react";

// Textes disponibles en français, anglais et espagnol
import traductions from "../../data/translations.json";

// Style du composant
import "../../css/components/TabBar.css";

// Reçoit la langue sélectionnée dans l’application
function TabBar({ langue }) {
  // Raccourci vers les textes traduits
  const textes = traductions.translations;

  return (
    <nav
      className="tabbar"
      aria-label={textes.nav.mainNavigation[langue]}
    >
      
      {/*
      La page Librairie n’a pas encore de route définie.

      Pour la rendre fonctionnelle, il faudrait :
      1. créer une page Librairie.jsx ;
      2. importer cette page dans App.jsx ;
      3. ajouter une route avec le chemin "/librairie" ;
      4. remplacer cette div par un NavLink vers "/librairie" ;
      5. ajouter le style actif du lien dans le CSS.
      */}
      <div className="tabbar-lien">
        <ShoppingCartIcon
          size={22}
          aria-hidden="true"
        />

        <span>{textes.nav.bookstore[langue]}</span>
      </div>

      {/* Retour vers la bibliothèque personnelle ( page par défaut ) */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "tabbar-lien actif"
            : "tabbar-lien"
        }
      >
        <BookOpenIcon
          size={22}
          aria-hidden="true"
        />

        <span>{textes.nav.library[langue]}</span>
      </NavLink>

      {/* Accès aux préférences */}
      <NavLink
        to="/preferences"
        className={({ isActive }) =>
          isActive
            ? "tabbar-lien actif"
            : "tabbar-lien"
        }
      >
        <GearIcon
          size={22}
          aria-hidden="true"
        />

        <span>{textes.nav.settings[langue]}</span>
      </NavLink>
    </nav>
  );
}

export default TabBar;