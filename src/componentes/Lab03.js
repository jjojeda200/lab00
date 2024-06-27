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


export function FormularioDinamico() {
  // Estado para almacenar un array de objetos que representan cada campo de entrada
  // Cada objeto tiene un id (identificador único) y un valor (texto introducido)
  const [inputs, setInputs] = useState([{ id: 1, value: '' }]);

  // Hook useRef para almacenar referencias a cada elemento de entrada
  // Esto nos permite enfocarlos programáticamente más tarde
  const inputRefs = useRef([]);

  // Función para manejar cambios en un campo de entrada
  // Toma el id de la entrada y el objeto de evento como argumentos
  const handleChange = (id, event) => {
    // Crea una copia del array inputs para evitar mutaciones
    const newInputs = inputs.map(input => {
      // Comprueba si la entrada actual coincide con el id de la modificada
      if (input.id === id) {
        // Actualiza la propiedad value de la entrada coincidente con el nuevo valor
        return { ...input, value: event.target.value };
      }
      // Si no es la entrada coincidente, devuelve el objeto original
      return input;
    });
    // Actualiza el estado con el array inputs modificado
    setInputs(newInputs);
  };

  // Función para añadir un nuevo campo de entrada al formulario
  const addInput = () => {
    // Crea un nuevo objeto de entrada con un id único y un valor vacío
    const newInput = { id: inputs.length + 1, value: '' };
    // Actualiza el estado extendiendo los inputs existentes y añadiendo el nuevo
    setInputs([...inputs, newInput]);
  };

  // Función para enfocar un campo de entrada específico
  // Toma el índice de la entrada en el array inputs
  const handleFocus = (index) => {
    // Accede al elemento de entrada correspondiente utilizando la referencia en el índice dado
    inputRefs.current[index].focus();
  };

  return (
    <div>
      {/* Recorre cada objeto de entrada en el estado */}
      {inputs.map((input, index) => (
        <div key={input.id}>
          {/* Renderiza un campo de entrada con el valor y el id actuales */}
          <input
            ref={(el) => (inputRefs.current[index] = el)} // Almacena la referencia
            type="text"
            value={input.value}
            onChange={(e) => handleChange(input.id, e)} // Actualiza al cambiar
          />
          {/* Botón para enfocar el campo de entrada actual */}
          <button type="button" onClick={() => handleFocus(index)}>
            Enfocar (Focus)
          </button>
        </div>
      ))}
      {/* Botón para añadir un nuevo campo de entrada */}
      <button type="button" onClick={addInput}>
        Agregar Input (Add Input)
      </button>
    </div>
  );
}

export default FormularioDinamico;