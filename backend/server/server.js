import express from "express";
import mongoose from "mongoose";
import { articles } from "./models/articles.model.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("server is running");
})

const savePost = async (body) => {
  const post = await articles.create(body);
  await post.save();
  console.log(post);
}

// /register 

app.post('/api/register', (req, res) => {
  console.log(req.body);
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
