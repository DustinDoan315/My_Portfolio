import type { App } from '@/content/apps';
import { STATUS_LABEL } from '@/content/apps';
import { site } from '@/content/site';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const OG_SIZE = { width: 1200, height: 630 };

/** Static Geist weights (Satori can't read the variable woff). */
export async function ogFonts() {
  const dir = path.join(process.cwd(), 'src/assets/og');
  const [regular, bold] = await Promise.all([
    readFile(path.join(dir, 'Geist-Regular.ttf')),
    readFile(path.join(dir, 'Geist-Bold.ttf')),
  ]);
  return [
    {
      name: 'Geist',
      data: regular,
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Geist',
      data: bold,
      weight: 700 as const,
      style: 'normal' as const,
    },
  ];
}

/** Inline a /public asset as a data URI so ImageResponse can render it at build time. */
async function publicDataUri(publicPath: string, mime: string) {
  const buf = await readFile(path.join(process.cwd(), 'public', publicPath));
  return `data:${mime};base64,${buf.toString('base64')}`;
}

const frame = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'space-between',
  padding: 72,
  background: '#fbfbfd',
  color: '#1d1d1f',
  fontFamily: 'Geist',
};

export async function siteOg(liveCount: number) {
  const avatar = await publicDataUri(site.avatar, 'image/jpeg');
  return (
    <div style={frame}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatar}
        width={96}
        height={96}
        style={{ borderRadius: 48 }}
        alt=""
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          {site.headline}
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: '#6e6e73' }}>
          {`${site.name} · ${liveCount} apps live on the App Store`}
        </div>
      </div>
    </div>
  );
}

export async function appOg(app: App) {
  const [from, to] = app.tint;
  const iconSize = 220;
  const icon = app.icon
    ? await publicDataUri(app.icon, 'image/png')
    : undefined;

  return (
    <div style={frame}>
      <div style={{ fontSize: 28, color: '#6e6e73' }}>{site.name}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
        {icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={icon}
            width={iconSize}
            height={iconSize}
            style={{ borderRadius: iconSize * 0.2237 }}
            alt=""
          />
        ) : (
          <div
            style={{
              width: iconSize,
              height: iconSize,
              borderRadius: iconSize * 0.2237,
              background: `linear-gradient(145deg, ${from}, ${to})`,
              color: app.tintIsLight ? '#1d1d1f' : '#fff',
              border: app.tintIsLight ? '2px solid #e5e5ea' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 110,
              fontWeight: 700,
            }}
          >
            {app.name.charAt(0)}
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
            {app.name}
          </div>
          <div style={{ fontSize: 34, color: '#6e6e73', marginTop: 8 }}>
            {app.subtitle}
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 28,
        }}
      >
        <span>{app.pitch}</span>
        <span style={{ color: '#6e6e73' }}>{STATUS_LABEL[app.status]}</span>
      </div>
    </div>
  );
}
