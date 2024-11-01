// chatbotRoutes.js
const express = require("express");
const router = express.Router();
const { getResponse } = require("../chatbot/chatbotController");

router.post("/chatbot", getResponse);

module.exports = router;

