import styled, {keyframes} from "styled-components";
import AnimatedPage from "./AnimatedPage";


const Principal = styled.div`
  height: calc(80vh - 1.90rem);
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#000;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  min-width:968px;
`

const Contain = styled.div`
  overflow:hidden;
  margin-right:2rem;
`

const ContImg = styled.div`
  width:50vw;
  display:flex;
  justify-content:center;
  @media(max-width:468px){
    width:968px;
  }
`

const Div = styled.div`
  width:80%;
  overflow:hidden;
`

const Img = styled.img`
  width:100%;
  height:100%;
  transition:transform 0.8s ease-in;
  &&:hover{
    transform:scale(1.1);
  }
`

const Nombre = styled.p`
    color:#fff;
    font-size:4rem;
    margin:0 0 0.25rem 0;
`
const mover = keyframes`
  from{
    transform:translateY(400px)
  }
`
const InfiniteMove = styled(Nombre)`
  animation:${mover} 10s 1;
`

const Home = () => {
  return <AnimatedPage>
    <Principal>
      <ContImg >
        <Contain>
          <InfiniteMove>Hola Soy</InfiniteMove>
          <InfiniteMove>Oscar Juarez</InfiniteMove>
        </Contain>
      </ContImg>
      
      <ContImg>
        <Div>
          <Img src="./img/mi_foto.jpg" alt="Oscar"/>
        </Div>
      </ContImg>
    </Principal>
  </AnimatedPage>  
}

export default Home