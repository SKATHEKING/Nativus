import Link from 'next/link';

import { navigation } from '@/lib/content';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-panel text-sm font-semibold tracking-[0.35em] text-accent shadow-glow">
            N
          </span>
          <span className="text-base font-medium uppercase tracking-[0.45em] text-fg/90">
            Nativus
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.25em] text-fg/70 transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/support"
          className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-accent transition hover:bg-accent hover:text-[#17120c]"
        >
          Support the label
        </Link>
      </div>
    </header>
  );
}