import React from 'react'
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Current_load from './components/current_load'
import Customer_queue from './components/customer_queue'
import Forgot_password from './components/forgot_password'
import Home from './components/home'
import Inbox from './components/inbox'
import Login_landing_page from './components/login_landing'
import Login from './components/login'
import Sign_up from './components/sign_up'
import Overview_payments from './components/overview_payments'
import Transactions from './components/transactions'


const App = () => {


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData);
  };
  return (
    <Routes>
      <Route path='login_landing_page' element={<Login_landing_page/>} />
      <Route path='current_load' element={<Current_load />} />
      <Route path='customer_queue' element={<Customer_queue/>} />
      <Route path='forgot_password' element={<Forgot_password/>} />
      <Route path='home' element={<Home/>} />
      <Route path='inbox' element={<Inbox />} />
      <Route path='login' element={<Login/>} />
      <Route path='overview_payments' element={<Overview_payments/>} />
      <Route path='transaction' element={<Transactions/>} />
      <Route path='/' element={<Sign_up handleSubmit = {handleSubmit} handleChange = {handleChange} formData = {formData}/>} />
    </Routes>
  )
}

export default App
