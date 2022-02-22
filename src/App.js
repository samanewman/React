import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './views/Home';
import Contacto from './views/Contacto';
import Productos from './views/Productos';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
   <Router>
        <>
          <NavBar/>
        </>
        <Routes>
          <Route path = "/Home" element={<Home />} />
          <Route path = "/Productos" element={<Productos />} />
          <Route path = "/Contacto" element={<Contacto />} />
          <Route path = "/DetalleDeProducto" element={<ItemDetailContainer />} />
       </Routes>
    </Router>
  );
};

export default App;

