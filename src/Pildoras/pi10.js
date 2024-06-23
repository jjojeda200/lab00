import React, { useState, useEffect } from 'react';

export function Paridad(propiedad) {
  const [paridad, setParidad] = useState("");

  useEffect(() => {
    const fetchParidad = async () => {
      const host = "api.frankfurter.app";
      try {
        const response = await fetch(`https://${host}/latest?amount=1&from=EUR&to=USD`);
        console.log(response);
        const data = await response.json();
        setParidad(`1 EUR = ${data.rates.USD} USD`);
      } catch (error) {
        console.error("Error obteniendo paridad:", error);
      };
    }
    fetchParidad();
  }, []);

  const colorStyle = {
    color: propiedad.color,
    fontSize: propiedad.size,
    justifyContent: propiedad.justifyContent,
    display: "flex",
    alignItems: "center",
    height: "40vh", };

  return (
    <div
      style={{
        backgroundImage: "url('img/paisaje0.jpg')", alt: 'Imagen 1', caption: 'Pie de foto Imagen 1',
        backgroundRepeat: 'no-repeat',
      }} >
      <div style={colorStyle}>{paridad}</div>
    </div>
  );
}

export function EntradaDatos() {
  const [moneda, setName] = useState("");
  const [cantidad, setAge] = useState(null);

  return (
    <div>
      <input
        type="text"
        value={moneda}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe la moneda (EUR)"
      />
      <input
        type="number"
        value={cantidad}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Escribe la cantidad"
      />
      {moneda !== "" && <p>Moneda: {moneda}</p>}
      {cantidad !== null && <p>Cantidad: {cantidad}</p>}
    </div>
  );
}