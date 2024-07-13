
import React from 'react'
import styled from 'styled-components'



const BannerContainer = styled.div`


  background-image: 
    url("/img/banner.png");
  background-size: cover;
  background-position: center;
  height: 832px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
  padding: 0 35px;
  gap: 50px;
  font-family: "Roboto", sans-serif;
  background-color: #001233;
  box-sizing: border-box;

  
@media (max-width: 650px) {
    
    display: none;
}

@media (max-width: 907px) {
    
    flex-direction: column;
}
`

const TextContainer = styled.div`
  
  
    display: flex;
    flex-direction: column;
    max-width: 500px;



   img{
    max-width: 250px;
    max-height: 80px;
    
  }

 h1{
    color: #f5f5f5;
    font-family: Roboto, sans-serif;
    font-size: 46px;
    font-weight: 400;
    line-height: 53.91px;
    text-align: left;
}

 p{
    //styleName: @body-medium;
font-family: Roboto;
font-size: 18px;
font-weight: 300;
line-height: 21.09px;
text-align: left;

}

`

const IframeContainer = styled.div`
  iframe {
    border: 5px solid #6BD1FF;
   
    border-radius: 5%;
    box-shadow: 0px 5px 29px 0px #2271D1B2;

}
`





const Banner = () => {
    return (
       <>
        <BannerContainer>
          <TextContainer>
            <img src="/img/tituloBanner.png" alt="Logo BANNER"  />
            <h1>Challenge React</h1>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde 
                podrás comprometerte en la resolución de un problema para poder aplicar 
                todos los conocimientos adquiridos en la formación React.
            </p>
          </TextContainer>
          <IframeContainer>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GJfOSoaXk4s?si=6i5ftwYT_FaOR10A" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </IframeContainer>
            
        </BannerContainer>
        </>
    )
}

export default Banner