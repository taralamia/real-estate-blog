import { Router } from "express";
import { createPost, getPost } from "../controllers/post.controller";
import { getPosts } from "../controllers/post.controller";
const router = Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
export default router;