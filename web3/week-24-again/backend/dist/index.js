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
const ethers6_1 = require("ethers6");
const config_1 = require("./config");
const bip39_1 = require("bip39");
const prisma_1 = require("./lib/prisma");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const seed = (0, bip39_1.mnemonicToSeedSync)(config_1.MNUEMONICS);
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const userRes = yield prisma_1.prisma.user.create({
            data: {
                username,
                password,
                depositeAddress: "",
                privateKey: "",
                balance: "0",
            },
        });
        const userId = userRes.id;
        const hdNode = ethers6_1.HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(`m/44'/60'/${userId}'/0`);
        const updatedUser = yield prisma_1.prisma.user.update({
            where: { id: userRes.id },
            data: {
                depositeAddress: child.address,
                privateKey: child.privateKey
            }
        });
        res.json({ userId: userRes.id, address: updatedUser.depositeAddress });
    }
    catch (error) {
        res.status(500).json({
            error,
            message: "Internal server error",
        });
    }
}));
app.get("/depositeAddress/:userId", (req, res) => { });
app.listen(3000);
