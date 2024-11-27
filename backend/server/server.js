import express from "express";
import mongoose from "mongoose";
import { Articles } from "./models/articles.model.js";
import { Users } from "./models/user.model.js";
import cors from "cors"
import { cookieParser } from "./utils/cookieParser.js";
import { SessionStore } from "./sessionStore/sessionStore.js";
import { v4 as uuidv4 } from 'uuid';
import { compare, hash } from "bcrypt";


const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

const sessionStore = new SessionStore(import.meta.url);

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


app.use((req, res, next) => {
  const cookies = cookieParser(req.headers.cookie);
  const sessionID = cookies.session;

  if (sessionID) {
    const session = sessionStore.loadSession(sessionID);
    if (session) {
      req.session = session;
      return next();
    }
  }
  req.session = null;
  next();
})


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

  // hashing the password
  const saltRounds = 10;
  const hashedPassword = await hash(userPassword, saltRounds);

  const newUser = new Users({
    userID: uuidv4(),
    email: userEmail,
    password: hashedPassword
  });

  const savedUser = await newUser.save(newUser).catch((e) => {
    console.error("server error: ", e);
    return res.status(400).json({ message: "can't register this user (server error)" });
  });

  const sessionID = sessionStore.generateSessionID();
  sessionStore.saveSession(sessionID, newUser.toObject());
  
  // res.setHeader('Set-Cookie', `session=${sessionID}; HttpOnly; Path=/; SameSite=None; Secure`);

  res.set('Set-Cookie', `session=${sessionID}; Path=/; HttpOnly;`);

  // res.send("success")

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
  const passwordMatch = await compare(userPassword, user.password);

  console.log("userPassword-------------")
  console.log(userPassword)
  console.log("user password------------")
  console.log(user.password)

  // if (user.password != userPassword) {
  if (!passwordMatch) {
    console.error("invalid password");
    return res.status(400).json({ message: "invalid password" });
  }

  const sessionID = sessionStore.generateSessionID();
  console.log(user.toObject())
  sessionStore.saveSession(sessionID, user.toObject());
  res.set('Set-Cookie', `session=${sessionID}; Path=/; HttpOnly;`);

  return res.status(200).json({ message: "logged successfully" });
})

// test
app.get('/api/test', (req, res) => {
  if (!req.session) {
    return res.status(401).json({message: 'not allowed'})
  }
  return res.status(200).json({message: 'allowed'})
});


// post to save smth
app.post('/api/article', (req, res) => {
  console.log(req.body);
  savePost(req.body);
  // res.send(req.body);
})

// add new article
app.post('/api/addnewarticle', async (req, res) => {
  console.log('Received POST request to /api/addnewarticle');
  try {
    const { title, body, author, isPrivate } = req.body;
    console.log('Request body:', req.body);
    if (!title || !body || !author) {
      return res.status(400).json({ message: 'Title, body, and author are required' });
    }
    const article = new Articles({articleID: uuidv4(), title, body, author, isPrivate });
    console.log('Creating new article:', article);
    await article.save();
    console.log('Article created successfully');
    res.status(201).json({ message: 'Article created successfully' });
  } catch (err) {
    console.error('Error creating article:', err);
    res.status(500).json({ message: 'Error creating article' });
  }
});

app.put('/api/updatearticle/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Articles.findOneAndUpdate({ articleID: id }, req.body, { new: true });
    if (!article) {
      return res.status(404).json({ message: 'article not found' });
    }
    res.status(200).json({ message: 'article updated successfully', article });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'error updating article' });
  }
});

// mongodb://localhost:27017
