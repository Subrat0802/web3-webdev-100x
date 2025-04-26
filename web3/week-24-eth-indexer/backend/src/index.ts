import express from "express";
import pg from "pg";
import {HDNodeWallet, Wallet} from "ethers6";
import { mnemonicToSeedSync } from "bip39";
import { MNUEMONICS } from "./config";

const seed = mnemonicToSeedSync(MNUEMONICS);

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userId = 1;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(`m/44'/60'/${userId}'/0`);

    console.log(child);
    res.json({
        userId
    })
})

app.get("/depositeAddress/:userId", (req, res) => {
    
})

app.listen(3000);