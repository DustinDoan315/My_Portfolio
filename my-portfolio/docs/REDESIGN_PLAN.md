# Portfolio Redesign Plan

Status: phases 1–5 implemented (content placeholders remain) · Date: 2026-11-25

## 1. Diagnosis: why it reads as fake

The site's problem is mostly content, not styling. A recruiter or client will notice these within 30 seconds:

| Where | What | Why it hurts |
|---|---|---|
| `data/experience.ts` | "TechCorp Solutions", "InnovateTech, San Francisco", "StartupHub, New York", "University of Technology, Boston, 3.8 GPA, Magna Cum Laude" | Placeholder employers and school. Anyone who checks LinkedIn finds a mismatch. |
| `data/personal.ts` | "99% Client Satisfaction", "50+ Projects", "15+ Technologies" | Numbers with no source. |
| `data/personal.ts` | Expertise in "Blockchain / E-commerce / Booking / Event Management" | Generic agency copy that matches none of your real work. |
| `data/metadata.ts` | `telephone: '+1-555-0123'`, awards "Top 1% Stack Overflow", "AWS Certified", `alumniOf: University of Technology`, `verification: 'your-google-verification-code'` | Fake claims sit in JSON-LD, which Google indexes. This is the worst one. |
| `utils/mock.ts` blogs | 16 posts that are one paragraph each, stock images reused across posts, topics from .NET MAUI to Web3 | Looks like generated filler. Nobody can read a full post. |
| `data/experience.ts` | "100K+ downloads", "Led team of 6", "crash rate <0.1%" | Unverifiable. |
| `/tools` | Chemistry formatter, Excel generator, Word generator | Unrelated to an iOS developer. Dilutes the message. |
| `pages/api/generatecode.ts` | Writes folders to any `folderPath` taken from the request body | A path-write vulnerability, and it does nothing on Vercel anyway. **Delete it.** |
| Visual | Cyan-to-purple gradient banners, emoji icon tiles, a "Quick Stats" block, a "Ready to Build Something Amazing?" CTA | The default AI or template look. |

Meanwhile the most credible thing you have isn't on the site at all: **9 apps in App Store Connect, 4 of them live.**

## 2. Positioning decision

**Recommendation:** present yourself as an independent iOS app maker who ships real products, not as a "Senior Full-Stack Engineer" with a résumé page.

- **Headline:** "I build and ship iOS apps." (Or: "Dustin Doan — iOS & React Native developer. 4 apps live on the App Store.")
- **Proof:** the app icons themselves, linked to the App Store. That's verifiable in one click, so it reads as real.
- **Second proof:** open-source React Native libraries, with real stars and an npm package.
- **Everything else** (timeline, skills) goes lower on the page and states only what's true.

## 3. Content inventory (source of truth)

From App Store Connect:

| App | Platform | Version | ASC status | Public label |
|---|---|---|---|---|
| Glimpsed: Screenshot Search | iOS | 1.3.0 | Ready for Distribution | **On the App Store** |
| Inkly: AI Photo Quotes & Diary | iOS | 1.4.0 | Ready for Distribution | **On the App Store** |
| Sidestep: ADHD Task Starter | iOS | 1.0.1 | Ready for Distribution | **On the App Store** |
| Trade Coin Skills | iOS | 1.0.2 | Ready for Distribution | **On the App Store** |
| FitThru: Furniture Fit Check | iOS | 1.0.0 | Waiting for Review (has a review issue) | In review |
| Copyshape: Copy Screen Text | macOS | 1.0.1 | Waiting for Review | In review |
| Move Recap | iOS | 1.0 | Prepare for Submission | In development |
| BiteLane: Food on Your Way | iOS | 1.0 | Prepare for Submission | In development |
| Notara: Take Note Anything | iOS | 1.0 | Prepare for Submission | In development |

Open source (keep from `mock.ts`, the star counts are real): RN-ReduxToolkit (18★), RN-BubbleNotify-NativeModule (15★), react-native-dnd-like-ios (npm, 8★), trading-simulation-app (24★).

