// app/api/send-db/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    

    const dbUrl = process.env.NEXT_PUBLIC_DB_API_URL;

    if (!dbUrl) {
      console.error("❌ DB_API_URL is missing!");
      return NextResponse.json({ error: "DB_API_URL missing" }, { status: 500 });
    }

    const apiResponse = await fetch(dbUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await apiResponse.text(); // parse as text to avoid JSON errors

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("❌ SERVER ERROR:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
