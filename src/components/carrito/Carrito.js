import React from 'react';
import './carrito.css';
import {useContext} from 'react';
import {CartContext} from '../CartContext/CartContext'


const Carrito = () => {

  const {carrito} = useContext(CartContext);

  return (
    <div>
      <h1>TU CARRITO</h1>

      <div className = "ContainerCarrito">
        {
        carrito.map( (carrito) => (

          <div className = "ContainerDetallesCarrito">
            
            <img className = "img"src = {carrito.foto} alt = {carrito.nombre} />
            <div>
              <div>Nombre:</div> 
                <div>{carrito.nombre}</div>
              </div>
            <div>
              <div>Cantidad:</div>
              <div>{carrito.cantidad}</div>
            </div>
            <div>
              <div>Tamaño:</div>
              <div>{carrito.size}</div>
            </div>
            <div>
              <div>Color:</div> 
              <div style={{color: `${carrito.color}`}}>■</div>
            </div>
            <div>
              <div>Precio:</div> 
              <div>{carrito.precio}</div>
            </div>
            <button /*onClick = {}*/>Borrar</button>
          </div>
        ))
        }
      </div>

  </div>
  ) 


}

export default Carrito;