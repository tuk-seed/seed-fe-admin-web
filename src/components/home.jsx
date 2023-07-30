import React from 'react'
import { ResponsiveWrapper } from '../hoc';

// imports
import { Link } from 'react-router-dom';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useRef, useEffect } from "react";

const HorizontalCard = () => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 flex-grow">
        <div className="flex justify-between mb-3">
        <h3 className="text-xl font-semibold mb-2">CURRENT LOAD</h3>
        <Link to="/" className='text-blue-500'>SEE ALL</Link>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-light">SAMSUNG A10</p>
            <p className="font-light">AGM CAR BATTERY</p>
            <p className="font-light">IPHONE 7</p>
          </div>
          <div className='text-greenText font-bold'>
            <p>28 %</p>
            <p>35 %</p>
            <p>65 %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// component for customer queue
const CustomerQueue = () => {
  return (
    <div className="flex bg-white  shadow-custom-shadow rounded-lg overflow-hidden">    
      <div className="p-2 flex-grow">
        <div className="flex justify-between mb-3">
        <h3 className="text-xl font-semibold mb-2">CUSTOMER QUEUE</h3>
        <Link to="/" className='text-blue-500'>SEE ALL</Link>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-light">TECNO A6</p>
            <p className="font-light">HP ELITEBOOK</p>
            <p className="font-light">LENOVO</p>
          </div>
          <div className=''>
            <p>01 Dec,01:20 PM</p>
            <p>01 Dec,02:20 PM</p>
            <p>01 Dec,02:25 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const SystemStatus = () => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
     
      <div className="p-2 flex-grow">
        <div className="flex justify-between mb-3">
        <h3 className="text-xl font-semibold mb-2 whitespace-nowrap">SYSTEM STATUS</h3>      
        </div>
        <div className="flex justify-center mb-4 ">

          <div className="flex flex-col items-center mx-8">        
                <img src="./assets/Ellipse 18.png" className="App-logo" alt="power on" />
                <p className="font-light">ON</p>
          </div>

          <div className="flex flex-col items-center mx-3">
              <img src="./assets/Ellipse 14.png" className="App-logo " alt="shut down" />
              <p className="font-light whitespace-nowrap">Shut down</p>
          </div>

          <div className="flex flex-col items-center mx-8" >            
              <img src="./assets/Ellipse 15.png" className="App-logo" alt="restart" />
              <p className="font-light">Restart</p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};
const EnergyAnalytics = () => {
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
          // Add any chart options here if needed
        }
      });
    }
  }, []);
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
     
      <div className="p-2 flex-grow flex">
          <div className="flex justify-between mb-3 bg-">
          <h3 className="text-xl font-semibold mb-2 bg-secondaryColor">Energy <br/> Analytics</h3>      
        </div>
        <div>
          <canvas ref={chartRef} height={200}/>
          {/* <Bar data = {data} className='h-58'/>                    */}
        </div>
      </div>
    </div>
  );
};


function home() {
  
  return (
    <div className='bg-mainColor font-roboto '>
      <div className="relative">     
        <div className='flex bg-header text-white items-center justify-center p-6 '>
            <div className="logo relative">
              <img src="./assets/Ellipse 3.png" alt="" />
              <img src="./assets/SEED.png" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' alt="" />
            </div>
            <h1 className="text-2xl text-white font-semibold mx-12 whitespace-nowrap">
                ADMIN PANEL
            </h1>
        </div>    
      </div>
      <div className="card pt-1 px-4 bg-white rounded-xl">        
        <HorizontalCard />      
      </div> 
     
      <div className="card mt-4 pt-1 px-4 bg-white rounded-xl ">        
        <SystemStatus />      
      </div> 
     
      <div className="card mt-4 pt-1 px-4 bg-white rounded-xl">
      < CustomerQueue />
      </div> 
      <div className="card ">
        <EnergyAnalytics/>
      </div> 
    </div>
    
  )
}

export default ResponsiveWrapper(home);
