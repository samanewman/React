import React from 'react';

import '../Item/Item.css';
import {Link} from "react-router-dom";

const Item = ({items}) => {

    return (
      <div className = "box">
        <div className = "ItemBox">
            <Link to={`/DetalleDeProducto/${items.itemId}`}><img className = "img"src = {items.pictureUrl} alt = {items.ItemName} /></Link>
            <div className = "title">{items.itemName}</div>
            <div className = "precio">{items.itemPrice}</div>
            
        </div>
    </div>
  )
}

export default Item;