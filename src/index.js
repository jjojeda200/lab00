import React from "react";
import ReactDOM from "react-dom/client";
// import Lab00 from "./componentes/Lab00";
// import {Lab01, Lab02 } from "./componentes/Lab01";
import GaleriaDeImagenes from "./pilinfor/pi05"

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const lab01 = ReactDOM.createRoot(document.getElementById("Lab01"));
// const lab02 = ReactDOM.createRoot(document.getElementById("Lab02"));
const galeria = ReactDOM.createRoot(document.getElementById("root"));
function ref() {
  // root.render(<root />);
  galeria.render(<GaleriaDeImagenes />);
  // lab01.render(<Lab01 />);
  // lab02.render(<Lab02 />);
  
  //ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(ref, 1000);