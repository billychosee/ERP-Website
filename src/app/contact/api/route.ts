import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  // Read the request body before the try block
  const body = await request.json();
  const { firstName, lastName, email, company, phone, subject, message } = body;

  // --- Enhanced Logging for Debugging ---
  console.log("--- Contact Form Submission Attempt ---");
  console.log("Request Body:", {
    firstName,
    lastName,
    email,
    company,
    phone,
    subject,
  });
  console.log("SMTP Config Check (Verify these are set in Netlify):", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    user: process.env.SMTP_USER,
    pass: "***MASKED***",
    contactEmail: process.env.CONTACT_EMAIL,
  });
  // ----------------------------------------

  try {
    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      console.error("Validation Error: Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // IMPORTANT: Turn on logging for debugging connection failures
      logger: true,
      debug: true,
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || email,
      to: process.env.CONTACT_EMAIL || "info@smatechgroup.com",
      subject: `Zerp Contact Form: ${subject} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8DC440;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact Details:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent from the ZERP365 contact form.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to user
    if (process.env.SEND_CONFIRMATION === "true") {
      const confirmationMailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: "Thank you for contacting ZERP365",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8DC440;">Thank you for contacting ZERP365</h2>
            <p>Dear ${firstName} ${lastName},</p>
            <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
            <p><strong>Your message:</strong></p>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
            <p>Best regards,<br>The ZERP365 Team</p>
          </div>
        `,
      };
      await transporter.sendMail(confirmationMailOptions);
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    // --- Crucial: Log the full error object for Netlify debugging ---
    console.error("--- FATAL Email Sending Error ---");
    console.error("Full Error Object:", error);

    let errorMessage = "Failed to send email. Check SMTP credentials.";
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "EAUTH"
    ) {
      errorMessage =
        "SMTP Authentication failed. Double-check USER and PASS credentials.";
    } else if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ETIMEDOUT"
    ) {
      errorMessage = "SMTP Connection timed out. Check HOST and PORT settings.";
    } else if (error instanceof Error) {
      errorMessage = `Failed to send email: ${error.message}`;
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
