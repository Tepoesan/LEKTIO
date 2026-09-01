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
      aria-label="Navigation principale"
    >
      {/* La page Librairie n’a pas encore de route */}
      <div className="tabbar-lien">
        <ShoppingCartIcon
          size={22}
          aria-hidden="true"
        />

        <span>{textes.nav.bookstore[langue]}</span>
      </div>

      {/* Retour vers la bibliothèque personnelle */}
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