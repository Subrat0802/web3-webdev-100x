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
const zodvalidation_1 = require("./zodvalidation");
const db_1 = require("./db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const zod_1 = require("zod");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validation = yield zodvalidation_1.UserValidation.parseAsync(req.body);
        const { email, username, password, confirmPassword } = validation;
        if (password !== confirmPassword) {
            res.status(411).json({
                message: "Password and confirm password are not same",
            });
            return;
        }
        const pass = yield bcrypt_1.default.hash(password, 10);
        const checkUser = yield db_1.userModel.findOne({ email });
        if (checkUser) {
            res.status(411).json({
                message: "user already exist, try another email",
            });
            return;
        }
        const response = yield db_1.userModel.create({
            email,
            username,
            password: pass,
        });
        res.status(200).json({
            message: "User is signup siccessfully",
            response: response,
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(404).json({
                message: "Validation Error",
                error: error.errors,
            });
        }
        else {
            res.status(500).json({
                message: "Internal server error, try again after sometime",
                error: error === null || error === void 0 ? void 0 : error.errors,
            });
        }
    }
}));
app.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validation = yield zodvalidation_1.userSigninValidation.parseAsync(req.body);
        const { email, password } = validation;
        const checkuser = yield db_1.userModel.findOne({ email });
        if (!checkuser) {
            res.status(411).json({
                message: "User is not preset please, signup first",
            });
            return;
        }
        if (!(checkuser === null || checkuser === void 0 ? void 0 : checkuser.password)) {
            res.status(400).json({
                message: "Invalid credentials",
            });
            return;
        }
        const matchPass = yield bcrypt_1.default.compare(password, checkuser.password);
        if (!matchPass) {
            res.status(411).json({
                message: "Password is incorrect",
            });
            return;
        }
        const JWT_SECRET = process.env.JWT_SECRET_KEY;
        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in the environment variables");
        }
        const token = yield jsonwebtoken_1.default.sign({
            userId: checkuser._id,
        }, JWT_SECRET, { expiresIn: "1h" });
        checkuser.password = undefined;
        res.status(200).json({
            message: "user is signin",
            response: checkuser,
            token: token,
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(409).json({
                message: "Validation error",
                error: error.errors,
            });
        }
        else {
            res.status(500).json({
                message: "internal server error",
            });
        }
    }
}));
const SWIGGY_API_URL = process.env.SWIGGY_API || "";
app.get("/api/restaurants", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(SWIGGY_API_URL, {
            headers: { "User-Agent": "Mozilla/5.0" },
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}));
const RES_MENU_API = process.env.RESTAURANT_MENU_API || "";
app.get("/api/restaurant/menu/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield axios_1.default.get(`${RES_MENU_API}${id}`, {
            headers: { "User-Agent": "Mozilla/5.0" },
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}));
app.listen(3000, () => {
    console.log("app is runnig at port number 3000");
});
