import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./src/configs/database.js";
import { globalErrorHandler } from "./src/middlewares/globalError.middleware.js";

// routes import
import authRoutes from "./src/routes/auth.routes.js";
import moodRoutes from "./src/routes/mood.routes.js";
import assessmentRoutes from "./src/routes/assessment.routes.js";
import forumRoutes from "./src/routes/forum.routes.js";
import appointmentsRoutes from "./src/routes/appointment.routes.js";
import blogRoutes from "./src/routes/blog.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL;

app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/assessment", assessmentRoutes);
app.use("/api/forum", forumRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/blogs", blogRoutes);

app.use(globalErrorHandler);

const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server not started: ", error.message);
  }
};

startServer();
