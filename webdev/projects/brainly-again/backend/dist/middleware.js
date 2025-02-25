"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const confg_1 = require("./confg");
const userMiddleware = (req, res, next) => {
    try {
        const header = req.headers["authorization"];
        const decode = jsonwebtoken_1.default.verify(header, confg_1.JWT_PASS);
        if (decode) {
            // @ts-ignore
            req.userId = decode.id;
            next();
        }
        else {
            res.json({
                message: "You are not logged in"
            });
        }
    }
    catch (err) {
        res.json({
            message: "Middleware wrong credential"
        });
    }
};
exports.userMiddleware = userMiddleware;
