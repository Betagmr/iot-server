import { prisma } from "src/server/db/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { raspberryId, content, type } = req.body;
    const data = await prisma.message.create({
      data: {
        raspberryId,
        content,
        type,
      },
    });
    res.status(200).json(data);

  } else if (req.method === "GET") {
    const data = await prisma.message.findMany();
    res.status(200).json(data);

  } else if (req.method === "DELETE") {
    await prisma.message.deleteMany();
    res.status(200).json({ message: "All messages deleted" });
  }
}

