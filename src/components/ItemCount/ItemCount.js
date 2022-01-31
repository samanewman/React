import React from 'react';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = () => {

  const [contador, ActualizarContador] = useState(1);

  const SubirCantidad = () => {
    ActualizarContador(contador + 1);
    document.getElementById("BotonMenos").disabled = false;
  };

  const BajarCantidad = () => {
    if (contador>=1){
    ActualizarContador(contador - 1);
    } else{
      document.getElementById("BotonMenos").disabled = true;
    }
  };

  return <div>

      <div className="ContenedorContador">
        <button className = "BotonContador" onClick={SubirCantidad}>+</button>
        <div id = "Contador">{contador}</div>
        <button className = "BotonContador" onClick={BajarCantidad} id = "BotonMenos">-</button>
      </div>
  </div>;
}


export default ItemCount;
