const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');
const { generateResponse } = require('../services/llama');

router.post('/', async (req, res) => {
  try {
    const { message, userId } = req.body;

    // Generate response from Llama
    const botResponse = await generateResponse(message);

    // Save to MongoDB
    let chat = await Chat.findOne({ userId });
    
    if (!chat) {
      chat = new Chat({ userId, messages: [] });
    }

    chat.messages.push(
      { sender: 'user', content: message },
      { sender: 'bot', content: botResponse }
    );

    await chat.save();

    res.json({ response: botResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/history/:userId', async (req, res) => {
  try {
    const chat = await Chat.findOne({ userId: req.params.userId });
    res.json(chat ? chat.messages : []);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;