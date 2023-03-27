// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("req.query ", req.query);
  console.log("req.env", req.env);
  console.log("req.body", req.body);
  console.log("req.previewData ", req.previewData);
  res.status(200).json( {name:'hello' });
}
