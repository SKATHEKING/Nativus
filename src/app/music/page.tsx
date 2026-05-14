import Link from 'next/link';
import Image from 'next/image';

import { PageIntro } from '@/components/page-intro';
import { PanelCard } from '@/components/panel-card';
import { releases } from '@/lib/data/releases';

export default function MusicPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <PageIntro
        eyebrow="Music"
        title="Releases will live here."
        description="This page now reads from a shared release data source and links to dynamic release routes."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {releases.map((release) => (
          <PanelCard key={release.slug} title={release.title} subtitle={release.status}>
            <p className="text-sm uppercase tracking-[0.28em] text-fg/55">{release.kind}</p>
            <p className="mt-2 text-sm text-fg/70">{release.description}</p>
            <div className="mt-6 overflow-hidden rounded-[1.2rem] border border-line bg-black/20">
              <Image
                src={release.artwork}
                alt={`${release.title} placeholder cover art`}
                width={900}
                height={900}
                className="h-52 w-full object-cover"
              />
            </div>
            <Link
              href={`/music/${release.slug}`}
              className="mt-5 inline-flex text-sm uppercase tracking-[0.24em] text-accent transition hover:text-[#fff6ea]"
            >
              Open release
            </Link>
          </PanelCard>
        ))}
      </div>
      <div className="mt-10">
        <Link href="/" className="text-sm uppercase tracking-[0.25em] text-accent transition hover:text-[#fff6ea]">
          Back home
        </Link>
      </div>
    </div>
  );
}