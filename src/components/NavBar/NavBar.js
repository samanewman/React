//Navbar con las opciones navegablesy los links del ruteo

import '../CartWidget/CartWidget.css';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className = "NavBar">
            <Logo/>
            <ul className = "UlNavBar">
                <li><Link className = "ItemNav" to="/">Productos</Link></li>
                <li className = "ItemNav" id="MenuCategoria">Categorías
                    <ul className = "SubmenuCategoria">
                        <li><Link className = "ItemNav" to="/categoria/pokemon">Pokémon</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/sailor-moon">Sailor Moon</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/naruto">Naruto</Link></li>
                        <li><Link className = "ItemNav" to="/categoria/darling-in-the-franxx">Darling in the Franxx</Link></li>
                    </ul>
                </li>
                <li> <Link className = "ItemNav" to="/Contacto">Contacto</Link></li>
            </ul>
            <CartWidget/>
        </nav>
    );
  }
  
  export default NavBar;
  
  