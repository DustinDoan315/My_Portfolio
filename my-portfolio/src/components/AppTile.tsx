import type { App } from '@/content/apps';
import Link from 'next/link';
import { AppIcon } from './AppIcon';

export function AppTile({ app, priority }: { app: App; priority?: boolean }) {
  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group flex flex-col items-start gap-4 rounded-3xl p-3 -m-3 transition-colors hover:bg-surface"
    >
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        <AppIcon app={app} size={76} priority={priority} />
      </div>
      <div>
        <h3 className="font-semibold tracking-tight">{app.name}</h3>
        <p className="text-sm text-muted">{app.subtitle}</p>
        <p className="mt-2 text-[15px] leading-snug text-fg/80">{app.pitch}</p>
      </div>
    </Link>
  );
}
