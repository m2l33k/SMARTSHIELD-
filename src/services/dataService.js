// src/services/dataService.js

import axios from 'axios';

// Example function to fetch historical threat data from a backend API
export const fetchHistoricalData = async () => {
  try {
    const response = await axios.get('/api/threats/historical');
    return response.data;
  } catch (error) {
    console.error('Error fetching historical data:', error);
    throw new Error('Failed to fetch historical data');
  }
};
