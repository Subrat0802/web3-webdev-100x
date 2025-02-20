import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { createSignupSchema } from "@repo/common/types";
import { Request, Response } from "express";
import { middleware } from "./middleware.js";

const app = express();
app.use(express.json()); // Ensure request body parsing

app.post("/signup", (req: Request, res: Response) => {
    const data = createSignupSchema.safeParse(req.body);
    if (!data.success) {
        res.json({ message: "Incorrect Inputs" });
        return;
    }
    res.json({ roomId: 123 });
});

app.post("/signin", (req, res) => {
    const userId = 1;
    const token = jwt.sign({ userId }, JWT_SECRET);
    res.json({ token: token });
});

app.post("/room", middleware, (req, res) => {
    res.json({ roomId: 123 });
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
