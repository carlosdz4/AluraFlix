import React from 'react'
import styled from 'styled-components'

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




`

const CabeceraBotones = () => {
  return (
    <>
    <BotonosContainer>
    <button className='home'>
        HOME
    </button>

    <button className='nuevovideo'>
        NUEVO VIDEO
    </button>
    </BotonosContainer>
    </>
  )
}

export default CabeceraBotones