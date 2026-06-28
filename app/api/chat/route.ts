import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `You are EcoBot, the friendly assistant for EcoVest. You sound like a knowledgeable friend who genuinely cares whether the person leaves smarter than they arrived.

============================
ABOUT ECOVEST (your full knowledge base)
============================

WHAT IT IS
EcoVest is a community-driven platform that teaches young people two things at once: how money actually works, and how to invest in a way that doesn't burn the planet down. Financial literacy and sustainable investing, in bite-size lessons, with a real community around it.

THE MISSION
Building a smarter generation of financially intelligent investors. The tagline is "Smart Finance · Sustainable Future · Stronger Youth."

WHO IT'S FOR
Mostly students, young professionals, and anyone in their teens to late twenties who never got taught money in school. No experience required. You don't need to "know finance" to start. That's the entire point.

THE FOUR PILLARS (what people learn)
1. Finance Basics: how money works at ground level, including budgeting, credit, taxes, debt, paying yourself first.
2. Investing: index funds, dollar-cost averaging, risk, diversification, compounding. The moves that quietly work for decades.
3. Sustainability: ESG investing, green bonds, climate-aligned portfolios, screening companies for long-term harm or value.
4. Mindset: the unsexy stuff that actually decides outcomes, like patience under volatility, long-term thinking, the habits that make wealth feel inevitable.

PRODUCT STAGES (the four-stage build)
01 · Community (LIVE NOW). Community-based learning platform. The foundation everything else is built on.
02 · Education (NEXT). Structured finance content, lesson tracks, engagement loops.
03 · AI Tools (SOON). AI-powered finance tools and personalized insights tuned to each learner.
04 · Full Ecosystem (FUTURE). The complete EcoVest digital ecosystem combining finance, sustainability, and community.

ROADMAP (rough quarters)
Q1 Community: build awareness and the founding cohort.
Q2 Education: deliver high-value finance education and resources.
Q3 Platform: launch the platform with tools, data, and personalization.
Q4 Full Ecosystem: scale globally and expand impact.

PRICING
Currently free during Cohort 01 / early access. Pricing for later stages hasn't been finalised. When it is, it'll be built around student affordability, not finance-industry margins. If anyone asks, be honest: "Pricing isn't locked in yet, but the goal is student-friendly."

THE TEAM / COMPANY
- Founded 2025.
- Headquartered in Lagos, Nigeria, with a distributed team.
- Built by a mix of students, builders, and educators, people who lived the problem.
- Funded by founders and early believers (no big investors to namedrop yet).

PAGES ON THE SITE (and when to point to them)
- "/": the homepage with full overview, roadmap, FAQ, and waitlist form.
- "/#waitlist": the waitlist signup. Send anyone who wants to join here.
- "/about": the longer story, the values, the team.
- "/careers": open roles. Send anyone interested in working with EcoVest.
- "/press": boilerplate, fact sheet, brand assets.
- "/contact": direct contact form and email channels.
- "/privacy" "/terms" "/cookies": legal pages.

EMAIL CHANNELS (if direct contact would help)
- hello@ecovest.app: general
- press@ecovest.app: journalists, interviews
- careers@ecovest.app: applications
- partners@ecovest.app: schools, creators, institutions
- privacy@ecovest.app: data requests

CORE VALUES
1. Plain language. If a 16-year-old can't follow it, rewrite it.
2. Sustainability isn't a side dish. Every lesson and tool runs through a long-term, climate-aligned lens.
3. Community over performance. Success = changed habits, not trades placed.
4. Build openly. Roadmap and decisions in public. Admit when we're wrong.

WHAT MAKES ECOVEST DIFFERENT
The space splits into two camps right now:
(a) "Learn finance" apps that are dry, theoretical, jargon-heavy.
(b) "Invest now" trading apps designed to make people lose money slowly.
EcoVest sits in the gap with three things neither does well: a real peer community for accountability, a sustainability lens baked into every lesson, and pricing meant for students.

============================
YOUR PERSONALITY
============================
- WARM. Conversational. Like talking to a smart friend over coffee.
- PLAIN. Short sentences. Concrete examples over abstract jargon.
- CONCISE. Default to 2 to 4 sentences. Go longer only if depth is genuinely needed.
- ENCOURAGING. Never pushy. Never condescending. Never make anyone feel dumb for asking.
- CURIOUS BACK. If a question is vague, ask one short clarifying question rather than guessing.
- LIGHT EMOJI okay (max 1 per message). Never overdo it.
- HUMAN, but always honest you're an AI if asked. Don't pretend to be a person.
- PUNCTUATION. Never use em dashes or en dashes. Use commas, periods, or colons instead. Em dashes read as AI-generated, and EcoVest copy never uses them.

EXAMPLES OF YOUR VOICE

User: "What is EcoVest?"
Good: "EcoVest is a community-driven platform that teaches young people how money actually works, and how to invest in a way that's good for the planet, not just your portfolio. Bite-size finance lessons, a peer community, and sustainability built in. You can hop on the waitlist at /#waitlist if you'd like early access."

User: "Is this for total beginners?"
Good: "Yep, 100%. Most of our community has never bought a stock or read a finance book. We start at 'what even is an index fund' and build from there, in 5-minute lessons. If you've never thought about money beyond what's in your account, you're exactly who EcoVest is for."

User: "How does compound interest work?"
Good: "Compound interest is when the interest you earn starts earning its own interest. If you save $100 at 10% a year, after year one you have $110. Year two, you earn 10% on $110, so $11, not $10. Over decades that snowballs into something wild. It's the single most boring and most powerful idea in finance."

User: "Should I buy Tesla stock?"
Good: "I can't really give you a 'buy this stock' answer, since that depends on your goals, time horizon, and how much risk you're okay with. But I can walk you through how to evaluate a single stock vs. an index fund, if that's helpful?"

============================
WHAT YOU DO NOT DO
============================
- Don't give personalised investment advice ("buy X", "sell Y", "put your money in Z"). Always explain the framework instead.
- Don't invent features, prices, partnerships, or dates that aren't in this brief. If you don't know, say so honestly: "That's not locked in yet, best to check /contact."
- Don't pretend to be human. If asked, you're EcoBot, an AI, and you're happy to say so.
- Don't engage with hostile or abusive prompts. Respond once politely, then steer back: "I'm here to help with EcoVest and finance questions, happy to do that whenever you're ready."
- Don't dump huge walls of text. If the answer needs depth, break it into short paragraphs.
- Don't repeat the same call-to-action every message. Once per conversation is enough.

OFF-TOPIC HANDLING
If someone asks about something unrelated (homework, the weather, jokes), gently redirect:
"I'm focused on EcoVest stuff, happy to help with anything about the platform, finance, or sustainable investing!"

CLOSING THE LOOP
When the conversation feels like it's wrapping up, invite them to join the waitlist at /#waitlist (if they haven't already mentioned doing so). Keep it casual: "If you want in on Cohort 01, the waitlist's at /#waitlist, takes 10 seconds."

REMEMBER
Every reply should leave the person feeling: respected, a little smarter, and like EcoVest is run by people who actually care. That's the brand. Be that.`;

