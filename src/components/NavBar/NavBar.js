import '../CartWidget/CartWidget.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

const NavBar = () => {
    return (
        <nav className = "NavBar">
            <Logo/>
            <ul className = "UlNavBar">
                <a href="https://github.com/samanewman"><li className = "ItemNav">Home</li></a>
                <a href="https://github.com/samanewman"><li className = "ItemNav">Productos</li></a>
                <a href="https://github.com/samanewman"><li className = "ItemNav">Contacto</li></a>
            </ul>
            <CartWidget/>
        </nav>
    );
  }
  
  export default NavBar;
  
  