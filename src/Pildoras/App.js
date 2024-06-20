import React from "react";
import ReactDOM from "react-dom";
import GaleriaDeImagenes from "./pi05"

const galeria = ReactDOM.createRoot(document.getElementById("root"));
galeria.render(<GaleriaDeImagenes />);

// ReactDOM.render(
//   <React.StrictMode>
//     <GaleriaDeImagenes />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

function ref() {

}
setInterval(ref, 1000);