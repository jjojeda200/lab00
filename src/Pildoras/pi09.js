//import React, { useRef } from 'react';
import video from "../assets/introducción a React.mp4";

export function videoComp() {

  return (
    <div>
      <video>
      <source src={video} type="video/mp4"></source>
      </video>

      <div>
          <button>Play</button>
          <button>Pause</button>
      </div>
    </div>
  );
}

/* 
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
*/

// export default videoComponent;