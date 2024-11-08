import { NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  try {
    const { token, email } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Hello world",
      text: `Hello world ${token}`,
    });

    return Response.json({ message: "Email sent successfully" });

    // res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error sending email: ", error });
  }
}
