import React, { useState } from 'react';
import "./pi05.css";

function MultiStateComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  return (
    <div className="galeria-title">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Escribe tu edad"
      />
      {name !== "" && <p>Nombre: {name}</p>}
      {age !== null && <p>Edad: {age}</p>}
    </div>
  );
}

export default MultiStateComponent;