Likely links to confirm: `trading-simulation-app` → Trade Coin Skills, and `ai-quotes-app` → Inkly. If those are the same products, each app page links to its source code, which is strong proof.

**Remove:** the 4 fake timeline entries, the stats block, the expertise areas, the fake JSON-LD fields, all 16 filler posts, YouTube Clone (a tutorial clone that weakens the list), `/tools`, and the `api/generatecode` route.

## 4. Information architecture and flow

```
/                      Home: hero, app shelf, open source, short about, contact
/apps                  All apps, grouped: Live · In review · In development
/apps/[slug]           App page: icon, tagline, screenshots, App Store badge,
                       "How it's built" (stack, interesting problems), changelog
/apps/[slug]/privacy   Privacy policy  ─┐ App Review requires these URLs.
/apps/[slug]/support   Support + FAQ   ─┘ The site becomes useful infrastructure.
/open-source           Libraries, with GitHub/npm links
/writing               Only real long-form posts (MDX). Hidden from nav until
                       there are 2 or more.
/about                 Real story + real timeline (no unverifiable metrics)
```

Nav: **Apps · Open Source · About · Contact** (Contact is a `mailto:` button, not a page).

### Primary visitor flows

```
Recruiter / client                          App user / App Reviewer
──────────────────                          ───────────────────────
lands on /                                  App Store → "Developer Website"
  │ 5s: "ships iOS apps" + 4 real icons       │
  ▼                                           ▼
clicks an icon ──► /apps/glimpsed          /apps/glimpsed/support or /privacy
  │  screenshots, App Store badge,            │
  │  "How it's built"                         └─► contact (support email)
  ▼
"Work with me" ──► mailto / Cal.com link
```

The app pages also cover the Support URL and Privacy Policy URL that every App Store submission needs, so FitThru, Move Recap, BiteLane and Notara get them as soon as the pages exist.

## 5. Home page layout

```
┌────────────────────────────────────────────────────────────┐
│ Dustin Doan                     Apps  Open Source  About  ✉│
├────────────────────────────────────────────────────────────┤
│  [avatar]                                                  │
│  I build and ship iOS apps.                                │
│  React Native + Expo, Swift where it matters. Based in HCMC│
│  [ Email me ]  [ GitHub ]                                  │
├────────────────────────────────────────────────────────────┤
│  On the App Store                                          │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                       │
│  │ icon │ │ icon │ │ icon │ │ icon │  ← large rounded icons │
│  └──────┘ └──────┘ └──────┘ └──────┘     name, 1-line pitch │
│  Glimpsed  Inkly   Sidestep  Trade Coin                     │
│                                                            │
│  Coming soon: FitThru · Copyshape (Mac) · Move Recap · …   │
├────────────────────────────────────────────────────────────┤
│  Open source            3 libraries · 65★ total            │
│  row list: name — description — ★ — npm/GitHub             │
├────────────────────────────────────────────────────────────┤
│  About (3 sentences)  →  /about                            │
├────────────────────────────────────────────────────────────┤
│  footer: email · GitHub · LinkedIn · X                     │
└────────────────────────────────────────────────────────────┘
```

No stats block, no gradient CTA banner, no emoji. The app icons supply the colour and the rest of the page stays neutral.

## 6. Visual system

- **Direction:** Apple-adjacent and editorial. A neutral canvas, generous whitespace, and large app icons with a squircle mask and soft shadow as the main visual.
- **Theme:** light by default, with dark mode via `prefers-color-scheme`. Colours are CSS variables mapped into Tailwind:
  `--bg #fbfbfd / #0b0b0c`, `--surface #ffffff / #161618`, `--text #1d1d1f / #f5f5f7`, `--muted #6e6e73 / #a1a1a6`, `--border #e5e5ea / #2c2c2e`, `--accent #0071e3 / #2997ff`.
- **Type:** keep Geist (already bundled) for UI and Geist Mono for small labels such as versions and stars. Two sizes do most of the work: display `clamp(2.5rem, 6vw, 4.5rem)` and body `1.0625rem / 1.6`.
- **Status pills:** green "On the App Store", amber "In review", grey "In development", matching the colours in App Store Connect.
- **Motion:** only subtle hover lift on icons, plus `prefers-reduced-motion` respected.
- **Icons:** `lucide-react` (already installed). Drop `react-icons` to cut bundle size.

