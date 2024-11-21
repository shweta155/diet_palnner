// routes/DietRoutes.js

import express from "express";
import getDietPlan from "../controller/DietController.js";

const router = express.Router();

// POST route for generating the diet plan
router.post("/diet", getDietPlan);

export default router;
