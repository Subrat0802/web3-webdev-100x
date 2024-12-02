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
exports.signin = exports.signup = void 0;
const User_1 = require("../models/User");
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const userSignupSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    username: zod_1.z.string().min(3),
    confirmPassword: zod_1.z.string().min(6),
});
const userSigninSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedData = yield userSignupSchema.parseAsync(req.body);
        const { username, email, password, confirmPassword } = validatedData;
        if (password !== confirmPassword) {
            res.status(400).json({
                message: "Password and confirm password do not match",
            });
            return;
        }
        const existingUser = yield User_1.userModel.findOne({ email });
        if (existingUser) {
            res.status(411).json({
                message: "user already exist, try with different email"
            });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const response = yield User_1.userModel.create({
            username,
            email,
            password: hashedPassword,
        });
        if (!response) {
            res.status(411).json({
                message: "Something went wrong while adding data to DB"
            });
            return;
        }
        res.status(200).json({
            message: "user added to DB",
            data: response
        });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({
                message: "Validation failed",
                errors: error.errors,
            });
            return;
        }
        else {
            console.error("Signup error:", error);
            res.status(500).json({
                message: "Signup failed",
            });
        }
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validateData = yield userSigninSchema.parseAsync(req.body);
        const { email, password } = validateData;
        const userExist = yield User_1.userModel.findOne({ email });
        if (!userExist) {
            res.status(403).json({
                message: "User does not exist"
            });
            return;
        }
        const matchPassword = yield bcrypt_1.default.compare(password, userExist.password);
        if (!matchPassword) {
            res.status(403).json({
                message: "Incorrect Password"
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: userExist._id }, config_1.jWT_PASS);
        res.status(200).json({
            message: "User log in successfully",
            token: token
        });
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            res.status(400).json({
                message: "Validation Failed",
                errors: err.errors
            });
        }
        else {
            res.status(500).json({
                message: "Internal server error"
            });
        }
    }
});
exports.signin = signin;
