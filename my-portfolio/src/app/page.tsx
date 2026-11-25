import { AppIcon } from '@/components/AppIcon';
import { AppTile } from '@/components/AppTile';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { StatusPill } from '@/components/StatusPill';
import { apps, appsByStatus } from '@/content/apps';
import { ossProjects, totalStars } from '@/content/oss';
import { site } from '@/content/site';
import { ArrowUpRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const live = appsByStatus('live');
  const upcoming = apps.filter((a) => a.status !== 'live');

  return (
    <>
      {/* Hero */}
      <Container className="pt-16 sm:pt-24">
        <Image
          src={site.avatar}
          alt={site.name}
          width={56}
          height={56}
          priority
          className="mb-8 rounded-full ring-1 ring-line"
        />
        <h1 className="text-display max-w-3xl">{site.headline}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {site.intro}
        </p>
        <p className="mt-4 text-sm text-muted">
          <span className="font-mono text-fg">{live.length}</span> apps live ·{' '}
          <span className="font-mono text-fg">{upcoming.length}</span> on the
          way · <span className="font-mono text-fg">{totalStars}</span> GitHub
          stars
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            Work with me
          </a>
          <Link
            href="/apps"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            See all apps
          </Link>
        </div>
      </Container>

      {/* Live apps */}
      <Section title="On the App Store" aside={`${live.length} apps`}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
          {live.map((app, i) => (
            <AppTile key={app.slug} app={app} priority={i < 4} />
          ))}
        </div>
      </Section>

      {/* Upcoming */}
      <Section title="On the workbench" aside="In review and in development">
        <ul className="divide-y divide-line">
          {upcoming.map((app) => (
            <li key={app.slug}>
              <Link
                href={`/apps/${app.slug}`}
                className="group flex items-center gap-4 py-4"
              >
                <AppIcon app={app} size={44} />
                <div className="min-w-0 flex-1">
                  <p className="font-medium tracking-tight group-hover:text-accent">
                    {app.name}
                    {app.platforms.includes('macOS') && (
                      <span className="ml-2 text-xs text-muted">macOS</span>
                    )}
                  </p>
                  <p className="truncate text-sm text-muted">{app.subtitle}</p>
                </div>
                <StatusPill status={app.status} />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Open source */}
      <Section
        id="open-source"
        title="Open source"
        aside={
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5" aria-hidden /> {totalStars} total
          </span>
        }
      >
        <ul className="divide-y divide-line">
          {ossProjects.map((p) => (
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
                  {p.stars}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* About teaser */}
      <Section title="About">
        <div className="max-w-2xl space-y-4 text-[17px] leading-relaxed text-fg/85">
          {/* TODO(content): replace with your own voice. */}
          <p>
            I&apos;m a mobile developer with 4+ years of React Native
            experience. These days I spend most of my time building my own iOS
            apps end to end: product, design, code, App Store review and
            everything after launch.
          </p>
          <p>
            I&apos;m open to freelance and full-time roles where shipping
            quality mobile software is the job.
          </p>
          <Link
            href="/about"
            className="inline-block text-accent hover:underline"
          >
            More about me →
          </Link>
        </div>
      </Section>
    </>
  );
}
