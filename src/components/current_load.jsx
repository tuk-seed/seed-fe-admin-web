import React from 'react';

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

const styles = {
  // (styles object remains unchanged)
};

export default CurrentLoad;
