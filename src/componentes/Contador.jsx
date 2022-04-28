import React, { useState } from "react";

function Contador ( {stock, initial, onAdd} ){

  const [contador, setContador] = useState(initial)

  const Sumar = () => {
    if(contador >= stock) {
      console.log('No hay más productos')
    } else {
      setContador(contador+1)
    }
  }

  const Restar = () => {
    if (contador === 1) {
      console.log('No puede seguir restando')
    } else {
      setContador(contador-1)
    }
  }

  const agregarCarrito = () => {
    onAdd(contador)
  }

  return(
    <div style={{display:"flex",margin: "40px 0", width:"500px", justifyContent:"space-around"}}>
      <button onClick={Restar}> - </button>
      <h1>{contador}</h1>
      <button onClick={Sumar}> + </button>

      <button onClick={agregarCarrito}> Agregar al carrito</button>
    </div>
  )

}

export default Contador;