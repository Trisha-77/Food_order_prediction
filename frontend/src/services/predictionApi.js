import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

export async function requestPrediction(customerDetails) {
  const response = await axios.post(`${API_URL}/predict`, customerDetails);
  return response.data;
}
