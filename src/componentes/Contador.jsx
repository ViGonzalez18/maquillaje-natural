import React, { useState } from "react";

const Contador = () => {

    const [contador, setContador]= useState(1)

  return (
    <div style={{diplay:"flex",margin:"40px 0", width:"500px", justifyContent:"space-around"}}>
        <button onClick={() => setContador(contador >1 && contador- 1)}> - </button>
        <h1>Cantidad:{contador}</h1>
        <button onClick={() => setContador(contador+ 1)}> + </button>

    </div>
  )
}

export default Contador;