import express from "express";
import { HDNodeWallet } from "ethers6";
import { MNUEMONICS } from "./config";
import { mnemonicToSeedSync } from "bip39";
import { prisma } from "./lib/prisma";

const app = express();

app.use(express.json());

const seed = mnemonicToSeedSync(MNUEMONICS);

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const userRes = await prisma.user.create({
      data: {
        username,
        password,
        depositeAddress: "",
        privateKey: "",
        balance: "0",
      },
    });
    const userId = userRes.id;

    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(`m/44'/60'/${userId}'/0`);

    const updatedUser = await prisma.user.update({
        where: { id: userRes.id },
        data: {
          depositeAddress: child.address,
          privateKey: child.privateKey
        }
      });
      

    res.json({ userId: userRes.id, address: updatedUser.depositeAddress });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Internal server error",
    });
  }
});

app.get("/depositeAddress/:userId", (req, res) => {});

app.listen(3000);
