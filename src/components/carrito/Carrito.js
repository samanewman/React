import React from 'react';
import './carrito.css';
import {useContext} from 'react';
import {CartContext} from '../CartContext/CartContext'


const Carrito = () => {

  const {carrito} = useContext(CartContext);
  const {removeItem} = useContext(CartContext);

    return (
    <div>
      <h1>TU CARRITO</h1>

      <div className = "ContainerCarrito">
          <hr></hr>
        {
        carrito.map( (itemcarrito) => (
          
          <div className = "ContainerDetallesCarrito">

            <img className = "img"src = {itemcarrito.foto} alt = {itemcarrito.nombre} />
            <div>
              <div>Nombre:</div> 
                <div>{itemcarrito.nombre}</div>
              </div>
            <div>
              <div>Cantidad:</div>
              <div>{itemcarrito.cantidad}</div>
            </div>
            <div>
              <div>Tamaño:</div>
              <div>{itemcarrito.size}</div>
            </div>
            <div>
              <div>Color:</div> 
              <div style={{color: `${itemcarrito.color}`}}>■</div>
            </div>
            <div>
              <div>Precio:</div> 
              <div>{itemcarrito.precio}</div>
            </div>
            <button onClick = {() =>{

              removeItem(itemcarrito);

            }}>Borrar</button>
          </div>
        ))
        }
      </div>

  </div>
  ) 


}

export default Carrito;