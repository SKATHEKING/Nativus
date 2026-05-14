const panels = ['Releases', 'Artists', 'Products', 'Support'];

export default function AdminPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">Admin</p>
      <h1 className="mt-3 font-display text-5xl text-[#fbf4eb]">Admin dashboard skeleton.</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-fg/70">
        This is the future place for upload forms, release management, merch inventory, and support analytics.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {panels.map((panel) => (
          <article key={panel} className="rounded-[1.6rem] border border-line bg-panel p-6 text-sm text-fg/60">
            {panel} management placeholder
          </article>
        ))}
      </div>
    </div>
  );
}