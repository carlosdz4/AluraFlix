import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../Card'
import Context, { GlobalContext } from '../Contetx'


const Container = styled.section`
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 15px;
   
    img{
        width: 432px;
        height: 70px;

    }

    @media (max-width: 470px) {
      img{
        width: 100%

    }
    }
`
const CardsContainer = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
` 



const CardContainer = () => {

    
  const {categorias ,videos , Borrarvideo , setModal} = useContext(GlobalContext);
      
   

    
    

  return (
    <>
    
      
      {
        categorias.map((categoria) =>{
            
            return <Container>
        <img src={`img/${categoria.nombre}.png`} alt={`${categoria.id}`}  />
            <CardsContainer key={categoria.id}>
                <Card categoria={categoria} videos={videos} Borrarvideo={Borrarvideo} setModal={setModal} />
                
            </CardsContainer>
            </Container>
            
        })
      }
        
    
    </>
  )
}

export default CardContainer