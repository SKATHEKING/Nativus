import { ContactForm } from '@/components/contact-form';
import { PageIntro } from '@/components/page-intro';

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8">
      <PageIntro
        eyebrow="Contact"
        title="Get in touch with Nativus"
        description="Use this form for collaboration requests, booking, press inquiries, and general support messages."
      />

      <div className="mt-10 rounded-[1.8rem] border border-line bg-panel p-7 sm:p-8">
        <ContactForm />
      </div>

      <div className="mt-8 rounded-[1.4rem] border border-line bg-black/15 p-5 text-sm leading-7 text-fg/70">
        The form now posts to a local API route at /api/contact and validates input.
        Next upgrade is connecting this route to an email or database provider.
      </div>
    </div>
  );
}
