import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  getMyAssessments,
  submitAssessment,
} from "../controllers/assessment.controller.js";

const router = express.Router();

router.post("/submit", authMiddleware, submitAssessment);
router.get("/my-results", authMiddleware, getMyAssessments);

export default router
