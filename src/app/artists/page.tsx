import Link from 'next/link';
import Image from 'next/image';

import { PageIntro } from '@/components/page-intro';
import { PanelCard } from '@/components/panel-card';
import { artists } from '@/lib/data/artists';

export default function ArtistsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <PageIntro
        eyebrow="Artists"
        title="Featured artists and collaborators."
        description="This section now uses centralized artist data and links to dynamic profile pages."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {artists.map((artist) => (
          <PanelCard key={artist.slug} title={artist.name} subtitle={artist.focus}>
            <div className="overflow-hidden rounded-[1.2rem] border border-line bg-black/20">
              <Image
                src={artist.image}
                alt={`${artist.name} placeholder portrait`}
                width={900}
                height={900}
                className="h-44 w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-7 text-fg/70">{artist.bio}</p>
            <Link
              href={`/artists/${artist.slug}`}
              className="mt-5 inline-flex text-sm uppercase tracking-[0.24em] text-accent transition hover:text-[#fff6ea]"
            >
              Open profile
            </Link>
          </PanelCard>
        ))}
      </div>
    </div>
  );
}