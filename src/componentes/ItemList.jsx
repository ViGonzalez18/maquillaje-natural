import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
  return (
    <>
    {
    productos.length > 0 ? productos.map(producto => (
      <Item
      title={producto.nombre}
      descripcion={producto.descripcion}
      id={producto.id}
      imagen={producto.img}
      />

    )): <h4>Cargando...</h4>
    }
    </>
    
      
  );
};

export default ItemList;
