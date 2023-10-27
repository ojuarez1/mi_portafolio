import styled from "styled-components";
import AnimatedPage from "./AnimatedPage";

const Principal = styled.div`
  height:calc(80vh - 3.5rem);
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#000;
`

const Contain = styled.div`
  overflow:hidden;
  margin-right:2rem;
  width:80%;
`

const Titulo = styled.h1`
    margin-top:0;
`

const ContImg = styled.div`
  width:50vw;
  display:flex;
  justify-content:center;
`

const Div = styled.div`
  width:90%;
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
    margin:0 0 0.25rem 0;
`
const SobreMi = () => {
  return <AnimatedPage>
    <Principal>
      <ContImg >
        <Contain>
          <Titulo>Sobre Mi</Titulo>
          <Nombre>Mi nombre es Oscar Arnulfo Juarez Fernandez, tengo 43 años de edad, vivo en El Salvador.</Nombre>
          <Nombre>Y me apasiona la programacion, mi sueño es dedicarme a construir paginas web de mucha calidad</Nombre>
          <Nombre>Actualmente trabajo como Auxiliar Administrativo y busco oportunidad para adquirir experiencia como Programador Web en el area de Front-end</Nombre>
          <Nombre>Busco siempre trabajar en equipo apoyando a todos y transmitiendo mis conocimientos a los demas, me considero alguien dispuesto a alcanzar metas, a superar retos y tengo siempre el deseo de querer aprender cada dia mas.</Nombre>
        </Contain>
      </ContImg>
      
      <ContImg>
        <Div>
          <Img src="./img/imagenFondo.webp" alt="Oscar"/>
        </Div>
      </ContImg>
    </Principal>
  </AnimatedPage>
}

export default SobreMi