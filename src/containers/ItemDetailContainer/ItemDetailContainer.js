import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import itemsprop from '../../public/itemprop';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {

    let id = useParams();

    const [itemsd, setItemsd] = useState(itemsprop[id.id]);

    useEffect(() => {
      const getItem =  new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve(itemsd)
        }, 500)
      })
      getItem
      .then((res) => {setItemsd(res);
      })
      .catch((error) => {
        console.log(error)
      })
  
    });

  return (
    <div className = "MainItemDetail">
        <ItemDetail
        itemd = {itemsd}/>
    </div>
  )
};

export default ItemDetailContainer;