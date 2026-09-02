// La page par défaut de l'application

// Hook utilisé pour gérer la recherche
import { useState } from "react";

// Données contenant les livres de la bibliothèque
import books from "../data/books.json";

// Composants communs utilisés sur la page
import Logo from "../components/communs/Logo";
import ChoixLangue from "../components/communs/ChoixLangue";
import TabBar from "../components/communs/TabBar";

// Permet d'ouvrir la page de lecture sans recharger l'application (Single Page App)
import { Link } from "react-router-dom";

// Feuille de style de la page Bibliothèque
import "../css/pages/Bibliotheque.css";

// Textes de l’interface disponibles en français, anglais et espagnol
import traductions from "../data/translations.json";

// Icône loupe
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

function Bibliotheque({ langue, setLangue }) {

  // Contient le texte saisi dans la barre de recherche
  const [recherche, setRecherche] = useState("");

  // Raccourci vers les textes traduits
  const textes = traductions.translations;

  // Garde les livres dont le titre ou l'auteur correspond à la recherche
  const livresFiltres = books.library.filter((livre) => {
    const texteRecherche = recherche.toLowerCase().trim();

    return (
      livre.title.toLowerCase().includes(texteRecherche) ||
      livre.author.toLowerCase().includes(texteRecherche)
    );
  });

  return (
    <main className="bibliotheque">
    {/* En-tête avec le logo et le choix de la langue */}
    <header className="bibliotheque-entete">
      <Logo />

      <ChoixLangue
        langue={langue}
        setLangue={setLangue}
      />
    </header>

      {/* Titre principal de la page */}
     <h1>{textes.nav.library[langue]}</h1>

        {/* Barre utilisée pour rechercher un livre */}
      <div className="barre-recherche">
        <input
          className="recherche-livre"
          type="search"
          placeholder={textes.nav.search[langue]}
          aria-label={textes.nav.search[langue]}
          value={recherche}
          onChange={(event) => setRecherche(event.target.value)}
        />

        {/* Icône placée à droite du champ */}
        <MagnifyingGlassIcon
          className="icone-recherche"
          size={20}
          aria-hidden="true"
        />
      </div>

      {/* Affiche les livres correspondant à la recherche */}
      <section className="grille-livres">
        {livresFiltres.map((livre) => (
          /* Envoie vers la page de lecture du livre sélectionné */
          <Link
            to={`/lecture/${livre.id}`}
            className="lien-livre"
            key={livre.id}
          >
            <article className="livre">
              {/* Affiche la couverture grâce au nom récupéré dans le JSON */}
              <img
                className="livre-couverture"
                src={`/assets/cover/${livre.coverKey}`}
                alt={`${textes.nav.bookCover[langue]} ${livre.title}`}
              />

              {/* Progression actuelle de la lecture */}
              <p>{livre.readingProgress}%</p>

              <progress
                value={livre.readingProgress}
                max="100"
              />

              {/* Titre et auteur du livre */}
              <h2>{livre.title}</h2>
              <p>{livre.author}</p>
            </article>
          </Link>
        ))}
      </section>

      {/* Navigation située en bas de la page */}
      <TabBar langue={langue} />
    </main>
  );
}

export default Bibliotheque;