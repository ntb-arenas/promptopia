import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },

  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^[A-Za-z0-9_ñ][A-Za-z0-9_ ñ]{3,28}$/,
      "Username invalid, it should contain 4-29 alphanumeric letters, underscores, or spaces and be unique!",
    ],
  },

  image: { type: String },
});

const User = models.User || model("User", UserSchema);

export default User;

// The "models" object is provided by the Mongoose Library and stores all the registered models.
// If a model named "User" already exists in the "models" object, it assigns that existing model the "User" variable.
// This prevents redefining the model and ensures that the existing model is reused.

// If a model named "User" does not exist in the "models" object, the "model" function from Mongoose is called to create a anew model
// The newly created model is then assigned to the "User" variable.
