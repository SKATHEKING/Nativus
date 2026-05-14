const supportTiers = [
  'One-time tip',
  'Monthly support',
  'Commissioned art backing',
];

export default function SupportPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">Support</p>
      <h1 className="mt-3 font-display text-5xl text-[#fbf4eb]">Help keep the music moving.</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-fg/70">
        Placeholder support page for future donations, memberships, and direct artist contributions.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {supportTiers.map((tier) => (
          <article key={tier} className="rounded-[1.8rem] border border-line bg-panel p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-accent/80">Tier</p>
            <h2 className="mt-4 font-display text-3xl text-[#fff6ea]">{tier}</h2>
            <div className="mt-6 rounded-[1.2rem] border border-dashed border-line bg-black/20 p-5 text-sm text-fg/50">
              Payment flow placeholder
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}