// Composant commun Choix Couleur Accent

// Textes disponibles dans les trois langues
import traductions from "../../data/translations.json";

// Style du composant
import "../../css/components/ChoixCouleurAccent.css";

// Couleurs proposées à l’utilisateur venant de la maquette
const couleurs = [
  { nom: "Violet", valeur: "#6C19FF" },
  { nom: "Bleu", valeur: "#3A78C8" },
  { nom: "Turquoise", valeur: "#25989F" },
  { nom: "Vert", valeur: "#309661" },
  { nom: "Orange", valeur: "#E18306" },
  { nom: "Rouge", valeur: "#DC415D" },
];

// Reçoit la couleur actuelle et permet de la modifier
function ChoixCouleurAccent({
  couleurAccent,
  setCouleurAccent,
  langue,
}) {
  
  // Récupère le titre traduit du réglage
  const label =
    traductions.translations.settings.appearance.accentColor[langue];

  return (
    <div className="choix-couleur-accent">
      {/* Titre du réglage */}
      <p>{label}</p>

      {/* Contient les six boutons de couleur */}
      <div className="boutons-couleur">
        {couleurs.map((couleur) => (
          <button
            key={couleur.valeur}
            type="button"
            className={
              couleurAccent === couleur.valeur
                ? "bouton-couleur actif"
                : "bouton-couleur"
            }
            style={{
              backgroundColor: couleur.valeur,
            }}
            onClick={() => setCouleurAccent(couleur.valeur)}
            aria-label={`Choisir la couleur ${couleur.nom}`}
            aria-pressed={couleurAccent === couleur.valeur}
          />
        ))}
      </div>
    </div>
  );
}

export default ChoixCouleurAccent;