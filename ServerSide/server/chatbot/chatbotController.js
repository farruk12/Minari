// chatbotController.js
const axios = require("axios");

// Controller function to get the chatbot response
exports.getResponse = async (req, res) => {
    const { message } = req.body;

    // Log to confirm that the API key is loaded
    console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are an AI assistant specializing in interior decor, furniture, color schemes, and home improvement advice." },
                    { role: "user", content: message }
                ],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, // Ensure this key is loaded from the .env file
                },
            }
        );

        // Extract the response from OpenAI and send it back to the frontend
        const botResponse = response.data.choices[0].message.content;
        res.json({ response: botResponse });
    } catch (error) {
        // Enhanced error logging for debugging
        if (error.response) {
            console.error("Error response from OpenAI API:", error.response.data);
        } else {
            console.error("Error with OpenAI API request:", error.message);
        }

        // Send a user-friendly error message to the client
        res.status(500).json({ response: "Sorry, I'm having trouble answering right now." });
    }
};
