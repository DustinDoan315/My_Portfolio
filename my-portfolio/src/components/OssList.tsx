import type { OssProject } from '@/content/oss';
import { ArrowUpRight, Star } from 'lucide-react';

export function OssList({ projects }: { projects: OssProject[] }) {
  return (
    <ul className="divide-y divide-line">
      {projects.map((p) => (
        <li key={p.name}>
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="font-mono text-sm font-medium group-hover:text-accent sm:w-72 sm:shrink-0">
              {p.name}
              <ArrowUpRight
                className="ml-1 inline h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </span>
            <span className="flex-1 text-[15px] text-muted">
              {p.description}
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-xs text-muted">
              <Star className="h-3 w-3" aria-hidden />
              <span className="sr-only">Stars:</span>
              {p.stars}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
