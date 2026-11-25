import type { App } from '@/content/apps';
import Image from 'next/image';

/**
 * iOS-style app icon. Uses the real artwork when `app.icon` is set,
 * otherwise a tinted placeholder carrying the app's initial.
 * Corner radius ≈ 22.37% of the side, matching the iOS mask.
 */
export function AppIcon({
  app,
  size = 96,
  priority = false,
}: {
  app: App;
  size?: number;
  priority?: boolean;
}) {
  const style = { width: size, height: size, borderRadius: size * 0.2237 };
  const base =
    'relative shrink-0 overflow-hidden shadow-[0_1px_2px_rgb(0_0_0/0.08),0_8px_24px_-8px_rgb(0_0_0/0.25)] ring-1 ring-inset ring-black/5 dark:ring-white/10';

  if (app.icon) {
    return (
      <div className={base} style={style}>
        <Image
          src={app.icon}
          alt=""
          fill
          sizes={`${size}px`}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  const [from, to] = app.tint;
  return (
    <div
      className={`${base} flex items-center justify-center font-semibold`}
      style={{
        ...style,
        background: `linear-gradient(145deg, ${from}, ${to})`,
        color: app.tintIsLight ? '#1d1d1f' : '#ffffff',
        fontSize: size * 0.42,
        letterSpacing: '-0.04em',
      }}
      aria-hidden
    >
      {app.name.charAt(0)}
    </div>
  );
}
