import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--background)',
        fg: 'var(--foreground)',
        panel: 'var(--panel)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        accentSoft: 'var(--accent-soft)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(232, 193, 122, 0.14), 0 24px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'radial-sheen': 'radial-gradient(circle at top, rgba(232,193,122,0.16), transparent 48%)',
        'label-grid': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;