import { NextApiRequest, NextApiResponse } from "next";

import { SendEmailPayload } from "~/utils/api";
import { sendEmail } from "~/utils/email";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { name, email, content } = JSON.parse(req.body) as SendEmailPayload;

  await sendEmail({
    to: process.env.SMTP_DESTINATION || "",
    subject: `[Portfolio] Contact email received from ${name} - Contact email: ${email}`,
    text: content,
  });

  return res.status(200).json({ message: "Email succesfully sent." });
}
