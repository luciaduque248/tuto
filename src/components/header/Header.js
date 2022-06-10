import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/logo.png';
function Header() {
    return (
        <header className="header">
            <nav>
                <div className="nav_logo-text">
                    <img src={logo} alt="" className="logo-nav"/>
                        <p className="text-logo-header">Mil <br/> huellitas</p>
                </div>

                <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="bar-btn">
                        <i className="fa-solid fa-bars"></i>
                    </label>

                    <ul className="nav_menu-items">
                        <li><Link to="#">INICIO</Link></li>
                        <li><Link to="#">ADOPCIÓN</Link></li>
                        <li><Link to="#">DONACIÓN</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link to="#">ALIADOS</Link></li>
                    </ul>
            </nav>
        </header>
    )
}

export default Header