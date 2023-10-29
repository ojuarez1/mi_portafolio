import styled from "styled-components";
import AnimatedPage from "./AnimatedPage";
import Boton from "./Boton";

const Principal = styled.div`
  height:calc(80vh - 3.5rem);
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

const Hdos = styled.h4`
  margin:0.25rem 0;
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
            <div>
                <Hdos>Formacion en Desarrollo Web</Hdos>
                <p style={{ margin: 0 }}>2023 - Alura</p>
                <Boton/>          
            </div>
          </Contain>
        </Articulo>
    
        <Articulo>
          <Contain>
            <ContImg> 
              <Img src="./img/ojflix.png" alt="html5" />
            </ContImg>
            <div>
                <Hdos>Formacion en Desarrollo Web</Hdos>
                <p style={{ margin: 0 }}>2023 - Alura</p>
                <Boton/>          
            </div>
          </Contain>
        </Articulo>
      </Seccion>
    </Principal>
  </AnimatedPage>
}

export default Proyectos