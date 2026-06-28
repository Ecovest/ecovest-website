import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }

    // TODO: wire to Mailchimp / ConvertKit / Resend / Supabase
    console.log("[waitlist] new signup:", email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }
}
