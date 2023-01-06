import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "POST") {
    const { activator } = req.body;
    const data = await prisma.raspberry.update({
      where: {
        id: id as string,
      },
      data: {
        activator,
      },
    });

    res.status(200).json(data);

  } else if (req.method === "GET") {
    const data = await prisma.raspberry.findUnique({
      where: {
        id: id as string,
      },
    });

    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "No data found" });
    }
  }
} 