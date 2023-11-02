import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error404 from './componentes/Error404';
import Header from './componentes/Header';
import styled from "styled-components";
import Home from './componentes/Home';
import Copyright from './componentes/Copyright';
import SobreMi from './componentes/SobreMi';
import Habilidades from './componentes/Habilidades';
import Hobbis from './componentes/Hobbis';
import Formacion from './componentes/Formacion';
import Proyectos from './componentes/Proyectos';
import Formulario from './componentes/Formulario';

const Contenido = styled.div`
  height:100vh;
`

function App() {
  return (
    <Contenido>
      <Router className="App" >
          <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobreMi' element={<SobreMi/>} />
          <Route path='/habilidades' element={<Habilidades/>} />
          <Route path='/hobbis' element={<Hobbis/>} />
          <Route path='/formacion' element={<Formacion/>} />
          <Route path='/proyectos' element={<Proyectos/>} />
          <Route path='/contacto' element={<Formulario/>} /> 
          <Route path='*' element={<Error404/>} />
        </Routes>
          <Copyright/>
      </Router>
    </Contenido>
  );
}

export default App;
