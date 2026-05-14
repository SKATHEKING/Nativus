import Link from 'next/link';
import type { ReactNode } from 'react';

import { featuredArtists, featuredRelease, storeHighlights } from '@/lib/content';

function SectionCard({ title, children }: Readonly<{ title: string; children: ReactNode }>) {
  return (
    <section className="rounded-[2rem] border border-line bg-panel/80 p-6 shadow-glow backdrop-blur sm:p-8">
      <h2 className="text-xs uppercase tracking-[0.35em] text-accent/90">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="space-y-7">
          <p className="text-sm uppercase tracking-[0.4em] text-accent">Music label / artist platform</p>
          <div className="max-w-3xl space-y-5">
            <h1 className="font-display text-5xl leading-none tracking-tight text-[#fbf4eb] sm:text-6xl lg:text-8xl">
              Nativus is a home for releases, artists, support, and art.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-fg/72 sm:text-lg">
              This is the first skeleton version of the site. It is intentionally designed to grow into a label homepage,
              music archive, merch store, and supporter hub without needing to rebuild the foundation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/music"
              className="rounded-full bg-accent px-5 py-3 text-sm font-medium uppercase tracking-[0.25em] text-[#18120d] transition hover:-translate-y-0.5"
            >
              Browse music
            </Link>
            <Link
              href="/artists"
              className="rounded-full border border-line bg-white/5 px-5 py-3 text-sm font-medium uppercase tracking-[0.25em] text-fg transition hover:border-accent/50 hover:text-accent"
            >
              Featured artists
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-accent/25 bg-[#18120d] p-6 shadow-glow">
          <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Featured release</p>
          <div className="mt-4 aspect-square rounded-[1.5rem] border border-line bg-[linear-gradient(135deg,rgba(232,193,122,0.28),rgba(255,255,255,0.04))] p-6">
            <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_55%)] p-5">
              <span className="text-sm uppercase tracking-[0.35em] text-fg/50">{featuredRelease.type}</span>
              <div>
                <h2 className="font-display text-4xl text-[#fff6ea]">{featuredRelease.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-accent/85">{featuredRelease.artist}</p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-fg/68">{featuredRelease.description}</p>
        </div>
      </section>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Featured artists">
          <div className="space-y-4">
            {featuredArtists.map((artist) => (
              <article key={artist.name} className="rounded-[1.4rem] border border-line bg-black/15 p-4">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">{artist.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-fg/45">{artist.role}</p>
                <p className="mt-3 text-sm leading-6 text-fg/68">{artist.bio}</p>
              </article>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Support">
          <p className="text-sm leading-7 text-fg/70">
            Add future ways for fans to support the label with one-time tips, memberships, and direct contributions.
          </p>
          <div className="mt-5 grid gap-3">
            {['One-time support', 'Monthly membership', 'Direct artist funding'].map((item) => (
              <div key={item} className="rounded-full border border-line bg-white/5 px-4 py-3 text-sm text-fg/70">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Merch and art">
          <div className="space-y-3 text-sm leading-7 text-fg/70">
            {storeHighlights.map((item) => (
              <p key={item} className="rounded-xl border border-line bg-white/5 px-4 py-3">
                {item}
              </p>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}