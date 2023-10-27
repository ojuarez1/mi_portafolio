import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

const Contain = styled.div`
    display:flex;
    justify-content:space-around;
    height:20vh;
    min-width:968px;
    background-color:#000;
`

const Logo = styled(NavLink)`
    margin:0;
    color:#ffffff;
    display:flex;
    align-items:center;
    font-weight:100;
    text-decoration:none;
`

const Nav = styled.nav`
    display:flex;
    align-items:center;
`
const Navega = styled(Link)`
    color:#ffffff;
    text-decoration:none;
    display:inline-block;
    margin-right:2.5rem;
    &&:hover{
        //color:#F1EEC5;
    }
`
const Header = () => {
    return <Contain>
        {/* <Img src="./img/ojf.png" alt="Logo" /> */}

        <Logo to="/"><h2>OJF</h2></Logo>

        <Nav>
            <Navega to="/sobreMi">Sobre mi</Navega>
            <Navega to="/habilidades">Habilidades</Navega>
            <Navega to="/hobbis">Hobbis</Navega>
            <Navega to="/formacion">Formacion</Navega>
            <Navega to="/proyectos">Proyectos</Navega>
            <Navega to="/contacto">Contacto</Navega>
        </Nav>
    </Contain>
}

export default Header