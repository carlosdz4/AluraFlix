import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation, useParams } from 'react-router-dom'
const BotonosContainer = styled.div`

display: flex;
width: 385.25px;
height: 54px;
gap: 25px;


button{
    font-size: 20px;
font-weight: 900;
line-height: 24px;
text-align: center;

width: 180.13px;
height: 54px;
background-color: transparent;
border-radius: 10px;
}
.home{
    
    color: var(--Blue, #2271D1);
border: 2px solid var(--Blue, #2271D1);
box-shadow: 0px 0px 12px 4px #2271D1 inset;
}
.nuevovideo{
    border: 2px solid #F5F5F5;
    color: #F5F5F5;
    border: 2px solid var(--white, #F5F5F5);
   

}

@media (max-width: 600px) {
  display: none;
}




`

const CabeceraBotones = () => {

  const parametro = useLocation();
  
  
  
  

  return (
    <>
    <BotonosContainer>
     <Link to={"/"}>
     {
      parametro.pathname === "/" ? <button className='home'>HOME</button>: <button className='nuevovideo'>HOME</button>
     }
    
    </Link>
    <Link to={"/registro"}>
    {
      parametro.pathname === "/registro" ? <button className='home'>NUEVO VIDEO</button>: <button className='nuevovideo'>NUEVO VIDEO</button>
     }
    
    </Link>
    </BotonosContainer>
    </>
  )
}

export default CabeceraBotones