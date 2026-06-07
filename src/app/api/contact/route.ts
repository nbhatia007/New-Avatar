import { NextResponse } from "next/server";
import { Resend } from "resend";
import Airtable from "airtable";

const resend = new Resend(process.env.RESEND_API_KEY);

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function POST(req: Request) {
  const { name, email, phone, inquiryType, message } = await req.json();

  if (!name || !email || !inquiryType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Write to Airtable
    await base("Contacts").create([
      {
        fields: {
          Name: name,
          Email: email,
          Phone: phone || "",
          "Inquiry Type": inquiryType,
          Message: message || "",
          Source: "Portfolio Website",
          "Created At": new Date().toISOString(),
        },
      },
    ]);

    // Send confirmation to visitor
    await resend.emails.send({
      from: "Naveen Bhatia <noreply@naveenbhatia.com>",
      to: email,
      subject: "Thanks for reaching out — Naveen Bhatia",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #0A1628; color: #ffffff; padding: 40px 32px;">
          <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 20px; margin-bottom: 28px;">
            <p style="color: #C9A84C; font-size: 13px; font-weight: bold; letter-spacing: 0.1em; margin: 0 0 8px;">NAVEEN BHATIA</p>
            <p style="color: #9CA3AF; font-size: 11px; margin: 0;">Entrepreneur · Operator · Investor · Transformation Leader</p>
          </div>
          <h2 style="color: #ffffff; font-size: 22px; margin: 0 0 16px;">Thanks for reaching out, ${name}.</h2>
          <p style="color: #D1D5DB; font-size: 15px; line-height: 1.6; margin: 0 0 16px;">
            I've received your message regarding <strong style="color: #C9A84C;">${inquiryType}</strong> and will get back to you shortly.
          </p>
          <p style="color: #D1D5DB; font-size: 15px; line-height: 1.6; margin: 0 0 28px;">
            In the meantime, feel free to connect with me on LinkedIn or reply to this email directly.
          </p>
          <div style="border-top: 1px solid #162845; padding-top: 20px;">
            <p style="color: #6B7280; font-size: 12px; margin: 0;">Building Growth With Clarity & Purpose</p>
            <p style="color: #6B7280; font-size: 12px; margin: 4px 0 0;">Triangle, NC</p>
          </div>
        </div>
      `,
    });

    // Send notification to Naveen
    await resend.emails.send({
      from: "Portfolio Site <noreply@naveenbhatia.com>",
      to: process.env.NOTIFY_EMAIL!,
      subject: `New ${inquiryType} inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 560px;">
          <h2>New Contact Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #6B7280;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #6B7280;">Email</td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #6B7280;">Phone</td><td style="padding: 8px;">${phone || "—"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #6B7280;">Inquiry</td><td style="padding: 8px;">${inquiryType}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #6B7280;">Message</td><td style="padding: 8px;">${message || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
