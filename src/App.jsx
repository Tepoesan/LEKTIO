// Import de React Router
import { Routes, Route } from "react-router-dom";

// Import des pages de LEKTIO
import Bibliotheque from "./pages/Bibliotheque";
import Lecture from "./pages/Lecture";
import Preferences from "./pages/Preferences";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bibliotheque />} />
      <Route path="/lecture/:id" element={<Lecture />} />
      <Route path="/preferences" element={<Preferences />} />
    </Routes>
  );
}

export default App;