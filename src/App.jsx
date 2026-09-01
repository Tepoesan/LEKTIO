// Hooks utilisés pour conserver et sauvegarder les réglages
import { useEffect, useState } from "react";

// Outils de React Router utilisés pour gérer les pages
import { Routes, Route } from "react-router-dom";

// Pages de l’application LEKTIO
import Bibliotheque from "./pages/Bibliotheque";
import Lecture from "./pages/Lecture";
import Preferences from "./pages/Preferences";

/*
 * Récupère les préférences enregistrées dans le navigateur.
 * Cette fonction est utilisée au premier chargement de l’application.
 */
function chargerPreferences() {
  try {
    // Recherche les préférences dans le localStorage
    const preferencesEnregistrees =
      localStorage.getItem("lektio-preferences");

    /*
     * Le localStorage conserve uniquement du texte.
     * JSON.parse transforme ce texte en objet JavaScript.
     */
    return preferencesEnregistrees
      ? JSON.parse(preferencesEnregistrees)
      : {};
  } catch (erreur) {
    /*
     * Si les données sont invalides, l’application continue
     * de fonctionner avec les valeurs par défaut.
     */
    console.error(
      "Impossible de charger les préférences :",
      erreur
    );

    return {};
  }
}

function App() {
  /*
   * Charge une seule fois les préférences enregistrées.
   * Si rien n’a été enregistré, cette variable contient un objet vide.
   */
  const [preferencesSauvegardees] =
    useState(chargerPreferences);

  /*
   * Chaque réglage utilise sa valeur sauvegardée si elle existe.
   * Sinon, il utilise sa valeur par défaut.
   */

  // Police utilisée pour lire les livres
  const [police, setPolice] = useState(
    preferencesSauvegardees.police ?? "serif"
  );

  // Taille du texte en pixels
  const [tailleTexte, setTailleTexte] = useState(
    preferencesSauvegardees.tailleTexte ?? 16
  );

  // Espace entre les lignes
  const [interligne, setInterligne] = useState(
    preferencesSauvegardees.interligne ?? 1.4
  );

  // Espace entre les caractères en pixels
  const [
    espacementCaracteres,
    setEspacementCaracteres,
  ] = useState(
    preferencesSauvegardees.espacementCaracteres ?? 0
  );

  // Largeur de la zone de lecture
  const [largeurContenu, setLargeurContenu] = useState(
    preferencesSauvegardees.largeurContenu ?? "normal"
  );

  // Langue utilisée dans toute l’interface
  const [langue, setLangue] = useState(
    preferencesSauvegardees.langue ?? "fr"
  );

  // Thème utilisé dans toute l’application
  const [theme, setTheme] = useState(
    preferencesSauvegardees.theme ?? "light"
  );

  // Couleur utilisée pour les éléments actifs
  const [couleurAccent, setCouleurAccent] = useState(
    preferencesSauvegardees.couleurAccent ?? "#7c3aed"
  );

  // Niveau de contraste utilisé dans toute l’application
  const [contraste, setContraste] = useState(
    preferencesSauvegardees.contraste ?? "standard"
  );

  /*
   * Sauvegarde automatiquement les préférences.
   * Ce code est exécuté dès qu’un réglage est modifié.
   */
  useEffect(() => {
    // Regroupe tous les réglages dans un seul objet
    const preferences = {
      langue,
      theme,
      couleurAccent,
      contraste,
      police,
      tailleTexte,
      interligne,
      espacementCaracteres,
      largeurContenu,
    };

    try {
      /*
       * JSON.stringify transforme l’objet en texte,
       * car le localStorage ne peut enregistrer que du texte.
       */
      localStorage.setItem(
        "lektio-preferences",
        JSON.stringify(preferences)
      );
    } catch (erreur) {
      /*
       * Affiche une erreur si le navigateur ne parvient pas
       * à sauvegarder les préférences.
       */
      console.error(
        "Impossible de sauvegarder les préférences :",
        erreur
      );
    }
  }, [
    /*
     * useEffect relance la sauvegarde dès qu’une de ces
     * valeurs est modifiée.
     */
    langue,
    theme,
    couleurAccent,
    contraste,
    police,
    tailleTexte,
    interligne,
    espacementCaracteres,
    largeurContenu,
  ]);

  return (
    /*
     * Ce conteneur entoure toute l’application.
     * Sa classe permet d’appliquer le thème sélectionné.
     * La variable CSS contient la couleur d’accentuation.
     */
    <div
      className={`application theme-${theme} contraste-${contraste}`}
      style={{ "--couleur-accent": couleurAccent }}
    >
      <Routes>
        {/* Page de la bibliothèque */}
        <Route
          path="/"
          element={
            <Bibliotheque
              langue={langue}
              setLangue={setLangue}
            />
          }
        />

        {/* Page de lecture */}
        <Route
          path="/lecture/:id"
          element={
            <Lecture

              langue={langue}

              police={police}
              setPolice={setPolice}

              tailleTexte={tailleTexte}
              setTailleTexte={setTailleTexte}

              interligne={interligne}
              setInterligne={setInterligne}

              espacementCaracteres={
                espacementCaracteres
              }
              setEspacementCaracteres={
                setEspacementCaracteres
              }
              largeurContenu={largeurContenu}
              setLargeurContenu={setLargeurContenu}
            />
          }
        />

        {/* Page permettant de modifier tous les réglages */}
        <Route
          path="/preferences"
          element={
            <Preferences
              langue={langue}
              setLangue={setLangue}

              theme={theme}
              setTheme={setTheme}

              couleurAccent={couleurAccent}
              setCouleurAccent={setCouleurAccent}

              contraste={contraste}
              setContraste={setContraste}

              police={police}
              setPolice={setPolice}

              tailleTexte={tailleTexte}
              setTailleTexte={setTailleTexte}

              interligne={interligne}
              setInterligne={setInterligne}

              espacementCaracteres={
                espacementCaracteres
              }
              setEspacementCaracteres={
                setEspacementCaracteres
              }
              largeurContenu={largeurContenu}
              setLargeurContenu={setLargeurContenu}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;