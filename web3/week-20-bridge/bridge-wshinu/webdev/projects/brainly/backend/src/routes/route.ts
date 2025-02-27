import express from "express";
import { signin, signup } from "../controllers/user";
import { content, getContent } from "../controllers/content";
import { userMiddleware } from "../middleware/userMiddleware";
const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signin);

router.post("/content/create", userMiddleware, content)
router.get("/content/getContent", userMiddleware, getContent)

export default router;