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

  const { file } = req.query;

  const signedUrlParams = {
    Bucket: process.env.AUDIO_BUCKET,
    Key: file,
  };

  const objectUrl = await s3.getSignedUrl("getObject", signedUrlParams);
  res.send(JSON.stringify(objectUrl));
}
