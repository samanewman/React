import React from 'react'
import './Home.css'
import img from '../imagenes/DarthVader.jpg'

const Home = () => {
  return (
    <div className = "Home">
      <p className = "Home">Bienvenidos a la tienda oficial de DioNeon Led.</p>
      <div className = "DescripcionHome">Encontrarás todo tipo de cartelería Neon en LED de alta eficiencia.</div>
      <div className = "DescripcionHome">Podrás comprar on-line o hacer tu pedido personalizado.</div>
      <img alt ="Imagen-Portada" className = "ImagenHome"src={img}></img>
    </div>
    
  )
};

export default Home;