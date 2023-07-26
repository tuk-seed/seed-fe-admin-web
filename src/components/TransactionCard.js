import React from 'react';

const TransactionCard = ({ customerName, customerId, amount, date, time }) => {
  // Function to format the date and time
  const formatDateAndTime = () => {
    const formattedDate = new Date(date).toLocaleString('default', {
      day: '2-digit',
      month: 'short',
    });
    const formattedTime = new Date(`2023-01-01T${time}`).toLocaleString('default', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return `${formattedDate}, ${formattedTime}`;
  };

  return (
<div className='border flex flex-row'>
    
 <div className='flex flex-col px-[50px]'>
 <h2 className="text-s font-semibold mb-0">{customerName}</h2>
    <p className="text-gray-600 text-left">{customerId}</p>
 </div>
  
  <div className='flex flex-col px-[50px] py-0'>
  <p className="text-s font-semibold mb-0 text-right">-KSH{amount}</p>
    <p className="text-gray-600">{formatDateAndTime()}</p>
  </div>

</div>


  );
};

export default TransactionCard;
