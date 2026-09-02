// PREFERENCES PAGE

// Composants communs utilisés sur la page
import Logo from "../components/communs/Logo";
import ChoixLangue from "../components/communs/ChoixLangue";
import ChoixTheme from "../components/communs/ChoixTheme";
import ChoixCouleurAccent from "../components/communs/ChoixCouleurAccent";
import ChoixBouton from "../components/communs/ChoixBouton";
import ReglageCurseur from "../components/communs/ReglageCurseur";
import TabBar from "../components/communs/TabBar";

// Textes disponibles en français, anglais et espagnol
import traductions from "../data/translations.json";

// Style de la page
import "../css/pages/Preferences.css";

// Icône utilisée dans le titre de la section Données
import { DatabaseIcon } from "@phosphor-icons/react";

// Reçoit les réglages conservés dans App.jsx
function Preferences({
  langue,
  setLangue,

  theme,
  setTheme,

  contraste,
  setContraste,

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

  couleurAccent,
  setCouleurAccent,
}) {
  // Raccourci vers l’ensemble des textes traduits
  const textes = traductions.translations;

  // Remet tous les réglages à leurs valeurs initiales
  function reinitialiserPreferences() {
    
    // Remet la langue en français
    setLangue("fr");

    // Remet le thème clair
    setTheme("light");

    // Remet le thème clair
    setTheme("light");

    // Remet le contraste standard
    setContraste("standard");

    // Remet la couleur d’accentuation violette
    setCouleurAccent("#6C19FF");

    // Remet les réglages de lecture par défaut
    setPolice("serif");
    setTailleTexte(16);
    setInterligne(1.4);
    setEspacementCaracteres(0);
    setLargeurContenu("normal");
  }

  return (
    <main className="preferences">
      {/* En-tête avec le logo et le choix rapide de la langue */}
      <header className="preferences-entete">
        <Logo />

        <ChoixLangue
          langue={langue}
          setLangue={setLangue}
        />
      </header>

      {/* Titre principal traduit dans la langue sélectionnée */}
      <h1>{textes.nav.settings[langue]}</h1>

      {/* Conteneur regroupant les différentes cartes */}
      <div className="preferences-contenu">
        {/* Section contenant les réglages d’apparence */}
        <section className="preferences-section">
          {/* Titre de la section Apparence */}
          <h2>{textes.settings.appearance.label[langue]}</h2>

          {/* Choix du thème de l’application */}
          <ChoixTheme
            theme={theme}
            setTheme={setTheme}
            langue={langue}
          />

       {/* Choix du niveau de contraste */}
        <ChoixBouton
          // Traduit le titre « Contraste »
          label={textes.settings.appearance.contrast.label[langue]}

          // Propose les deux niveaux : Standar et élevé , avec leurs traductions
          options={[
            {
              valeur: "standard",
              label:
                textes.settings.appearance.contrast.standard[langue],
            },
            {
              valeur: "eleve",
              label:
                textes.settings.appearance.contrast.high[langue],
            },
          ]}

          // Indique le contraste actuellement sélectionné
          valeur={contraste}

          // Modifie le contraste lorsque l’utilisateur clique
          setValeur={setContraste}
        />

          {/* Choix de la couleur utilisée pour les éléments actifs */}
          <ChoixCouleurAccent
            couleurAccent={couleurAccent}
            setCouleurAccent={setCouleurAccent}
            langue={langue}
          />

          {/* Choix de la langue utilisée dans toute l’interface */}
          <ChoixBouton
            label={textes.settings.appearance.language[langue]}
            options={[
              {
                valeur: "fr",
                label: "FR",
              },
              {
                valeur: "en",
                label: "EN",
              },
              {
                valeur: "es",
                label: "ES",
              },
            ]}
            valeur={langue}
            setValeur={setLangue}
          />
        </section>

        {/* Section contenant les réglages de typographie et de lecture */}
        <section className="preferences-section">
          {/* Titre de la section Typographie */}
          <h2>{textes.settings.typography.label[langue]}</h2>

          {/* Choix de la police utilisée pour lire le livre */}
          <ChoixBouton
            label={
              textes.settings.typography.fontFamily.label[langue]
            }
            options={[
              {
                valeur: "serif",
                label:
                  textes.settings.typography.fontFamily.serif[
                    langue
                  ],
              },

              {
                valeur: "sans-serif",
                label:
                  textes.settings.typography.fontFamily.sansSerif[
                    langue
                  ],
              },

              {
                valeur: "monospace",
                label:
                  textes.settings.typography.fontFamily.monospace[
                    langue
                  ],
              },

              {
                valeur: "opendys",
                label:
                  textes.settings.typography.fontFamily.openDys[
                    langue
                  ],
              },
            ]}
            valeur={police}
            setValeur={setPolice}
          />

          {/* Curseur permettant de modifier la taille du texte */}
          <ReglageCurseur
            id="taille-texte-preferences"
            label={textes.settings.typography.fontSize[langue]}
            valeur={tailleTexte}
            setValeur={setTailleTexte}
            min={12}
            max={24}
            pas={1}
            unite="px"
          />

          {/* Curseur permettant de modifier l’espace entre les lignes */}
          <ReglageCurseur
            id="interligne-preferences"
            label={textes.settings.typography.lineHeight[langue]}
            valeur={interligne}
            setValeur={setInterligne}
            min={1}
            max={2}
            pas={0.1}
            unite=""
          />

          {/* Curseur permettant de modifier l’espace entre les caractères */}
          <ReglageCurseur
            id="espacement-caracteres-preferences"
            label={
              textes.settings.typography.letterSpacing[langue]
            }
            valeur={espacementCaracteres}
            setValeur={setEspacementCaracteres}
            min={0}
            max={3}
            pas={0.1}
            unite="px"
          />

          {/* Choix de la largeur de la zone de lecture */}
          <ChoixBouton
            label={
              textes.settings.typography.contentWidth.label[
                langue
              ]
            }
            options={[
              {
                valeur: "etroit",
                label:
                  textes.settings.typography.contentWidth.narrow[
                    langue
                  ],
              },
              {
                valeur: "normal",
                label:
                  textes.settings.typography.contentWidth.normal[
                    langue
                  ],
              },
              {
                valeur: "large",
                label:
                  textes.settings.typography.contentWidth.wide[
                    langue
                  ],
              },
            ]}
            valeur={largeurContenu}
            setValeur={setLargeurContenu}
          />
        </section>

        {/* Section permettant de gérer les préférences enregistrées */}
        <section className="preferences-section preferences-donnees">
          {/* Titre de la section avec son icône */}
          <h2 className="preferences-donnees-titre">
            <DatabaseIcon size={20} aria-hidden="true" />

            {textes.settings.data.label[langue]}
          </h2>

          {/* Bouton qui remet tous les réglages à leurs valeurs initiales */}
          <button
            type="button"
            className="bouton-reinitialisation"
            onClick={reinitialiserPreferences}
          >
            {textes.settings.data.resetPreferences[langue]}
          </button>
        </section>
      </div>

      {/* Navigation principale située en bas de la page */}
      <TabBar langue={langue} />
    </main>
  );
}

export default Preferences;