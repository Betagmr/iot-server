import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

const ligthMeasures = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { value, timestamp } = req.body;
    const measure = await prisma.ligthMeasures.create({
      data: {
        value,
        timestamp: new Date(timestamp),
      },
    });
    res.status(200).json(measure); 
    
  } else {
    const measures = await prisma.ligthMeasures.findMany();
    res.status(200).json(measures);
  }
  
};

export default ligthMeasures;
