import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const dbUrl = process.env.NEXT_PUBLIC_DB_API_URL;
    // Hardcoded Accelr Webhook URL as per your request
    const accelrWebhookUrl = process.env.ACCELR_WEBHOOK_URL;



    
  if (!accelrWebhookUrl) {
    console.error("❌ ACCELR_WEBHOOK_URL is missing");
    return NextResponse.json(
      { success: false, message: "Webhook not configured" },
      { status: 500 }
    );
  }

    // ---------------------------------------------------------
    // 1. Send to Existing DB API (Original Functionality)
    // ---------------------------------------------------------
    if (!dbUrl) {
      console.error("❌ DB_API_URL is missing!");
      return NextResponse.json({ error: "DB_API_URL missing" }, { status: 500 });
    }

    // We use a try/catch specifically for the DB call to ensure it doesn't block the webhook if it fails, or vice versa
    try {
      const apiResponse = await fetch(dbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // We consume the text to ensure the stream is closed, but we don't necessarily need to return it immediately
      await apiResponse.text(); 
    } catch (dbError) {
      console.error("❌ DB API failed:", dbError);
    }

    // ---------------------------------------------------------
    // 2. Send to Accelr Webhook (New Functionality)
    // ---------------------------------------------------------
    try {
      // Logic to split the single "fname" (Full Name) from frontend into First/Last for Webhook
      const fullName = body.fname || "";
      const nameParts = fullName.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || ""; // Joins the rest as last name

      // Construct payload dynamically merging static fields with captured query params
      const accelrPayload = {
        first_name: firstName,
        last_name: lastName,
        email: body.email,
        phone: body.phone,
        source: body.source,
        page_url: body.page_url, // Passed from frontend
        company_name: body.company_name,
        team_size: body.team_size,
        description: body.description,
        // DYNAMIC: Spread captured query parameters (utm_source, etc. from URL passed from frontend)
        ...(body.queryParams || {}), 
      };

      console.log("📤 Sending to Accelr:", JSON.stringify(accelrPayload, null, 2));

      const accelrResponse = await fetch(accelrWebhookUrl!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(accelrPayload),
      });

      if (!accelrResponse.ok) {
        const errorText = await accelrResponse.text();
        console.error("❌ Accelr Webhook Error:", accelrResponse.status, errorText);
      } else {
        console.log("✅ Accelr Webhook Success: 200 OK");
      }
      
    } catch (webhookError) {
      console.error("❌ Accelr Webhook failed:", webhookError);
    }

    // Return success if code reaches here
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ SERVER ERROR:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}