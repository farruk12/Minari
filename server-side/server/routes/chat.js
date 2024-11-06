const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Here you'll integrate your AI model logic
    // For now, let's return a simple response
    const response = "This is a sample response about interior design";
    
    const chat = new Chat({
      message,
      response
    });

    await chat.save();
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
