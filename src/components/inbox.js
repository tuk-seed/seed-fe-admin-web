import React from 'react'
import { ResponsiveWrapper } from '../hoc';
import { FaHome, FaMoneyBill } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const messages = [
  {
    id: 1,
    name: 'BRIAN M.',
    content: 'Good evening. I would like to request for a slot to change my car battery. is one available at the moment?',
    date: '2023-07-23',
  },
  
  {
    id: 1,
    name: 'BRIAN M.',
    content: 'Good evening. I would like to request for a slot to change my car battery. is one available at the moment?',
    date: '2023-07-23',
  },

  {
    id: 1,
    name: 'BRIAN M.',
    content: 'Good evening. I would like to request for a slot to change my car battery. is one available at the moment?',
    date: '2023-07-23',
  },

  {
    id: 1,
    name: 'BRIAN M.',
    content: 'Good evening. I would like to request for a slot to change my car battery. is one available at the moment?',
    date: '2023-07-23',
  },

  {
    id: 1,
    name: 'BRIAN M.',
    content: 'Good evening. I would like to request for a slot to change my car battery. is one available at the moment?',
    date: '2023-07-23',
  },
];

const header ={
  backgroundColor: '#2A4454',
  padding: '10px',
  
};
const inboxStyles = {
  maxWidth: '2000px',
  minWidth: '200px',
  margin: '0 auto',
  padding: '16px',
  

};

const headerStyles = {
  marginBottom: '20px',
  color: 'white'
  
  
  
};

const listItemStyles = {
  borderBottom: '1px solid #ccc',
  marginBottom: '20px',
  padding: '20px',
};

const messageHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const nameStyles = {
  color: 'black',
};

const dateStyles = {
  color: '#888',
};

const contentStyles = {
  color: '#333',
};

const previousButtonStyles = {
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '20px',
};

const bottomButtonsStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '30px',
  backgroundColor: ' #2A4454',
  padding: '10px'
  
};

const homeButtonStyles = {
  color: 'black',
  backgroundColor: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '70px',
  cursor: 'pointer',
  fontSize: '25px',
};

const transactionButtonStyles = {
  color: 'black',
  backgroundColor: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '70px',
  cursor: 'pointer',
  fontSize: '25px',
};

function inbox() {
  return (
    <div style={inboxStyles}>
      <div style={header}>
      <Link to="/transactions"><button style={previousButtonStyles}><FaArrowLeft /></button></Link>
        <h2 className="text-center text-white font-bold text-2xl" >INBOX</h2>
      </div>
      <ul>
        {messages.map((message) => (
          <li key={message.id} style={listItemStyles}>
            <div style={messageHeaderStyles}>
              <span style={nameStyles}>{message.name}</span>
              <span style={dateStyles}>{message.date}</span>
            </div>
            <div style={contentStyles}>{message.content}</div>
          </li>
        ))}
      </ul>
      
      <div style={bottomButtonsStyles}>
      <Link to="/home"><button style={homeButtonStyles}><FaHome /></button></Link>
      <Link to="/transactions"><button style={transactionButtonStyles}><FaMoneyBill /></button></Link>
      </div>
    </div>
  )
}

export default ResponsiveWrapper(inbox);
