import express from "express";
import { signup, login } from "../controllers/clerk_auth.js";
import { clerks } from "../controllers/getallclerks.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getallClerk", clerks);

export default router;
