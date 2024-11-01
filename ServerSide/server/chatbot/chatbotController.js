// chatbotController.js
exports.getResponse = (req, res) => {
    const { message } = req.body;

    // Simple hardcoded responses
    let response;
    if (message.toLowerCase().includes("furniture")) {
        response = "We have a wide range of furniture to choose from!";
    } else if (message.toLowerCase().includes("decor")) {
        response = "Our decor options can enhance any room's ambiance.";
    } else {
        response = "I'm here to help with any questions about furniture or decor!";
    }

    res.json({ response });
};
