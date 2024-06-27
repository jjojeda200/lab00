import React, { useState, useRef } from 'react';

export function FormularioValidado() {
  // Estado para almacenar los valores del formulario (nombre y email)
  const [formValues, setFormValues] = useState({ name: '', email: '' });

  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState({});

  // Referencias para acceder a los elementos input del formulario
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  // Manejador del cambio en los inputs del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Actualiza el estado con el nuevo valor del campo modificado
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Función para validar el formulario
  const validate = () => {
    let tempErrors = {};
    // Valida si el nombre está vacío y agrega error al estado
    if (!formValues.name) tempErrors.name = 'El nombre es requerido';
    // Valida si el email está vacío y agrega error al estado
    if (!formValues.email) tempErrors.email = 'El email es requerido';
    // Actualiza el estado de errores
    setErrors(tempErrors);
    // Devuelve true si no hay errores, false en caso contrario
    return Object.keys(tempErrors).length === 0;
  };

  // Manejador del submit del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Formulario válido, enviar los datos (en este ejemplo se muestra por consola)
      console.log('Formulario enviado:', formValues);
    } else {
      // Formulario con errores, enfocar el primer input con error
      if (errors.name) {
        nameRef.current.focus();
      } else if (errors.email) {
        emailRef.current.focus();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
