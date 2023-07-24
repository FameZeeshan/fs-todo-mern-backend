// Import the 'mongoose' library to define and interact with MongoDB schemas
const mongoose = require("mongoose");

// Define a new Mongoose schema called 'todoSchema'
const todoSchema = new mongoose.Schema({
  // The 'text' property of the schema represents the text content of a ToDo item
  text: {
    type: String, // The data type of 'text' is set to 'String'
    required: true, // 'text' is marked as required, meaning it must be provided when creating a new ToDo item
  },
});

// Export the Mongoose model associated with the 'todoSchema'.
// The model is named "ToDo" and will be used to interact with the "todos" collection in the MongoDB database.
module.exports = mongoose.model("ToDo", todoSchema);
