import React, { useState } from "react";

// Define un componente que representa un enlace con un manejador de clic
function ActionLink() {
  // Función para manejar el evento de clic en un enlace o botón
  function handleClick(evento) {
    // Evita que el comportamiento predeterminado del enlace se ejecute
    evento.preventDefault();
    // Imprime un mensaje en la consola indicando que se hizo clic en el enlace
    console.log("El enlace fue clickeado.");
  }

  // Retorna el HTML del componente
  return (
    <div>
      <button onClick={handleClick}>Botón con un manejador de clic que llama a la función handleClick</button><br></br>
      <a href="#" onClick={handleClick}>Enlace con un manejador de clic que llama a la función handleClick</a><br></br>
      <button onClick={() => console.log("¡Botón presionado!")}>Otro botón con un manejador de clic anónimo que imprime un mensaje</button>
    </div>
  );
}

// Define el componente principal de la aplicación
export function MyApp00() {
  // Estado para almacenar el contador de clics
  const [count, setCount] = useState(0);

  // Función para manejar el evento de clic en un botón
  function handleClick() {
    // Incrementa el valor del contador en 1
    setCount(count + 1);
  }

  // Retorna el HTML del componente principal
  return (
    <div>
      {/* Encabezado del título de la aplicación */}
      <h1>Bienvenido a mi aplicación</h1>
      {/* Renderiza el componente ActionLink */}
      <ActionLink />
      {/* Encabezado para la sección de contadores conjuntos */}
      <h1>Contadores que se actualizan conjuntamente</h1>
      {/* Renderiza dos componentes MiBoton con el mismo contador y manejador de clic */}
      <MiBoton contador={count} pulsado={handleClick} />
      <MiBoton contador={count} pulsado={handleClick} />

      {/* Encabezado para la sección de contadores independientes */}
      <h1>Contadores que se actualizan separadamente</h1>
      {/* Renderiza dos componentes MiOtroBoton */}
      <MiOtroBoton />
      <MiOtroBoton />
    </div>
  );
}

// Define un componente para representar un botón con un contador
function MiBoton({ contador, pulsado }) {
  // Retorna el HTML del componente
  return (
    <button onClick={pulsado}>Hiciste clic {contador} veces</button>
  );
}

// Define otro componente para representar un botón con un contador independiente
function MiOtroBoton() {
  // Estado para almacenar el contador de clics local
  const [contador, setContador] = useState(0);

  // Función para manejar el evento de clic en el botón
  function funcionHandleClick() {
    // Incrementa el valor del contador local en 1
    setContador(contador + 1);
  }

  // Retorna el HTML del componente
  return (
    <button onClick={funcionHandleClick}>Hiciste clic {contador} veces</button>
  );
}

// Renderiza el componente principal de la aplicación en el elemento con ID "root"
// ReactDOM.render(<MyApp00 />, document.getElementById("root"));
