import type { NextApiRequest, NextApiResponse } from 'next'

interface Respond {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Respond>
) {
  if (req.method !== "POST") {
    console.log("bad request")
    return res.status(502).json({ message: "Bad Request" })
  }

  const username = String(process.env.NEXT_PUBLIC_ADMIN_USERNAME)
  const password = String(process.env.NEXT_PUBLIC_ADMIN_PASSWORD)

  if (
    String(req.body.username) === username &&
    String(req.body.password) === password
  ) {
    console.log("successful")
    return res.status(200).json({ message: "success" })
  }
  
  return res.status(400).json({ message: "wrong-password" })
}
