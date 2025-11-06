import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js"; // ✅ Add this import

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// ✅ Route to fetch logged-in user details
router.get('/me', protect, (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user._id,
      role: req.user.role, // ✅ Important!
    },
  });
});

export default router;
