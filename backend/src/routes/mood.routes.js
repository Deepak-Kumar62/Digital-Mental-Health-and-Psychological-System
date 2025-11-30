import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { addMood, getMyMoods } from "../controllers/mood.controller.js";

const router = express.Router();

router.post("/add", authMiddleware, addMood);
router.get("/my-moods", authMiddleware, getMyMoods);

export default router;
