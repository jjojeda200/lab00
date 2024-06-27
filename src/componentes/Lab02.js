import React, { useRef, useState } from 'react';

// Componente Formulario:
//  - Maneja un estado para el valor del input (inputValue)
//  - Define una función handleChange para actualizar el estado con el valor del input
//  - Renderiza un input y un párrafo mostrando el valor actual
export function Formulario() {
    const [inputValue, setInputValue] = useState('');  // Estado para el valor del input
    const handleChange = (event) => {
        setInputValue(event.target.value);  // Actualiza el estado con el nuevo valor
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>Valor del Input: {inputValue}</p>
        </div>
    );
}


// Componente FormularioConRef:
//  - Utiliza un useRef para almacenar una referencia al elemento input
//  - Define una función enfocarInput para enfocar el input usando la referencia
//  - Renderiza un input y un botón que llama a enfocarInput 
export function FormularioConRef() {
    const inputRef = useRef(null);  // Referencia al elemento input
    const enfocarInput = () => {
        inputRef.current.focus();  // Enfoca el input usando la referencia
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={enfocarInput}>Enfocar Input</button>
        </div>
    );
}
