import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  addComment,
  createPost,
  getAllPosts,
} from "../controllers/forum.controller.js";

const router = express.Router();

router.post("/post", authMiddleware, createPost);
router.get("/all", getAllPosts);
router.post("/comment/:postId", authMiddleware, addComment);

export default router;
