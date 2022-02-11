import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../../components/ItemCount/ItemCount';


const ItemListContainer = (props) =>{

  const Add = (counter) =>{
    alert(`Se agregaron ${counter} productos.`);
  };  
  

  return(<div>
    <div className = "ContenedorSaludo">
      <ul>
        <li className = "ListaSaludo" style= {{color:`${props.color}`}}>{props.saludo}</li>
      </ul>
    </div>

    <div className = "ContenedorProductos">


    <ItemCount
        stock = "5"
        initial = "1" 
        Add = {Add}     
        />

    </div> 
  </div>

    
  )
};

export default ItemListContainer;
