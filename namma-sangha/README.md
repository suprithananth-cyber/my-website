## Namma Sangha Website

Responsive marketing site for the Namma Sangha community trust. Built with the Next.js App Router, TypeScript, and Tailwind CSS (v4) so the content stays fast, accessible, and easy to extend.

### Tech Stack

- Next.js 16 (App Router, server components)
- TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- next/font with Inter

### Project Structure

```
namma-sangha/
├── public/             # Static assets
├── src/
│   ├── app/
│   │   ├── page.tsx            # Home
│   │   ├── about/page.tsx
│   │   ├── our-work/page.tsx
│   │   ├── events/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── layout.tsx          # Root layout with shared navigation + footer
│   │   └── globals.css         # Tailwind directives + custom tokens
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── PageHero.tsx
│       └── ContactForm.tsx
└── next.config.ts      # Remote image hosts, etc.
```

### Local Development

1. Install dependencies
   ```bash
   cd /workspace/namma-sangha
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser. Edits inside `src/` hot reload automatically.

### Scripts

- `npm run dev` – start Next.js in development mode
- `npm run build` – create an optimized production build
- `npm start` – serve the production build
- `npm run lint` – run ESLint

### Content Overview

- **Home**: hero, focus areas, real-time style stats, CTA banner.
- **About**: origin story, values, and milestones.
- **Our Work**: initiatives plus volunteer/partner ideas.
- **Events**: upcoming gatherings and recent highlights.
- **Gallery**: curated Unsplash placeholders with captions.
- **Contact**: trust details and a validated contact form (front-end only).

Feel free to tailor the copy, imagery, or add a CMS/backend when you are ready.
