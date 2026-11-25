import type { ReactNode } from 'react';
import { Container } from './Container';

export function Section({
  id,
  title,
  aside,
  children,
}: {
  id?: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 pt-20">
      <Container>
        <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-line pb-3">
          <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          {aside && (
            <div className="hidden text-sm text-muted sm:block">{aside}</div>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
