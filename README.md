# EcoVest landing page

 learn how money works, practise investing with pretend money, and invest through licensed partners when you're ready. Built for young Africans, starting in Nigeria.

## Stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS 3
- Fonts: Familjen Grotesk, Archivo, Instrument Serif (via `next/font`)
- Icons: Hugeicons (free Stroke Rounded set) only

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Environment variables

Copy `.env.example` to `.env.local`. In production, add the same keys in your hosting dashboard.

| Key | Required | What it does |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No (defaults to `https://ecovest.community`) | Base URL for share images and canonical links |
| `GEMINI_API_KEY` | No | Kept for the EcoBot chatbot; the current site doesn't call it |

## Pages

| Route | What it is |
|---|---|
| `/` | Home: hero, problem and solution, how it works, features, FAQ, CTA and footer |
| `/blog`, `/blog/[slug]` | Blog list and posts (posts live in `lib/posts.ts`) |
| `/privacy`, `/terms`, `/cookies`, `/risk` | Legal pages (placeholders until the final text is approved) |
| any unknown URL | Custom 404 page |

## Adding a blog post

1. Put the post image (and a 1200×630 share image) in `public/blog/`.
2. Add an entry to `POSTS` in `lib/posts.ts`.

## Project layout

- `app/`: routes, layout, global styles, favicon and share images
- `components/`: page sections (`Hero`, `Problem`, `HowItWorks`, `Features`, `FAQ`, `Footer`, `Header`)
- `components/ui/`: shared pieces (`Icon`, the Meadow Rise footer scene)
- `lib/`: helpers (`useInView` scroll animations, blog posts)
- `public/`: images and illustrations
- `docs/`: brand brief and design foundations
