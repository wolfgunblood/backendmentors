// Import the necessary modules
const express = require("express"); // Express framework for handling server operations
const router = require("./routes/app"); // Import the router for handling specific routes
const notFound = require("./middleware/not-found"); // Middleware to handle 404 Not Found errors
require('dotenv').config(); // Load environment variables from .env file into process.env

const app = express(); // Create an Express application

const PORT = process.env.PORT || 3000; // Set the port number from environment variables or default to 3000

// Middleware to parse JSON bodies. This is needed to handle JSON payloads in requests.
app.use(express.json());

// Routes
// Set the router to handle all requests to '/api/v1'
app.use('/api/v1', router);
// Use the notFound middleware for handling requests to undefined routes
app.use(notFound);

// Start the server on the specified PORT and log the listening port
app.listen(PORT, () => {
    console.log(`Server listening to PORT ${PORT}`);
});
