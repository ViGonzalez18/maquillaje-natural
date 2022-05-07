import React from 'react';
import brocha from '../assets/img/brocha.jpg'

const Item = ({title, descripcion, id, imagen}) => {
  return (
    <>
    
    <h1>{title}</h1>
    <p>{descripcion}</p>
    <h4>{id}</h4>
    <img src={imagen} alt="imagen" style={{width:"20%", display:"flex"}}/>
    </>
  )
}

export default Item