import React from 'react';
import './ItemCount.css';
import { useState } from 'react';


const ItemCount = (props) => {

  const[counter, setCounter] = useState(props.initial);

  const SubirCantidad = () => {
    
    if (parseInt(props.stock - 1 ) >= parseInt(counter)){
      setCounter (parseInt(counter) + 1);
      
    }  
  };
  
  const BajarCantidad = () => {
    if (counter > (props.initial)){
      setCounter (parseInt(counter) - 1);
    }else if(counter <= (props.initial)){
      if (counter !== 0){
      setCounter (parseInt(counter) - 1);
      }
    }
  };

  return <div>
      <div className="ContenedorContador">
        <button id= "BotonContadorMas" onClick={SubirCantidad}>+</button>
        <div id = "Contador">{counter}</div>
        <button id = "BotonContadorMenos" onClick={BajarCantidad}>-</button>
      </div>
      <button id = "BotonAgregar" onClick = {() =>props.add(counter)} >Agregar al carrito</button>
      
  </div>
}


export default ItemCount;
