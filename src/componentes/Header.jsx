import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

const Contain = styled.div`
    display:flex;
    justify-content:space-around;
    height:20vh;
    min-width:468px;
    background-color:#000;
    @media (max-width:468px){
        max-width:468px;
        flex-wrap:wrap;
    }
`

const Logo = styled(NavLink)`
    margin:0;
    color:#ffffff;
    display:flex;
    align-items:center;
    font-weight:100;
    text-decoration:none;
    @media (max-width:468px){
        max-width:468px;
        flex-wrap:wrap;
    }
`

const Nav = styled.nav`
    display:flex;
    align-items:center;
    @media (max-width:468px){
        max-width:468px;
        flex-wrap:wrap;
    }
`

const Navega = styled(Link)`
    color:#ffffff;
    text-decoration:none;
    display:inline-block;
    margin-right:2.5rem;
`

const LinkImg = styled(Link)`
    display:inline-block;
    margin-right:1rem;
    border-radius:50%;
`

const Header = () => {
    return <Contain>
        <Logo to="/"><img src="./img/ojf.png" alt="logo" /></Logo>

        <Nav>
            <Navega to="/sobreMi">Sobre mi</Navega>
            <Navega to="/habilidades">Habilidades</Navega>
            <Navega to="/hobbis">Hobbis</Navega>
            <Navega to="/formacion">Formacion</Navega>
            <Navega to="/proyectos">Proyectos</Navega>
            <Navega to="/contacto">Contacto</Navega>
            <div >
                <LinkImg to="https://github.com/ojuarez1" target="_blank"><img src="./img/github-original.svg" alt="Github" style={{ width: "1.2rem" }}/></LinkImg>
                <LinkImg><img src="./img/bxl-linkedin.svg" alt="Linkedin" style={{ width: "1.2rem" }} /></LinkImg>
                <LinkImg to="mailto:oscarjuarez923@gmail.com"><img src="./img/bxl-gmail.svg" alt="Email" style={{ width: "1.2rem" }}/></LinkImg>
            </div>
        </Nav>
    </Contain>
}

export default Header