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
  },
  role: { 
    type: String, 
    enum: ['admin', 'user'], 
    default: 'user'
  },
  name: {
    type: String,
    required: [false, "you can create user without name"]
  },
  bio: {
    type: String,
    required: [false, "you can create user without bio"]
  },
  avatar: {
    type: String,
    required: [false, "you can create user without avatar"]
  }
});

export const Users = mongoose.model("users", userSchema);