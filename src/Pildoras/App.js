import React from "react";
import ReactDOM from "react-dom";
import { Conversor } from "./pi10v2";

const conversor = ReactDOM.createRoot(document.getElementById("root"));

conversor.render(<Conversor color="green" size="38px" justifyContent="center" />);