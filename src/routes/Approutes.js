import React from 'react'
import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import Adopcion from '../pages/Adopcion';
import Donacion from '../pages/Donacion';
import Blog from '../pages/Blog';
import Aliado from '../pages/Aliados';

import Inicio from '../pages/Inicio';
import Perros from '../components/blog/Perros';
import Gatos from '../components/blog/Gatos';

import PerrosAdiest from '../components/blog/navegacion/Perros/Adiest';
import PerrosCuidados from '../components/blog/navegacion/Perros/Cuidados';
import PerrosMitos from '../components/blog/navegacion/Perros/Mitos';
import PerrosTamaños from '../components/blog/navegacion/Perros/Tamaños';

import GatosAdiest from '../components/blog/navegacion/Gatos/Adiest';
import GatosCuidados from '../components/blog/navegacion/Gatos/Cuidados';
import GatosMitos from '../components/blog/navegacion/Gatos/Mitos';
import GatosTamaños from '../components/blog/navegacion/Gatos/Tamaños';

function Approutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} ></Route>
                <Route path='/adopcion' element={<Adopcion />}></Route>
                <Route path='/donacion' element={<Donacion />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/aliado' element={<Aliado />}></Route>

                <Route path='/perros' element={<Perros />}></Route>
                <Route path='/perros/adiest' element={<PerrosAdiest />}></Route>
                <Route path='/perros/cuidados' element={<PerrosCuidados />}></Route>
                <Route path='/perros/mitos' element={<PerrosMitos />}></Route>
                <Route path='/perros/tamyrazas' element={<PerrosTamaños />}></Route>

                <Route path='/gatos' element={<Gatos />}></Route>
                <Route path='/gatos/adiest' element={<GatosAdiest />}></Route>
                <Route path='/gatos/cuidados' element={<GatosCuidados />}></Route>
                <Route path='/gatos/mitos' element={<GatosMitos />}></Route>
                <Route path='/gatos/tam' element={<GatosTamaños />}></Route>

                <Route path='/*' element={<Navigate to={"/"} />}></Route>
                <Route path='/home' element={<Navigate to={"/"} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Approutes