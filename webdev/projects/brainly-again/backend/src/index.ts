import express from "express"
import jwt from "jsonwebtoken";
import { contentModel, linkModel, UserModel } from "./db";
import { JWT_PASS } from "./confg";
import { userMiddleware } from "./middleware";
import { random, userContentZodValidation, userSigninZodValidation, userZodvalidation } from "./utils";
import cors from "cors"
import { ZodError } from "zod";
import { compare, hashSync, genSaltSync } from "bcrypt";
import cookieParser from "cookie-parser";
import { hash } from "crypto";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.post("/api/v1/signup", async (req, res) => {
    try {
        const zodeAuthValidation = await userZodvalidation.parseAsync(req.body);

        const { username, email, password } = zodeAuthValidation;

        const checkEmail = await UserModel.findOne({ email: email });

        if (checkEmail) {
            res.status(409).json({
                message: "user already present, try another email or signin."
            })
            return;
        }

        const salt = genSaltSync(10);
        const hashedPass = hashSync(password, salt);

        const response = await UserModel.create({ username, email, password: hashedPass });

        if (!response) {
            res.status(404).json({
                message: "Something went wrong while new creating user"
            })
            return;
        }

        res.json({
            response: response,
            message: "User signed up"
        })
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({
                message: "validation error",
                error: error.errors,
            })
        }
        //@ts-ignore
        else if (error?.name === "TimeoutError" || error === "TimeoutError") {
            res.status(408).json({
                message: "Request timeout error, please try again later"
            });
            return;
        }
        else {
            res.status(500).json({
                message: "Internal Server error"
            })
            return;
        }


    }

})


app.post("/api/v1/signin", async (req, res) => {
    try {
        const zodvalidation = await userSigninZodValidation.parseAsync(req.body);
        const { email, password } = zodvalidation;

        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) {
            res.status(408).json({
                message: "User is not present, please first signup"
            })
            return;
        }

        const checkPass = await compare(password, existingUser?.password ?? "");

        existingUser.password = undefined;

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        if (checkPass) {
            const token = await jwt.sign({
                id: existingUser._id
            }, JWT_PASS,
                {
                    expiresIn: "72h"
                }
            )
            res.cookie("token", token, options).status(200).json({
                message: "User signin",
                token: token,
                user: existingUser
            })
        } else {
            res.status(408).json({
                message: "Password is invalid, please try again"
            })
        }
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(401).json({
                message: "Validation error",
                error: error.errors
            })
            return;
            //@ts-ignore
        } else if (error?.name === "TimeoutError" || error === "TimeoutError") {
            res.status(401).json({
                message: "Timeout error, please try again"
            })
            return;
        }
        else {
            res.status(500).json({
                message: "Internal server error, please try again"
            })
        }
    }

})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    try {
        const contentValidation = await userContentZodValidation.parseAsync(req.body);
        const { link, type, title } = contentValidation;

        const resposne = await contentModel.create({
            type,
            link,
            title,
            //@ts-ignore
            userId: req?.userId,
            tags: []
        })

        res.status(200).json({
            message: "Content added",
            data:resposne
        })
    } catch (error) {
        if(error instanceof ZodError){
            res.status(408).json({
                message:"Validation error",
                error:error.errors
            })
            return;
        }
        res.status(500).json({
            message: "invalid credential server error",
            error
        })
        return;
    }

})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    try {
        //@ts-ignore
        const userId = req.userId
        const content = await contentModel.find({ userId: userId }).populate("userId", "username");

        if(!content){
            res.status(402).json({
                message:"No content available for you, please first create your content"
            })
        }

        res.json({
            message: "User content",
            data: content
        })
    } catch (err) {
        res.json({
            message: "Invalid while fetching all content"
        })
    }
})

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    try {
        const { contentId } = req.body;
        if(contentId === ""){
            res.status(408).json({
                message:"please provide contentId"
            })
            return;
        }
        const findContent = await contentModel.findById(contentId);

        if (!findContent) {
            res.status(404).json({
                message: "No content available with this content ID, please provide a valid content ID"
            });
            return;
        }
        //@ts-ignore
        const userId = req.userId;
        const response = await contentModel.findOneAndDelete({ _id: contentId, userId: userId });
        res.json({
            message: "Content Deleted successfully",
            deletedContent: response
        })
    } catch (err) {
        res.status(500).json({
            message: "Invalid server error"
        })
    }
})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    try {
        const { share } = req.body;
        const hash = random(10);
        if (share) {

            const existingLink = await linkModel.findOne({
                //@ts-ignore
                userId: req.userId
            })
            
            if (existingLink) {
                res.status(400).json({
                    message:"Your content is already sharable",
                    hash: existingLink
                })
                return;
            }

            await linkModel.create({
                //@ts-ignore
                userId: req.userId,
                hash: hash
            })
        } else {
            await linkModel.deleteOne({
                //@ts-ignore
                userId: req.userId
            })
            res.json({
                message: "Remove link"
            })

        }
        res.json({
            message: "Updated sharable link",
            link: "http://localhost:3000/api/v1/brain/" + hash
        })
    } catch (err) {
        res.json({
            message: "Server error"
        })
    }
})

app.get("/api/v1/brain/:sharLink", userMiddleware, async (req, res) => {
    try {
        const hash = req.params.sharLink;
        const link = await linkModel.findOne({
            hash: hash
        })
        if (!link) {
            res.status(411).json({
                mesage: "Sorry incorrect input"
            })
            return;
        }

        const content = await contentModel.find({
            userId: link.userId
        })
        const user = await UserModel.findOne({
            _id: link.userId
        })
        if (!user) {
            res.status(411).json({
                message: "user not found, error should idelly not happen"
            })
            return;
        }
        res.json({
            username: user.username,
            content: content
        })
    } catch (err) {

    }
})
const PORT = 3000;
app.listen(PORT);
console.log("app running at ", PORT)


//http://localhost:3000/api/v1/brain/e3k27srtme