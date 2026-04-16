import { Request, Response } from "express";
import * as PostService from "../services/post.service";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const post = await PostService.createPost({ title, description, image });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create post" });
  }
};