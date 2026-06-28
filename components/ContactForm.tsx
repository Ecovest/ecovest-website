"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type State = "idle" | "submitting" | "success" | "error";

const TOPICS: { value: string; label: string }[] = [
  { value: "general", label: "General question" },
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press" },
  { value: "careers", label: "Careers" },
  { value: "bug", label: "Found a bug" },
];

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "submitting") return;

    const form = new FormData(e.currentTarget);
    if (!topic) {
      setState("error");
      setMessage("Please pick what this is about.");
      return;
    }
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      topic,
      message: String(form.get("message") || ""),
    };

    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setState("success");
      setMessage("Got it. We'll get back to you within a day.");
      (e.target as HTMLFormElement).reset();
      setTopic("");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Try again later.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-ink/8 p-6 md:p-8 bg-bone space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name">
          <input
            name="name"
            required
            placeholder="Ada Okeke"
            className="w-full bg-transparent px-3.5 py-2.5 rounded-xl border border-ink/10 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-brand-500"
          />
        </Field>
        <Field label="Email">
          <input
            name="email"
            type="email"
            required
            placeholder="you@mail.com"
            className="w-full bg-transparent px-3.5 py-2.5 rounded-xl border border-ink/10 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-brand-500"
          />
        </Field>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.14em] text-ink/55 mb-2">
          What is this about?
        </div>
        <TopicSelect value={topic} onChange={setTopic} />
      </div>

      <Field label="Your message">
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us what's on your mind…"
          className="w-full bg-transparent px-3.5 py-2.5 rounded-xl border border-ink/10 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-brand-500 resize-none"
        />
      </Field>

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-ink/45">
          By sending you agree to our{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
            privacy policy
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary text-sm disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Send message"}
        </button>
      </div>

      {state !== "idle" && (
        <p
          className={`text-sm ${
            state === "success"
              ? "text-brand-600"
              : state === "error"
                ? "text-red-600"
                : "text-ink/60"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

function TopicSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = TOPICS.find((t) => t.value === value);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border bg-transparent text-sm transition ${
          open ? "border-brand-500" : "border-ink/10"
        } ${selected ? "text-ink" : "text-ink/35"}`}
      >
        <span>{selected ? selected.label : "Pick one…"}</span>
        <svg
          className={`shrink-0 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-30 mt-2 w-full rounded-xl border border-ink/10 bg-bone shadow-xl overflow-hidden p-1"
          >
            {TOPICS.map((t) => {
              const active = t.value === value;
              return (
                <li key={t.value}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onChange(t.value);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-lg text-sm transition ${
                      active
                        ? "bg-brand-50 text-brand-700"
                        : "text-ink/75 hover:bg-ink/5"
                    }`}
                  >
                    {t.label}
                    {active && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12.5l4 4 10-10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-[0.14em] text-ink/55 mb-2">
        {label}
      </div>
      {children}
    </label>
  );
}