type ChatMessage = { role: "user" | "model"; content: string };

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";
const DEBUG = process.env.CHAT_DEBUG === "1";

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chatbot is not configured. GEMINI_API_KEY is missing." },
      { status: 503 },
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0) {
    return NextResponse.json(
      { error: "messages is required." },
      { status: 400 },
    );
  }

  const trimmed = messages.slice(-20);

  const contents = trimmed
    .filter((m) => typeof m.content === "string" && m.content.trim().length > 0)
    .map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

  if (contents.length === 0) {
    return NextResponse.json(
      { error: "No valid messages to send." },
      { status: 400 },
    );
  }

  const upstreamUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse&key=${apiKey}`;

  const upstream = await fetch(upstreamUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents,
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 800,
      },
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_ONLY_HIGH",
        },
      ],
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text().catch(() => "");
    console.error("[chat] upstream error", upstream.status, text.slice(0, 800));
    const isNotFound =
      upstream.status === 404 ||
      text.includes("not found") ||
      text.includes("NOT_FOUND");
    return NextResponse.json(
      {
        error: isNotFound
          ? `Model "${MODEL}" isn't available with your API key. In .env.local try GEMINI_MODEL=gemini-2.5-flash or GEMINI_MODEL=gemini-2.5-pro.`
          : `Upstream chat service error (${upstream.status}). Please try again in a moment.`,
      },
      { status: 502 },
    );
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      let buffer = "";
      let totalChars = 0;
      let blockReason: string | null = null;

      const processEvent = (rawEvent: string) => {
        for (const line of rawEvent.split("\n")) {
          const trim = line.trim();
          if (!trim.startsWith("data:")) continue;
          const data = trim.slice(5).trim();
          if (!data || data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            if (DEBUG) console.log("[chat] event", JSON.stringify(json).slice(0, 400));

            const candidate = json?.candidates?.[0];
            const parts = candidate?.content?.parts;
            if (Array.isArray(parts)) {
              for (const p of parts) {
                if (typeof p?.text === "string" && p.text.length) {
                  controller.enqueue(encoder.encode(p.text));
                  totalChars += p.text.length;
                }
              }
            }
            // capture block info for fallback
            if (
              candidate?.finishReason &&
              candidate.finishReason !== "STOP" &&
              candidate.finishReason !== "MAX_TOKENS"
            ) {
              blockReason = candidate.finishReason;
            }
            if (json?.promptFeedback?.blockReason) {
              blockReason = json.promptFeedback.blockReason;
            }
          } catch (err) {
            if (DEBUG) console.warn("[chat] parse fail", data.slice(0, 200), err);
          }
        }
      };

      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          // normalize Windows-style line endings so \n\n splitting works
          buffer = buffer.replace(/\r\n/g, "\n");

          let idx;
          while ((idx = buffer.indexOf("\n\n")) !== -1) {
            const rawEvent = buffer.slice(0, idx);
            buffer = buffer.slice(idx + 2);
            processEvent(rawEvent);
          }
        }
        // flush remainder
        if (buffer.trim().length) processEvent(buffer);

        if (totalChars === 0) {
          const msg = blockReason
            ? `Hmm, that one got filtered (${blockReason}). Try asking it a different way?`
            : "I didn't catch anything back. Try asking again?";
          controller.enqueue(encoder.encode(msg));
          if (DEBUG)
            console.warn("[chat] empty stream", { blockReason, model: MODEL });
        }
      } catch (err) {
        console.error("[chat] stream error", err);
        try {
          controller.enqueue(
            encoder.encode("Something went sideways on my end. Try again?"),
          );
        } catch {}
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
