import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "src/server/db/client";

export default async function tempMeasures(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { raspberryId, temperature, humidity, timestamp } = req.body;
    const measure = await prisma.temperatureMeasure.create({
      data: {
        raspberry: {
          connect: {
            id: raspberryId,
          },
        },
        temperature,
        humidity,
        timestamp: new Date(timestamp),
      },
    });
    res.status(200).json(measure);

  } else if (req.method === "GET") {
    const measures = await prisma.temperatureMeasure.findMany();
    res.status(200).json(measures);
  }

}