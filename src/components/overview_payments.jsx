import React from 'react'
import { ResponsiveWrapper } from '../hoc';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Link } from 'react-router-dom';
import { useRef, useEffect } from "react";


const NavBar = () => {
  return(

    <div style = {{background: '#2A4454'}} className='py-6 text-center flex items-center justify-center mb-16 cursor-pointer relative'>
       <Link to= '/home' className='absolute left-8'> 
            <div  class=" w-[40px] h-[40px] rounded-full ring-2 ring-white mr-4 flex items-center justify-center cursor-pointer">
              <span className='text-white font-bold text-3xl'>&#8592;</span>
            </div>
        </Link>
        <h1 className="text-white sm:text-3xl  md:text-4xl lg:text-4xl xl:text-4xl ">
          OVERVIEW PAYMENTS
        </h1>
      </div>

  )
}

const ChartBar = () => {
  const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Energy Analytics",
        backgroundColor: "#ffbd59",
        data: [2,8,14,34,18,16,12],
       
      }
    ]
  }
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'bar',
        data: data,
        options: {
        }
      });
    }
  }, []);
  return(
    <div className='flex flex-row items-center justify-center  w-[100%] h-96 border border-sky-700 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] mb-6 overflow-hidden'>

          <div className='flex-2 bg-sky-700 h-[100%] w-[100%] p-6 text-white'>
            <p className='sm:text-3xl  md:text-4xl lg:text-4xl xl:text-5xl'>Energy <br /> Consmption</p>
          </div>

          <div className='w-[100%] flex-1 self-end pb-6'>
            <Bar
              className='h-96 lg:w-[800px] md:w-[400px] w-[300px]'
              data={data}
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

  )
}

const DailyRecord = ({day, kw}) => {
  return (

    <div className='flex justify-between mb-4'>
      <p className='sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>{day}</p>
      <span className='font-semibold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>{kw}</span>
    </div>
  )
}

const Footer = () => {
  return (
    <div  style = {{background: '#2A4454'}} className='p-6 lg:px-14 md:px-16 text-center flex items-center justify-between cursor-pointer'>
       <Link to='/home'>
        <div class=" w-[50px] h-[50px] rounded-full mr-4 flex items-center justify-center bg-white p-2">
            <span className='text-white font-bold text-3xl'>&#127968;</span>
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




function overview_payments() {

 
  return (
    <div>
      
      <NavBar />

      <div  className='sm:px-4 md:px-6 lg:px-8'>
        
        <ChartBar/>

        <div className='mb-14 px-2'>

          <DailyRecord day = "Sunday" kw = "30KW" />
          <DailyRecord day = "Monday" kw = "40KW" />
          <DailyRecord day = "Tuesday" kw = "20KW" />
          <DailyRecord day = "Wednesday" kw = "10KW" />
          <DailyRecord day = "Thurday" kw = "10KW" />
          <DailyRecord day = "Friday" kw = "10KW" />
          <DailyRecord day = "Saturday" kw = "10KW" />
          
          <div className='flex justify-between mb-4 border-t border-black'>
            <p className='font-bold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>Total</p>
            <span className='font-bold sm:text-xl  md:text-2xl lg:text-3xl xl:text-3xl'>130KW</span>
          </div>

        </div>       
      </div>

      <Footer />
     
    </div>
  )
}

export default ResponsiveWrapper(overview_payments);
