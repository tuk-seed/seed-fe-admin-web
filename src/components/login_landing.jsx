
import React, { useState, useEffect } from 'react';
import { ResponsiveWrapper } from '../hoc';
// import LogoImage from './img/logo.png';

// Spinner Component
function Spinner() {
  return (
    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
  );
}

function LoginLanding() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to demonstrate the loading effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: '#2A4454' }} className="h-screen flex items-center justify-center">
      {loading ? (
        <Spinner />
      ) : (
        <img
          src="./assets/Logoo.png"
          alt="Logo"
          className="h-159 w-303 ml-4 sm:w-303px sm:h-159px sm:ml-0 sm:rounded-10"
        />
      )}
    </div>
  );
}

export default ResponsiveWrapper(LoginLanding);
