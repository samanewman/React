import React from 'react';
import {useParams} from 'react-router';
import ItemList from '../ItemList/ItemList';
import itemsjson from '../../public/itemprop';
import {useState, useEffect} from 'react';



const Categorias = () => {

  const [items, setItems] = useState([]);
    let categoria = useParams();
    const itemsjsonfilt = itemsjson.filter(producto => producto.categoria === categoria.categoria);


    useEffect(() => {
        const itemsPromise =  new Promise ((resolve, reject) => {
          setTimeout(() => {
            resolve(itemsjsonfilt)
          }, 500)
        })
        itemsPromise 
        .then((res) => {setItems(res);
          
        })
        .catch((error) => {
          console.log(error)
        })
    
      },[itemsjsonfilt]);
    
      return (
    
        <div className = "mainItemListContainer">    
          <div className = "ContenedorProductos">
            <ItemList
            items={items}/>
          </div> 
        </div>
      ) 
    
    };
    
    export default Categorias;
    