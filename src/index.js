import React from "react";
import ReactDOM from "react-dom/client";
import Lab00 from "./componentes/Lab00";
import Lab01 from "./componentes/Lab01";

const root = ReactDOM.createRoot(document.getElementById("root"));
const lab01 = ReactDOM.createRoot(document.getElementById("Lab01"))
function ref() {
  root.render(<Lab00 />);
  lab01.render(<Lab01 />);
  //ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(ref, 1000);