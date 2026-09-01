// Pages Lecture

// Hook React utilisé pour gérer l’ouverture du volet
import { useState } from "react";

// Outils utilisés pour récupérer l’identifiant du livre
// et revenir à la bibliothèque
import { Link, useParams } from "react-router-dom";

// Composant contenant les paramètres de lecture
import VoletParametres from "../components/communs/VoletParametres";

// Données contenant les livres
import books from "../data/books.json";
// Textes disponibles en français, anglais et espagnol
import traductions from "../data/translations.json";

// Style de la page
import "../css/pages/Lecture.css";

// Icône utilisée pour revenir à la bibliothèque
import { CaretLeftIcon } from "@phosphor-icons/react";

// Reçoit les réglages conservés dans App.jsx
function Lecture({
  langue,

  police,
  setPolice,

  tailleTexte,
  setTailleTexte,

  interligne,
  setInterligne,

  espacementCaracteres,
  setEspacementCaracteres,

  largeurContenu,
  setLargeurContenu,
}) {

  /*
   * Indique si le volet des paramètres est ouvert ou fermé.
   * Au chargement de la page, il est fermé.
   */
  const [voletOuvert, setVoletOuvert] = useState(false);

  // Raccourci vers les traductions de la page Lecture
  const textesLecture =
    traductions.translations.reading;

  /*
   * Récupère l’id présent dans l’adresse.
   * Par exemple, avec /lecture/1, id vaut "1".
   */
  const { id } = useParams();

  /*
   * Recherche dans le JSON le livre qui possède le même id.
   * Number transforme l’id de l’adresse en nombre.
   */
  const livre = books.library.find(
    (livre) => livre.id === Number(id)
  );

  /*
   * Si aucun livre ne correspond à l’id,
   * on affiche un message et un lien de retour. ( vers la page par défaut )
   */
  if (!livre) {
    return (
      <main>
        <p>
          {textesLecture.bookNotFound[langue]}
        </p>

        <Link to="/">
          {textesLecture.backToLibrary[langue]}
        </Link>
      </main>
    );
  }

  /*
   * Associe chaque choix proposé dans le volet
   * à une largeur maximale en pixels.
   */
  const largeurs = {
    etroit: "500px",
    normal: "700px",
    large: "900px",
  };

  return (
    // Contient toute la page de lecture
    <main className="lecture">

      {/* En-tête de la page */}
      <header className="lecture-entete">

       {/* Retour vers la bibliothèque */}
        <Link
          to="/"
          className="lecture-retour"
          aria-label={textesLecture.backToLibrary[langue]}
        >
          <CaretLeftIcon
            size={18}
            weight="regular"
            aria-hidden="true"
          />
        </Link>

        {/* Informations récupérées depuis le JSON */}
        <div>
          <h1>{livre.title}</h1>
          <p>{livre.author}</p>
        </div>
      </header>

      {/* Progression actuelle du livre */}
      <section className="lecture-progression">
        <p>
          {textesLecture.progress[langue]} :{" "}
          {livre.readingProgress}%
        </p>

        <progress
          value={livre.readingProgress}
          max="100"
          aria-label={textesLecture.progress[langue]}
        />
      </section>

      {/*
       * Contenu du livre.
       * Les styles utilisent les réglages choisis dans le volet :
       * taille, interligne, espacement et largeur du contenu.
       * La classe correspondant à la police applique la police choisie.
       */}
      <section
        className={`contenu-lecture ${police}`}
        style={{
          fontSize: `${tailleTexte}px`,
          lineHeight: interligne,
          letterSpacing: `${espacementCaracteres}px`,
          maxWidth: largeurs[largeurContenu],
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>
          {textesLecture.chapter[langue]} 6
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Poignée permettant d’ouvrir le volet des paramètres */}
      <button
        type="button"
        className="bouton-ouverture-volet"
        onClick={() => setVoletOuvert(true)}
        aria-label={
          textesLecture.openReadingSettings[langue]
        }
        aria-expanded={voletOuvert}
        aria-controls="volet-parametres"
      >
        <span aria-hidden="true"></span>
      </button>

      {/*
       * Le volet est affiché uniquement lorsque
       * voletOuvert contient la valeur true.
       *
       * Les valeurs indiquent les réglages actuels.
       * Les fonctions commençant par "set" permettent
       * au volet de modifier ces réglages.
       */}
      {voletOuvert && (
        <VoletParametres
          langue={langue}

          fermerVolet={() => setVoletOuvert(false)}

          police={police}
          setPolice={setPolice}

          tailleTexte={tailleTexte}
          setTailleTexte={setTailleTexte}

          interligne={interligne}
          setInterligne={setInterligne}

          espacementCaracteres={espacementCaracteres}
          setEspacementCaracteres={setEspacementCaracteres}
          
          largeurContenu={largeurContenu}
          setLargeurContenu={setLargeurContenu}
        />
      )}
    </main>
  );
}

export default Lecture;