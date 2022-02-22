import React from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import '../Item/Item.css';
import {Link} from "react-router-dom";

const Item = ({items}) => {

  const add = (counter) =>{
    if (counter > 0){
      alert(`Se agregaron ${counter} productos.`);
    }
  };  

    return (
      <div className = "box">
        <div className = "ItemBox">
            <Link to="/DetalleDeProducto"><img className = "img"src = {items.pictureUrl} alt = {items.ItemName} /></Link>
            <div className = "title">{items.itemName}</div>
            <ItemCount stock = "5" initial = "1" add = {add}/>
        </div>
    </div>
  )
}

export default Item;