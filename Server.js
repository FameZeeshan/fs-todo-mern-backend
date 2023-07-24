// Import the required modules and packages
const express = require("express"); // Express web application framework for Node.js
const mongoose = require("mongoose"); // Mongoose library for MongoDB database interactions
const cors = require("cors"); // CORS (Cross-Origin Resource Sharing) middleware for Express
const routes = require("./routes/ToDoRoute"); // Custom routes for ToDo operations
require("dotenv").config(); // Load environment variables from a .env file (if available)

// Create an instance of the Express application
const app = express();

// Set the port number for the server. It will use process.env.PORT if available, otherwise default to 5000.
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming JSON data in request bodies
app.use(express.json());

// Middleware to enable CORS for the Express app
app.use(cors());

// Connect to the MongoDB database using the Mongoose library
// The MongoDB connection string is fetched from the environment variable MONGODB_URL
mongoose
  .connect(process.env.MONGODB_URL) // Connect to the specified MongoDB database
  .then(() => console.log(`Connected to MongoDB...`)) // If connection is successful, log a success message
  .catch((err) => console.log(err)); // If connection fails, log the error message

// Use the custom routes defined in 'ToDoRoute.js' for handling ToDo operations
app.use(routes);

// Start the Express server and listen on the specified PORT
app.listen(PORT, () => console.log(`Listening on : ${PORT}`));
