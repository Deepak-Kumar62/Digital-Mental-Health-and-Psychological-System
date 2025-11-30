import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import {
  createBlog,
  getAllBlogs,
  getBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

// Counselor/Admin can add blog
router.post("/add", authMiddleware, roleMiddleware("counselor"), createBlog);

// Public
router.get("/all", getAllBlogs);
router.get("/:id", getBlog);    

export default router;
