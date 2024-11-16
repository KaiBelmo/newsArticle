import express from "express";
import mongoose from "mongoose";
import { Articles } from "./models/articles.model.js";
import { Users } from "./models/user.model.js";
import cors from "cors"

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Your frontend origin
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send("server is running");
})

const savePost = async (body) => {
  const post = await Articles.create(body);
  await post.save();
  console.log(post);
}

// /register 
app.post('/api/register', async (req, res) => {
  const newUser = new Users ({
    email: req.body.email,
    password: req.body.password
  });
  const savedUser = await newUser.save(newUser);
  console.log("user saved successfully: ", savedUser);
})



// show to things that saved 
// app.get()


// post to save smth
app.post('/api/article', (req, res) => {
  console.log(req.body);
  savePost(req.body);
  // res.send(req.body);
})


mongoose
  .connect("mongodb://localhost:27017/NewsArticles")
  .then(() => {
    console.log("db is connected");
    app.listen(8080, () => {
      console.log("server is running");
    });
  })
  .catch(() => {
    console.log("db is not connected");
  });

// mongodb://localhost:27017
