import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userID: {
    type: String,
    required: [true, "you cant create user without user id"]
  },
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