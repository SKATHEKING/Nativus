import Link from 'next/link';

const websiteSections = [
  {
    route: '/',
    title: 'Home',
    description: 'Your label landing page with a high-level overview and featured content blocks.',
  },
  {
    route: '/music',
    title: 'Music',
    description: 'Where albums, singles, and release pages will be listed and eventually playable.',
  },
  {
    route: '/artists',
    title: 'Artists',
    description: 'Showcases artist cards and now links to dynamic artist profiles using /artists/[slug].',
  },
  {
    route: '/artists/[slug]',
    title: 'Artist Profile (dynamic)',
    description: 'Each artist can have a dedicated page generated from centralized data.',
  },
  {
    route: '/support',
    title: 'Support',
    description: 'Future home for fan support: one-time tips, recurring support, and contribution options.',
  },
  {
    route: '/shop',
    title: 'Shop',
    description: 'Placeholder for merch and art sales with product cards, cart, and checkout flow.',
  },
  {
    route: '/cart',
    title: 'Cart',
    description: 'Reserved route for purchased products before checkout is implemented.',
  },
  {
    route: '/admin',
    title: 'Admin',
    description: 'Future dashboard for managing releases, artists, products, and support analytics.',
  },
  {
    route: '/documentation',
    title: 'Documentation',
    description: 'This page. A beginner guide to project structure and how to navigate the app.',
  },
  {
    route: '/music/[slug]',
    title: 'Release Detail (dynamic)',
    description: 'Release-specific page with placeholder artwork area and tracklist from shared data.',
  },
  {
    route: '/contact',
    title: 'Contact',
    description: 'Contact form connected to a local API route at /api/contact for beginner server flow practice.',
  },
];

const directories = [
  {
    name: 'src/app',
    purpose: 'Main route-based pages using Next.js App Router.',
    examples: 'page.tsx files become routes automatically (music/page.tsx -> /music).',
  },
  {
    name: 'src/components',
    purpose: 'Reusable UI building blocks used by many pages.',
    examples: 'site-header.tsx and site-footer.tsx are shared through the global layout.',
  },
  {
    name: 'src/lib',
    purpose: 'Shared content and future helper functions.',
    examples: 'content.ts holds navigation and data folders keep artists/releases in one place.',
  },
  {
    name: 'public/images',
    purpose: 'Static local assets for artwork and artist image placeholders.',
    examples: 'Use artist and release image file paths in src/lib/data to render visuals in cards/pages.',
  },
  {
    name: 'src/app/api',
    purpose: 'Server route handlers for backend logic inside Next.js.',
    examples: 'api/contact/route.ts receives and validates contact form payloads.',
  },
  {
    name: 'README.md',
    purpose: 'Project summary for collaborators and your future self.',
    examples: 'Use it to track feature goals and setup notes over time.',
  },
  {
    name: 'package.json',
    purpose: 'Project scripts and dependencies.',
    examples: 'Contains dev/build/lint scripts and packages like Next.js, Tailwind, Stripe.',
  },
  {
    name: 'tailwind.config.ts + globals.css',
    purpose: 'Design system and global styling.',
    examples: 'Defines your color variables, shadows, and base visual language.',
  },
];

const navigationTips = [
  'In App Router, folders inside src/app define URL paths.',
  'The file name page.tsx is the rendered page for that folder path.',
  'layout.tsx wraps all pages and is perfect for shared shell UI.',
  'Keep route code focused on page structure; move repeated pieces into components.',
  'Store temporary data in src/lib now, then replace with database calls later.',
  'Use folders like [slug] for dynamic pages without hardcoding every route.',
  'Use src/app/api for backend handlers when learning full-stack patterns.',
];

const beginnerChecklist = [
  'Open src/lib/data and add one new artist and one new release entry.',
  'Add matching placeholder image files in public/images/artists and public/images/releases.',
  'Visit /artists and confirm new card appears automatically.',
  'Visit /artists/<artist-slug> and /music/<release-slug> to test dynamic routes.',
  'Submit the contact form and check server response message.',
  'Replace placeholder social links and release text with real content.',
  'After that, connect contact API to email delivery (Resend) or database storage.',
];

export default function DocumentationPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Documentation</p>
        <h1 className="mt-3 font-display text-5xl text-[#fbf4eb]">Nativus website guide</h1>
        <p className="mt-4 text-base leading-8 text-fg/72">
          This is your in-site documentation hub. It explains what the website is, how pages are
          organized, and where to work in the codebase as you keep learning Next.js.
        </p>
      </div>

      <section className="mt-10 rounded-[1.8rem] border border-line bg-panel p-7 sm:p-8">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent">What this website is</h2>
        <p className="mt-4 text-sm leading-7 text-fg/72">
          Nativus is a music label platform. The long-term goal is to showcase releases and artists,
          share links, accept support, and sell merch and art. Right now it is a skeleton, which is
          ideal for learning because you can grow feature by feature while keeping structure clean.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent">Website sections</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {websiteSections.map((section) => (
            <article key={section.route} className="rounded-[1.5rem] border border-line bg-panel/85 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-fg/45">{section.route}</p>
              <h3 className="mt-2 font-display text-3xl text-[#fff6ea]">{section.title}</h3>
              <p className="mt-3 text-sm leading-7 text-fg/68">{section.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent">How to navigate directories</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {directories.map((directory) => (
            <article key={directory.name} className="rounded-[1.5rem] border border-line bg-panel/85 p-5">
              <h3 className="text-base uppercase tracking-[0.2em] text-[#fff6ea]">{directory.name}</h3>
              <p className="mt-3 text-sm leading-7 text-fg/72">{directory.purpose}</p>
              <p className="mt-2 text-sm leading-7 text-accent/90">{directory.examples}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.8rem] border border-line bg-panel p-7 sm:p-8">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent">Beginner navigation tips</h2>
        <ul className="mt-4 grid gap-3">
          {navigationTips.map((tip) => (
            <li key={tip} className="rounded-xl border border-line bg-black/15 px-4 py-3 text-sm text-fg/72">
              {tip}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-[1.8rem] border border-line bg-panel p-7 sm:p-8">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent">Next beginner tasks</h2>
        <ol className="mt-4 grid gap-3">
          {beginnerChecklist.map((step, index) => (
            <li key={step} className="rounded-xl border border-line bg-black/15 px-4 py-3 text-sm text-fg/72">
              <span className="mr-2 text-accent">{index + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-accent px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-[#1a1208]"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-line bg-white/5 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-fg transition hover:border-accent/50 hover:text-accent"
        >
          Open contact page
        </Link>
      </div>
    </div>
  );
}
