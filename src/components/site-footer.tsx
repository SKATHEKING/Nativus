import Link from 'next/link';

import { navigation } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-[#0f0b08]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-accent">Nativus</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-fg/70">
            Music label skeleton for releases, featured artists, support, and merch. Replace the
            placeholder content with your real catalog as you grow.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-fg/50">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-fg/70">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-accent">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-fg/50">Status</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-fg/70">
            Ready for audio uploads, artist pages, donations, and shop expansion.
          </p>
        </div>
      </div>
    </footer>
  );
}