const items = ['Limited tees', 'Poster prints', 'Vinyl editions'];

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">Shop</p>
      <h1 className="mt-3 font-display text-5xl text-[#fbf4eb]">Merch and art for sale.</h1>
      <p className="mt-4 max-w-3xl text-base leading-8 text-fg/70">
        Placeholder store area for future product cards, checkout flows, and art editions.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="rounded-[1.8rem] border border-line bg-panel p-6">
            <div className="aspect-square rounded-[1.2rem] border border-dashed border-line bg-black/20" />
            <h2 className="mt-5 font-display text-3xl text-[#fff6ea]">{item}</h2>
            <p className="mt-2 text-sm text-fg/60">Product details, price, and checkout will appear here.</p>
          </article>
        ))}
      </div>
    </div>
  );
}