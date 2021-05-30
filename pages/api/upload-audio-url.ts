import type { NextApiRequest, NextApiResponse } from "next";
import aws from "aws-sdk";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
    signatureVersion: "v4",
  });

  const s3 = new aws.S3();
  const post = await s3.createPresignedPost({
    Bucket: process.env.AUDIO_BUCKET,
    Fields: {
      key: req.query.file,
    },
    Expires: 60, // seconds
  });

  res.status(200).json(post);
}
