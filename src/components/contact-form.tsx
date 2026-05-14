'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setFormState((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as { success: boolean; message: string };

      if (!response.ok || !data.success) {
        setStatusMessage(data.message || 'Something went wrong while sending your message.');
        return;
      }

      setStatusMessage(data.message);
      setFormState(initialState);
    } catch {
      setStatusMessage('Unable to send message right now. Try again in a moment.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="grid gap-5" aria-label="Contact Nativus" onSubmit={onSubmit}>
      <label className="grid gap-2 text-sm text-fg/80">
        Name
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={(event) => updateField('name', event.target.value)}
          placeholder="Your name"
          className="rounded-xl border border-line bg-black/20 px-4 py-3 text-sm text-fg placeholder:text-fg/40 focus:border-accent/70 focus:outline-none"
        />
      </label>

      <label className="grid gap-2 text-sm text-fg/80">
        Email
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={(event) => updateField('email', event.target.value)}
          placeholder="you@example.com"
          className="rounded-xl border border-line bg-black/20 px-4 py-3 text-sm text-fg placeholder:text-fg/40 focus:border-accent/70 focus:outline-none"
        />
      </label>

      <label className="grid gap-2 text-sm text-fg/80">
        Subject
        <input
          type="text"
          name="subject"
          value={formState.subject}
          onChange={(event) => updateField('subject', event.target.value)}
          placeholder="What is this about?"
          className="rounded-xl border border-line bg-black/20 px-4 py-3 text-sm text-fg placeholder:text-fg/40 focus:border-accent/70 focus:outline-none"
        />
      </label>

      <label className="grid gap-2 text-sm text-fg/80">
        Message
        <textarea
          name="message"
          rows={6}
          value={formState.message}
          onChange={(event) => updateField('message', event.target.value)}
          placeholder="Tell us more"
          className="rounded-xl border border-line bg-black/20 px-4 py-3 text-sm text-fg placeholder:text-fg/40 focus:border-accent/70 focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={isSending}
        className="w-fit rounded-full bg-accent px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#1a1208] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? 'Sending...' : 'Send message'}
      </button>

      {statusMessage ? (
        <p className="rounded-xl border border-line bg-black/20 px-4 py-3 text-sm text-fg/75">{statusMessage}</p>
      ) : null}
    </form>
  );
}
