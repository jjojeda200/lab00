import React, { useState } from "react";

function Lab00(props) {
  const [count, setCount] = useState(0);
  const currDate = new Date();

  return (
    <div style={{ color: "red", fontSize: "22px" }}>
      <div style={{ color: "green", fontSize: "22px" }}>
        <h1>¡Hola, José Juan Ojeda!</h1>
        <h2>La hora actual es: {currDate.toLocaleTimeString()}.</h2>
        <h2>La fecha actual es: {currDate.toLocaleDateString()}.</h2>
      </div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
    </div>
  );
}



export default Lab00;
