import React from 'react';
import Item from '../../components/Item/Item';
import '../ItemList/ItemList.css';

const ItemList = ({items}) => {

   return ( 
   
   <div className = "ItemListBox">
     {
      items.map((item) => (
      <Item
      key = {item.ItemId}
      items = {item}
    />
     ))
}
    
   </div>     
      
    )
}

export default ItemList;