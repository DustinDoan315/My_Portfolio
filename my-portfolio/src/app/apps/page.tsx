import { AppTile } from '@/components/AppTile';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { appsByStatus, STATUS_LABEL, type AppStatus } from '@/content/apps';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apps',
  description: 'iOS and macOS apps designed, built and shipped by Dustin Doan.',
};

const groups: AppStatus[] = ['live', 'in-review', 'in-development'];

export default function AppsPage() {
  return (
    <>
      <Container className="pt-16 sm:pt-20">
        <h1 className="text-display">Apps</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Everything I&apos;ve shipped or am about to ship. Each one is
          designed, built and maintained by me.
        </p>
      </Container>
      {groups.map((status) => {
        const list = appsByStatus(status);
        if (!list.length) return null;
        return (
          <Section
            key={status}
            title={STATUS_LABEL[status]}
            aside={`${list.length}`}
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
              {list.map((app) => (
                <AppTile key={app.slug} app={app} />
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
