import React from 'react';
import { FaLock, FaMailBulk } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { ResponsiveWrapper } from '../hoc';
import useLogin from './useLogin'; // Import the custom hook


const Login = () => {
  const { formData, handleChange, handleSubmit } = useLogin(); // Use the custom hook to get the required props
  return (
    <div style={{ background: '#2A4454' }} className="h-screen">
      <div className="form-container">
        <div className='pt-16 pb-6 text-center cursor-pointer'>
          <img src={logo} alt="" className='absolute p-4 top-0' />
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="example123@"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p className='text-xl'>
                <span><a className='text-blue-600' href="#forgot_password">Forgot Password</a></span>
                </p>
              </div>

              <div style={{ background: '#D9D9D9' }} className="mt-16 mb-4 p-4 flex items-center border-solid  rounded-3xl flex justify-center lg:w-[50%] lg:relative lg:left-[25%]">
                <input
                  className='h-4 w-4 text-indigo-600 focus:ring focus:ring-indigo-200 border-gray-300 rounded'
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label className="terms-label ml-8 block font-semibold text-lg text-gray-700">
                  Remember Me
                </label>
              </div>

              <div className="sign_up">
                <button type="submit" style={{ background: '#2A4454' }} className='w-full p-4 text-white rounded-3xl hover:bg-indigo-600 transition-all duration-300 font-bold text-2xl lg:w-[50%] lg:relative lg:left-[25%]'>Login</button>
              </div>

              <div className='mt-3 text-center'>
              <p className='text-xl'>Are you a new User? <span><a className='text-blue-600' href="#sign_up">Sign Up</a></span></p>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveWrapper(Login);
