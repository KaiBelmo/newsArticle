import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  articleID: {
    type: String,
    required: [true, "you cant have an article without article id"],
    unique: true,
  },title: {
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
  }, imageSrc: {
    type: String,
    default: "https://via.placeholder.com/500x300"
  }, source: {
    type: String,
    default: "unkown"
  }, category: {
    type: String,
    default: "unkown"
  }
});

// {
//   "articleID": 83274874,
//   "title": "test title",
//   "body": "asdasdasdasd",
//   "author": "idk",
//   "isPrivate": true
// }

export const Articles = mongoose.model("articles", articleSchema);