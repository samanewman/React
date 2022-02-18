import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'

let redcolor = "deeppink";


const App = () => {
  return (
    <>
      <NavBar/>
      <div id = "main">
        <div className = "BoxItemDetail">
          <p className = "Letras">Selecciona para ver los detalles:</p>
          <ItemDetailContainer/>
      </div>
        <ItemListContainer 
          saludo={"Bienvenido a la tienda oficial de DioNeon Led"} 
          color = {redcolor}
          />
        
      </div>
      
      
    </>
  )
};

export default App;

