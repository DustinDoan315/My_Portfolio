import type { Config } from 'tailwindcss';

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        fg: token('text'),
        muted: token('muted'),
        line: token('border'),
        accent: token('accent'),
        live: token('live'),
        review: token('review'),
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: [
          'clamp(2.5rem, 6vw, 4.5rem)',
          { lineHeight: '1.02', letterSpacing: '-0.035em', fontWeight: '700' },
        ],
      },
      maxWidth: {
        page: '68rem',
      },
    },
  },
  plugins: [],
};
export default config;
