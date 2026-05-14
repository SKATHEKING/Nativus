import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { PageIntro } from '@/components/page-intro';
import { PanelCard } from '@/components/panel-card';
import { getArtistBySlug } from '@/lib/data/artists';
import { getReleasesByArtistSlug } from '@/lib/data/releases';

type ArtistDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Readonly<ArtistDetailPageProps>): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    return {
      title: 'Artist Not Found | Nativus',
      description: 'The requested artist profile could not be found.',
    };
  }

  return {
    title: `${artist.name} | Nativus Artists`,
    description: artist.bio,
  };
}

export default async function ArtistDetailPage({ params }: Readonly<ArtistDetailPageProps>) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  const artistReleases = getReleasesByArtistSlug(artist.slug);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <PageIntro
        eyebrow="Artist Profile"
        title={artist.name}
        description={`${artist.focus}. ${artist.bio}`}
      >
        <div className="flex flex-wrap gap-2">
          {artist.genres.map((genre) => (
            <span key={genre} className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-fg/70">
              {genre}
            </span>
          ))}
        </div>
      </PageIntro>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        <PanelCard title="Profile image">
          <div className="overflow-hidden rounded-[1.2rem] border border-line bg-black/20">
            <Image
              src={artist.image}
              alt={`${artist.name} placeholder portrait`}
              width={1000}
              height={1000}
              className="h-80 w-full object-cover"
            />
          </div>
        </PanelCard>

        <PanelCard title="Social links">
          <div className="grid gap-3 text-sm text-fg/75">
            {Object.entries(artist.links).map(([platform, href]) => (
              <a key={platform} href={href} className="rounded-lg border border-line bg-black/15 px-4 py-3 capitalize transition hover:border-accent/60" target="_blank" rel="noreferrer">
                {platform}
              </a>
            ))}
          </div>
        </PanelCard>

        <div className="rounded-[1.8rem] border border-line bg-panel p-6 lg:col-span-3">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent">Discography</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {artistReleases.length ? (
              artistReleases.map((release) => (
                <Link
                  key={release.slug}
                  href={`/music/${release.slug}`}
                  className="rounded-xl border border-line bg-black/15 p-4 transition hover:border-accent/60"
                >
                  <div className="overflow-hidden rounded-lg border border-line">
                    <Image
                      src={release.artwork}
                      alt={`${release.title} placeholder cover art`}
                      width={800}
                      height={800}
                      className="h-40 w-full object-cover"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent/85">{release.kind}</p>
                  <p className="mt-2 font-display text-2xl text-[#fff6ea]">{release.title}</p>
                  <p className="mt-2 text-sm text-fg/70">{release.year}</p>
                </Link>
              ))
            ) : (
              <p className="text-sm text-fg/70">No releases mapped to this artist yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
