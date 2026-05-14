import Link from 'next/link';
import type { ReactNode } from 'react';
import Image from 'next/image';

import { artists } from '@/lib/data/artists';
import { releases } from '@/lib/data/releases';
import { featuredRelease, storeHighlights } from '@/lib/content';

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
          <Link href={`/music/${featuredRelease.slug}`} className="block">
            <div className="mt-4 aspect-square overflow-hidden rounded-[1.5rem] border border-line bg-[linear-gradient(135deg,rgba(232,193,122,0.28),rgba(255,255,255,0.04))] p-2 transition hover:border-accent/50">
              <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-white/10">
                <Image
                  src="/images/releases/midnight-frequencies.svg"
                  alt="Featured release placeholder cover art"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,8,7,0.82),rgba(11,8,7,0.18))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-sm uppercase tracking-[0.35em] text-fg/75">{featuredRelease.type}</span>
                  <h2 className="mt-2 font-display text-4xl text-[#fff6ea]">{featuredRelease.title}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-accent/85">{featuredRelease.artist}</p>
                </div>
              </div>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-7 text-fg/68">{featuredRelease.description}</p>
        </div>
      </section>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <SectionCard title="Featured artists">
          <div className="space-y-4">
            {artists.map((artist) => (
              <article key={artist.slug} className="rounded-[1.4rem] border border-line bg-black/15 p-4">
                <div className="mb-4 overflow-hidden rounded-xl border border-line">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} placeholder portrait`}
                    width={900}
                    height={900}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent">{artist.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-fg/45">{artist.focus}</p>
                <p className="mt-3 text-sm leading-6 text-fg/68">{artist.bio}</p>
                <Link
                  href={`/artists/${artist.slug}`}
                  className="mt-3 inline-flex text-xs uppercase tracking-[0.2em] text-accent transition hover:text-[#fff6ea]"
                >
                  View profile
                </Link>
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

      <section className="mt-8 rounded-[2rem] border border-line bg-panel/80 p-6 shadow-glow backdrop-blur sm:p-8">
        <h2 className="text-xs uppercase tracking-[0.35em] text-accent/90">Latest releases</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {releases.map((release) => (
            <Link key={release.slug} href={`/music/${release.slug}`} className="rounded-xl border border-line bg-black/15 p-4 transition hover:border-accent/60">
              <div className="mb-3 overflow-hidden rounded-lg border border-line">
                <Image
                  src={release.artwork}
                  alt={`${release.title} placeholder cover art`}
                  width={900}
                  height={900}
                  className="h-36 w-full object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent/85">{release.status}</p>
              <h3 className="mt-2 font-display text-2xl text-[#fff6ea]">{release.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-fg/55">{release.kind}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}