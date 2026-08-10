"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Msg = { role: "user" | "model"; content: string };

const WELCOME: Msg = {
  role: "model",
  content:
    "Hey, I'm EcoBot. Ask me anything about EcoVest, personal finance, or investing. What would you like to know?",
};

const SUGGESTIONS = [
  "What is EcoVest?",
  "What does the AI Financial Coach do?",
  "When does the platform launch?",
  "Is this for total beginners?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, streaming]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;
    setError(null);

    const nextMessages: Msg[] = [
      ...messages,
      { role: "user", content: trimmed },
      { role: "model", content: "" },
    ];
    setMessages(nextMessages);
    setInput("");
    setStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((m) => m.content.length > 0)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data?.error ||
            "I couldn't reach the EcoVest brain right now. Try again in a sec.",
        );
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          if (last && last.role === "model") {
            copy[copy.length - 1] = { ...last, content: acc };
          }
          return copy;
        });
      }

      if (!acc.trim()) {
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = {
            role: "model",
            content:
              "Hmm, I drew a blank there. Mind asking again or rephrasing?",
          };
          return copy;
        });
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setMessages((prev) => {
        const copy = [...prev];
        // remove the empty model placeholder
        if (copy[copy.length - 1]?.content === "") copy.pop();
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  function reset() {
    setMessages([WELCOME]);
    setError(null);
    setInput("");
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close EcoBot" : "Open EcoBot"}
        className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] w-14 h-14 rounded-full bg-ink text-bone grid place-items-center shadow-xl hover:bg-brand-600 transition-colors group"
      >
        <span className="absolute inset-0 rounded-full bg-brand-500/30 animate-ping opacity-40 group-hover:opacity-0" />
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 20, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -20, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative"
            >
              <BotGlyph />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[60] inset-x-0 bottom-0 md:inset-x-auto md:bottom-24 md:right-7 md:w-[400px] md:h-[580px] h-[85dvh] flex flex-col bg-bone border border-ink/10 md:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden"
          >
            <Header onReset={reset} onClose={() => setOpen(false)} />

            <div
              ref={listRef}
              className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scroll-smooth"
            >
              {messages.map((m, i) => (
                <Bubble key={i} role={m.role} content={m.content} />
              ))}

              {streaming && messages[messages.length - 1]?.content === "" && (
                <TypingDots />
              )}

              {messages.length === 1 && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-ink/10 text-ink/70 hover:border-brand-500 hover:text-brand-700 transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {error && (
                <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-xl p-3">
                  {error}
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-ink/8 p-3 bg-bone"
            >
              <div className="flex items-end gap-2 bg-bone-warm rounded-2xl border border-ink/10 focus-within:border-brand-500 transition px-3 py-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  rows={1}
                  placeholder="Ask EcoBot anything…"
                  className="flex-1 bg-transparent text-sm resize-none focus:outline-none placeholder:text-ink/35 max-h-32 leading-relaxed py-1"
                  disabled={streaming}
                />
                <button
                  type="submit"
                  disabled={streaming || !input.trim()}
                  className="shrink-0 w-8 h-8 rounded-full bg-ink text-bone grid place-items-center disabled:opacity-30 hover:bg-brand-600 transition"
                  aria-label="Send message"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-[10px] text-ink/40 text-center">
                EcoBot can be wrong.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Header({
  onReset,
  onClose,
}: {
  onReset: () => void;
  onClose: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-ink/8 bg-bone">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-brand-600 grid place-items-center text-bone">
          <BotGlyph />
        </div>
        <div>
          <div className="font-display text-sm font-semibold text-ink leading-tight">
            EcoBot
          </div>
          <div className="text-[11px] text-ink/55 flex items-center gap-1.5"></div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {/* <button
          onClick={onReset}
          className="px-2.5 py-1 rounded-full text-[11px] text-ink/55 hover:text-ink hover:bg-ink/5 transition"
          aria-label="Reset conversation"
        >
          Reset
        </button> */}
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full grid place-items-center text-ink/60 hover:text-ink hover:bg-ink/5 transition"
          aria-label="Close chat"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Bubble({ role, content }: Msg) {
  const isUser = role === "user";
  if (!content && !isUser) return null;
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-ink text-bone rounded-br-md whitespace-pre-wrap"
            : "bg-bone-warm border border-ink/8 text-ink rounded-bl-md chat-md"
        }`}
      >
        {isUser ? content : renderMarkdown(content)}
      </div>
    </div>
  );
}

/* ---------- minimal markdown renderer ---------- */
// Handles: **bold**, *italic*, `code`, [text](url), - / 1. lists, paragraphs.
// Renders as React nodes, no HTML strings, no XSS risk.

function renderMarkdown(text: string): React.ReactNode {
  const blocks = text.split(/\n{2,}/);
  return blocks.map((block, i) => renderBlock(block, i));
}

function renderBlock(block: string, key: number): React.ReactNode {
  const lines = block.split("\n");
  const isBullet = lines.every((l) => /^\s*[-*]\s+/.test(l));
  const isNumbered = lines.every((l) => /^\s*\d+\.\s+/.test(l));

  if (isBullet && lines.length > 1) {
    return (
      <ul key={key} className="list-disc pl-5 space-y-1 my-1.5">
        {lines.map((l, j) => (
          <li key={j}>{renderInline(l.replace(/^\s*[-*]\s+/, ""))}</li>
        ))}
      </ul>
    );
  }
  if (isNumbered && lines.length > 1) {
    return (
      <ol key={key} className="list-decimal pl-5 space-y-1 my-1.5">
        {lines.map((l, j) => (
          <li key={j}>{renderInline(l.replace(/^\s*\d+\.\s+/, ""))}</li>
        ))}
      </ol>
    );
  }

  // paragraph: preserve single newlines as <br>
  return (
    <p key={key} className="my-0 [&:not(:first-child)]:mt-2">
      {lines.map((line, j) => (
        <span key={j}>
          {renderInline(line)}
          {j < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

function renderInline(text: string): React.ReactNode[] {
  if (!text) return [];
  const tokens =
    /(\*\*[^*\n]+?\*\*)|(\*[^*\n]+?\*)|(`[^`\n]+?`)|(\[[^\]\n]+\]\([^)\n]+\))/g;
  const nodes: React.ReactNode[] = [];
  let lastIdx = 0;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = tokens.exec(text)) !== null) {
    if (m.index > lastIdx) nodes.push(text.slice(lastIdx, m.index));
    const t = m[0];
    if (t.startsWith("**")) {
      nodes.push(
        <strong key={key++} className="font-semibold">
          {t.slice(2, -2)}
        </strong>,
      );
    } else if (t.startsWith("`")) {
      nodes.push(
        <code
          key={key++}
          className="px-1 py-0.5 rounded bg-ink/8 text-[0.85em] font-mono"
        >
          {t.slice(1, -1)}
        </code>,
      );
    } else if (t.startsWith("[")) {
      const lm = /\[([^\]]+)\]\(([^)]+)\)/.exec(t);
      if (lm) {
        const href = lm[2];
        const isExternal = /^https?:\/\//.test(href);
        nodes.push(
          <a
            key={key++}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-brand-600 underline underline-offset-2 hover:text-brand-700"
          >
            {lm[1]}
          </a>,
        );
      }
    } else if (t.startsWith("*")) {
      nodes.push(<em key={key++}>{t.slice(1, -1)}</em>);
    }
    lastIdx = m.index + t.length;
  }
  if (lastIdx < text.length) nodes.push(text.slice(lastIdx));
  return nodes;
}

function TypingDots() {
  return (
    <div className="flex justify-start">
      <div className="bg-bone-warm border border-ink/8 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
        <Dot delay={0} />
        <Dot delay={0.15} />
        <Dot delay={0.3} />
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="w-1.5 h-1.5 rounded-full bg-ink/40"
      animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 0.9, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

function BotGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3c-3 0-5 2-5 5v1a3 3 0 00-3 3v3a3 3 0 003 3h10a3 3 0 003-3v-3a3 3 0 00-3-3V8c0-3-2-5-5-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="13" r="1" fill="currentColor" />
      <circle cx="14.5" cy="13" r="1" fill="currentColor" />
      <path
        d="M12 3v-1.5M9 17h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
