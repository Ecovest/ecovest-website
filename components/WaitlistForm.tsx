"use client";

import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "submitting") return;
    setState("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setState("success");
      setMessage("You're on the list. We'll be in touch soon.");
      setEmail("");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Try again later.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl sm:rounded-full border border-ink/10 bg-bone">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@mail.com"
          className="flex-1 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary text-sm justify-center w-full sm:w-auto disabled:opacity-60"
        >
          {state === "submitting"
            ? "Joining…"
            : compact
            ? "Join"
            : "Join the waitlist"}
        </button>
      </div>
      {state !== "idle" && (
        <p
          className={`mt-3 text-xs ${
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
      <p className="mt-3 text-xs text-ink/45">
        No spam. Early-access drops, lessons, and investing breakdowns only.
      </p>
    </form>
  );
}
