import type { ReactNode } from 'react';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, children }: Readonly<PageIntroProps>) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
      <h1 className="mt-3 font-display text-5xl text-[#fbf4eb]">{title}</h1>
      <p className="mt-4 text-base leading-8 text-fg/72">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
