import '../CartWidget/CartWidget.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className = "NavBar">
            <Logo/>
            <ul className = "UlNavBar">
                <Link className = "ItemNav" to="/Home">Home</Link>
                <Link className = "ItemNav" to="/Productos">Productos</Link>
                <Link className = "ItemNav" to="/Contacto">Contacto</Link>
            </ul>
            <CartWidget/>
        </nav>
    );
  }
  
  export default NavBar;
  
  