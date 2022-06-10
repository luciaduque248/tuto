import './Footer.css'
import iconPhone from './img/phone.svg'
import iconLocate from './img/locate.svg'
import iconClock from './img/clock.svg'
import iconFacebook from './img/facebook.svg'
import iconInstagram from './img/instagram.svg'
import iconYoutube from './img/youtube.svg'
import iconGmail from './img/gmail.svg'
import { Link } from 'react-router-dom'

function Footer(){
 return(
    /*Características del componente*/
        <footer>
            <div className="footer__information">
                
                <div className="information-piece primary">
                    
                    <div className="information">
                        <img src={iconLocate} alt="Icono de ubicación"/>
                        <div>
                            <p>Sede Chapinero</p>
                            <p>Kra 12 *34-56, Rosales</p>
                        </div>
                    </div>

                    <div className="information">
                        <img src={iconPhone} alt="Icono de teléfono"/>
                        <div>
                            <p>(+57) 312 456 7890</p>
                        </div>
                    </div>
                </div>

                <div className="information-piece secondary">
                    <div className="information">
                        <img src={iconGmail} alt="Icono de gmail"/>
                        <div>
                            <p>milhuellitas@correo. com</p>
                        </div>
                    </div>
            
                    <div className="information">
                        <img src={iconClock} alt="Icono de reloj"/>
                        <div>
                            <p>Todos los días</p> 
                            <p> 8:00am - 7:00pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__loyal-text">
                <p><strong>Textos legales</strong></p>
                <p>Políticas de privacidad</p>
                <p>Política de cookies</p>
            </div>
        
            <div className="footer__social-media">
                <p><strong>Síguenos en redes sociales</strong></p>
                <div>
                    <Link to="*"><img src={iconInstagram} alt="Icono de Instagram"/></Link>
                    <Link to="*"><img src={iconFacebook} alt="Icono de Facebook"/></Link>
                    <Link to="*"><img src={iconYoutube} alt="Icono de Youtube"/></Link>
                </div>
            </div>
    </footer>
 );
}

export default Footer;