import React, { useState, useEffect } from 'react';

function Lab01() {
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
  
}

export default Lab01;