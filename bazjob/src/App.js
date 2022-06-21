import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoPro from "./pages/InfoPro";
import Inscription from "./pages/Inscription";
import Langues from "./pages/Langues";
import TypeProfil from "./pages/TypeProfil";
import "./style/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TypeProfil />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/infoPro" element={<InfoPro />} />
        <Route path="/langues" element={<Langues />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
