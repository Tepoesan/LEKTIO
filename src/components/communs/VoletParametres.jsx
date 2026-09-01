// Composant commun VoletParametres (utilisé dans Lecture.jsx)

// Style du volet des paramètres
import "../../css/components/VoletParametres.css";

// Composant réutilisable pour les curseurs
import ReglageCurseur from "./ReglageCurseur";

// Composant réutilisable pour les groupes de boutons
import ChoixBouton from "./ChoixBouton";

// Textes disponibles en français, anglais et espagnol
import traductions from "../../data/translations.json";

// Reçoit la langue et les réglages envoyés par Lecture
function VoletParametres({

  langue,

  fermerVolet,

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

  // Raccourci vers les textes traduits
  const textes = traductions.translations;

  // Raccourci vers les traductions de typographie
  const typographie = textes.settings.typography;

  return (

    /*
     * Fond sombre affiché derrière le volet.
     * Un clic sur ce fond ferme le volet.
     */
    <div
      className="overlay-parametres"
      onClick={fermerVolet}
    >
      {/*
       * role="dialog" indique qu’il s’agit d’une fenêtre.
       * aria-modal indique que le volet est prioritaire.
       * aria-label donne un nom traduit au volet.
       * stopPropagation empêche un clic dans le volet
       * de déclencher le clic du fond.
       */}
      <section
        id="volet-parametres"
        className="volet-parametres"
        role="dialog"
        aria-modal="true"
        aria-label={typographie.readingSettings[langue]}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Bouton en forme de poignée pour fermer le volet */}
        <button
          type="button"
          className="poignee-volet"
          onClick={fermerVolet}
          aria-label={
            typographie.closeReadingSettings[langue]
          }
        >
          {/* La poignée est uniquement décorative */}
          <span aria-hidden="true"></span>
        </button>

        {/* Titre traduit du volet */}
        <h2>
          Aa {typographie.label[langue]}
        </h2>

        {/* Choix de la police utilisée pour lire le livre (serif , sans serif , monospace , OpenDys) */}
        <ChoixBouton
          label={typographie.fontFamily.label[langue]}
          valeur={police}
          setValeur={setPolice}
          options={[
            {
              label: typographie.fontFamily.serif[langue],
              valeur: "serif",
            },
            {
              label: typographie.fontFamily.sansSerif[langue],
              valeur: "sans-serif",
            },
            {
              label: typographie.fontFamily.monospace[langue],
              valeur: "monospace",
            },
            {
              label: typographie.fontFamily.openDys[langue],
              valeur: "opendys",
            },
          ]}
        />

        {/* Curseur qui modifie la taille du texte  */}
        <ReglageCurseur
          id="taille-texte"
          label={typographie.fontSize[langue]}
          valeur={tailleTexte}
          setValeur={setTailleTexte}
          min={12}
          max={24}
          pas={1}
          unite="px"
        />

        {/* Curseur qui modifie l’espace entre les lignes (interlignage) */}
        <ReglageCurseur
          id="interligne"
          label={typographie.lineHeight[langue]}
          valeur={interligne}
          setValeur={setInterligne}
          min={1}
          max={2}
          pas={0.1}
          unite=""
        />

        {/* Curseur qui modifie l’espace entre les caractères */}
        <ReglageCurseur
          id="espacement-caracteres"
          label={typographie.letterSpacing[langue]}
          valeur={espacementCaracteres}
          setValeur={setEspacementCaracteres}
          min={0}
          max={3}
          pas={0.1}
          unite="px"
        />

        {/* Boutons qui modifient la largeur du contenu */}
        <ChoixBouton
          label={typographie.contentWidth.label[langue]}
          valeur={largeurContenu}
          setValeur={setLargeurContenu}
          options={[
            {
              label: typographie.contentWidth.narrow[langue],
              valeur: "etroit",
            },
            {
              label: typographie.contentWidth.normal[langue],
              valeur: "normal",
            },
            {
              label: typographie.contentWidth.wide[langue],
              valeur: "large",
            },
          ]}
        />
      </section>
    </div>
  );
}

export default VoletParametres;