import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "you cant create user without email"]
  },
  password: {
    type: String,
    required: [true, "you cant create user without password"]
  }
});

export const Users = mongoose.model("users", userSchema);