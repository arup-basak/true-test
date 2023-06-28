import type { NextApiRequest, NextApiResponse } from 'next'

interface Respond {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Respond>
) {
    if (req.method !== "POST")
        res.status(502).json({ message: "Bad Request" })

    if (
        req.body.username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
        req.body.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
        res.status(400).json({ message: "success" })
    }
    res.status(400).json({message: "wrong-password"})
}
