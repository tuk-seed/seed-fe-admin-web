import React, {useState} from 'react';
import {  FaEyeSlash, FaLock, FaMailBulk } from 'react-icons/fa';
import { ResponsiveWrapper } from '../hoc';
import { Link } from 'react-router-dom';

import useLogin from './useLogin'; // Import the custom hook


const Login = () => {
  const logo = process.env.PUBLIC_URL + '/assets/logo.png';
  const [responseMessage, setResponseMessage] = useState('')
  const [isError, setIsError] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const { formData, handleChange} = useLogin(); // Use the custom hook to get the required props
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
    
        const data = await response.json();
    
        if (response.ok) {
          setResponseMessage(data.message);
          setIsError(false);
        } else {
          setResponseMessage(data.message);
          setIsError(true);
        }
      } catch (error) {
        console.error('Error:', error);
        setResponseMessage('An error occurred');
        setIsError(true);
      };
    };

  return (
    <div style={{ background: '#2A4454' }} className="h-screen">
      <div className="form-container">
        <div className='pt-16 pb-6 text-center cursor-pointer'>
          
          <a href="/login_landing">
            <img src={logo} alt="" className='absolute p-4 top-0' />
          </a>
          <h2 className='text-6xl text-white mt-10'>Login</h2>
        </div>

        <div className='w-[100%] h-[100%] bg-white p-6 rounded-t-3xl'>
          <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
            <div className='grid grid-cols-1 gap-y-4'>
              <div className="sign_up relative lg:w-[50%] lg:relative lg:left-[25%]">
                <span className='absolute top-5 left-4 text-3xl '><FaMailBulk /></span>
                <input
                  style={{ background: '#D9D9D9' }}
                  className='pl-16 placeholder-shown:font-semibold placeholder:text-black mt-1 p-4 block w-[100%] border rounded-3xl shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500'
                  type="text"
                  name="email"
                  id="email"
                  placeholder="tukexample@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sign_up relative lg:w-[50%] lg:relative lg:left-[25%]">
                <span className='absolute top-5 left-4 text-3xl '><FaLock /></span>
                <input
                  style={{ background: '#D9D9D9' }}
                  className='pl-16 placeholder-shown:font-semibold placeholder:text-black mt-1 p-4 block w-full border rounded-3xl shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500'
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="example123@"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span className='absolute top-5 right-4 text-3xl cursor-pointer' onClick={toggleShowPassword}>
                  <FaEyeSlash />
                </span>
              </div>
              
             <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p className='text-xl'>
                <Link to="/forgot_password" className='text-blue-600' >
                 Forgot Password
                </Link>
                </p>
              </div>
              <div className="mt-12"></div>
              <div className="sign_up">
                <button type="submit" style={{ background: '#2A4454' }} className='w-full p-4 text-white rounded-3xl hover:bg-indigo-600 transition-all duration-300 font-bold text-2xl lg:w-[50%] lg:relative lg:left-[25%]'>Login</button>
              </div>

             <div className='mt-3 text-center'>
              <p className='text-xl'>
                Are you a new User?{' '}
                <Link to="/sign_up" className='text-blue-600'>
                Sign Up
                </Link>
              </p>
            </div>
            </div>
          </form>
          {responseMessage && <p className={isError ? 'error' : 'success'}>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveWrapper(Login);
