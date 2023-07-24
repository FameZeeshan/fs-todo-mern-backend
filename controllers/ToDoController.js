// Import the ToDoModel from the '../models/ToDoModel' file
const ToDoModel = require("../models/ToDoModel");

// Controller method for handling the GET request to retrieve all ToDo items
module.exports.getToDo = async (req, res) => {
  // Retrieve all ToDo items from the database using the 'find()' method of ToDoModel
  const toDo = await ToDoModel.find();
  // Send the retrieved ToDo items as the response
  res.send(toDo);
};

// Controller method for handling the POST request to save a new ToDo item
module.exports.saveToDo = async (req, res) => {
  // Extract the 'text' property from the request body
  const { text } = req.body;
  // Create a new ToDo item in the database using the 'create()' method of ToDoModel
  ToDoModel.create({ text }).then((data) => {
    // Log a success message and the data of the newly created ToDo item
    console.log("Added Successfully...");
    console.log(data);
    // Send the data of the newly created ToDo item as the response
    res.send(data);
  });
};

// Controller method for handling the POST request to update an existing ToDo item
module.exports.updateToDo = async (req, res) => {
  // Extract the '_id' and 'text' properties from the request body
  const { _id, text } = req.body;
  // Update the ToDo item in the database with the specified '_id' using the 'findByIdAndUpdate()' method of ToDoModel
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully...")) // Send a success message as the response
    .catch((err) => {
      // If there's an error, log the error and send an error response with status code 500
      console.log(err);
      res.status(500).json({ error: "Failed to update the ToDo item." });
    });
};

// Controller method for handling the POST request to delete an existing ToDo item
module.exports.deleteToDo = async (req, res) => {
  // Extract the '_id' property from the request body
  const { _id } = req.body;
  // Find and delete the ToDo item with the specified '_id' using the 'findByIdAndDelete()' method of ToDoModel
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully...")) // Send a success message as the response
    .catch((err) => {
      // If there's an error, log the error and send an error response with status code 500
      console.log(err);
      res.status(500).json({ error: "Failed to delete the ToDo item." });
    });
};
