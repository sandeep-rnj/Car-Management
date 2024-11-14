// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware (if you have any)
app.use(express.json()); // For parsing JSON request bodies

// MongoDB connection
const uri = process.env.MONGODB_URI || 'mongodb+srv://Sandeep:<db_password>@cluster0.jk5n1.mongodb.net/'; // Make sure .env has the correct MONGODB_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define routes (e.g., if you have an API endpoint)
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


