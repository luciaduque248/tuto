import React from 'react';
import MenuPerros from '../Menu/MenuPerros';
import Sections from '../Menu/Sections';
import Imagen1 from '../../assets/img/blog/2 784400.png';
import Torre from '../../assets/img/blog/torre.png';
import Header from '../../../header/Header';
import Footer from '../../../footer/Footer';

function Tamaños() {
  return (
    <div>
      <Header/>
      <main>
        <div class="tittle">
          <h1>¡Aprende sobre tu mejor amigo con bigotes!</h1>
        </div>
        <Sections />

        <section id="nav-dog">
          <MenuPerros />

          <article class="learnkahoot">
            <img src={Imagen1} alt='cargando...' />
          </article>
        </section>

        <section class="kahoot">
          <article class="pitbull">

            <h2>Perros grandes versus perros pequeños: ¿qué es lo más conveniente?</h2>
            <div class="pitbull-text">
              <img src={Torre} alt='cargando...' />
              <p>
                <br />
                Perros grandes:
                <br />
                Inteligentes y protectores
                Sus habilidades cognitivas son superiores a las de los pequeños. Por ejemplo, destacan en la memoria a corto plazo y la capacidad de autocontrol.
                Por lo tanto, si deseas que tu perro sea una de esas mascotas capaz de desempeñar habilidades como hallar objetos a través del olfato, una buena opción es que te decantes por uno de mayor tamaño.
                Su carácter noble los convierte en ideales para convivir en familias con niños, con los que desarrollan una relación muy buena. Es cierto que es preciso trabajar su adiestramiento para evitar pequeños golpes o empujones.


                <br />
                Perros pequeños:
                <br />
                ideales para  Convivir con un perro pequeño es una buena opción si tu hogar es de dimensiones chicas y no tienes mucho espacio, como un apartamento en la ciudad.
                Su principal ventaja radica en que no es imprescindible que los saques a pasear muy seguido. Además, necesitan poco alimento y son fáciles de trasladar de un lugar a otro.

                Por último, son perros que desprenden más ternura que miedo, por lo que no son buenos protectores o perros guardianes.</p>

            </div>

          </article>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Tamaños