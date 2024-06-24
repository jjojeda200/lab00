import React, { useState, useEffect } from 'react';

function Paridad({ moneda, cantidad, propiedad }) {
  const [paridad, setParidad] = useState("");

  useEffect(() => {
    const fetchParidad = async () => {
      if (!moneda || !cantidad) return;
      
      const host = "api.frankfurter.app";
      try {
        const response = await fetch(`https://${host}/latest?amount=${cantidad}&from=${moneda}&to=USD`);
        const data = await response.json();
        setParidad(`${cantidad} ${moneda} = ${data.rates.USD} USD`);
      } catch (error) {
        console.error("Error obteniendo paridad:", error);
      }
    }
    
    fetchParidad();
    //setTimeout(() => {fetchParidad();}, 2000); 
  }, [moneda, cantidad]);

  const colorStyle = {
    color: propiedad.color,
    fontSize: propiedad.size,
    justifyContent: propiedad.justifyContent,
    fontWeight: propiedad.fontWeight,
    display: "flex",
    alignItems: "center",
    height: "40vh",
  };

  return (
    <div
      style={{
        backgroundImage: "url('img/paisaje0.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', // Ajusta la imagen para que cubra completamente el contenedor
        backgroundPosition: 'center', // Centra la imagen
        backgroundAttachment: 'fixed', // Hace que la imagen de fondo sea fija al desplazarse
        width: '100vw', // Ocupa el ancho completo del viewport
        height: '100vh', // Ocupa la altura completa del viewport
        overflow: 'hidden', // Evita el desbordamiento del contenido
      }}
    >
      <div style={colorStyle}>{paridad}</div>
    </div>
  );
}

function EntradaDatos({ setMoneda, setCantidad }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setMoneda(e.target.value)}
        placeholder="Escribe la moneda (EUR)"
      />
      <input
        type="number"
        onChange={(e) => setCantidad(Number(e.target.value))}
        placeholder="Escribe la cantidad"
      />
    </div>
  );
}

export function Conversor(propiedadConv) {
  const [moneda, setMoneda] = useState("");
  const [cantidad, setCantidad] = useState(null);
  
  const propiedad = {
    color: propiedadConv.color,
    size: propiedadConv.size,
    justifyContent: propiedadConv.justifyContent,
    fontWeight: "bold"
    // color: "green",
    // size: "40px",
    // justifyContent: "center"
  };

  return (
    <div>
      <EntradaDatos setMoneda={setMoneda} setCantidad={setCantidad} />
      <Paridad moneda={moneda} cantidad={cantidad} propiedad={propiedad} />
    </div>
  );
}
