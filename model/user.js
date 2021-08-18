// STEP 1: import mongoose
const mongoose = require("mongoose");

// STEP 2: define the schema
const userSchema = new mongoose.Schema({
  me: {
    type: String,
    required: [true, "Domain name is required"],
    trim: true,
    unique: [true, "Domain already exists"],
  },
  username: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// STEP 3: Create the Model with the schema we defined above and store it in a variable called User
const User = mongoose.model("User", userSchema);

// STEP 4: // finally export the User Model
module.exports = User;
