import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const formType =
      formData.pathname?.includes("/vertex-solutions")
        ? "solutions"
        : "location";

    // LABELS BASED ON PATH
    const inquiryLabel = formType === "solutions" ? "Solution" : "Location";
    const formTitle =
      formType === "solutions"
        ? "Vertex Solutions"
        : "Private Office";

    // 1. Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 2. Admin Notification Email
    const adminMail = {
      from: "Vertex Workspace",
      to: "hashimhx3@gmail.com",
      subject: `New ${formTitle} Form Submission`,
      text: `
      You have a new enquiry from ${formTitle}.
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        ${inquiryLabel}: ${formData.location}
        Company: ${formData.company}
        Team Size: ${formData.teamSize}
        Description: ${formData.description}
      `,
    };

    // 3. User Confirmation Email (your new template)
    const userMail = {
      from: "Vertex Workspace",
      to: formData.email,
      subject: `Thank you for contacting Vertex Workspaces!`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vertex Workspaces</title>
</head>

<body style="margin: 0; padding: 0; background: #f5f5f5; font-family: Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="30" cellspacing="0" style="background: #ffffff; border-radius: 8px;">
          
          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom: 10px;">
              <img src="https://bookings.vertexworkspace.com/icon.png" width="180" alt="Vertex Workspaces" />
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="font-size: 16px; color: #333;">
              
              <p>Hi <strong>${formData?.name}</strong>,</p>

              <p>
                Thank you for your interest in <strong>Vertex Workspaces!</strong><br />
                We are happy to help you find your ideal professional setup.
              </p>

              <p>Here are the key highlights of what Vertex offers:</p>

              <ul style="padding-left: 20px; line-height: 1.7;">
                <li><strong>Premium & Ergonomic</strong>: Modern coworking environment with comfortable setups.</li>
                <li><strong>Always On</strong>: 24/7 access, high-speed internet, and reliable power backup.</li>
                <li><strong>Collaborative Zones</strong>: Dedicated meeting rooms and conference areas.</li>
                <li><strong>Prime Location</strong>: Easy connectivity for you and your clients.</li>
              </ul>

              <p style="margin-top: 20px;">
                Ready to see the space?<br />
                Schedule your <strong>free site visit</strong> today to explore the environment in person.
              </p>

              <!-- Button -->
<p style="text-align: center; margin: 30px 0;">
  <a
    href="https://wa.me/9611730555"
    style="
      background: #0097dc;
      color: #fff;
      padding: 12px 28px;
      text-decoration: none;
      border-radius: 6px;
      font-size: 16px;
      display: inline-block;
    "
    target="_blank"
  >
    Chat on WhatsApp
  </a>
</p>

              <p style="margin-top: 30px;">
                Best Regards,<br />
                <strong>Vertex Team</strong>
              </p>

            </td>
          </tr>
        </table>

        <!-- Footer -->
        <p style="margin-top: 15px; font-size: 12px; color: #666;">
          © Vertex Workspaces • Mangaluru
        </p>

      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    // 4. Send Emails
    // await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, message: "Email sending failed", error });
  }
}
