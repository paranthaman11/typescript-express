import bodyParser from "body-parser";
import express from "express";
import { createPost } from "./posts.controller";
export const router = express.Router();

router.use(bodyParser.json());

router.post("/api/posts", createPost);
router.get("/view", (req: any, res: any) => {
  res.send("hello");
});
