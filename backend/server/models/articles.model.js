import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  articleID: {
    type: Number,
    required: [true, "you cant have an article without article id"]
  },
  title: {
    type: String,
    required: [true, "you cant have an article without title"]
  }, body: {
    type: String,
    required: [true, "you cant have an article without body"]
  }, author: {
    type: String,
    required: [true, "you cant have an article without author"]
  }, isPrivate: {
    type: Boolean,
    required: [true, "set article to private or public"]
  }
});

// {
//   "articleID": 83274874,
//   "title": "test title",
//   "body": "asdasdasdasd",
//   "author": "idk",
//   "isPrivate": true
// }

export const articles = mongoose.model("articles", articleSchema);