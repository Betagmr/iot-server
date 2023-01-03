import { prisma } from "../../../server/db/client";
import { type NextApiRequest, type NextApiResponse } from "next";


const ligthMeasures = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { raspberryId, value, timestamp } = req.body;
    const measure = await prisma.ligthMeasure.create({
      data: {
        raspberry: {
          connect: {
            id: raspberryId,
          },
        },
        value,
        timestamp: new Date(timestamp),
      },
    });

    res.status(200).json(measure);
  } else if (req.method === "GET") {
    const { raspberryId } = req.body;
    const measures = await prisma.ligthMeasure.findMany(
      {
        where: {
          raspberryId
        }
      }
    );
    res.status(200).json(measures);
  }

};

export default ligthMeasures;
