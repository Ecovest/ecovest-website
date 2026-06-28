import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, topic, message } = await req.json();

    if (!name || !email || !topic || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email." },
        { status: 400 },
      );
    }

    // TODO: forward to email service (Resend / Postmark) or store in DB
    console.log("[contact] new message:", { name, email, topic, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 },
    );
  }
}
