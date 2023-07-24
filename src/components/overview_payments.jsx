import React from 'react'
import { ResponsiveWrapper } from '../hoc';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function overview_payments({chartData, overViewOnClick, msgOnClick}) {
 
  return (
    <div>
      <div style = {{background: '#2A4454'}} className='py-6 text-center flex items-center justify-center mb-16 cursor-pointer'>
        <div onClick={overViewOnClick} class=" w-[40px] h-[40px] rounded-full ring-2 ring-white mr-4 flex items-center justify-center cursor-pointer">
          <span className='text-white font-bold text-3xl'>&#8592;</span>
        </div>
        <h1 className="text-white sm:text-3xl  md:text-4xl lg:text-5xl xl:text-5xl ">
          OVERVIEW PAYMENTS
        </h1>
      </div>

      <div  className='sm:px-4 md:px-6 lg:px-8'>
        <div className='flex flex-row items-center justify-center  w-[100%] h-96 border border-sky-700 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] mb-6'>

          <div className='flex-2 bg-sky-700 h-[100%] w-[100%] p-6 text-white'>
            <p className='sm:text-3xl  md:text-4xl lg:text-5xl xl:text-5xl'>Energy <br /> Consmption</p>
          </div>

          <div className='w-[100%] flex-1 self-end pb-6'>
            <Bar
              className='h-96 lg:w-[800px] md:w-[400px] w-[300px]'
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    barPercentage: 1.0, // Adjust the width of the bars (0.6 means 60% of the available space)
                    categoryPercentage: 1.0,
                    beginAtZero: true,
                    ticks: {
                      stepSize: 2, // Increase the step size to control the scale interval
                      max: 1000 // Set the maximum value of the Y-axis scale
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        <div className='mb-14'>
          <div className='flex justify-between mb-4'>
            <p className='sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>Sunday</p>
            <span className='font-semibold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>30KW</span>
          </div>
          <div className='flex justify-between mb-4'>
            <p className='sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>Monday</p>
            <span className='font-semibold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>40KW</span>
          </div>
          <div className='flex justify-between mb-4'>
            <p className='sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>Tuesday</p>
            <span className='font-semibold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>20KW</span>
          </div>
          <div className='flex justify-between mb-4'>
            <p className='sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>Wednesday</p>
            <span className='font-semibold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>10KW</span>
          </div>
          <div className='flex justify-between mb-4'>
            <p className='sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>Thursday</p>
            <span className='font-semibold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>10KW</span>
          </div>
          <div className='flex justify-between mb-4'>
            <p className='sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>Friday</p>
            <span className='font-semibold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>10KW</span>
          </div>
          <div className='flex justify-between mb-4'>
            <p className='sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>Saturday</p>
            <span className='font-semibold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>10KW</span>
          </div>
          <div className='flex justify-between mb-4 border-t border-black'>
            <p className='font-bold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>Total</p>
            <span className='font-bold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>130KW</span>
          </div>
        </div>       
      </div>

      <div  style = {{background: '#2A4454'}} className='p-6 lg:px-14 md:px-16 text-center flex items-center justify-between cursor-pointer'>
        <div onClick={overViewOnClick} class=" w-[50px] h-[50px] rounded-full mr-4 flex items-center justify-center bg-white p-2">
          <span className='text-white font-bold text-3xl'>&#127968;</span>
        </div>
        <div onClick={msgOnClick} class=" w-[50px] h-[50px] rounded-full bg-white mr-4 flex items-center justify-center p-2">
          <span className='text-white font-bold text-3xl'>&#128172;</span>
        </div>
      </div>
     
    </div>
  )
}

export default ResponsiveWrapper(overview_payments);
