import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
  userStats,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/protect.js";
import { authorizeRoles } from "../middleware/authorizeRole.js";

const router = express.Router();

router.get("/", protect, authorizeRoles,  getAllUser)

router.get("/stats",protect, userStats);

router.get("/:id", protect, authorizeRoles, getSingleUser);

router.put("/:id",protect, authorizeRoles, updateUser);

router.delete("/:id", protect, authorizeRoles, deleteUser);





export default router;
