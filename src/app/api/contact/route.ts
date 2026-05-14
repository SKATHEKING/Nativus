import { NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: body.name?.trim() ?? '',
      email: body.email?.trim() ?? '',
      subject: body.subject?.trim() ?? '',
      message: body.message?.trim() ?? '',
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json({ success: false, message: 'Please enter a valid email.' }, { status: 400 });
    }

    // Placeholder handling for learning flow. Replace with DB insert or email service later.
    console.info('[Nativus contact form]', payload);

    return NextResponse.json({
      success: true,
      message: 'Message received. This is currently a placeholder API response.',
    });
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request payload.' }, { status: 400 });
  }
}
