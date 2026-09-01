// Composant commun thème

// Icône affichée dans les boutons de thème
import { LightbulbIcon } from "@phosphor-icons/react";

// Textes disponibles dans les trois langues
import traductions from "../../data/translations.json";

// Style du composant
import "../../css/components/ChoixTheme.css";

// Reçoit le thème actuel et permet de le modifier
function ChoixTheme({ theme, setTheme, langue }) {
  
  // Raccourci vers les traductions des thèmes
  const textesTheme =
    traductions.translations.settings.appearance.theme;

  return (
    <div className="choix-theme">
      {/* Titre du réglage */}
      <p>{textesTheme.label[langue]}</p>

      <div className="boutons-theme">
        {/* Thème clair */}
        <button
          type="button"
          className={
            theme === "light"
              ? "bouton-theme clair actif"
              : "bouton-theme clair"
          }
          onClick={() => setTheme("light")}
          aria-pressed={theme === "light"}
        >
          <LightbulbIcon size={20} aria-hidden="true" />
          <span>{textesTheme.light[langue]}</span>
        </button>

        {/* Bouton qui permet de sélectionner le thème sépia */}
        <button
        // Indique qu’il s’agit d’un bouton simple
        // et qu’il ne doit pas envoyer de formulaire
        type="button"

        // Vérifie si le thème actuel est "sepia".
        // Si oui, ajoute la classe "actif" pour montrer
        // visuellement que ce bouton est sélectionné.
        className={
            theme === "sepia"
            ? "bouton-theme sepia actif"
            : "bouton-theme sepia"
        }

        // Au clic, remplace le thème actuel par "sepia"
        onClick={() => setTheme("sepia")}

        // Indique aux technologies d’assistance
        // si ce bouton est actuellement sélectionné
        aria-pressed={theme === "sepia"}
        >
        {/* Ampoule décorative icon cachée aux lecteurs d’écran */}
        <LightbulbIcon
            size={20}
            aria-hidden="true"
        />

        {/*
        * Affiche le mot Sépia dans la langue choisie :
        * "Sépia" en français, "Sepia" en anglais ou en espagnol.
        */}
        <span>{textesTheme.sepia[langue]}</span>
        </button>
        

        {/* Thème sombre */}
        <button
          type="button"
          className={
            theme === "dark"
              ? "bouton-theme sombre actif"
              : "bouton-theme sombre"
          }
          onClick={() => setTheme("dark")}
          aria-pressed={theme === "dark"}
        >
          <LightbulbIcon size={20} aria-hidden="true" />
          <span>{textesTheme.dark[langue]}</span>
        </button>
      </div>
    </div>
  );
}

export default ChoixTheme;