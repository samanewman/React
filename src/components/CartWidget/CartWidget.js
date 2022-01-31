import React from 'react';
import img from '../../imagenes/Carrito.png';
import './CartWidget.css';

const CartWidget = () => {
  return <div className ="BoxContenedor">
      <div className ="BoxImg">
        <img src={img} alt = "ImgCarrito" className = "ImgCarrito"></img>
      </div>
  </div>;
};

export default CartWidget; 
