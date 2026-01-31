import express from "express";
import auth from "../middleware/authMiddleware.js";
import role from "../middleware/roleMiddleware.js";
import { createEvent, getEvents } from "../controllers/eventController.js";

const router = express.Router();
router.post("/", auth, role("ORGANIZER"), createEvent);
router.get("/", auth, getEvents);

export default router;
