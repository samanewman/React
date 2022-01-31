import React from 'react';
import './Productos.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import FotoKirby from '../../imagenes/Imagenes-productos/Foto1.jpg'
import FotoBulbasaur from '../../imagenes/Imagenes-productos/Foto2.jpg'
import FotoCharmander from '../../imagenes/Imagenes-productos/Foto3.jpg'

const Productos = (props) => {
  return <div className = "ContenedorProductos">
    <div>
      <ProductCard 
        foto = {FotoKirby}
        nombre = 'Kirby'
      />
    </div>
    <div>
      <ProductCard 
        foto = {FotoBulbasaur}
        nombre = 'Bulbasaur'
      />
    </div>
    <div>
      <ProductCard 
        foto = {FotoCharmander}
        nombre = 'Charmander'
      />
    </div>
  </div>;
}

export default Productos;
