import { NextResponse } from "next/server";

// Placeholder API route. It currently just validates and logs the
// submission server-side. Wire this up to a real email service (e.g.
// Resend, Postmark, SendGrid) or a database before deploying, so
// messages actually reach you.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: replace with a real email/notification integration.
    console.log("New portfolio contact submission:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
