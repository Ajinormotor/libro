import express from "express";
import { bookNotification,
     createNotification } from "../controllers/notification.controller.js";

const router = express.Router();


router.get("/", bookNotification)

router.post("/", createNotification);


export default router;
