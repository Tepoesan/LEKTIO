// Icône Toggle utilisée pour la flèche du menu
import { CaretDownIcon } from "@phosphor-icons/react";

// Style du composant
import "../../css/components/ChoixLangue.css";

// Import de translation.json
import traductions from "../../data/translations.json";

// Reçoit la langue actuelle et la fonction permettant de la modifier
function ChoixLangue({ langue, setLangue }) {

  const textes = traductions.translations;

  return (

    <div className="choix-langue">

      {/* Menu permettant de choisir la langue de l’interface */}
      <select
        value={langue}
        onChange={(event) => setLangue(event.target.value)}
        aria-label={textes.nav.chooseLanguage[langue]}
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>

      {/* Flèche toggle personnalisée placée au-dessus du menu */}
      <CaretDownIcon
        className="fleche-langue"
        size={16}
        aria-hidden="true"
      />
    </div>
  );
}

export default ChoixLangue;