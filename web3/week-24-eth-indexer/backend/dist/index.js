"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ethers6_1 = require("ethers6");
const bip39_1 = require("bip39");
const config_1 = require("./config");
const seed = (0, bip39_1.mnemonicToSeedSync)(config_1.MNUEMONICS);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userId = 1;
    const hdNode = ethers6_1.HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(`m/44'/60'/${userId}'/0`);
    console.log(child);
    res.json({
        userId
    });
});
app.get("/depositeAddress/:userId", (req, res) => {
});
app.listen(3000);
