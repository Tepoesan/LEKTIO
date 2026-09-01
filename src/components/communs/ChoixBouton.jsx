// Composant commun Bouton

// Style du groupe de boutons
import "../../css/components/ChoixBouton.css";

function ChoixBouton({
  label,
  options,
  valeur,
  setValeur
}) {
  return (
    <div className="choix-boutons">
      <p>{label}</p>

      <div className="liste-boutons">
        {options.map((option) => (
          <button
            key={option.valeur}
            type="button"
            className={
              valeur === option.valeur
                ? "bouton-choix actif"
                : "bouton-choix"
            }
            onClick={() => setValeur(option.valeur)}
            aria-pressed={valeur === option.valeur}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChoixBouton;