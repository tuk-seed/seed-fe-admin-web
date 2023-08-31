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

const CurrentLoad = () => {
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
        <DeviceDetails name="INFINIX HOT 9" owner="LEVY ONGULO" chargePercentage="57%" remainingChargeTime="01:01:35 Hrs" />
        <DeviceDetails name="IPHONE 6S" owner="JOEL ZADOCK" chargePercentage="5%" remainingChargeTime="02:30:50 Hrs" />
        <DeviceDetails name="TECNO SPARK8" owner="HENRY OUMA" chargePercentage="12%" remainingChargeTime="02:25:16 Hrs" />
        <DeviceDetails name="HUAWEI H9" owner="COLETA JUMA" chargePercentage="68%" remainingChargeTime="00:45:39 Hrs" />
        <DeviceDetails name="ONE PLUS 9" owner="RANDY MORISSON" chargePercentage="90%" remainingChargeTime="00:10:26 Hrs" />
        <DeviceDetails name="GOOGLE PIXEL" owner="MARION MBOSHA" chargePercentage="45%" remainingChargeTime="00:55:43 Hrs" />
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
};

export default ResponsiveWrapper(CurrentLoad); 
