import React from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import '../Item/Item.css';

const Item = ({item}) => {

    const Add = (counter) =>{
        alert(`Se agregaron ${counter} productos.`);
      };  

  return (
    <div className = "box">
      <div className = "ItemBox">
          
          <img className = "img"src = {item.PictureUrl} alt = {item.ItemName} />
          <p>{item.ItemName}</p>
          <div>Id de producto: {item.ItemId}</div>
          <p>Cartel de {item.ItemName} de {item.ItemDescription}</p>
          <p>Precio: {item.ItemPrice}</p>
          <button>Detalles del producto</button>
          <ItemCount
          stock = "5"
          initial = "1"
          Add = {Add}     
          />
      </div>
    </div>
  )
}

export default Item;