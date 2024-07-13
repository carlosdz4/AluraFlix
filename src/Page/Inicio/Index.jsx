import React, { useContext } from 'react'
import Banner from '../../component/Banner'
import CardContainer from '../../component/CardContainer'
import Context, { GlobalContext } from '../../component/Contetx'


const Inicio = () => {

 
  return (
    <>
    <Context>
    <Banner />
    <CardContainer />
    </Context>
    </>
    
  )
}

export default Inicio