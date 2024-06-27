import React from "react";
import ReactDOM from "react-dom/client";
//import {Lab00, Contador} from "./componentes/Lab00";
//import {Lab01, Lab02 } from "./componentes/Lab01";
//import { Formulario, FormularioConRef } from "./componentes/Lab02";
import { FormularioValidado } from "./componentes/Lab03";


const root = ReactDOM.createRoot(document.getElementById("root"));

//const lab03 = ReactDOM.createRoot(document.getElementById("Lab03"));
//const lab02 = ReactDOM.createRoot(document.getElementById("Lab02"));
//const lab01 = ReactDOM.createRoot(document.getElementById("Lab01"));
//const lab00 = ReactDOM.createRoot(document.getElementById("Lab00"));


root.render(<FormularioValidado />);

function ref() {
  //lab01.render(<Formulario />);
  //lab00.render(<FormularioConRef />);
  //lab02.render(<Lab02 />);
  //lab01.render(<Lab01 />);
  //lab01.render(<Contador />);
  //lab00.render(<Lab00 />);
}

setInterval(ref, 1000);