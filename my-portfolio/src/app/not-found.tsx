import { Container } from '@/components/Container';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container className="pt-24 sm:pt-32">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-2 text-display">Nothing here.</h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        This page moved or never existed. The apps are still where you left
        them.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          Home
        </Link>
        <Link
          href="/apps"
          className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
        >
          All apps
        </Link>
      </div>
    </Container>
  );
}
