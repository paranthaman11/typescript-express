import { Request, Response } from "express";
import { postServices } from "./posts.service";

export const createPost = async (req: Request, res: Response) => {
  const name = await postServices(req, res);
  res.send(name);
};
