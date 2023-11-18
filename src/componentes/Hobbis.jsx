import styled from "styled-components";
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

const Articulo = styled.article`
  width:50%;
  display:flex;
  @media(max-width:468px){
    width:75%;
  }
`

const Contain = styled.div`
  width:25%;
  height:25vh;
  background-color:#213547;
  margin-right:1rem;
  display:flex;
  flex-direction:column;
  justify-content:end;
`

const Img = styled.img`
  width:20%;
  margin:1rem 1rem 0 0;
  transition:transform 0.8s ease-in;
  &&:hover{
    transform: rotate(360deg);
  }
  
`

const Text = styled.p`
  margin:0;
  font-size:12px;
  color:#fff;
`

const Hobbis = () => {
  return <AnimatedPage>
    <Principal>
      <Titulo>Hobbis</Titulo>
      <Articulo>
        <Contain>
          <Img src="./img/book-reader.svg" alt="html5" />
          <Text>Leer Libros</Text>
        </Contain>
        <Contain>
          <Img src="./img/tv.svg" alt="html5" />
          <Text>Ver deportes</Text>
        </Contain>
        <Contain>
          <Img src="./img/cart.svg" alt="html5" />
          <Text>Salir de Compras</Text>
        </Contain>
        <Contain>
          <Img src="./img/music.svg" alt="html5" />
          <Text>Oir Musica</Text>
        </Contain>           
      </Articulo>      
    </Principal>
  </AnimatedPage>
}

export default Hobbis