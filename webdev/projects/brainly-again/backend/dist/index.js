"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const confg_1 = require("./confg");
const middleware_1 = require("./middleware");
const utils_1 = require("./utils");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (username === "" && password === "") {
            res.status(404).json({
                message: "All fields are required"
            });
            return;
        }
        yield db_1.UserModel.create({ username, password });
        res.json({
            message: "User signed up"
        });
    }
    catch (err) {
        console.log(err, "error");
        res.json({
            message: "User already exist"
        });
    }
}));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const existingUser = yield db_1.UserModel.findOne({ username, password });
    if (existingUser) {
        const token = jsonwebtoken_1.default.sign({
            id: existingUser._id
        }, confg_1.JWT_PASS);
        res.json({
            token: token,
            message: "User signin"
        });
    }
    else {
        res.json({
            message: "Incorrect Credentials"
        });
    }
}));
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { link, type, title } = req.body;
        const resposne = yield db_1.contentModel.create({
            type,
            link,
            title,
            //@ts-ignore
            userId: req.userId,
            tags: []
        });
        res.json({
            message: "Content added",
            // data:resposne
        });
    }
    catch (err) {
        res.json({
            message: "invalid credential server error"
        });
    }
}));
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const userId = req.userId;
        const content = yield db_1.contentModel.find({ userId: userId }).populate("userId", "username");
        res.json({
            message: "User content",
            data: content
        });
    }
    catch (err) {
        res.json({
            message: "Invalid while fetching all content"
        });
    }
}));
app.delete("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contentId } = req.body;
        //@ts-ignore
        const userId = req.userId;
        const response = yield db_1.contentModel.findOneAndDelete({ _id: contentId, userId: userId });
        res.json({
            message: "COntent Deleted successfully",
            deletedContent: response
        });
    }
    catch (err) {
        res.json({
            message: "Invalid server error"
        });
    }
}));
app.post("/api/v1/brain/share", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { share } = req.body;
        const hash = (0, utils_1.random)(10);
        if (share) {
            const existingLink = yield db_1.linkModel.findOne({
                //@ts-ignore
                userId: req.userId
            });
            if (existingLink) {
                res.json({
                    hash: existingLink
                });
                return;
            }
            yield db_1.linkModel.create({
                //@ts-ignore
                userId: req.userId,
                hash: hash
            });
        }
        else {
            yield db_1.linkModel.deleteOne({
                //@ts-ignore
                userId: req.userId
            });
            res.json({
                message: "Remove link"
            });
        }
        res.json({
            message: "Updated sharable link",
            link: "http://localhost:3000/api/v1/brain/" + hash
        });
    }
    catch (err) {
        res.json({
            message: "Server error"
        });
    }
}));
app.get("/api/v1/brain/:sharLink", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hash = req.params.sharLink;
        const link = yield db_1.linkModel.findOne({
            hash: hash
        });
        if (!link) {
            res.status(411).json({
                mesage: "Sorry incorrect input"
            });
            return;
        }
        const content = yield db_1.contentModel.find({
            userId: link.userId
        });
        const user = yield db_1.UserModel.findOne({
            _id: link.userId
        });
        if (!user) {
            res.status(411).json({
                message: "user not found, error should idelly not happen"
            });
            return;
        }
        res.json({
            username: user.username,
            content: content
        });
    }
    catch (err) {
    }
}));
const PORT = 3000;
app.listen(PORT);
console.log("app running at ", PORT);
//http://localhost:3000/api/v1/brain/g5px3nejbl
