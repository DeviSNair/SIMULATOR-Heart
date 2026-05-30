import { useState } from "react";
import Home from "./components/Home.jsx";
import Teaching from "./components/Teaching.jsx";
import Training from "./components/Training.jsx";
import Calibration from "./components/Calibration.jsx";

export default function App() {
  const [mode, setMode] = useState("home");

  return (
    <div className="app">
      {mode === "home" ? <Home setMode={setMode} /> : null}
      {mode === "teaching" ? <Teaching setMode={setMode} /> : null}
      {mode === "training" ? <Training setMode={setMode} /> : null}
      {mode === "calibration" ? <Calibration setMode={setMode} /> : null}
    </div>
  );
}
