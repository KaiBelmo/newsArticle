import express from "express";
import mongoose from "mongoose";
import { Articles } from "./models/articles.model.js";
import { Users } from "./models/user.model.js";
import cors from "cors"

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
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

  const { email: userEmail, password: userPassword } = req.body;
  const user = await Users.findOne({ email: userEmail });
  if (user) {
    return res.status(400).json({ message: "email is already registered" });
  } 

  const newUser = new Users({
    email: userEmail,
    password: userPassword
  });
  const savedUser = await newUser.save(newUser).catch((e) => {
    console.error("server error: ", e);
    return res.status(400).json({ message: "can't register this user (server error)" });
  });
  console.log("user saved successfully: ", savedUser);
  return res.status(200).json({ message: "registered successfully" })
})

// /login 
app.post('/api/login', async (req, res) => {
  const { email: userEmail, password: userPassword } = req.body;
  const user = await Users.findOne({ email: userEmail });

  if (!user) {
    console.error("invalid email");
    return res.status(400).json({ message: "invalid email" });
  }
  // TODO: add hash later
  if (user.password != userPassword) {
    console.error("invalid password");
    return res.status(400).json({ message: "invalid password" });
  }
  return res.status(200).json({ message: "logged successfully" });
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
