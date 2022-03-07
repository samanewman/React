import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Productos from './components/Productos/Productos';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer'

const App = () => {
  return (
   <Router>
        <NavBar/>
        <Routes>
          <Route path = "/" element={<Productos />} />
          <Route path = "/DetalleDeProducto" element={<ItemDetailContainer />} />
          <Route path = "/DetalleDeProducto/:id" element={<ItemDetailContainer />} />
       </Routes>
       <Footer/>
    </Router>
    

  );
};

export default App;

