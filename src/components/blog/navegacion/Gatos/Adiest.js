import React from 'react';
import Footer from '../../../footer/Footer'
import Header from '../../../header/Header'

import '../../css/adiest-g.css';
import Gato5 from '../../assets/img/blog/gato 5-PhotoRoom 1.png'
import Foto from '../../assets/img/blog/istockphoto-1333388527-612x612-PhotoRoom 1(1).png'
import Sections from '../Menu/Sections'
import Menu from '../Menu/MenuGatos';

function Adiest() {
  return (
    <div>
      <Header />

      <main>
        <div className="tittle">
          <h1>¡Bienvenidos a nuestro blog!</h1>
        </div>
        <Sections/>

        <div className="line-blue"></div>

        <section id="nav-dog">
          <Menu/>

          <div className="line-blue"></div>


          <div className="learnkahoot">
            <h1 className="learn-kahoot">Gatos agresivos: Aprendiendo la conducta de estas adorables mascotas</h1>
            <img src={Gato5} alt="cargando..." />
            <ul>
              <li>1. Averigua si necesita esterilización.</li>
              <br />
              <li>2. Debes desparasitarlo.</li>
              <br />
              <li>3. Aliméntalo y dale mucho amor.</li>
              <br />
              <li>4. Báñalo, péinalo y hazle un buen corte de cabello.</li>
              <br />
              <li>5. Al menos dos veces al día, sal a estirar las patas.</li>
              <br />
            </ul>
          </div>
        </section>

        <section className="kahoot">
          <article className="pitbull">
            <h2>Ayuda a tu mascota a mejorar su temperamento</h2>
            <div className="vidas-gato-container">
              <div className="vidas-gato-img">
                <img src={Foto} alt="cargando..." />
              </div>
              <p>La intervención temprana es la mejor.
                Cualquier tipo de castigo físico puede aumentar la agresión de un gato y empeorar la situación.
                Los medicamentos pueden ayudar, pero slio en combinación con la modificación del comportamiento
                y / o ambiental.
                Reconocer la agresión y asustar a un gato agresivo sin contacto físico suele ser eficaz.
                Evite situaciones que incrementen las posibilidades de que un gato sea agresivo.
                Las gliosinas son excelentes reforzadores positivos del comportamiento no agresivo.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Adiest;