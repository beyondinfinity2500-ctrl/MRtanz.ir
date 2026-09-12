# MrTanz.ir Knowledge Graph Wiki

## Quick Navigation

### Project Overview
- [Architecture Report](../GRAPH_REPORT.md) - Full architecture analysis
- [Graph Data](../graph.json) - Complete knowledge graph

### Data Layer
- [TypeScript Types](../../src/data/types.ts) - Core interfaces (Video, Playlist, Joke, Article, AdSlotName)
- [Site Configuration](../../src/data/site.ts) - Central config (name, URLs, navigation, social, contact)
- [Video Data](../../src/data/videos.ts) - 5 videos with derived featuredVideo + popularVideos
- [Playlist Data](../../src/data/playlists.ts) - 6 playlists with derived featuredPlaylists
- [Joke Data](../../src/data/jokes.ts) - 30 Persian jokes
- [Ad Configuration](../../src/data/ads.ts) - 6 ad slot configurations

### Components

#### Layout Components
- [Header](../../src/components/Header.tsx) - Responsive sticky header with mobile menu
- [Footer](../../src/components/Footer.tsx) - 3-column footer grid

#### Content Components
- [YouTube Embed](../../src/components/YouTubeEmbed.tsx) - YouTube iframe + VideoCard
- [Card Components](../../src/components/Card.tsx) - Card + VideoCard + JokeCard + PlaylistCard + ArticleCard

#### Social Components
- [YouTube CTA](../../src/components/YouTubeCTA.tsx) - YouTube subscribe button
- [Social Components](../../src/components/Social.tsx) - YouTube banner + Social bar

#### UI Components
- [Share Button](../../src/components/ShareButton.tsx) - Social share buttons
- [Button](../../src/components/Button.tsx) - Button with 5 variants
- [Badge](../../src/components/Badge.tsx) - Badge/Tag components
- [Empty State](../../src/components/EmptyState.tsx) - Empty state placeholder

#### Advertising
- [Ad Slot](../../src/components/AdSlot.tsx) - Ad slot placeholder

### Pages

#### Main Pages
- [Homepage](../../src/app/page.tsx) - Featured video, popular videos, random joke, playlists
- [Videos](../../src/app/videos/page.tsx) - All comedy video clips
- [Playlists](../../src/app/playlists/page.tsx) - Curated YouTube playlists
- [Jokes](../../src/app/jokes/page.tsx) - Archive of 30 Persian jokes

#### Information Pages
- [About](../../src/app/about/page.tsx) - About the site
- [Contact](../../src/app/contact/page.tsx) - Contact information
- [Advertise](../../src/app/advertise/page.tsx) - Advertising and sponsorship

#### System Pages
- [404 Not Found](../../src/app/not-found.tsx) - Custom 404 page

### Configuration

#### Build & Styling
- [Root Layout](../../src/app/layout.tsx) - Application shell
- [Global CSS](../../src/app/globals.css) - Design tokens and typography
- [Next.js Config](../../next.config.ts) - Build configuration
- [TypeScript Config](../../tsconfig.json) - TypeScript settings
- [Tailwind Config](../../postcss.config.mjs) - CSS processing

#### SEO
- [Sitemap](../../src/app/sitemap.ts) - sitemap.xml generation
- [Robots](../../src/app/robots.ts) - robots.txt generation
- [Redirects](../../src/app/redirects.ts) - Legacy URL redirects

## Architecture Layers

```
Layer 0 (Foundation):  types.ts, site.ts
    |
Layer 1 (Data):       ads.ts, videos.ts, playlists.ts, jokes.ts
    |
Layer 2 (Components): AdSlot, Header, Footer, YouTubeEmbed, YouTubeCTA, Social,
                      ShareButton, Card, Button, Badge, EmptyState
    |
Layer 3 (Pages):      layout.tsx, page.tsx, not-found.tsx, videos/, playlists/,
                      jokes/, about/, contact/, advertise/
    |
Layer 4 (SEO/Config): sitemap.ts, robots.ts, redirects.ts
```

## Key Relationships

### Data Dependencies
- `types.ts` ← imported by 10+ files
- `site.ts` ← imported by 13 files (layout, most pages, social components)

### Component Usage
- `VideoCard` (YouTubeEmbed.tsx) ← used by homepage, videos page
- `AdSlot` ← used by 6 pages
- `Header`, `Footer` ← used by root layout
- `YouTubeBanner`, `SocialBar` ← used by root layout

### Data Flow
```
src/data/*.ts → Page components → Server HTML at build time
src/data/site.ts → Root Layout → Metadata, Header, Footer, YouTubeBanner
src/data/ads.ts → AdSlot component → Ad placeholders
```

## Communities

1. **Data Layer** - Core types and configuration
2. **App Pages** - All page routes
3. **App Layout** - Root layout and styles
4. **Content Components** - YouTube and Card components
5. **Social Components** - YouTube and social media
6. **UI Components** - Generic UI primitives
7. **SEO Configuration** - Sitemap, robots, redirects
8. **Advertising Components** - Ad slot system

## Issues Detected

### High Priority
- Syntax error in YouTubeCTA.tsx (line 12-13)

### Medium Priority
- Duplicate VideoCard definitions (YouTubeEmbed.tsx vs Card.tsx)
- Empty public directory (no static assets)
- Card.tsx VideoCard variant unused

### Low Priority
- Unused imports in Button.tsx and Badge.tsx
- Hardcoded URLs in redirects.ts and robots.ts

## Stage Progress

- **Stage 1 (Foundation):** ✅ Complete
- **Stage 2 (Visual Design):** ✅ Complete
- **Stage 3 (Content Pages):** ⏳ Ready to begin
