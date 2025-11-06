import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // Frontend origin
  credentials: true,              // Allow cookies
}));

// ✅ Connect Database
connectDB();

// ✅ Test API
app.get("/", (req, res) => {
  res.send("Job Portal API is running...");
});

// ✅ REGISTER ROUTES BEFORE STARTING SERVER
app.use("/api/auth", authRoutes);     // Auth routes (login, register, me)
app.use("/api", protectedRoutes);     // Protected routes

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
