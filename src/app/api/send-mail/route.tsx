import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

async function sendMail(email: string, message: string) {
  console.log("Message => ", message);
  console.log("Email => ", email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL!,
      pass: process.env.PASSWORD!,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL!,
    to: process.env.PERSONAL_EMAIL!,
    subject: `Message from ${email}`,
    text: message,
  };
  const info = await transporter.sendMail(mailOptions);

  if (info.accepted.length > 0 && info.rejected.length === 0) {
    return true;
  } else {
    console.log("Error sending mail");
    return false;
  }
}

// hello i am looking for a free lancer can you help me with that ?

export async function POST(req: Request) {
  const data = await req.json();
  const { email, message } = data;
  console.log("Data => ", data);
  try {
    const res = await sendMail(email, message);
    if (res) {
      return NextResponse.json({
        status: 200,
        message: "Mail sent successfully",
      });
    }

    return NextResponse.json({
      status: 500,
      body: { message: "Error sending mail" },
    });
  } catch (e) {
    return NextResponse.json({
      status: 500,
      message: "Error sending mail",
    });
  }
}
