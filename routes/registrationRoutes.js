import express from "express";
import auth from "../middleware/authMiddleware.js";
import { registerEvent } from "../controllers/registrationController.js";

const router = express.Router();
router.post("/:eventId", auth, registerEvent);

export default router;
