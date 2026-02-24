# AI_Tool_Dashboard — Design System

> Generated and synced by [DesignSeed](https://designseed.app)

## Quick Start

```bash
npm install
npm run dev
# → Open http://localhost:3000
```

This is a fully runnable Next.js project. All pages, components, and design tokens are ready to use.

## Files

| File | Description |
|------|-------------|
| `pages/` | Next.js page routes (auto-generated from DesignSeed) |
| `components/` | React component files |
| `tokens/tokens.css` | CSS custom properties — imported globally in `_app.tsx` |
| `tokens/tokens.json` | Raw token data in JSON |
| `tokens/theme.config.ts` | TypeScript theme object — import in TS/JS |
| `tailwind.preset.js` | Tailwind CSS preset — add to `tailwind.config.js` |
| `.cursorrules` | AI assistant instructions (Cursor, Copilot, etc.) |

## Components (7)

  - `DashboardLayout` — Main layout wrapper that combines sidebar and content area
  - `TabsSection` — Tabbed content area with Recent Activity, Top Products, and Team sections
  - `UsersTable` — Data table showing user information
  - `StatsGrid` — Grid container for stat cards
  - `StatCard` — Small statistic cards showing key metrics
  - `HeaderBar` — Top header with search field and user avatar
  - `SidebarNav` — Collapsible sidebar navigation with menu items

## Pages (1)

  - **Admin Dashboard** — `/admin-dashboard` · 7 sections

## Using Tokens

### CSS / HTML
```html
<link rel="stylesheet" href="tokens/tokens.css" />
```
```css
.card {
  background: var(--color-surface-default);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  padding: var(--spacing-container);
}
```

### TypeScript / JavaScript
```ts
import { theme } from './tokens/theme.config';

const primaryColor = theme.colors.primary['700'];
const headingFont = theme.typography.heading.fontFamily;
```

### Tailwind CSS
```js
// tailwind.config.js
const designSeedPreset = require('./tailwind.preset.js');
module.exports = { presets: [designSeedPreset], /* ... */ };
```

## Design Tokens Overview

### Colors
  - **Background colors** (6 shades)
  - **Primary colors** (4 shades)
  - **Secondary colors** (4 shades)
  - **Tertiary colors** (4 shades)
  - **Danger state** (4 shades)
  - **Warning state** (4 shades)
  - **Success state** (4 shades)
  - **Info state** (4 shades)
  - **Neutrals** (10 shades)

### Typography
  - **Body:** Montserrat · 18px · 500
  - **Label:** Montserrat · 14px · 600
  - **Button:** Montserrat · 16px · 600
  - **Heading:** Righteous · 40px · 600
  - **Paragraph:** Montserrat · 16px · 400
  - **Subheading:** Righteous · 24px · 600


### Radius
  - **lg:** 12px
  - **md:** 8px
  - **sm:** 4px
  - **xl:** 16px
  - **xs:** 2px
  - **2xl:** 24px
  - **none:** 0px


### Spacing
  - **Card padding:** 24px
  - **Button padding:** 16px × 16px
  - **Gap:** 12px horizontal · 12px vertical
  - **Scale:** 8px base unit (0 → 80px in 15 steps)

### Shadows
  - **Card:** md
  - **Button:** md
  - **Input:** none
  - **Shadow color:** #ffffff


### Borders
  - **Card:** 1px solid #E5E7EB
  - **Button:** 2px solid #000000
  - **Input:** 1px solid #D1D5DB
  - **Divider:** 1px solid #E5E7EB


### Button Variants
Each variant includes `default`, `hover`, `active`, and `disabled` states.
  - **icon**
  - **link**
  - **ghost**
  - **outline**
  - **primary**
  - **secondary**
  - **destructive**

## AI Integration

This repo includes a `.cursorrules` file that teaches AI coding assistants (Cursor, GitHub Copilot, etc.) how to use this design system. Open this repo in your AI-powered editor and it will automatically follow the design system rules.

---
*Last synced: 2026-02-24T19:27:40.313Z*
