import styled, {keyframes} from "styled-components";
import AnimatedPage from "./AnimatedPage";

const Principal = styled.div`
  height:calc(80vh - 1.90rem);
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color:#000;
  min-width:968px;
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
  @media(max-width:468px){
    width:484px;
  }
`

const Contain = styled.div`
  width:80%;
`

const Hdos = styled.h2`
  text-align:center;
` 

const ContImg = styled.div`
  display:flex;
  flex-wrap:wrap;
  overflow: hidden;
`
const Img = styled.img`
  width:20%;
  margin:1rem 0 0 1rem;
  transition:transform 0.8s ease-in;
  &&:hover{
    transform:scale(1.1);
  }
`

const mover = keyframes`
  from{
    transform:translateY(400px)
  }
`
const InfiniteMove = styled(Img)`
  animation:${mover} 7s 1;
`

const Habilidades = () => {
  return <AnimatedPage>
    <Principal>
      <Titulo>Habilidades</Titulo>
      <Seccion>
        <Articulo >
          <Contain>
            <Hdos>Lenguajes</Hdos>
            <ContImg>
              <InfiniteMove src="./img/html5-original.svg" alt="html5" />
              <InfiniteMove src="./img/css3-original.svg" alt="css3" />
              <InfiniteMove src="./img/javascript-original.svg" alt="javascript" />
              <InfiniteMove src="./img/markdown-original.svg" alt="markdown" style={{ backgroundColor:"#fff"}} />
              <InfiniteMove src="./img/react-original.svg" alt="react" />
              <InfiniteMove src="./img/mysql-original.svg" alt="mysql" />
              <InfiniteMove src="./img/python-original.svg" alt="python"/>
            </ContImg>               
          </Contain>
        </Articulo>    
        <Articulo>
          <Contain>
            <Hdos>Herramientas</Hdos>
            <ContImg>
              <InfiniteMove src="./img/figma-original.svg" alt="figma" />
              <InfiniteMove src="./img/git-original.svg" alt="git" />
              <InfiniteMove src="./img/bootstrap-original.svg" alt="bootstrap" />
              <InfiniteMove src="./img/github-original.svg" alt="github" />  
            </ContImg>
          </Contain>
        </Articulo>
      </Seccion>
    </Principal>
  </AnimatedPage>
}

export default Habilidades