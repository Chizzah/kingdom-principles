import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import prisma from "../../lib/prisma";

const handler = nc()
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const podcasts = await prisma.podcasts.findMany();
    res.json(podcasts);
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const data = JSON.parse(req.body);
    console.log(data);
    const UploadEpisode = await prisma.podcasts.create({
      data,
    });

    res.json(UploadEpisode);
  })
  .put(async (req: NextApiRequest, res: NextApiResponse) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  })
  .patch(async (req: NextApiRequest, res: NextApiResponse) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;
