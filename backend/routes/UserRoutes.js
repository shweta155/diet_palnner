import express from "express";
import { registerUser, loginUser } from "../controller/UserController.js";

const router = express.Router();

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

export default router;
