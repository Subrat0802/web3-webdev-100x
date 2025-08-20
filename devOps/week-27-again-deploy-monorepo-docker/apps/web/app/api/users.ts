import { prismaCLient } from "db/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = prismaCLient;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}
