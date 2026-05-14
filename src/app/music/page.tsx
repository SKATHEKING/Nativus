import Link from 'next/link';

const releases = [
  { title: 'Midnight Frequencies', kind: 'Album', status: 'Featured' },
  { title: 'Signal Bloom', kind: 'Single', status: 'New' },
  { title: 'Afterglow Study', kind: 'EP', status: 'Archive' },
];

export default function MusicPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Music</p>
        <h1 className="mt-3 font-display text-5xl text-[#fbf4eb]">Releases will live here.</h1>
        <p className="mt-4 text-base leading-8 text-fg/70">
          This page is a placeholder for albums, singles, tracklists, artwork, and streaming/download links.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {releases.map((release) => (
          <article key={release.title} className="rounded-[1.8rem] border border-line bg-panel p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-accent/80">{release.status}</p>
            <h2 className="mt-4 font-display text-3xl text-[#fff6ea]">{release.title}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-fg/45">{release.kind}</p>
            <div className="mt-6 rounded-[1.2rem] border border-dashed border-line bg-black/20 p-5 text-sm text-fg/50">
              Placeholder artwork and tracklist area
            </div>
          </article>
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