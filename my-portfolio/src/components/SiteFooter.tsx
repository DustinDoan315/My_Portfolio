import { site } from '@/content/site';
import { Container } from './Container';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line py-10 text-sm text-muted">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <a className="hover:text-fg" href={`mailto:${site.email}`}>
              Email
            </a>
          </li>
          {site.socials.map((s) => (
            <li key={s.href}>
              <a
                className="hover:text-fg"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
