// src/components/StatusIndicator.js
import React from 'react';

const StatusIndicator = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Resolved':
        return 'status-resolved';
      case 'In Progress':
        return 'status-in-progress';
      default:
        return 'status-unknown';
    }
  };

  return (
    <div className={`status-indicator ${getStatusClass()}`}>
      {status}
    </div>
  );
};

export default StatusIndicator;
