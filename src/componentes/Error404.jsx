import styled from "styled-components"


const Div = styled.div`
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#000000;
`

const Error404 = () => {
    return <Div>
        <img src="./img/imageGen.jpg" alt="Erro404" />
    </Div>
}

export default Error404 