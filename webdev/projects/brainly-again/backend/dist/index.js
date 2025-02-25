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
const app = (0, express_1.default)();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const JWT_PASS = "123456";
app.use(express_1.default.json());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        yield db_1.UserModel.create({ username, password });
        res.status(200).json({
            message: "user is signup"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield db_1.UserModel.findOne({ username });
        ;
        if (!user) {
            res.status(404).json({
                message: "user not present please sign up first"
            });
            return;
        }
        if ((user === null || user === void 0 ? void 0 : user.password) !== password) {
            res.status(404).json({
                message: "user not present please sign up first"
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            id: user === null || user === void 0 ? void 0 : user._id,
            username: user === null || user === void 0 ? void 0 : user.username
        }, JWT_PASS);
        res.status(200).json({
            message: "user is signup",
            token: token,
            user: user
        });
    }
    catch (e) {
        res.status(404).json({
            message: "Invalid crdentials"
        });
        return;
    }
}));
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/content", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
app.listen(3000);
