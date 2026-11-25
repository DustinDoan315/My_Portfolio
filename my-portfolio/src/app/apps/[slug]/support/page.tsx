import { Container } from '@/components/Container';
import { apps, getApp } from '@/content/apps';
import { site } from '@/content/site';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AppHeader } from '../AppHeader';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => apps.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  return app ? { title: `${app.name} Support` } : {};
}

export default async function SupportPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();

  const subject = encodeURIComponent(`${app.name} support`);

  return (
    <Container>
      <AppHeader app={app} current="support" compact />
      <div className="mt-10 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight">Get help</h2>
        <p className="mt-3 text-[17px] leading-relaxed text-fg/80">
          Found a bug, have a question, or want to suggest a feature? Email me
          directly. I build {app.name} myself and read every message, usually
          replying within two business days.
        </p>
        <a
          href={`mailto:${site.supportEmail}?subject=${subject}`}
          className="mt-6 inline-block rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          Email {app.name} support
        </a>
        <p className="mt-3 text-sm text-muted">
          Please include your device model, iOS version and app version
          {app.version ? ` (latest is ${app.version})` : ''}.
        </p>

        {app.faq.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
            <dl className="mt-4 divide-y divide-line">
              {app.faq.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-medium">{f.q}</dt>
                  <dd className="mt-2 text-fg/80">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </Container>
  );
}
