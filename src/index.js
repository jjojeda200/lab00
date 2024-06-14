import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
function ref() {
  root.render(<App />);
  //ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(ref, 1000);
