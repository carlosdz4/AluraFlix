import React, { useState , useEffect, useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineDelete } from "react-icons/ai";
import { RiEdit2Line } from "react-icons/ri";
import { GlobalContext } from '../Contetx';
import ModalEditar from '../ModalEditar';

const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    
`
const Cards = styled.a`

    display: flex;
    flex-direction: column;
    width: 100%;
    
    
    
   .imagen{
    
    height: 260.85px;

    border-radius: 15px 15px 0px 0px;

    border: 5px solid ${(props) => props.$color};
    box-shadow: 0px 0px 17px 8px ${(props) => props.$color};

    }

`

const DivInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
height: 59px;
gap: 50px;
border-radius: 0px 0px 15px 15px;

opacity: 0px;
background: rgba(0, 0, 0, 0.9);


border-style: solid;

border-color: ${(props) => props.$color};

box-shadow: 0px -4px 5px 3px ${(props) => props.$color};;

span{
    width: 109.43px;
height: 28px;

display: flex;
align-items: center;
font-size: 24px;
font-weight: 800;
line-height: 18.75px;
text-align: left;
color: rgba(255, 255, 255, 1);
cursor: pointer;

}

.borrar:hover {
background: red;
border-radius: 15px;
}

.editar:hover {
background: green;
border-radius: 15px;
}


`


const Card = ({categoria , videos , Borrarvideo , setModal}) => {

   const {color , nombre} = categoria;
   
   

     
     
  return (
    <>
   { videos.filter((video) => video.Categoria === nombre).map((video) =>{
       return <Contenedor key={video.id}> <Cards $color={color}  href={video.linkVideo}>
        <img className='imagen' src={video.linkImagenVideo} alt={video.titulo} />
        
    </Cards>
    <DivInfo $color={color}>
        <span className='borrar' onClick={() => Borrarvideo(video.id)}><AiOutlineDelete />Borrar</span>
        <span className='editar' onClick={() => {
            setModal({valor: true , video: video});
        }}><RiEdit2Line />Editar</span>
        </DivInfo>
        </Contenedor>
    })
}
 
</>

  )
}

export default Card