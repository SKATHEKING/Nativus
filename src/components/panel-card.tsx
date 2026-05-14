import type { ReactNode } from 'react';

type PanelCardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export function PanelCard({ title, subtitle, children }: Readonly<PanelCardProps>) {
  return (
    <article className="rounded-[1.8rem] border border-line bg-panel p-6">
      {subtitle ? <p className="text-xs uppercase tracking-[0.3em] text-accent/80">{subtitle}</p> : null}
      {title ? <h2 className="mt-4 font-display text-3xl text-[#fff6ea]">{title}</h2> : null}
      <div className={title || subtitle ? 'mt-4' : ''}>{children}</div>
    </article>
  );
}
