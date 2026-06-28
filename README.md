# EcoVest

**Smart Finance · Sustainable Future · Stronger Youth**

EcoVest is a community-driven platform that teaches young people how money actually works — and how to invest in a way that builds wealth without burning the planet. This repository contains the EcoVest marketing site and waitlist: a fast, animated Next.js landing experience with an AI assistant (EcoBot), an interactive 3D hero, and full company/legal pages.

🌱 Building a smarter generation of financially intelligent investors.

---

## ✨ Features

- **Animated landing page** — hero with an interactive, mouse-responsive 3D coin-and-sprout scene (Three.js), plus Problem, Solution, Product Stage, Roadmap, Vision, FAQ, and CTA sections.
- **EcoBot** — an in-page AI assistant (powered by Google Gemini) that answers questions about EcoVest, finance, and sustainable investing, with streaming responses and a custom markdown renderer.
- **Waitlist & contact** — email capture and a contact form with a fully custom (non-native) topic dropdown.
- **Branded splash screen** — a "mint" loading animation (gold coins → sprout → progress ring) that reliably dismisses.
- **Company & legal pages** — About, Careers, Press kit, Contact, Privacy, Terms, Cookies.
- **Built-in SEO/social** — favicon, Apple touch icon, and Open Graph / Twitter share images generated from the brand mark.
- **Responsive & accessible** — mobile nav, responsive layouts throughout, keyboard-friendly focus states, reduced tap-highlight noise.

---

## 🛠 Tech stack

| Area | Tech |
|------|------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript + React 18 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| 3D | [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) & [drei](https://github.com/pmndrs/drei) |
| AI | [Google Gemini API](https://ai.google.dev/) (EcoBot) |
| Fonts | Inter + Space Grotesk |

---

## 🚀 Getting started

### Prerequisites
- Node.js 18.17+ (or 20+)
- npm

### Install

```bash
git clone https://github.com/Ferousco-dev/ecovest.git
cd ecovest
npm install
```

### Configure environment

Copy the example env file and fill in your key:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | ✅ | Google Gemini API key — powers the EcoBot chatbot. Get one at [aistudio.google.com/apikey](https://aistudio.google.com/apikey). |
| `GEMINI_MODEL` | ⛔️ optional | Model id. Defaults to `gemini-2.5-flash`. |
| `CHAT_DEBUG` | ⛔️ optional | Set to `1` to log Gemini events to the server console. |

> Without `GEMINI_API_KEY`, the site runs fine but EcoBot will return an error when messaged.

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with Next.js ESLint |

---

## 📁 Project structure

```
ecovest/
├── app/
│   ├── api/
│   │   ├── chat/        # EcoBot — Gemini streaming endpoint
│   │   ├── contact/     # Contact form handler
│   │   └── waitlist/    # Waitlist signup handler
│   ├── about/  careers/  press/  contact/
│   ├── privacy/  terms/  cookies/
│   ├── icon.png             # Favicon
│   ├── apple-icon.png       # iOS home-screen icon
│   ├── opengraph-image.png  # Social share card
│   ├── twitter-image.png
│   ├── globals.css
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Landing page
├── components/              # Hero, Hero3D, Nav, Footer, Chatbot, Loader, etc.
├── public/                  # Static assets (logo, etc.)
├── tailwind.config.ts
└── next.config.js
```

---

## 🔌 API routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/chat` | `POST` | Streams EcoBot replies from Gemini |
| `/api/waitlist` | `POST` | Accepts `{ email }` for waitlist signup |
| `/api/contact` | `POST` | Accepts `{ name, email, topic, message }` |

> **Note:** the waitlist and contact handlers currently validate input and log the payload. Wire them to your provider of choice (Resend, Mailchimp, Supabase, etc.) before launch — see the `TODO` markers in `app/api/waitlist/route.ts` and `app/api/contact/route.ts`.

---

## ☁️ Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Add the environment variable **`GEMINI_API_KEY`** (and optionally `GEMINI_MODEL`) in **Project Settings → Environment Variables**.
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

After deploying, update `metadataBase` in `app/layout.tsx` to your live domain so social/Open Graph previews resolve correctly.

---

## 📄 License

© EcoVest. All rights reserved. This is proprietary software for the EcoVest business; it is not open source.
