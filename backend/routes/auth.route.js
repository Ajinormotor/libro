import express from "express";
import { login, register ,logout, fetchUser} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/fetch-user", fetchUser);

export default router;
