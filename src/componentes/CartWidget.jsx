import React from 'react';
import Carrito from '../assets/img/carrito.png';


const CartWidget = () => {
  return (
    <div>
    <img src={Carrito} alt="" width="50" height="50" class="d-inline-block align-text-top"/> 
    </div>
  )
}

export default CartWidget