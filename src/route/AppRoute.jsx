import React from 'react'
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Inicio from '../Page/Inicio/Index';
import Cabecera from '../component/Cabecera';
import Container from '../component/Container';

const AppRoute = () => {
  return (

    <BrowserRouter>
    <Container>
    <Cabecera />
    <Routes>
        <Route path='/' element={<Inicio />} />
    </Routes>
    </Container>
    </BrowserRouter>
  )
}

export default AppRoute