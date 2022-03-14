import React, {useState, useEffect}from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import itemsjson from '../../public/itemprop';


const ItemListContainer = (props) =>{
   
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsPromise =  new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsjson)
      }, 500)
    })
    itemsPromise 
    .then((res) => {setItems(res);
      
    })
    .catch((error) => {
      console.log(error)
    })

  },[]);

  return (

    <div className = "mainItemListContainer">
      <div className = "ContenedorSaludo">
        <ul>
          <li className = "ListaSaludo" style= {{color:`${props.color}`}}>{props.saludo}</li>
        </ul>
      </div>

      <div className = "ContenedorProductos">
        <ItemList
        items={items}/>
      </div> 
    </div>
  ) 

};

export default ItemListContainer;
