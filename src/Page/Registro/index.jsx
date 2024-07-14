import React from 'react'
import styled from 'styled-components'
import Context from '../../component/Contetx'
import  Formulario  from "../../component/Formulario/";


const RegistroContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    padding: 15px;
   

`
const TituloContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    h1{
        font-family: "Roboto", sans-serif;
    font-size: 60px;
    font-weight: 900;
    line-height: 70.31px;
    text-align: center;
    margin-bottom: 0%;

    }

    p{

        font-family: "Roboto", sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 23.44px;
        text-align: center;

    }
`

const Registro = () => {

  return (
        <Context>
    <RegistroContainer>
        <TituloContainer>
            <h1>Nuevo video</h1>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </TituloContainer>
        <Formulario valor="registro"/>
    </RegistroContainer>
    </Context>
  )
}

export default Registro

