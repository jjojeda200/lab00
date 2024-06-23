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
  }, [moneda, cantidad]);

  const colorStyle = {
    color: propiedad.color,
    fontSize: propiedad.size,
    justifyContent: propiedad.justifyContent,
    display: "flex",
    alignItems: "center",
    height: "40vh",
  };

  return (
    <div
      style={{
        backgroundImage: "url('img/paisaje0.jpg')",
        backgroundRepeat: 'no-repeat',
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

export function Conversor() {
  const [moneda, setMoneda] = useState("");
  const [cantidad, setCantidad] = useState(null);
  
  const propiedad = {
    color: "black",
    size: "20px",
    justifyContent: "center"
  };

  return (
    <div>
      <EntradaDatos setMoneda={setMoneda} setCantidad={setCantidad} />
      <Paridad moneda={moneda} cantidad={cantidad} propiedad={propiedad} />
    </div>
  );
}
