"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodvalidation = void 0;
exports.random = random;
const zod_1 = require("zod");
function random(len) {
    let options = "qwertyuiopasdfghjklmnbvcxz12345678";
    let length = options.length;
    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += options[Math.floor((Math.random() * length))];
    }
    return ans;
}
exports.userZodvalidation = zod_1.z.object({
    username: zod_1.z.string().min(1, { message: "username is required" }),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    confirmPassword: zod_1.z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password must match!",
    path: ["confirmPassword"]
});
