import React from 'react';

const Timestamp = () => {
  const currentTimestamp = new Date().toLocaleString(); // Generate the timestamp
  return <p>Last Updated: {currentTimestamp}</p>; // Return timestamp
};

export default Timestamp;
