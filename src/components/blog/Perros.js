import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import MenuPerros from './navegacion/Menu/MenuPerros'
import GatoMoriduu from '../../components/blog/assets/img/blog/gatomoriduu.png'
import Icono from '../../components/blog/assets/img/blog/bundle-of-dog-breeds-group-vector-PhotoRoom 3.png'
import Sections from './navegacion/Menu/Sections'

function Perros() {
  return (
    <div>
      <Header />
      <main>
        <div className="tittle">
          <h1>¡Aprende sobre tu mejor amigo peludo!</h1>
        </div>
        <Sections/>

        <section id="nav-dog">
          <MenuPerros />

          <article className="learnkahoot">
            <h1 className="learn-kahoot">Cómo cuidar a una mascota rescatada siguiendo una guía básica</h1>
            <ol type='1'>
              <li>Averigua si necesita esterilización.</li>
              <br />
              <li>Debes desparasitarlo.</li>
              <br />
              <li>Aliméntalo y dale mucho amor.</li>
              <br />
              <br />
              <li>Báñalo, péinalo y hazle un buen corte de cabello.</li>
              <br />
              <li>Al menos dos veces al día, sal a estirar las patas.</li>
            </ol>
            <img src={GatoMoriduu}  alt="cargand..."/>

          </article>
        </section>



        <section className="kahoot">
          <article className="pitbull">
            <div className="button-pitbull">
              <img src={Icono} alt="cargand..." />
              <span>Aprende con Kahoot</span>

            </div>
            <h2>Los peludos nos dan lecciones cada día, enseñándonos una forma distinta de ver las cosas. </h2>
            <div className="pitbull-text">
              <p>1. La lealtad es lo primero.</p>
              <p>2. Nunca se es demasiado mayor para jugar.</p>
              <p>4. Ser felices con poco.</p>
              <p>3. Descansar es fundamental.</p>
              <p>5. Cuidar a los demás cuesta muy poco.</p>
              <p>6. Aprender a perdonar.</p>
            </div>

          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Perros