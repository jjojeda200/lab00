import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./menuNav";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



function ref() {
  
  // lab01.render(<Lab01 />);
  // lab02.render(<Lab02 />);
  
  //ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(ref, 1000);