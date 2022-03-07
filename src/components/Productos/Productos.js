import React from 'react'
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer';

const Productos = () => {
    let redcolor = "deeppink";
    
  return (
    <ItemListContainer 
    saludo={"Bienvenido a la tienda oficial de DioNeon Led"} 
    color = {redcolor}
    />
  )
}

export default Productos;