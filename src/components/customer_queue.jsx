import React from 'react'
import { ResponsiveWrapper } from '../hoc';
import { Link } from 'react-router-dom';

const CustomerDetails = ({name, device, date, id}) => {
  return (
    <div className='bg-white p-2 flex justify-between border-b border-black mb-2'>
      <div className='text-left font-semibold'>
        <p>CUSTOMER NAME</p>
        <p>CUSTOMER ID NO.</p>
        <p>DEVICE</p>
        <p>TIME OF REQUEST</p>
      </div>
      <div className=' text-right font-light'>
        <p>{name} </p>
        <p>{id}</p>
        <p>{device}</p>
        <p>{date}</p>
      </div>

    </div>
  )
}

function customer_queue() {
  return (
   <div className='bg-white'>
     <div style = {{background: '#2A4454'}} className='relative py-6 text-center flex items-center justify-center mb-1 cursor-pointer'>
       <Link to= '/home' className='ml-12 absolute left-2'> 
            <div  class=" w-[40px] h-[40px] rounded-full ring-2 ring-white flex items-center justify-center cursor-pointer">
              <span className='text-white font-bold text-3xl'>&#8592;</span>
            </div>
        </Link>
        <h1 className="text-white text-3xl text-center">
          CUSTOMER QUEUE
        </h1>
      </div>

      <div className='py-2 px-6'>
        <CustomerDetails name = "BRIAN MUNGAI" id="1231445" date="12, Dec 2023 01:20 PM" device="TECNO A32"/>
        <CustomerDetails name = "JAMES MUNGAI" id="5551445" date="12, Aug 2022 03:00 PM" device="HUAWEI"/>
        <CustomerDetails name = "JANE NJOKI" id="23231445" date="12, Dec 2023 07:50 AM" device="INFINIX HOT"/>
        <CustomerDetails name = "MARY MTHEU" id="7772445" date="12, JAN 2024 01:30 PM" device="TECNO A32"/>
        <CustomerDetails name = "JAMES ONYANGO" id="1231445" date="12, Dec 2023 01:20 PM" device="IPHONE 13"/>
        <CustomerDetails name = "BRIAN MUNGAI" id="1231445" date="12, Dec 2023 01:20 PM" device="TECNO A32"/>
        <CustomerDetails name = "JAMES MUNGAI" id="5551445" date="12, Aug 2022 03:00 PM" device="HUAWEI"/>
      </div>

      <div  style = {{background: '#2A4454'}} className='px-6 py-4 lg:px-14 md:px-16 text-center flex items-center justify-between cursor-pointer rounded-t-xl '>
       <Link to='/home'>
        <div class=" w-[50px] h-[50px] rounded-full mr-4 flex items-center justify-center bg-white p-2">
            <span className='text-white font-bold text-3xl'>&#127968;</span>
          </div>
       </Link>
       <Link to='/inbox'>
        <div class=" w-[50px] h-[50px] rounded-full bg-white mr-4 flex items-center justify-center p-2">
            <img src="./assets/arrows.png" alt="" />
          </div>
       </Link>
       <Link to='/inbox'>
        <div class=" w-[50px] h-[50px] rounded-full bg-white mr-4 flex items-center justify-center p-2">
            <img src="./assets/messages.png" alt="" />
          </div>
       </Link>
      </div>

   </div>
  )
}

export default ResponsiveWrapper(customer_queue);
