import styled from "styled-components";

const ContFlex = styled.div`
  display:flex;
  justify-content:space-evenly;
  background-color:#000;
`

const Creado = styled.p`
  color:#fff;
`
const Copyright = () => {
    return <ContFlex>
        <Creado>&copy; 2023 Creado por Oscar Juarez</Creado>
        <Creado>Politica de privacidad</Creado>
    </ContFlex>
}

export default Copyright