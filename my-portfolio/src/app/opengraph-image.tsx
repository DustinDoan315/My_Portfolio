import { appsByStatus } from '@/content/apps';
import { site } from '@/content/site';
import { OG_SIZE, ogFonts, siteOg } from '@/lib/og';
import { ImageResponse } from 'next/og';

export const alt = `${site.name}: ${site.headline}`;
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(await siteOg(appsByStatus('live').length), {
    ...size,
    fonts: await ogFonts(),
  });
}
