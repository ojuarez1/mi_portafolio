import styled from "styled-components";
import AnimatedPage from "./AnimatedPage";
import Boton from "./Boton";
import { Link } from "react-router-dom";

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
  width:80%;
  box-shadow:1px 1px 10px #213547;
`

const Hcuatro = styled.h4`
  margin:0.5rem 0 0;
` 

const ContImg = styled.div`
  display:flex;
  flex-wrap:wrap;
  overflow: hidden;
  justify-content:center;  
`
const Img = styled.img`
  width:100%;
  transition:transform 0.8s ease-in;
  &&:hover{
    transform:scale(1.1);
  }
`

const Datos = styled.div`
  padding:0 0 1rem 1rem ;
`

const ContBoton = styled.div`
  width:50%;
  display:flex;
  justify-content:space-between;
`

const Proyectos = () => {
  return <AnimatedPage>
    <Principal>
      <Titulo>Proyectos</Titulo>
      <Seccion>
        <Articulo >
            <Contain>
            <ContImg>
              <Img src="./img/e-commerce.png" alt="mysql"/>              
            </ContImg>
            <Datos>
              <Hcuatro>AluraGeek E-commerce</Hcuatro>
              <p style={{ marginBottom: "0.5rem", marginTop: 0 }}>Challenge Alura</p>
              <ContBoton>
                <Link to="https://ojuarez1.github.io/AluraGeek_e-commerce/" target="_blank" ><Boton valor="E-commerce" /></Link>
                <Link to="https://github.com/ojuarez1/AluraGeek_e-commerce" target="_blank" ><Boton valor="Repositorio" /></Link>
              </ContBoton>              
            </Datos>
          </Contain>
        </Articulo>
    
        <Articulo>
          <Contain>
            <ContImg> 
              <Img src="./img/ojflix.png" alt="html5" />
            </ContImg>
            <Datos>
              <Hcuatro>AluraFlix ojflix</Hcuatro>
              <p style={{ marginBottom: "0.5rem", marginTop: 0 }}>Challenge Alura</p>
              <ContBoton>
                <Link to="https://alura-flix-ojflix.vercel.app/" target="_blank" ><Boton valor="AluraFlix" /></Link>
                <Link to="https://github.com/ojuarez1/AluraFlix-ojflix" target="_blank" ><Boton valor="Repositorio" /></Link>
              </ContBoton>
            </Datos>
          </Contain>
        </Articulo>
      </Seccion>
    </Principal>
  </AnimatedPage>
}

export default Proyectos