import { apps } from '@/content/apps';
import { site } from '@/content/site';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path}`;
  const staticPages = ['', '/apps', '/open-source', '/about'].map((p) => ({
    url: url(p),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }));

  const appPages = apps.flatMap((app) => [
    {
      url: url(`/apps/${app.slug}`),
      changeFrequency: 'monthly' as const,
      priority: app.status === 'live' ? 0.9 : 0.5,
    },
    {
      url: url(`/apps/${app.slug}/support`),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    // Draft privacy pages are noindex, so keep them out of the sitemap.
    ...(app.privacy.reviewed
      ? [
          {
            url: url(`/apps/${app.slug}/privacy`),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
          },
        ]
      : []),
  ]);

  return [...staticPages, ...appPages];
}
