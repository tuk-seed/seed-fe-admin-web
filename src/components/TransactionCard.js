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

  const getAbbreviatedName = (name) => {
    return name
     .split(' ')
     .map((word) => word.charAt(0).toUpperCase())
     .join(''); 
  }

  const customerHasPicture = true;
  const customerPictureUrl = '../assets/Group 1.png';


  return (
    <div className="rounded-lg p-0 flex items-center justify-between border-b">
    {/* Display Picture / Avatar */}
    <div className="h-12 w-17 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl">
      {/* Check if customer has a picture */}
      {customerHasPicture ? (
        <img src={customerPictureUrl} alt={customerName} className="rounded-full h-full w-full" />
      ) : (
        <span>{getAbbreviatedName(customerName)}</span>
      )}
      

    </div>

<div className='flex flex-row'>
 <div className='flex justify-end'>  
 <div className='flex flex-col pr-[60px] pl-4'>
 <h2 className="text-s font-semibold mb-0 p-2">{customerName}</h2>
    <p className="text-gray-600 text-left text-sm pb-2">{customerId}</p>
 </div>
  
  <div className='flex flex-col pl-[50px] py-0 pr-4'>
  <p className="text-s font-semibold mb-0 text-right p-2">-KSH{amount}</p>
    <p className="text-gray-600 text-sm pb-2">{formatDateAndTime()}</p>
  </div>
  </div> 
</div>
</div>
  );
};

export default TransactionCard;
