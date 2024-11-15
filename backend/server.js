import express from "express";
import mongoose from "mongoose";

const app = express();

app.listen(8080, () => {
  console.log("server is running");
});

mongoose
  .connect("mongodb://localhost:27017/NewsArticles")
  .then(() => {
    console.log("db is connected");
  })
  .catch(() => {
    console.log("db is not connected");
  });

// mongodb://localhost:27017
