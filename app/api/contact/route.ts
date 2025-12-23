import { NextResponse } from "next/server"
// @ts-ignore
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    // 🔐 Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      )
    }

    // 📧 Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    /* ============================
       1️⃣ Email to Admin
    ============================= */
    await transporter.sendMail({
      from: `"Softzyne" <info@softzyne.com>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    /* ============================
       2️⃣ Confirmation Email to User
    ============================= */
    await transporter.sendMail({
      from: `"Softzyne" <info@softzyne.com>`,
      to: email,
      subject: "We received your message – Softzyne",
      html: `
        <div
          style="
            background-color: #f4f6f8;
            background-image: url('${process.env.APP_URL}/email/bg.jpg');
            background-size: cover;
            background-position: center;
            padding: 40px 20px;
            font-family: Arial, sans-serif;
          "
        >
          <div
            style="
              max-width: 600px;
              margin: 0 auto;
              background: rgba(255, 255, 255, 0.95);
              padding: 30px;
              border-radius: 8px;
            "
          >
            <h2 style="margin-top: 0;">Hi ${name},</h2>

            <p>
              Thank you for contacting <strong>Softzyne</strong>!  
              We’ve received your message and our team will get back to you shortly.
            </p>

            <hr style="margin: 20px 0;" />

            <p><strong>Your message:</strong></p>
            <p>${message}</p>

            <br />

            <p>
              Best regards,<br />
              <strong>Softzyne Team</strong>
            </p>

            <p style="font-size: 12px; color: #666;">
              📧 info@softzyne.com<br />
              🌐 ${process.env.APP_URL}
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    )
  }
}
