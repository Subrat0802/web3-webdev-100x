const express = require("express");
const { userModel } = require("./models");
import {Transaction, Connection, PublicKey, SystemProgram, LAMPORTS_PER_SOL} from "@solana/web3.js"
const { Keypair } = require("@solana/web3.js");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const JWT_SECRET = "subrat08"

const connection = new Connection("https://solana-mainnet.g.alchemy.com/v2/yBzlkWFR7LyZlmSKMjCBgTJEYK9LIktp");

app.post("/api/v1/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const keyPair = new Keypair();

    await userModel.create({
      username,
      password,
      publicKey: keyPair.publicKey.toString(),
      privateKey: keyPair.secretKey.toString(),
    });

    res.json({
      message: keyPair.publicKey.toString(),
    });
  } catch (err) {
    res.json({
      message: "Error while signup",
    });
  }
});

app.post("/spi/v1/signin", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({ username });

  if (user) {
    const token = jwt.sign({
        id:user._id,

    }, JWT_SECRET)
    res.json({
        token:token
    })
  } else {
    res.json({
      message: "credentials are incorrect",
    });
  }
});

app.post("/spi/v1/txn/sign", async (req, res) => {
  const serializedTransaction = req.body.message;
  const tx = Transaction.from(serializedTransaction)
  
  const keyPair = new Keypair();
  tx.sign(keyPair)

  await connection.sendTransaction(tx);

  res.json({
    message: "txn Sign in",
  });
});

app.get("/spi/v1/txn", (req, res) => {
  res.json({
    message: "txn",
  });
});

app.listen(3000);
