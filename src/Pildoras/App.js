import React from "react";
import ReactDOM from "react-dom";
import GaleriaDeImagenes from "./pi05"
import MultiStateComponent from "./pi08"

const galeria = ReactDOM.createRoot(document.getElementById("root"));
const mulicomp = ReactDOM.createRoot(document.getElementById("multicomponentes"));
galeria.render(<GaleriaDeImagenes />);
mulicomp.render(<MultiStateComponent />);

// ReactDOM.render(
//   <React.StrictMode>
//     <GaleriaDeImagenes />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

function ref() {

}
setInterval(ref, 1000);