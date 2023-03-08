import { Request, Response } from "express";
import testPost from "./posts.model";

export const postServices = async (req: Request, res: Response) => {
  console.log(req.body, "body");
  try {
    let title = req.body.title;
    let content = req.body.content;
    let success = await testPost.create({ title, content });
    console.log(success, "log");
    return success;
  } catch (err: any) {
    console.log(err);
  }
};
