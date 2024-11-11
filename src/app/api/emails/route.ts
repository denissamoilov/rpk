import ConfirmEmail from "@/emails/ConfirmEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  try {
    const { token, uid, email } = await req.json();
    const host = req.headers.get("host");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Hello world",
      react: ConfirmEmail({ token, uid, host }),
    });

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error sending email: ", error });
  }
}
