// Composant commun Choix Couleur Accent

// Textes disponibles dans les trois langues
import traductions from "../../data/translations.json";

// Style du composant
import "../../css/components/ChoixCouleurAccent.css";

/*
 * Liste des couleurs disponibles.
 * La propriété "cle" permet de retrouver le nom traduit
 * de chaque couleur dans translations.json.
 */
const couleurs = [
  { cle: "purple", valeur: "#6C19FF" },
  { cle: "blue", valeur: "#3A78C8" },
  { cle: "turquoise", valeur: "#25989F" },
  { cle: "green", valeur: "#309661" },
  { cle: "orange", valeur: "#E18306" },
  { cle: "red", valeur: "#DC415D" },
];

// Reçoit la couleur actuelle et permet de la modifier
function ChoixCouleurAccent({
  couleurAccent,
  setCouleurAccent,
  langue,
}) {
  /*
   * Raccourci vers les traductions de la section Apparence.
   * Il évite de répéter tout le chemin à chaque utilisation.
   */
  const textes =
    traductions.translations.settings.appearance;

  // Récupère le titre traduit « Couleur d’accentuation »
  const label = textes.accentColor[langue];

  return (
    <div className="choix-couleur-accent">
      {/* Titre du réglage */}
      <p>{label}</p>

      {/* Contient les six boutons de couleur */}
      <div className="boutons-couleur">
        {couleurs.map((couleur) => (
          <button
            /*
             * La valeur hexadécimale est unique.
             * Elle permet à React d’identifier chaque bouton.
             */
            key={couleur.valeur}
            type="button"
            className={
              couleurAccent === couleur.valeur
                ? "bouton-couleur actif"
                : "bouton-couleur"
            }
            // Applique la couleur correspondant au bouton
            style={{
              backgroundColor: couleur.valeur,
            }}
            // Enregistre la couleur sélectionnée au clic
            onClick={() =>
              setCouleurAccent(couleur.valeur)
            }
            /*
             * Donne au bouton un nom accessible et traduit.
             * Exemple : « Choisir la couleur violet ».
             */
            aria-label={`${
              textes.chooseAccentColor[langue]
            } ${
              textes.colors[couleur.cle][langue]
            }`}
            /*
             * Indique aux lecteurs d’écran si cette couleur
             * est actuellement sélectionnée.
             */
            aria-pressed={
              couleurAccent === couleur.valeur
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ChoixCouleurAccent;