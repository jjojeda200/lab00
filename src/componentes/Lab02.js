import React, { useRef } from 'react';

export function MiComponente() {
    const referencia = useRef(null);

    return (
        <div>
            <input ref={referencia} type="text" />
            <button onClick={() => referencia.current.focus()}>
                Enfocar Input
            </button>
        </div>
    );
}

// export default MiComponente;