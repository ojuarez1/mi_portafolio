import Boton from "./Boton"
import TextBox from "./TextBox"
import styled from "styled-components"

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
  margin:0 0 1rem 0;
  text-align:center;
`

const Campo = styled.fieldset`
    display:flex;
    flex-direction:column;
    border:none;
    padding:0;
    margin-bottom:0.5rem;
`

const Formulario=()=>{
    return <Principal>
        <form method="POST" action="https://formsubmit.co/oscarjuarez923@gmail.com" onSubmit={(e)=>e.preventDefault}>
            <Titulo>Contacto</Titulo>
            <legend>¿Quieres contactarme? <br /> Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.</legend>
            <Campo>
                <TextBox name="Nombre" alto="1.5rem" margeni="1rem" margenl="0.25rem" placeholder="Ingrese su nombre"/>
                <TextBox name="Correo" alto="1.5rem" margeni="1rem" placeholder="Ingrese su correo" />
                <TextBox name="Asunto" alto="1.5rem" margeni="1rem" placeholder="Digite el Asunto" />
                <Campo>
                    <label htmlFor="" >Mensaje</label>
                    <textarea name="mensaje" rows={5} cols={40} placeholder="Digite su mensaje" />
                </Campo>
            </Campo>
            <Boton valor="Enviar" />
        </form>
    </Principal>
}

export default Formulario