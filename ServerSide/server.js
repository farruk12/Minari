// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const chatbotRoutes = require('./server/routes/chatbotRoutes'); // Import chatbot routes

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,         // Use new MongoDB connection string parser
    useUnifiedTopology: true,      // Opt-in to use the MongoDB driver's new connection management engine
    ssl: true,                     // Enable SSL connection to MongoDB
    sslValidate: false             // Disable SSL validation (for development purposes)
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the Minari Homes API');
});

// Register chatbot routes with /api prefix
app.use('/api', chatbotRoutes); // Prefixing the chatbot routes with /api

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
