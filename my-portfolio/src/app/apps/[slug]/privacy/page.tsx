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
  if (!app) return {};
  return {
    title: `${app.name} Privacy Policy`,
    // Keep unreviewed drafts out of search results.
    robots: app.privacy.reviewed ? undefined : { index: false },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();
  const { privacy } = app;

  return (
    <Container>
      <AppHeader app={app} current="privacy" compact />
      <article className="mt-10 max-w-2xl space-y-8 text-[17px] leading-relaxed text-fg/85">
        {!privacy.reviewed && (
          <p className="rounded-xl border border-review/40 bg-review/10 px-4 py-3 text-sm text-fg">
            Draft: this policy is being finalised.
          </p>
        )}
        <div>
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-fg">
            Privacy Policy
          </h2>
          <p>{privacy.summary}</p>
        </div>

        {privacy.reviewed && (
          <>
            <div>
              <h3 className="mb-2 font-semibold text-fg">Data collected</h3>
              {privacy.dataCollected.length ? (
                <ul className="list-disc space-y-1 pl-5">
                  {privacy.dataCollected.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : (
                <p>{app.name} does not collect personal data.</p>
              )}
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-fg">
                Third-party services
              </h3>
              {privacy.thirdParties.length ? (
                <ul className="list-disc space-y-1 pl-5">
                  {privacy.thirdParties.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : (
                <p>None.</p>
              )}
            </div>
          </>
        )}

        <div>
          <h3 className="mb-2 font-semibold text-fg">Contact</h3>
          <p>
            Questions about this policy:{' '}
            <a
              className="text-accent underline underline-offset-2"
              href={`mailto:${site.supportEmail}`}
            >
              {site.supportEmail}
            </a>
          </p>
        </div>
      </article>
    </Container>
  );
}
