import { apps, getApp } from '@/content/apps';
import { appOg, OG_SIZE, ogFonts } from '@/lib/og';
import { ImageResponse } from 'next/og';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'App preview';
export const generateStaticParams = () => apps.map((a) => ({ slug: a.slug }));

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const app = getApp((await params).slug)!;
  return new ImageResponse(await appOg(app), {
    ...size,
    fonts: await ogFonts(),
  });
}
