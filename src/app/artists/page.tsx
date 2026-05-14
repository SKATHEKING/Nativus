const artists = [
  { name: 'Aurelle', focus: 'Producer / Vocalist' },
  { name: 'Kairo Moss', focus: 'DJ / Curator' },
  { name: 'Sola Vert', focus: 'Visual Artist' },
];

export default function ArtistsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">Artists</p>
      <h1 className="mt-3 font-display text-5xl text-[#fbf4eb]">Featured artists and collaborators.</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-fg/70">
        This section will eventually show full artist profiles, bios, links, and discographies.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {artists.map((artist) => (
          <article key={artist.name} className="rounded-[1.8rem] border border-line bg-panel p-6">
            <div className="h-48 rounded-[1.2rem] border border-dashed border-line bg-black/20" />
            <h2 className="mt-5 font-display text-3xl text-[#fff6ea]">{artist.name}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-accent/85">{artist.focus}</p>
          </article>
        ))}
      </div>
    </div>
  );
}