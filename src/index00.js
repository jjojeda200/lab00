import React from "react";
import ReactDOM from "react-dom";
import Lab00 from "./componentes/Lab00";
// import {Lab01, Lab02 } from "./componentes/Lab01";
import GaleriaDeImagenes from "./Pildoras/pi05"

const root = ReactDOM.createRoot(document.getElementById("root"));
// const lab01 = ReactDOM.createRoot(document.getElementById("Lab01"));
// const lab02 = ReactDOM.createRoot(document.getElementById("Lab02"));
const galeria = ReactDOM.createRoot(document.getElementById("galeria"));
function ref() {
  root.render(<Lab00 />);
  galeria.render(<GaleriaDeImagenes />);
  // lab01.render(<Lab01 />);
  // lab02.render(<Lab02 />);
  
  //ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(ref, 1000);