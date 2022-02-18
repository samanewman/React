import React, {useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import itemsprop from '../../public/itemprop'


const ItemDetailContainer = () => {
    const item = itemsprop[0];

    const [itemsd, setItemsd] = useState([]);

    useEffect(() => {
      const getItem =  new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve(item)
        }, 2000)
      })
      getItem
      .then((res) => {setItemsd(res);
      })
      .catch((error) => {
        console.log(error)
      })
  
    },[]);

  return (
    <div className = "MainItemDetail">
        <ItemDetail
        itemd = {itemsd}/>
    </div>
  )
};

export default ItemDetailContainer;