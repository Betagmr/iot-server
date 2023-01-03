import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
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