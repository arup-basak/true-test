import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    if (req.method !== "POST") {
      res.status(400).json({ message: "Bad request" });
      return;
    }

    const { to, subject, message } = req.body;

    const EMAIL = process.env.NEXT_PUBLIC_EMAIL;
    const EMAIL_PASSWORD = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

    const transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: EMAIL,
      to,
      subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ response: true });
  } catch (error) {
    res.status(500).json({ response: false });
  }
}
