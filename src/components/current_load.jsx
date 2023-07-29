import React from 'react';

const CurrentLoad = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.backArrowContainer}>
            <a href="#" style={styles.backArrow}>&#8249;</a>
          </div>
          <h2 style={styles.headerTitle}>Current Load</h2>
        </header>
        <div style={styles.payments}>
          {generateLoadElement("Samsung A10", "Brian Otieno", "28%", "02:24:06 hrs")}
          {generateLoadElement("iPhone X", "Felix Omollo", "50%", "01:45:15 hrs")}
          {generateLoadElement("OnePlus 9", "Frank Levy", "80%", "03:10:30 hrs")}
          {generateLoadElement("Google Pixel", "Felix Otieno", "70%", "02:00:00 hrs")}
          {generateLoadElement("Huawei P30", "Michael Felix", "90%", "04:30:45 hrs")}
          {generateLoadElement("Xiaomi Mi 11", "Felix Okoth", "60%", "03:15:30 hrs")}
        </div>
      </div>
    </div>
  );
};

const generateLoadElement = (device, owner, chargingPercentage, remainingChargingTime) => (
  <div style={styles.payment}>
    <div style={styles.paymentDetails}>
      <div style={styles.nameRow}>
        <span style={styles.label}>Device</span>
        <span style={styles.value}>{device}</span>
      </div>
      <div style={styles.nameRow}>
        <span style={styles.label}>Owner</span>
        <span style={styles.value}>{owner}</span>
      </div>
      <div style={styles.nameRow}>
        <span style={styles.label}>Charge Percentage</span>
        <span style={{ ...styles.value, color: 'green' }}>{chargingPercentage}</span>
      </div>
      <div style={styles.nameRow}>
        <span style={styles.label}>Remaining Charging Time</span>
        <span style={styles.value}>{remainingChargingTime}</span>
      </div>
    </div>
  </div>
);

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f5f5f5',
  },
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    backgroundColor: '#1f334b',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px 5px 0 0',
  },
  headerTitle: {
    margin: 0,
    textTransform: 'uppercase',
  },
  backArrowContainer: {
    backgroundColor: '#132335',
    color: '#fff',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #f5f5f5',
    marginRight: '10px',
  },
  backArrow: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
  },
  payments: {
    display: 'flex',
    flexDirection: 'column',
  },
  payment: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    padding: '10px',
    border: '0',
    borderBottom: '1px solid #ccc',
  },
  paymentDetails: {
    flex: 1,
  },
  nameRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  value: {
    fontSize: '16px',
  },
};

export default CurrentLoad;
