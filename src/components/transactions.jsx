import React from 'react';
import { ResponsiveWrapper } from '../hoc';
import TransactionCard from './TransactionCard'; // Import the TransactionCard component

function Transactions() {
  // Sample data for demonstration purposes
  const transactions = [
    {
      customerName: 'SEED',
      customerId: '3880273',
      amount: 100,
      date: '2023-12-01',
      time: '15:20',
    },
    {
      customerName: 'SEED',
      customerId: '3880273',
      amount: 100,
      date: '2023-12-01',
      time: '15:20',
    },
    {
      customerName: 'SEED',
      customerId: '3880273',
      amount: 100,
      date: '2023-12-01',
      time: '15:20',
    },
    {
      customerName: 'SEED',
      customerId: '3880273',
      amount: 100,
      date: '2023-12-01',
      time: '15:20',
    },
    {
      customerName: 'SEED',
      customerId: '3880273',
      amount: 100,
      date: '2023-12-01',
      time: '15:20',
    },
    {
      customerName: 'SEED',
      customerId: '3880273',
      amount: 100,
      date: '2023-12-01',
      time: '15:20',
    },
    {
      customerName: 'SEED',
      customerId: '3880273',
      amount: 100,
      date: '2023-12-01',
      time: '15:20',
    },
    {
      customerName: 'SEED',
      customerId: '3880273',
      amount: 100,
      date: '2023-12-01',
      time: '15:20',
    },
    {
      customerName: 'SEED',
      customerId: '3880273',
      amount: 100,
      date: '2023-12-01',
      time: '15:20',
    },
    // Add
    // Add more transaction objects as needed
  ];

  return (
    <div className='Body'>
      <div className='flex justify-center items-center bg-cyan-900 p-6 fixed top-0 w-full z-10'>
        <h1 className=''>back</h1>
        <h1 className="text-2xl font-small mx-8 text-white">TRANSACTIONS</h1>
      </div>

      <div className="container mx-auto mt-20 px-4 md:px-8">
        {transactions.map((transaction, index) => (
          <TransactionCard key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
}

export default ResponsiveWrapper(Transactions);
