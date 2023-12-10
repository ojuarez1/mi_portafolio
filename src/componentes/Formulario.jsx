import Boton from "./Boton"
import TextBox from "./TextBox"
import styled from "styled-components"
import { useForm } from "./useForm.js"

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

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments:""
}

const Textarea = styled.textarea`
    resize:none;
`
    
const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
        errors.name = "El Campo Nombre es requerido"
    }else if (!regexName.test(form.name.trim())) {
        errors.name="El campo Nombre solo acepta letras y espacios en blancos"  
    }else if (!form.email.trim()) {
        errors.email = "El Campo Email es requerido"
    }else if (!regexEmail.test(form.email.trim())) {
        errors.email="El campo Email es incorrecto"  
    }else if (!form.subject.trim()) {
        errors.subject = "El Campo Asunto es requerido"
    }else if (!form.comments.trim()) {
        errors.comments = "El Campo Comentario es requerido"
    }else if (!regexComments.test(form.name.trim())) {
        errors.comments="El campo Comentarios no debe exceder los 255 caracteres"  
    }

    return errors
 }

const styles = {
    color: "#dc3545",
    margin: 0,
    fontSize:"0.75rem"
 }

const Formulario = () => {
    const { form, error, handleChange, handleBlur } = useForm(initialForm, validationsForm)

    return <Principal>
        <form method="POST" action="https://formsubmit.co/oscarjuarez923@gmail.com" onSubmit={(e) => {
            e.preventDefault
        }}>
            <Titulo>Contacto</Titulo>
            <legend>¿Quiere contactarme? <br /> Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.</legend>
            <Campo>
                <TextBox
                    name="name"
                    type="text"
                    alto="1.5rem"
                    margeni="0.25rem"
                    margenl="0.25rem"
                    placeholder="Ingrese su nombre"
                    salirFoco={handleBlur}
                    cambio={handleChange}
                    valor={form.name}
                    required
                />
                {error.name && <p style={styles}>{ error.name}</p>}
                <TextBox
                    name="email"
                    type="email"
                    alto="1.5rem"
                    margeni="0.25rem"
                    placeholder="Ingrese su correo"
                    salirFoco={handleBlur}
                    cambio={handleChange}
                    valor={form.email}
                    required
                />
                {error.email && <p style={styles}>{ error.email}</p>}
                <TextBox
                    name="subject"
                    type="text"
                    alto="1.5rem"
                    margeni="0.25rem"
                    placeholder="Digite el Asunto"
                    salirFoco={handleBlur}
                    cambio={handleChange}
                    valor={form.subject}
                    required
                />
                {error.subject && <p style={styles}>{ error.subject}</p>}
                <Campo>
                    <label htmlFor="" >Mensaje</label>
                    <Textarea
                        name="comments"
                        rows={3}
                        cols={40}
                        placeholder="Digite su mensaje"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.comments}
                        required
                    />
                    {error.comments && <p style={styles}>{ error.comments}</p>}
                </Campo>
            </Campo>
            <Boton valor="Enviar" />
        </form>
    </Principal>
}

export default Formulario