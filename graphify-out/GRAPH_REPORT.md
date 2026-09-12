# MrTanz.ir Knowledge Graph Report

Generated: 2026-09-12T03:59:00Z

## Executive Summary

MrTanz.ir is a static-first Persian comedy/entertainment website built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The site showcases YouTube comedy clips, jokes, and playlists from the "MrTanz" YouTube channel.

**Key Metrics:**
- Total Source Files: 30
- Total Source Lines: ~1,928
- Components: 11
- Pages/Routes: 7 + layout + SEO files
- Data Modules: 6
- Client Components: 7
- Server Components: 23

## Architecture Overview

### Dependency Layers (Bottom-Up)

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

### Data Flow Pattern

```
src/data/*.ts (static arrays/objects)
    |
    +--> Page components (server components, import directly)
    |       |
    |       +--> Rendered as server HTML at build time
    |
    +--> Root Layout (server component, imports siteConfig)
    |       |
    |       +--> Metadata, Header, Footer, YouTubeBanner
    |
    +--> AdSlot component (server component, reads ad config)
```

## God Nodes (Most Important Files)

### 1. src/data/types.ts (Importance: 10)
- **Role:** Foundation of type system
- **Imported by:** 10+ files
- **Exports:** Video, Playlist, Joke, Article, AdSlotName

### 2. src/data/site.ts (Importance: 9)
- **Role:** Central configuration
- **Imported by:** 13 files (layout, most pages, social components)
- **Exports:** siteConfig, youtubeConfig, socialLinks, navigationItems, contactInfo

### 3. src/app/layout.tsx (Importance: 8)
- **Role:** Application entry point
- **Wraps:** All pages
- **Imports:** siteConfig, Header, Footer, YouTubeBanner

### 4. src/components/Card.tsx (Importance: 7)
- **Role:** Most complex component file
- **Exports:** 5 card variants (Card, VideoCard, JokeCard, PlaylistCard, ArticleCard)
- **Note:** Currently underutilized (VideoCard not used by pages)

## Communities Detected

### 1. Data Layer (High Importance)
- Core data types and site configuration
- Static data arrays for videos, playlists, jokes, ads
- Foundation that everything depends on

### 2. App Pages (High Importance)
- All 7 page routes + 404 page
- Server components importing data and components
- Main content delivery layer

### 3. App Layout (High Importance)
- Root layout and global styles
- Application shell that wraps all pages

### 4. Content Components (Medium Importance)
- YouTubeEmbed and Card variants
- Content display and presentation

### 5. Social Components (Medium Importance)
- YouTube CTA and social media components
- External platform integration

### 6. UI Components (Low Importance)
- Generic UI primitives (Button, Badge, ShareButton, EmptyState)
- Reusable interface elements

### 7. SEO Configuration (Medium Importance)
- Sitemap, robots, and redirect files
- Search engine optimization

### 8. Advertising Components (Low Importance)
- Ad slot placeholder components
- Monetization infrastructure

## Cross-File Relationships & Issues

### High Severity
1. **Syntax Error in YouTubeCTA.tsx** (Line 12-13)
   - Malformed template literal
   - Will cause build failure
   - **Recommendation:** Fix immediately

### Medium Severity
2. **Duplicate VideoCard Definitions**
   - VideoCard exists in both YouTubeEmbed.tsx and Card.tsx
   - Pages use YouTubeEmbed.tsx version
   - Card.tsx version is unused
   - **Recommendation:** Consolidate to single definition

3. **Empty Public Directory**
   - No favicon, OG image, or static assets
   - **Recommendation:** Add before production deployment

4. **Unused Component**
   - Card.tsx VideoCard variant not used by any page
   - **Recommendation:** Either use it or remove duplicate

### Low Severity
5. **Unused Imports**
   - Button.tsx and Badge.tsx import AdSlotName but never use it
   - **Recommendation:** Remove unused imports

6. **Hardcoded URLs**
   - redirects.ts and robots.ts hardcode https://www.mrtanz.ir
   - Should use siteConfig.url for consistency
   - **Recommendation:** Use centralized configuration

## Routes Structure

| Route | Priority | Change Frequency | Purpose |
|-------|----------|------------------|---------|
| `/` | 1.0 | daily | Homepage with featured content |
| `/videos/` | 0.9 | weekly | Video listing |
| `/playlists/` | 0.8 | weekly | Playlist listing |
| `/jokes/` | 0.8 | weekly | Joke archive |
| `/about/` | 0.6 | monthly | About information |
| `/contact/` | 0.5 | monthly | Contact details |
| `/advertise/` | 0.5 | monthly | Advertising info |

## Technology Stack

- **Framework:** Next.js 15 (App Router, static export)
- **UI:** React 19 + TypeScript strict
- **Styling:** Tailwind CSS v4 (via PostCSS)
- **Font:** Vazirmatn (Google Fonts)
- **Deployment:** Cloudflare (static HTML)
- **Dependencies:** Only next, react, react-dom (zero additional runtime deps)

## Design System

### Color Tokens (Dark Theme)
- Background: `#0a0a0f` (deep charcoal)
- Surface: `#12121a`
- Card: `#1e1e2a`
- Accent Primary: `#eab308` (electric yellow)
- Accent Secondary: `#a78bfa` (electric purple)
- YouTube: `#ff0000`

### Component Patterns
- Props-driven components with typed interfaces
- Card composition with 5 variants
- AdSlot pattern with named positions
- Static data import (no state management)
- Lazy loading for YouTube iframes and images

## Stage Progress

- **Stage 1 (Foundation):** ✅ Complete
- **Stage 2 (Visual Design):** ✅ Complete
- **Stage 3 (Content Pages):** ⏳ Ready to begin

## Recommendations for Next Stage

1. Fix YouTubeCTA.tsx syntax error
2. Consolidate VideoCard definitions
3. Add static assets to public directory
4. Clean up unused imports
5. Use siteConfig.url consistently
6. Consider using Card.tsx variants for richer content display
