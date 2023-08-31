import React, { useState } from 'react';

const useLogin = () => {
const [formData, setFormData] = useState({
    email: '',
    password: '',
});
const [responseMessage, setResponseMessage] = useState('')
const [isError, setIsError] = useState('')

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
    }));
};



return { formData, handleChange};
};

export default useLogin;
