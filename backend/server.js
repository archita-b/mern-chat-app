import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { app, server } from "./socket/socket.js";
import authRouter from "./routes/auth.js";
import messageRouter from "./routes/message.js";
import userRouter from "./routes/user.js";

import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

server.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
