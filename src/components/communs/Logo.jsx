// Component Logo + Lektio

// Import de l'icône utilisée pour le logo
import { BookBookmarkIcon } from "@phosphor-icons/react";

// Feuille de style du logo
import "../../css/components/Logo.css";


function Logo() {
  return (
    
      <div className="logo">
        {/* Icône avec marque-page et nom de l'application */}
        <BookBookmarkIcon size={22} weight="fill" />
        <span>LEKTIO</span>
    </div>
    
  );
}

export default Logo;