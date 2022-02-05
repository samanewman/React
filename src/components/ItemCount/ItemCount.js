import React from 'react';
import './ItemCount.css';
import { useState } from 'react';


const ItemCount = (props) => {

  const[counter, setCounter] = useState(props.initial);

  const SubirCantidad = () => {
    
    if (parseInt(props.stock - 1 ) >= parseInt(counter)){
      setCounter (parseInt(counter) + 1);
      document.getElementById("BotonAgregar").diabled = false;
      document.getElementById("BotonAgregar").style.color= "red";
      
    } else if ((props.stock - 1) < counter){
      document.getElementById("BotonAgregar").diabled = true;
      document.getElementById("BotonAgregar").style.color= "grey";
    }

  
  };
  
  const BajarCantidad = () => {
    if (counter > (props.initial)){
    document.getElementById("BotonAgregar").diabled = false;
    document.getElementById("BotonAgregar").style.color= "red";
    setCounter (parseInt(counter) - 1);
    }else if(counter <= (props.initial)){
      if (counter !== 0){
      setCounter (parseInt(counter) - 1);
      }
      document.getElementById("BotonAgregar").diabled = true;
      document.getElementById("BotonAgregar").style.color= "grey";      
    }
  };

  const onAdd = () =>{
   if (document.getElementById("BotonAgregar").diabled == false){
      const CantidadSeleccionada = counter;
      alert(`Se agregaron ${CantidadSeleccionada} productos.`);
    }
  }
  
  return <div>
      <div className="ContenedorContador">
        <button id= "BotonContadorMas" onClick={SubirCantidad}>+</button>
        <div id = "Contador">{counter}</div>
        <button id = "BotonContadorMenos" onClick={BajarCantidad}>-</button>
      </div>
      <button id = "BotonAgregar" onClick ={onAdd}>Agregar al carrito</button>
      
  </div>;
}


export default ItemCount;
