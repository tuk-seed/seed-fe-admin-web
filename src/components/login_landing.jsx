
import React from 'react';
import { ResponsiveWrapper } from '../hoc';
import LogoImage from './img/logo.png';

function LoginLanding() {
  return (

    <div className="bg-teal-900  h-screen flex items-center justify-center">
      <div className="rounded-full h-20 w-20 border-blue-500"></div>
      <img
        src={LogoImage}
        alt="Logo"
        className="h-159 w-303 ml-4 sm:w-303px sm:h-159px sm:ml-0 sm:rounded-10"
      />
    </div>

  );
}

export default ResponsiveWrapper(LoginLanding);
