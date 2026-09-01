// Composant commun Curseur

// Style du curseur
import "../../css/components/ReglageCurseur.css";

/*
 * Composant utilisé pour tous les curseurs.
 * Les informations changent selon les props reçues.
 */
function ReglageCurseur({
  id,
  label,
  valeur,
  setValeur,
  min,
  max,
  pas,
  unite = ""
}) {

  return (
    // Contient le nom, la valeur et le curseur
    <div className="reglage-curseur">

      {/* Nom du réglage et valeur actuelle */}
      <div className="titre-reglage">
        <label htmlFor={id}>
          {label}
        </label>

        {/* Affiche la valeur et son unité */}
        <span>
          {valeur}{unite}
        </span>
      </div>

      {/* Curseur avec les limites reçues dans les props ( ex : VoletParamtres ou Preferences*/}
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={pas}
        value={valeur}
        onChange={(event) =>
          setValeur(Number(event.target.value))
        }
      />
    </div>
  );
}

export default ReglageCurseur;