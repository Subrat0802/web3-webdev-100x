"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSigninValidation = exports.UserValidation = void 0;
const zod_1 = require("zod");
exports.UserValidation = zod_1.z.object({
    email: zod_1.z.string().email(),
    username: zod_1.z.string().min(3),
    password: zod_1.z.string().min(6).max(25),
    confirmPassword: zod_1.z.string().min(6).max(25)
});
exports.userSigninValidation = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6).max(25),
});
