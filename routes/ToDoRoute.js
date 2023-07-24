// Import the ToDoModel from the '../models/ToDoModel' file
const ToDoModel = require("../models/ToDoModel");

// Import the Router from the 'express' library
const { Router } = require("express");

// Import the functions (controller methods) from the '../controllers/ToDoController' file
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoController");

// Create a new instance of the Router
const router = Router();

// Define the routes and associate them with the respective controller methods

// Route for handling the GET request to retrieve all ToDo items
router.get("/", getToDo);

// Route for handling the POST request to save a new ToDo item
router.post("/save", saveToDo);

// Route for handling the POST request to update an existing ToDo item
router.post("/update", updateToDo);

// Route for handling the POST request to delete an existing ToDo item
router.post("/delete", deleteToDo);

// Export the router to be used in the main application file (e.g., 'Server.js')
module.exports = router;
