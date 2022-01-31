import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = (props) =>{
  return(
    <div className = "ContenedorSaludo">
      <ul>
        <li className = "ListaSaludo" style= {{color:`${props.color}`}}>{props.saludo}</li>
      </ul>
    </div>
  )
}

export default ItemListContainer;
