import React, { useState, useRef } from "react";

export function Lab00(props) {
  const [count, setCount] = useState(0);
  const currDate = new Date();

  const referencia = useRef(null);

  function enfocarYSumarClick() {
    referencia.current.focus();
    referencia.current.value = count;
    setCount(count + 1);
  }

  return (
    <div style={{ color: "red", fontSize: "22px" }}>
      <div style={{ color: "green", fontSize: "22px", textAlign: "center" }}>
        <h1 style={{ color: "blue" }}>¡Hola, José Juan Ojeda!</h1>
        {/* El código JavaScript siempre debe ir entre corchetes para indicarselo a React */}
        <h2>La hora actual es: {currDate.toLocaleTimeString()}.</h2>
        <h2>La fecha actual es: {currDate.toLocaleDateString()}.</h2>
      </div>
      <input ref={referencia} type="text" />
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => enfocarYSumarClick() }>
        Haz clic aquí
      </button>
    </div>
  );
}


export function Contador() {
  // Creamos un useRef para almacenar el valor del contador
  const conteoRef = useRef(0);

  // useState para llevar registro de las veces que se renderiza el componente
  const [renderCount, setRenderCount] = useState(0);
  // Función para incrementar el valor del contador
  const incrementar = () => {
    // Aumentamos el valor almacenado en conteoRef
    conteoRef.current++;
    // Comentamos la siguiente línea porque no actualiza el conteo real
    // conteoRef.current = renderCount;
    console.log(`Conteo actual de useRef: ${conteoRef.current}`);

    // Actualizamos el renderCount para forzar un renderizado (opcional)
    setRenderCount(renderCount + 1);
  };

  return (
    <div>
      {/* Mostramos el número de veces que se ha renderizado el componente */}
      <p>Render Count: {renderCount}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

// export default Lab00;
