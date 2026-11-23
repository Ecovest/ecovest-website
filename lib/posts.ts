// Blog posts. Body text is the team's own announcement copy (emojis removed: site rule).

export type Post = {
  slug: string;
  tag: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  image: { src: string; width: number; height: number; alt: string };
  /** 1200×630 share image for link previews. */
  og: { src: string; alt: string };
  body: { type: "p" | "h2"; text: string }[];
  list?: { title: string; items: string[] };
  cta?: { label: string; href: string };
};

export const POSTS: Post[] = [
  {
    slug: "ecovest-x-forge-academy",
    tag: "Partnership",
    title: "EcoVest is partnering with Forge Academy",
    date: "2026-11-23",
    excerpt:
      "More learning opportunities for our members, starting with Forge Academy Cohort 1: UI/UX design taught by industry professionals.",
    image: {
      src: "/blog/ecovest-x-forge-academy.webp",
      width: 853,
      height: 1280,
      alt: "EcoVest × Forge Academy partnership announcement: Forge Academy Cohort 1, learn UI/UX design from industry professionals. Registration is now open.",
    },
    og: {
      src: "/blog/ecovest-x-forge-academy-og.png",
      alt: "EcoVest is partnering with Forge Academy. Cohort 1: learn UI/UX design from industry professionals.",
    },
    body: [
      { type: "p", text: "The wait is over. EcoVest is officially partnering with Forge Academy." },
      {
        type: "p",
        text: "This partnership is focused on creating more learning opportunities, helping members develop valuable skills, and providing access to resources that support personal and professional growth.",
      },
      {
        type: "p",
        text: "At EcoVest, we believe financial intelligence goes beyond money. It also involves building the right skills, mindset and opportunities for the future.",
      },
      { type: "h2", text: "Forge Academy Cohort 1: UI/UX design" },
      {
        type: "p",
        text: "The first cohort teaches UI/UX design with industry professionals. It's a practical programme that takes you from beginner to confident designer through real-world projects.",
      },
    ],
    list: {
      title: "What's included",
      items: ["Beginner friendly", "Hands-on projects", "Portfolio building", "Mentorship", "Live classes", "Community support"],
    },
    cta: { label: "Join the community to register", href: "https://wa.me/2349163655638" },
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
