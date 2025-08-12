import { useState } from "react"

const useForm = (initialForm, validationForm, onSubmitCallback) =>{
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  //Change event
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    const updatedForm = { ...form, [name]: inputValue };
    setForm(updatedForm);
    setErrors(validationForm(updatedForm));
  };

  //Blur event
  const handleBlur = () =>{
    setErrors(validationForm(form))
  }

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
  };

  //Submit event
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if (loading) return
    const validationErrors = validationForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        await onSubmitCallback(form);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }

  return {form, errors, loading, response, handleChange, handleBlur, handleSubmit}
}

export default useForm