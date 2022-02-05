import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

let redcolor = "red";


const App = () => {
  return (
    <>
    <NavBar/>
    <div id = "main">
    <ItemListContainer saludo={"Bienvenido A la tienda oficial de DioNeonLed"} color = {redcolor}/>
    </div>
    </>
  );
}

export default App;

