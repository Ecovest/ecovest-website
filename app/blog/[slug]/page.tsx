import { ArrowLeft02Icon, ArrowRight02Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Icon } from "@/components/ui/Icon";
import { POSTS, formatDate, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} · EcoVest`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [{ url: post.og.src, width: 1200, height: 630, alt: post.og.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.og.src, alt: post.og.alt }],
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <div className="bg-paper">
        <Header />
        <main className="mx-auto max-w-[1180px] px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#3e4641] transition-colors hover:text-green-700">
            <Icon icon={ArrowLeft02Icon} size={16} className="text-current" />
            All posts
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            {/* flyer */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Image
                src={post.image.src}
                width={post.image.width}
                height={post.image.height}
                alt={post.image.alt}
                priority
                className="mx-auto w-full max-w-[460px] rounded-[20px] shadow-[0_24px_60px_-28px_rgba(16,40,26,0.45)] lg:rounded-[24px]"
              />
            </div>

            {/* article */}
            <article>
              <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#626b66]">
                <span className="rounded-[61px] border border-[rgba(0,178,91,0.25)] bg-white px-3 py-1 text-[12px] font-medium uppercase tracking-[0.12em] text-[#555]">
                  {post.tag}
                </span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h1 className="mt-5 font-sans text-[32px] font-normal leading-[1.1] tracking-[-0.03em] text-[#101010] md:text-[48px]">
                {post.title}
              </h1>

              <div className="mt-8 space-y-5 text-[15px] leading-[1.7] text-[#2a302c] md:text-[17px]">
                {post.body.map((b, i) =>
                  b.type === "h2" ? (
                    <h2 key={i} className="pt-4 font-sans text-[22px] font-medium tracking-[-0.02em] text-[#101010] md:text-[26px]">
                      {b.text}
                    </h2>
                  ) : (
                    <p key={i}>{b.text}</p>
                  ),
                )}
              </div>

              {post.list ? (
                <div className="mt-8 rounded-[20px] bg-[#f3f5f4] p-5 md:p-7">
                  <p className="text-[14px] font-medium text-[#101010] md:text-[15px]">{post.list.title}</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {post.list.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-[14px] text-[#2a302c] md:text-[15px]">
                        <Icon icon={CheckmarkCircle02Icon} size={18} className="shrink-0 text-green-600" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {post.cta ? (
                <a
                  href={post.cta.href}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[15px] font-medium text-white shadow-[inset_0_-5px_10px_rgba(147,222,131,0.45)] transition-colors hover:bg-brand-hover"
                >
                  {post.cta.label}
                  <Icon icon={ArrowRight02Icon} size={18} className="text-white" />
                </a>
              ) : null}
            </article>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
