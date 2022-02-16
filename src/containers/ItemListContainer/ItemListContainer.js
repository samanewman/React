import React, {useState, useEffect}from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import itemsjson from './itemsprop.js';


const ItemListContainer = (props) =>{

  const [ArrItems, setItems] = useState([]);

  useEffect(() => {
    const ItemsPromise =  new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsjson)
      }, 3000)
    })
    ItemsPromise 
    .then((res) => {setItems(res);
    })
    .catch((error) => {
      console.log(error)
    })

  },[]);

  return (

    <div className = "main">
      <div className = "ContenedorSaludo">
        <ul>
          <li className = "ListaSaludo" style= {{color:`${props.color}`}}>{props.saludo}</li>
        </ul>
      </div>

      <div className = "ContenedorProductos">
        <ItemList
        Items={ArrItems}/>
      </div> 
    </div>
  ) 

};

export default ItemListContainer;
