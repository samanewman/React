import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import Productos from './containers/Productos/Productos';

let redcolor = "red";
let bluecolor = "#E30CB8";


const App = () => {
  return (
    <>
    <NavBar/>
    <div id = "main">
    <ItemListContainer saludo={"Bienvenido"} color = {redcolor}/>
    <ItemListContainer saludo={"A la tienda oficial de DioNeonLed"} color = {bluecolor}/>
    <Productos/>
    </div>
    </>
  );
}

export default App;

