import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import {
  bookAppointment,
  getMyBookings,
  getRequestsForCounselor,
  updateStatus,
} from "../controllers/appointment.controller.js";

const router = express.Router();

// User routes
router.post("/book", authMiddleware, bookAppointment);
router.get("/my-bookings", authMiddleware, getMyBookings);

// Counselor routes
router.get(
  "/requests",
  authMiddleware,
  roleMiddleware("counselor"),
  getRequestsForCounselor
);

router.put(
  "/status/:id",
  authMiddleware,
  roleMiddleware("counselor"),
  updateStatus
);

export default router;
