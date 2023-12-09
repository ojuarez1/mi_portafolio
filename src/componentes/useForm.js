import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    console.log(setLoading, setResponse)
    const handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };
    
    const handleBlur = (e) => {
        handleChange(e);
        setError(validateForm(form));
    }
    
    const handleSubmit = () => {}
    
    return { form, error, loading, response, handleChange, handleBlur, handleSubmit}
}