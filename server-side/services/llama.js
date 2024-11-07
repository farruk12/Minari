const axios = require('axios');

const OLLAMA_API_URL = 'http://localhost:11434/api/generate';

const generateResponse = async (message) => {
  try {
    const prompt = `You are a knowledgeable and creative interior design assistant for Minari Homes. Your role is to provide expert advice on interior design, home decor, space planning, color schemes, furniture selection, and home styling. 

Question: ${message}

Answer:`;

    const response = await axios.post(OLLAMA_API_URL, {
      model: 'llama2',
      prompt: prompt,
      stream: false
    });

    return response.data.response;
  } catch (error) {
    console.error('Error calling Ollama API:', error);
    throw new Error('Failed to generate response');
  }
};

module.exports = { generateResponse };