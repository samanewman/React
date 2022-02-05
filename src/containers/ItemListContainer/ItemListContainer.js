import React from 'react';
import './ItemListContainer.css';
// import ProductCard from '../../components/ProductCard/ProductCard'
// import FotoKirby from '../../imagenes/Imagenes-productos/Foto1.jpg'
// import FotoBulbasaur from '../../imagenes/Imagenes-productos/Foto2.jpg'
// import FotoCharmander from '../../imagenes/Imagenes-productos/Foto3.jpg'
import ItemCount from '../../components/ItemCount/ItemCount';

const ItemListContainer = (props) =>{
  return(<div>
    <div className = "ContenedorSaludo">
      <ul>
        <li className = "ListaSaludo" style= {{color:`${props.color}`}}>{props.saludo}</li>
      </ul>
    </div>

    <div className = "ContenedorProductos">

    <ItemCount
        stock = "5"
        initial = "1" />
  </div> 
</div>

    
  )
}

export default ItemListContainer;
