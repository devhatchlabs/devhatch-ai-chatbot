import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Send message and conversation history to chatbot API
 * @param {string} message - Current user message
 * @param {Array} history - Full conversation history
 * @returns {Promise<Object>} - Bot response
 */
export const sendMessage = async (message, history = []) => {
  try {
    const response = await API.post('/chat', { 
      message,
      history // Now properly sending conversation history
    });
    return { response: response.data.response };
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to connect to server');
  }
};