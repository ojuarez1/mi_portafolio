import styled from "styled-components";
import AnimatedPage from "./AnimatedPage";

const Principal = styled.div`
  height:calc(80vh - 1.90rem);
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color:#000;
`

const Titulo = styled.h1`
  margin-top:0;
`

const Seccion = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
`

const Articulo = styled.article`
  width:50vw;
  display:flex;
  justify-content:center;
  box-sizing:border-box;
  &:nth-child(1){
    border-right:1px solid #fff;
  }
`

const Contain = styled.div`
  width:60%;
  
`

const Hdos = styled.h4`
  margin:0.25rem 0;
` 

const ContImg = styled.div`
  display:flex;
  flex-wrap:wrap;
  overflow: hidden;
  justify-content:center;
  background-color:#F0F3F3;
  height:45vh;
  border-radius:10px;
`
const Img = styled.img`
  width:70%;
  margin:0.25rem 0;
  transition:transform 0.8s ease-in;
  &&:hover{
    transform:scale(1.1);
  }
`

const Formacion = () => {
  return <AnimatedPage>
    <Principal>
      <Titulo>Formacion</Titulo>
      <Seccion>
        <Articulo >
          <Contain>
            <ContImg>
              <Img src="./img/inca.png" alt="mysql"/>              
            </ContImg>
            <Hdos>Bachillerato - Contador</Hdos>
            <p style={{margin:0}}>1999 - INCA</p>
          </Contain>
        </Articulo>
    
        <Articulo>
          <Contain>
            <ContImg> 
              <Img src="./img/alura.png" alt="html5" />
            </ContImg>
            <Hdos>Formacion en Desarrollo Web</Hdos>
            <p style={{margin:0}}>2023 - Alura</p>
          </Contain>
        </Articulo>
      </Seccion>
    </Principal>
  </AnimatedPage>
}

export default Formacion