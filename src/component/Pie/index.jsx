import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PiePagina = styled.footer`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 125px;
    border-top: 4px solid var(--Blue, rgba(34, 113, 209, 1));
    
    .logoPie{
        width: 168.45px;
        height: 40px;

    }

    .LogoAdd{
      display: none;
    }
    .LogoHome{
      display: none;
    }

    @media (max-width: 450px) {
      .logoPie{
        display: none;

      }
        .LogoAdd{
          display: block;
          
        }
        .LogoHome{
          display: block;
          
        }
    }



`

const Pie = () => {
  return (
    <PiePagina>
        <img className='logoPie' src="img/LogoPie.png" alt="LogoPie" />

        <Link to={"/"}>
        <img className='LogoHome' src="img/HomeButton.png" alt="LogoPie" />
        </Link>
        <Link to={"/registro"}>
        <img className='LogoAdd' src="img/AddButton.png" alt="LogoPie" />
        </Link>

        
    </PiePagina>
  )
}

export default Pie