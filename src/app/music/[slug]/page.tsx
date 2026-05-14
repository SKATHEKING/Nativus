import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { PageIntro } from '@/components/page-intro';
import { getReleaseBySlug } from '@/lib/data/releases';

type ReleaseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Readonly<ReleaseDetailPageProps>): Promise<Metadata> {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);

  if (!release) {
    return {
      title: 'Release Not Found | Nativus',
      description: 'The requested release page could not be found.',
    };
  }

  return {
    title: `${release.title} | Nativus`,
    description: release.description,
  };
}

export default async function ReleaseDetailPage({ params }: Readonly<ReleaseDetailPageProps>) {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);

  if (!release) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <PageIntro
        eyebrow={`${release.kind} / ${release.year}`}
        title={release.title}
        description={release.description}
      >
        <Link href={`/artists/${release.artistSlug}`} className="text-sm uppercase tracking-[0.25em] text-accent transition hover:text-[#fff6ea]">
          By {release.artistName}
        </Link>
      </PageIntro>

      <section className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(135deg,rgba(232,193,122,0.25),rgba(255,255,255,0.04))] p-2">
          <Image
            src={release.artwork}
            alt={`${release.title} placeholder cover art`}
            width={1200}
            height={1200}
            className="h-full min-h-[420px] w-full rounded-[1.4rem] object-cover"
          />
        </div>

        <div className="rounded-[2rem] border border-line bg-panel p-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent">Tracklist</h2>
          <ol className="mt-5 grid gap-3">
            {release.tracks.map((track, index) => (
              <li key={track} className="flex items-center gap-4 rounded-xl border border-line bg-black/15 px-4 py-3 text-sm text-fg/75">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-line text-xs text-fg/70">
                  {index + 1}
                </span>
                <span>{track}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-7 text-fg/65">
            Audio streaming and downloads are next. This page is now wired to central release data and dynamic routes.
          </p>
        </div>
      </section>
    </div>
  );
}
