import React, { useState, useEffect } from 'react';
import './styles.css';  // Importar el archivo CSS

export function Lab01() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Datos de la API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export function Lab02() {
  return (
    <div className="container">
      {/* Contenedor principal */}
      <div className="card">
        {/* Componente de tarjeta */}
        <div className="card-header">
          {/* Encabezado de la tarjeta */}
          Cabecera de tarjeta
        </div>
        <div className="card-content">
          {/* Contenido de la tarjeta */}
          <p>Este es un contenido dentro de la tarjeta. Está centrado y tiene estilo CSS.</p>
          <button className="button">Pulsa</button>
          {/* Botón con estilos */}
        </div>
      </div>
    </div>
  );
}

// export default Lab02;