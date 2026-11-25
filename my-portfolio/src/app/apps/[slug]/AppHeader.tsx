import { AppIcon } from '@/components/AppIcon';
import { StatusPill } from '@/components/StatusPill';
import type { App } from '@/content/apps';
import Link from 'next/link';
import { AppSubnav } from './AppSubnav';

export function AppHeader({
  app,
  current,
  compact = false,
}: {
  app: App;
  current: 'overview' | 'privacy' | 'support';
  compact?: boolean;
}) {
  return (
    <div className="pt-10 sm:pt-14">
      <Link href="/apps" className="text-sm text-muted hover:text-fg">
        ← All apps
      </Link>
      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
        <AppIcon app={app} size={compact ? 72 : 128} priority />
        <div className="min-w-0">
          <h1
            className={
              compact
                ? 'text-3xl font-bold tracking-tight'
                : 'text-4xl font-bold tracking-tight sm:text-5xl'
            }
          >
            {app.name}
          </h1>
          <p className="mt-1 text-lg text-muted">{app.subtitle}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <StatusPill status={app.status} version={app.version} />
            <span className="text-xs text-muted">
              {app.platforms.join(' · ')}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-b border-line pb-3">
        <AppSubnav app={app} current={current} />
      </div>
    </div>
  );
}
