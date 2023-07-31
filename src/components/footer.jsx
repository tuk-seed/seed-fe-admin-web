import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div  style = {{background: '#2A4454'}} className='p-6 lg:px-14 md:px-16 text-center flex items-center justify-between cursor-pointer'>

    <Link to='/home'>
        <div class=" w-[50px] h-[50px] rounded-full mr-4 flex items-center justify-center bg-white p-2">
        <div className="logo relative">
              <img src="./assets/Ellipse 21.png" alt="" />
              <img src="./assets/image 16.png" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' alt="" />
            </div>
       </div>
    </Link>

    <Link to='/transaction'>
        <div class=" w-[50px] h-[50px] rounded-full mr-4 flex items-center justify-center bg-white p-2">
        <div className="logo relative">
              <img src="./assets/Ellipse 21.png" alt="" />
              <img src="./assets/image 17.png" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' alt="" />
            </div>
       </div>
    </Link>

    <Link to='/inbox'>
     <div class=" w-[50px] h-[50px] rounded-full bg-white mr-4 flex items-center justify-center p-2">
         <span className='text-white font-bold text-3xl'>&#128172;</span>
       </div>
    </Link>
   </div>
  )
}

export default Footer