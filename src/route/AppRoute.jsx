import React from 'react'
import { BrowserRouter , Route , Routes } from "react-router-dom";
import  Inicio  from "../Page/Inicio/Index.jsx";
import Cabecera from '../component/Cabecera';
import Container from '../component/Container';
import Registro from '../Page/Registro/index.jsx';

const AppRoute = () => {
  return (

    <BrowserRouter>
    
    <Cabecera />
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/registro' element={<Registro />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default AppRoute