import React from 'react';
import './ProductCard.css';
import ItemCount from '../ItemCount/ItemCount';

const ProductCard = ({foto, nombre}) => {
  return <div className ="Card">
      <div className = "CardBody">
        <div className ="BoxImg"><img src={foto} alt = "Img1" className = "Imagen"></img></div>
        <h1>{nombre}</h1>
        <ItemCount/>
      </div>
      
  </div>;
};

export default ProductCard; 
