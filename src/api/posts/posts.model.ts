import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const testPost = mongoose.model("posts", postSchema, "posts");
export default testPost;
