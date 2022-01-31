import React from 'react';
import img from '../../imagenes/DarthVader.jpg';
import './logo.css';

const Logo = () => {
  return <div className ="BoxContenedor">
      <div className ="BoxImg"><img src={img} alt = "ImgDarthVader" className = "ImagenDarthVader"></img></div>
      <h1>May The Force</h1>
      <h2>Be with you</h2>
  </div>;
};

export default Logo; 
