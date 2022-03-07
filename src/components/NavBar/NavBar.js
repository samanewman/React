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
                        <li><Link className = "ItemNav" to="Categorias/Pokemon">Pokémon</Link></li>
                        <li><Link className = "ItemNav" to="Categorias/Sailor-Moon">Sailor Moon</Link></li>
                        <li><Link className = "ItemNav" to="Categorias/Naruto">Naruto</Link></li>
                        <li><Link className = "ItemNav" to="Categorias/Darling-in-the-franxx">Darling in the Franxx</Link></li>
                    </ul>
                </li>
                <li> <Link className = "ItemNav" to="/Contacto">Contacto</Link></li>
            </ul>
            <CartWidget/>
        </nav>
    );
  }
  
  export default NavBar;
  
  