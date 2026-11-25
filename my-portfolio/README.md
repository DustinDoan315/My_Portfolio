# dustindoan.dev

Personal site and app hub for Dustin Doan, an iOS & React Native developer.
Next.js 15 (App Router), Tailwind CSS, fully static.

```bash
yarn install
yarn dev       # http://localhost:3000
yarn build     # static build, 48 routes
```

## Editing content

All content lives in typed files in `src/content/`. No page code needs to change.

| File       | What                                                                      |
| ---------- | ------------------------------------------------------------------------- |
| `site.ts`  | Name, headline, email, socials, nav                                       |
| `apps.ts`  | Every app: status, version, App Store ID, icon, screenshots, privacy, FAQ |
| `oss.ts`   | Open-source repos and star counts                                         |
| `about.ts` | Story, principles, toolbox, work timeline                                 |

Find remaining placeholders with `grep -rn "TODO(content)" src`.

### Adding real app assets

1. Put files in `public/apps/<slug>/` (1024px unmasked `icon.png` and `.webp` screenshots).
2. In `apps.ts`, set `icon`, `screenshots` and `appStoreId`.
3. The icon, App Store button, Smart App Banner, OG card and JSON-LD update automatically.

### App Store Connect URLs

Each app has a Support URL and a Privacy Policy URL:

- `https://dustindoan.dev/apps/<slug>/support`
- `https://dustindoan.dev/apps/<slug>/privacy`

Privacy pages show a "Draft" notice, hide data claims and stay `noindex` until
`privacy.reviewed` is set to `true` for that app.