## 7. Data model

Replace `utils/mock.ts` with typed content in `src/content/`:

```ts
// src/content/apps.ts
export type AppStatus = 'live' | 'in-review' | 'in-development';

export interface App {
  slug: string;                 // 'glimpsed'
  name: string;                 // 'Glimpsed'
  subtitle: string;             // 'Screenshot Search'
  pitch: string;                // one sentence, user benefit
  platforms: ('iOS' | 'macOS')[];
  status: AppStatus;
  version?: string;             // '1.3.0'
  appStoreId?: string;          // drives badge link + JSON-LD
  icon: string;                 // '/apps/glimpsed/icon.png' (1024px, unmasked)
  screenshots: string[];        // 6.9" exports, converted to webp
  stack: string[];              // ['Expo SDK 5x', 'Vision OCR', 'sqlite-vec']
  buildNotes?: string;          // MDX slug for "How it's built"
  sourceUrl?: string;
  privacy: { collectsData: boolean; notes: string };
  supportEmail: string;
}
```

`src/content/oss.ts` holds the libraries, and `src/content/timeline.ts` holds only real roles. `generateStaticParams` builds every app page statically.

## 8. Technical cleanup (done together with the redesign)

1. Delete `src/pages/api/generatecode.ts`, `src/lib/generateNodeJsFiles.ts`, the `/tools/*` pages and their components, and the stray `dustin/` and `dustin315/` folders.
2. Remove dependencies that are now dead or wrong for a browser app: `fs`, `os`, `path`, `child_process`, `fs-extra`, `formidable`, `tesseract.js`, `mammoth`, `docx`, `xlsx`, `file-saver`, `diff`, `axios`, `react-icons`. Keep one lockfile (yarn, per `packageManager`) and delete `package-lock.json`.
3. Images: the six `public/AppImages/*.png` files are 1.2 to 2.3 MB each. Use `next/image` with webp screenshots instead.
4. SEO: rewrite `metadata.ts` with no fake fields. Move `viewport` to `export const viewport`, because it's deprecated inside `metadata` in Next 15. Add `app/sitemap.ts`, `app/robots.ts`, per-app `generateMetadata`, `opengraph-image.tsx` (an icon on a neutral card), and `SoftwareApplication` JSON-LD for each live app.
5. Fix `@types/react` 18 → 19 to match the runtime, and align `eslint-config-next` with Next 15.3.

## 9. Execution phases

| Phase | Scope | Output |
|---|---|---|
| 1. Purge | Delete the fakes, tools, API route and dead dependencies. Rewrite metadata. | An honest site, even before the redesign |
| 2. Foundation | Design tokens, layout, header and footer, the `content/` model | A shell in the new style |
| 3. Apps | Home shelf, `/apps`, `/apps/[slug]`, privacy and support pages | The core of the new site |
| 4. Open source + About | `/open-source`, a rewritten `/about` with the real timeline | Complete navigation |
| 5. Polish | OG images, sitemap, JSON-LD, Lighthouse ≥ 95, dark-mode QA, phone-width QA | Ready to ship |

Phases 1 to 3 can ship as one PR. Phases 4 and 5 can follow.

## 10. Inputs needed from you

1. **App Store IDs or URLs** for the 4 live apps (and Copyshape and FitThru once approved). The cloud environment couldn't reach `itunes.apple.com`.
2. **Assets for each app:** the 1024px icon PNG, 3 to 5 screenshots, and a one-sentence pitch.
3. **Real work history:** employers, roles and dates (or say "freelance since 20xx"), plus your actual education.
4. **Confirm the source links:** is `trading-simulation-app` the code behind Trade Coin Skills, and is `ai-quotes-app` the code behind Inkly?
5. **Domain:** is it `dustindoan.dev`? The metadata assumes so.
6. **Support email** to show publicly on app support pages (the same Gmail, or an alias).

Phase 1 and the Phase 2–3 shell can be built with placeholders before these arrive. Each placeholder is marked `TODO(content)`.
