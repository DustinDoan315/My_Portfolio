import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// iOS applies its own mask, so this stays square.
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1d1d1f',
        color: '#fbfbfd',
        fontSize: 112,
        fontWeight: 700,
        letterSpacing: -6,
      }}
    >
      D
    </div>,
    size
  );
}
