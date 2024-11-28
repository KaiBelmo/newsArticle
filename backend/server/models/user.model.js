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
  bio: {
    type: String, 
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis atque blanditiis deserunt provident commodi.'
  },
  avatar: {
    type: String, 
    default: 'https://via.placeholder.com/100'
  },
});


export const Users = mongoose.model("users", userSchema);