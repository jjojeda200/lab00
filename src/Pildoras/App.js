import React from "react";
import ReactDOM from "react-dom";
import { Paridad, EntradaDatos } from "./pi10";

const entrada = ReactDOM.createRoot(document.getElementById("entradas"));
const paridad = ReactDOM.createRoot(document.getElementById("root"));

entrada.render(<EntradaDatos color="green" size="38px" justifyContent="center" />);
paridad.render(<Paridad color="green" size="38px" justifyContent="center" />);