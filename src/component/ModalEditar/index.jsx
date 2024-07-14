import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import  { GlobalContext } from '../Contetx'
import FormularioEditar from '../FormularioEditar'


const Overlay = styled.div`
background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const Dialogo = styled.dialog`
     position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const BotonIcono = styled.button`
    margin-left: 12px;
    align-self: end;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
const DivFormularioEditar = styled.div`
    width: 974px;
    height: 1,140px;

    padding: 50px;

    border-radius: 15px;
    border: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(3, 18, 47, 1);
    border: 5px solid rgba(107, 209, 255, 1);

`

const ModalEditar = () => {

    const {Modal , setModal , videos , categorias , VideoUpdate} = useContext(GlobalContext);
    
    
    
    
  return (<>
    { Modal.valor && <>
    <Overlay />
    
    <Dialogo open={Modal.valor} >
    
        <DivFormularioEditar>
        <BotonIcono formMethod="dialog" >
                        <img src="img/cerrar.png" alt="Icono de cerrar" onClick={()=>{setModal(false)} }  />
                    </BotonIcono>
        <FormularioEditar categorias={categorias} videoModal = {Modal.video} setModal={setModal} VideoUpdate={VideoUpdate}/>
                </DivFormularioEditar>
    </Dialogo>
    
    </>
}
    </>
  )
}

export default ModalEditar