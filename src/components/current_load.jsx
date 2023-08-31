import React from 'react';
import { ResponsiveWrapper } from '../hoc';
import { Link } from 'react-router-dom';

const DeviceDetails = ({ name, owner, chargePercentage, remainingChargeTime }) => {
  return (
    <div className='bg-white p-2 flex justify-between border-b border-black mb-2'>
      <div className='text-left font-semibold'>
        <p>NAME</p>
        <p>OWNER</p>
        <p>CHARGE PERCENTAGE</p>
        <p>Remaining charge time</p>
      </div>
      <div className='text-right font-light'>
        <p>{name}</p>
        <p>{owner}</p>
        <p>{chargePercentage}</p>
        <p>{remainingChargeTime}</p>
      </div>
    </div>
  );
};

function current_load() {
  return (
    <div className='bg-white'>
      <div style={{ background: '#2A4454' }} className='relative py-6 text-center flex items-center justify-center mb-1 cursor-pointer'>
        <Link to='/home' className='ml-12 absolute left-2'>
          <div className="w-[40px] h-[40px] rounded-full ring-2 ring-white flex items-center justify-center cursor-pointer">
            <span className='text-white font-bold text-3xl'>&#8592;</span>
          </div>
        </Link>
        <h1 className="text-white text-3xl text-center">CURRENT LOAD</h1>
      </div>

      <div className='py-2 px-6'>
        <DeviceDetails name="SAMSUNG A10" owner="BRIAN MUIGAI" chargePercentage="28%" remainingChargeTime="02:24:06 Hrs" />
      
      </div>

      <div style={{ background: '#2A4454' }} className='px-6 py-4 lg:px-14 md:px-16 text-center flex items-center justify-between cursor-pointer rounded-t-xl'>
        <Link to='/home'>
          <div className="w-[50px] h-[50px] rounded-full mr-4 flex items-center justify-center bg-white p-2">
            <span className='text-white font-bold text-3xl'>&#127968;</span>
          </div>
        </Link>
    
      </div>
    </div>
  );
}

export default ResponsiveWrapper(current_load);
