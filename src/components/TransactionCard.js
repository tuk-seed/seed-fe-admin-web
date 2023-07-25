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
    <div className="flex flex-col md:flex-row flex-wrap bg-white rounded-lg border-b border-gray-300">
      {/* Left section */}
      <div className="md:w-1/2">
        <h2 className="text-s font-semibold mb-2">{customerName}</h2>
        <p className="text-gray-600">{customerId}</p>
      </div>

      {/* Right section */}
      <div className="md:w-1/2 mt-5 md:mt-0 md:pl-6 md:order-last md:space-y-1">
        <div>
          <p className="text-s font-semibold mb-2">-KSH{amount}</p>
        </div>
        <div>
          <p className="text-gray-600">{formatDateAndTime()}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
