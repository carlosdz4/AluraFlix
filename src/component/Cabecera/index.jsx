import React from 'react'
import { styled } from "styled-components";
import CabeceraBotones from './CabeceraBotones';



const Header = styled.header`
display: flex;

align-items: center;
justify-content: space-between;

background: var(--Dark-Grey, #262626);
padding: 1.1em 2em;
border-bottom: 4px solid var(--Blue, #2271D1);
box-shadow: 0px 5px 29px 0px #2271D1B2;

img{
    width: 168.45px;
    height: 40px;

}



`


const Cabecera = () => {
  return (
   <>
   <Header>
   
   <img src="img/logo-cabecera.png" alt="Logo header"  />
   <CabeceraBotones />
    
   </Header>
   </>
  )
}

export default Cabecera