import React from 'react';
import Item from '../../components/Item/Item';
import '../ItemList/ItemList.css';

const ItemList = ({Items}) => {

   return ( <div>
     {
      Items.map((item) => (
        <Item
        key = {item.ItemId}
       item = {item}
        />
      ))
    }
    
   </div>     
      
    )
}

export default ItemList;