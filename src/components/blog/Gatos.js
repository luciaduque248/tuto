import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './css/gatos.css'

import Learn from './assets/img/blog/istockphoto-1185437742-612x612-PhotoRoom 1(1).png';
import PhotoRoom from './assets/img/blog/ccc-PhotoRoom 1.png';
import Menu from './navegacion/Menu/MenuGatos';
import Sections from './navegacion/Menu/Sections';

function Gatos() {
    return (
        <div>
            <Header />
            <div>
                <div className="tittle">
                    <h1>¡Aprende sobre tu mejor amigo con bigotes!</h1>
                </div>
                <Sections/>
                <section id="nav-dog">
                    <Menu/>

                    <div className="learnkahoot">
                        <h1 className="learn-kahoot">Perros grandes versus Bigotes de los gatos: para qué sirven y por qué nunca
                            cortarlos pequeños: ¿qué es lo más conveniente?</h1>
                        <p>
                            Los bigotes les permiten desenvolverse en el mundo. Sin estos no podrían ni siquiera calcular el
                            lugar donde están parados, así de importante son para ellos.
                            <br />
                            Estos pelos ubicados sobre su boca les ayudan a interpretar el mundo, mantenerse alertas y a
                            conservar el equilibrio. Por todo ello, nunca se los cortes porque podrían perder esas importantes
                            habilidades.
                            <br />
                            Si quieres mantener a tu gatito siempre feliz y sano déjale sus bigotes tranquilos, ni siquiera se
                            los toques. Aunque se regeneran no es para nada recomendable quitárselos.
                        </p>
                        <img src={Learn} alt="cargando..."/>

                    </div>
                </section>



                <section className="kahoot">
                    <div className="pitbull">

                        <h2>Por qué los gatos mueven la cola: cómo se comunican en su lenguaje </h2>
                        <div className="pitbull-text">
                            <p>Los movimientos de la cola les sirven a los gatos para comunicarse y expresarse. Cada balanceo
                                tiene su significado. Aquí te lo explicaremos detalladamente:
                                Cola con movimiento vertical y punta hacia abajo
                                Este es un movimiento cariñoso. Con él tu gatito te está diciendo que tiene curiosidad de saber
                                lo que haces, desea saludarte y mostrarte lo mucho que te aprecia. Es una manera de darte su
                                amor.
                                Cola con movimiento de látigo de un lado hacia el otro
                                Esta es una señal de prevención, tu felino está diciéndote que no le gusta algo, o señalando a
                                la persona que no le agrada. Si te has preguntado por qué los gatos mueven la cola como látigo,
                                la respuesta es porque así demuestra que está enfadado. Asimismo, con él te pide que cambies su
                                entorno o de lo contrario sacará las uñas.
                                Cola sobre su lomo
                                La cola hacia adelante sobre su espalda es uno de los gestos más amables que puede tener tu gato
                                contigo. Tu mascota está a gusto y pleno con tu presencia. “En el lenguaje animal, esta es su
                                manera de invitarnos a oler su trasero (es su manera de hacer amigos) y de ser amistoso” (Díaz,
                                2016).
                                Cola levantada en ángulo
                                Esto significa inseguridad. Sin embargo, debes estar pendiente de sus movimientos y de su
                                entorno, ya que tu gato te indicará cuando está prevenido por algo que desconoce. Recuerda, tu
                                gato será muy observador y olfateará al nuevo sujeto u objeto. Si lo observas con detalle
                                entenderás por qué los gatos mueven la cola de esta manera.</p>
                            <img src={PhotoRoom} alt="cargando..."/>
                        </div>

                    </div>
                </section>
            </div>

            

            <Footer />
        </div>
    )
}

export default Gatos