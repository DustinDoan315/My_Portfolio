import { Container } from '@/components/Container';
import { site } from '@/content/site';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${site.name}, ${site.role}.`,
};

// TODO(content): real roles only. Phase 4 renders this as a timeline.
const timeline: { period: string; role: string; org: string }[] = [];

export default function AboutPage() {
  return (
    <Container className="pt-16 sm:pt-20">
      <Image
        src={site.avatar}
        alt={site.name}
        width={96}
        height={96}
        priority
        className="mb-8 rounded-full ring-1 ring-line"
      />
      <h1 className="text-display">About</h1>
      <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-fg/85">
        {/* TODO(content): replace with your own story. */}
        <p>
          I&apos;m {site.name}, a mobile developer in {site.location}. I&apos;ve
          spent 4+ years building React Native apps, and now I design, build and
          ship my own iOS apps from idea to App Store.
        </p>
        <p>
          My stack centres on Expo, TypeScript and React Native, with native
          Swift modules where the platform needs them. Lately I&apos;ve focused
          on bringing AI features such as OCR and on-device and cloud models
          into apps that feel native.
        </p>
      </div>

      {timeline.length > 0 && (
        <section className="mt-16 max-w-2xl">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">
            Experience
          </h2>
          <ol className="divide-y divide-line">
            {timeline.map((t) => (
              <li key={t.period + t.org} className="flex gap-6 py-4">
                <span className="w-28 shrink-0 font-mono text-sm text-muted">
                  {t.period}
                </span>
                <span>
                  <span className="font-medium">{t.role}</span>
                  <span className="text-muted"> · {t.org}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section id="contact" className="mt-16 max-w-2xl scroll-mt-20">
        <h2 className="mb-3 text-xl font-semibold tracking-tight">Contact</h2>
        <p className="text-fg/85">
          Open to freelance and full-time mobile roles.{' '}
          <a
            className="text-accent hover:underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </p>
      </section>
    </Container>
  );
}
