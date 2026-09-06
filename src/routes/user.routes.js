import express from "express";
import { registerController, } from "../controllers/user.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const router = express.Router();

router.post("/signup", asyncHandler(registerController));
// router.post("/login", asyncHandler(loginController));

export default router;