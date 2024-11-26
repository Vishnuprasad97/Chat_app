// importing required files
import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
//defining app
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

//test
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running in port:" + PORT);
  connectDB();
});
