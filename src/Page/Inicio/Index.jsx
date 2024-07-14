import React, { useContext } from 'react'
import Banner from '../../component/Banner'
import CardContainer from '../../component/CardContainer'
import Context, { GlobalContext } from '../../component/Contetx'
import ModalEditar from '../../component/ModalEditar'


const Inicio = () => {

 


  return (
    
    <Context>
    <Banner />
    <CardContainer />
    <ModalEditar />
    </Context>
    
    
  )
}

export default Inicio