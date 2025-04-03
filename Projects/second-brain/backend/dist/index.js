"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const dotenv = __importStar(require("dotenv"));
const utils_1 = require("./utils");
const db_1 = require("./db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const zod_1 = require("zod");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
dotenv.config();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT;
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodeAuthValidation = yield utils_1.userZodvalidation.parseAsync(req.body);
        const { username, email, password } = zodeAuthValidation;
        const checkEmail = yield db_1.userModel.findOne({ email: email });
        if (checkEmail) {
            res.status(409).json({
                message: "Email is already present, typy with different email address"
            });
            return;
        }
        const passwordHashed = bcrypt_1.default.hash(password, 10);
        const response = yield db_1.userModel.create({ email, password: passwordHashed, username });
        if (!response) {
            res.status(408).json({
                messgae: "Error while signup, new user"
            });
            return;
        }
        res.status(200).json({
            message: "User is successfully created"
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(404).json({
                message: "validation error",
                error: error.errors
            });
        }
        else {
            res.status(500).json({
                message: "Internal server error"
            });
        }
    }
}));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodvalidation = yield utils_1.userSigninZodValidation.parseAsync(req.body);
        const { email, password } = zodvalidation;
        const existingUser = yield db_1.userModel.findOne({ email });
        if (!existingUser) {
            res.status(404).json({
                message: "user is not present, please signup first with this email"
            });
            return;
        }
        const matchpassword = yield bcrypt_1.default.compare(existingUser === null || existingUser === void 0 ? void 0 : existingUser.password, password);
        if (!matchpassword) {
            res.status(409).json({
                message: "Password is incorrect"
            });
            return;
        }
        const option = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables.");
        }
        const token = jsonwebtoken_1.default.sign({
            id: existingUser._id,
            email: existingUser.email
        }, process.env.JWT_SECRET, {
            expiresIn: "72h"
        });
        res.cookie("token", token, option).status(200).json({
            message: "User signin successfully",
            token: token,
            user: existingUser
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(404).json({
                message: "validation error",
                error: error.errors
            });
        }
        else {
            res.status(500).json({
                message: "Internal server error"
            });
        }
    }
}));
app.post("/api/v1/content", (req, res) => {
    try {
    }
    catch (error) {
    }
});
app.get("/api/v1/content", (req, res) => {
    try {
    }
    catch (error) {
    }
});
app.delete("/api/v1/content", (req, res) => {
    try {
    }
    catch (error) {
    }
});
app.post("/api/v1/brain/share", (req, res) => {
    try {
    }
    catch (error) {
    }
});
app.post("/api/v1/brain/:shareLink", (req, res) => {
    try {
    }
    catch (error) {
    }
});
app.listen(PORT, () => {
    console.log("App is running at port", PORT);
});
