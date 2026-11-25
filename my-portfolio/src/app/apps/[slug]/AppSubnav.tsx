import type { App } from '@/content/apps';
import Link from 'next/link';

export function AppSubnav({
  app,
  current,
}: {
  app: App;
  current: 'overview' | 'privacy' | 'support';
}) {
  const items = [
    { key: 'overview', href: `/apps/${app.slug}`, label: 'Overview' },
    { key: 'support', href: `/apps/${app.slug}/support`, label: 'Support' },
    { key: 'privacy', href: `/apps/${app.slug}/privacy`, label: 'Privacy' },
  ] as const;
  return (
    <nav className="flex gap-1 text-sm" aria-label={`${app.name} pages`}>
      {items.map((i) => (
        <Link
          key={i.key}
          href={i.href}
          aria-current={current === i.key ? 'page' : undefined}
          className={`rounded-full px-3 py-1 transition-colors ${
            current === i.key
              ? 'bg-fg text-bg'
              : 'text-muted hover:bg-surface hover:text-fg'
          }`}
        >
          {i.label}
        </Link>
      ))}
    </nav>
  );
}
