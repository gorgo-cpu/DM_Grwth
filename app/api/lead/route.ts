import { NextResponse } from "next/server";

import { leadFormSchema } from "@/lib/validations";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = leadFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, company, message } = parsed.data;

  const smtpUser = process.env.GMAIL_USER;
  const smtpPass = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.TO_EMAIL ?? smtpUser;
  const fromEmail = process.env.FROM_EMAIL ?? smtpUser;

  if (!smtpUser || !smtpPass || !toEmail || !fromEmail) {
    console.error("Missing email environment variables");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `[DM Growth Lead] ${name} — ${company}`;
  const textBody = `Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}`;

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      text: textBody,
    });
  } catch (error) {
    console.error("Failed to send lead email", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
