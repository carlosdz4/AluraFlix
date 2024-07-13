import styled from "styled-components";



const ContainerSection = styled.section`
flex-direction: column;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
`

const Container = ({ children }) => {
  return <ContainerSection>{children}</ContainerSection>;
}

export default Container;