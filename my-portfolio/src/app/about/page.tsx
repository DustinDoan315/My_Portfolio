import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { principles, story, timeline, toolbox } from '@/content/about';
import { appsByStatus } from '@/content/apps';
import { site } from '@/content/site';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${site.name}, ${site.role} in ${site.location}.`,
};

export default function AboutPage() {
  const liveCount = appsByStatus('live').length;

  return (
    <>
      <Container className="pt-16 sm:pt-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
          <div className="min-w-0 flex-1">
            <h1 className="text-display">About</h1>
            <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-fg/85">
              {story.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">
              <Link
                href="/apps"
                className="text-accent underline underline-offset-2"
              >
                {liveCount} apps live on the App Store
              </Link>{' '}
              · {site.location}
            </p>
          </div>
          <Image
            src={site.avatar}
            alt={site.name}
            width={176}
            height={176}
            priority
            className="order-first h-28 w-28 rounded-3xl object-cover ring-1 ring-line md:order-none md:h-44 md:w-44"
          />
        </div>
      </Container>

      <Section title="How I work">
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Toolbox">
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {toolbox.map((t) => (
            <div key={t.group}>
              <dt className="mb-2 text-sm text-muted">{t.group}</dt>
              <dd>
                <ul className="space-y-1 text-[15px]">
                  {t.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {timeline.length > 0 && (
        <Section title="Experience">
          <ol className="divide-y divide-line">
            {timeline.map((t) => (
              <li
                key={t.period + t.org}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8"
              >
                <span className="w-36 shrink-0 font-mono text-sm text-muted">
                  {t.period}
                </span>
                <div>
                  <p>
                    <span className="font-medium">{t.role}</span>
                    <span className="text-muted">
                      {' · '}
                      {t.url ? (
                        <a
                          href={t.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-fg"
                        >
                          {t.org}
                        </a>
                      ) : (
                        t.org
                      )}
                    </span>
                  </p>
                  {t.summary && (
                    <p className="mt-1 text-[15px] text-muted">{t.summary}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section id="contact" title="Contact">
        <div className="max-w-2xl">
          <p className="text-[17px] text-fg/85">
            Open to freelance projects and full-time mobile roles. The fastest
            way to reach me is email.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              {site.email}
            </a>
            {site.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
