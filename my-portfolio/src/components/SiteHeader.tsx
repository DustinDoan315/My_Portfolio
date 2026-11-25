import { nav, site } from '@/content/site';
import Link from 'next/link';
import { Container } from './Container';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-[15px] font-semibold tracking-tight"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted sm:gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-full bg-fg px-3.5 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-80 sm:inline-block"
          >
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}
