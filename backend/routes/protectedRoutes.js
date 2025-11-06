import express from "express";
import { protect, checkRole } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/jobseeker/dashboard", protect, checkRole("jobseeker"), (req, res) => {
  res.json({ success: true, message: "Welcome to Job Seeker Dashboard" });
});

router.get("/employer/dashboard", protect, checkRole("employer"), (req, res) => {
  res.json({ success: true, message: "Welcome to Employer Dashboard" });
});

export default router;  // ✅ FIX: add default export
