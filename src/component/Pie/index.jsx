import React from 'react'
import styled from 'styled-components'

const PiePagina = styled.footer`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 125px;
    border-top: 4px solid var(--Blue, rgba(34, 113, 209, 1));
    
    img{
        width: 168.45px;
        height: 40px;


    }



`

const Pie = () => {
  return (
    <PiePagina>
        <img src="img/LogoPie.png" alt="LogoPie" />
       
    </PiePagina>
  )
}

export default Pie