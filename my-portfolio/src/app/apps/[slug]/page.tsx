import { AppStoreButton } from '@/components/AppStoreButton';
import { Container } from '@/components/Container';
import { appStoreUrl, apps, getApp } from '@/content/apps';
import { site } from '@/content/site';
import { Github } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AppHeader } from './AppHeader';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => apps.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  if (!app) return {};
  return {
    title: `${app.name}: ${app.subtitle}`,
    description: app.pitch,
    openGraph: {
      title: `${app.name}: ${app.subtitle}`,
      description: app.pitch,
    },
    ...(app.appStoreId && {
      itunes: { appId: app.appStoreId },
    }),
  };
}

export default async function AppPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();

  const storeUrl = appStoreUrl(app);
  const jsonLd = app.status === 'live' && {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.pitch,
    operatingSystem: app.platforms.join(', '),
    applicationCategory: 'MobileApplication',
    softwareVersion: app.version,
    author: { '@type': 'Person', name: site.name, url: site.url },
    ...(storeUrl && { installUrl: storeUrl }),
  };

  return (
    <Container>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <AppHeader app={app} current="overview" />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_16rem]">
        <div>
          <p className="text-2xl font-medium leading-snug tracking-tight">
            {app.pitch}
          </p>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-fg/80">
            {app.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AppStoreButton app={app} />
            {app.sourceUrl && (
              <a
                href={app.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                <Github className="h-4 w-4" aria-hidden />
                Source code
              </a>
            )}
          </div>
        </div>

        <aside className="space-y-6 text-sm">
          {app.stack.length > 0 && (
            <div>
              <h2 className="mb-2 font-medium text-muted">Built with</h2>
              <ul className="flex flex-wrap gap-1.5">
                {app.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-xs"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h2 className="mb-2 font-medium text-muted">Platforms</h2>
            <p>{app.platforms.join(', ')}</p>
          </div>
          {app.version && (
            <div>
              <h2 className="mb-2 font-medium text-muted">Version</h2>
              <p className="font-mono">{app.version}</p>
            </div>
          )}
        </aside>
      </div>

      {/* Screenshots: horizontal rail like the App Store */}
      <section className="mt-16">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Screenshots
        </h2>
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6">
          {app.screenshots.length > 0
            ? app.screenshots.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${app.name} screenshot ${i + 1}`}
                  width={1320}
                  height={2868}
                  sizes="240px"
                  className="h-auto w-[220px] shrink-0 snap-start rounded-[28px] border border-line sm:w-[240px]"
                />
              ))
            : // TODO(content): add screenshots to /public/apps/<slug>/
              Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-[1320/2868] w-[220px] shrink-0 snap-start rounded-[28px] border border-dashed border-line bg-surface sm:w-[240px]"
                  aria-hidden
                />
              ))}
        </div>
      </section>
    </Container>
  );
}
