import { STATUS_LABEL, type AppStatus } from '@/content/apps';

const dot: Record<AppStatus, string> = {
  live: 'bg-live',
  'in-review': 'bg-review',
  'in-development': 'bg-muted',
};

export function StatusPill({
  status,
  version,
}: {
  status: AppStatus;
  version?: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${dot[status]}`} />
      {STATUS_LABEL[status]}
      {version && status !== 'in-development' && (
        <span className="font-mono text-[11px]">v{version}</span>
      )}
    </span>
  );
}
