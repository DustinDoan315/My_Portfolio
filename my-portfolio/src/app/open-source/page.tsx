import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { ossProjects, totalStars, type OssProject } from '@/content/oss';
import { site } from '@/content/site';
import { ArrowUpRight, Package, Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Source',
  description:
    'React Native libraries, native modules and starter kits by Dustin Doan.',
};

const github = site.socials.find((s) => s.label === 'GitHub')!.href;

function ProjectCard({ p }: { p: OssProject }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="break-all font-mono text-[15px] font-semibold">
          {p.name}
        </h3>
        <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-muted">
          <Star className="h-3.5 w-3.5" aria-hidden />
          <span className="sr-only">Stars:</span>
          {p.stars}
        </span>
      </div>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
        {p.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        <span className="text-muted">{p.language}</span>
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-accent hover:underline"
        >
          GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
        {p.npm && (
          <a
            href={p.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline"
          >
            <Package className="h-3.5 w-3.5" aria-hidden /> npm
          </a>
        )}
      </div>
    </article>
  );
}

export default function OpenSourcePage() {
  const libraries = ossProjects.filter((p) => p.kind === 'library');
  const projects = ossProjects.filter((p) => p.kind === 'app');

  return (
    <>
      <Container className="pt-16 sm:pt-20">
        <h1 className="text-display">Open source</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Libraries and reference projects from building my own apps.{' '}
          <span className="whitespace-nowrap">
            <span className="font-mono text-fg">{totalStars}</span> stars
          </span>{' '}
          across {ossProjects.length} repositories.
        </p>
      </Container>

      <Section title="Libraries & modules" aside={`${libraries.length}`}>
        <div className="grid gap-4 md:grid-cols-2">
          {libraries.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Section>

      <Section title="Apps & starters" aside={`${projects.length}`}>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Section>

      <Container className="pt-12">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-accent hover:underline"
        >
          Everything else on GitHub{' '}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </Container>
    </>
  );
}
