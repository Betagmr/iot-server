import { prisma } from "../../../server/db/client";;
import { NextApiRequest, NextApiResponse } from "next";

const raspberrypi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      lastUpdate,
      led,
      activator,
      alarm,
    } = req.body;

    const measure = await prisma.raspberry.create({
      data: {
        lastUpdate: new Date(lastUpdate),
        led,
        activator,
        alarm,
      },
    });

    res.status(200).json(measure);
  } else if (req.method === "GET") {
    const measures = await prisma.raspberry.findMany();
    res.status(200).json(measures);
  }
}

export default raspberrypi;