import React, { useEffect, useState } from 'react'
import Contador from './Contador';
import ItemList from './ItemList';


const ItemListContonteiner = ( { text } ) => {

  const [productos, setProductos]= useState([])

  const onAdd= (cantidad) => {
    console.log(`Seleccionaste : ${cantidad}`)
  }


  const data = [
    {
      id:1,
      nombre:"Masc.pestañas",
      descripcion:"Alargador de pestañas",
      stock: 10,
      img:'https://www.farmacialeloir.com.ar/img/articulos/maybelline_colossal_go_extreme_mascara_pestanas_waterproof.jpg'
    },
    {
      id:2,
      nombre:"Labial",
      descripcion:"Labiales mate",
      stock: 7,
      img:'https://farmacityar.vteximg.com.br/arquivos/ids/212117-600-600/222118_labial-liquido-maybelline-superstay-matte-ink-x-5-ml_imagen-1.jpg?v=637612685392970000'
    },
    {
      id:3,
      nombre:"Base de maquillaje",
      descripcion:"Base de maquillaje liquida",
      stock: 9,
      img:'https://www.chanel.com/images/w_0.43,h_0.43,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1920/vitalumiere-radiant-moisture-rich-fluid-foundation-20-clair-1fl-oz--packshot-default-161016-8845025050654.jpg'
    }
  ]

 

 useEffect(() => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })
  promesa.then((res)=>{
    setProductos(res)
  }).catch((err)=>
  console.log(err)
  )
  
 
   return () => {
     
   }
 }, [])
 

  return (
    <section>
      <h1>Listado de productos</h1>
      <p>{ text }</p>
      <hr />
      <Contador stock= {5} initial={1} onAdd={onAdd} />
      <ItemList productos={productos} />
    </section>
  )
}

export default ItemListContonteiner