import { useState } from 'react';

const useLogin = () => {
const [formData, setFormData] = useState({
    email: '',
    password: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here, e.g., send login data to the server
    console.log(formData);
};

return { formData, handleChange, handleSubmit };
};

export default useLogin;
