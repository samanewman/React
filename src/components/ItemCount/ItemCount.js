import React from 'react';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = () => {

  const [contador, ActualizarContador] = useState(1);

  const SubirCantidad = () => {
      ActualizarContador(contador + 1);

  };

  const BajarCantidad = () => {
    if (contador>=1){
      ActualizarContador(contador - 1);
    }
  };

  return <div>

      <div className="ContenedorContador">
        <button className = "BotonContadorMas" onClick={SubirCantidad}>+</button>
        <div id = "Contador">{contador}</div>
        <button className = "BotonContadorMenos" onClick={BajarCantidad}>-</button>
      </div>
  </div>;
}


export default ItemCount;
