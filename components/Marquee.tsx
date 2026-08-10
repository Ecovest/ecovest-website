const tokens = [
  "Financial Literacy",
  "AI Financial Coach",
  "Investing",
  "Trading",
  "Community Learning",
  "Budgeting & Goals",
  "Quantitative Finance",
  "Digital Skills",
];

/**
 * The row rides a sine wave rather than a flat line.
 *
 * The wave completes exactly one full period across `tokens.length`, and each
 * item's phase is keyed to `i % tokens.length`. That means the duplicated half
 * of the row sits at identical offsets to the first half, so the -50% scroll
 * wraps with no visible seam in the curve.
 */
const AMPLITUDE = 16; // px of vertical travel
const TILT = 6; // deg — items lean into the slope of the wave

export default function Marquee() {
  const row = [...tokens, ...tokens];

  return (
    <section className="py-10 overflow-hidden">
      <div className="marquee-wave flex items-center gap-14 animate-marquee whitespace-nowrap will-change-transform">
        {row.map((t, i) => {
          const phase = ((i % tokens.length) / tokens.length) * Math.PI * 2;
          return (
            <div
              key={i}
              className="flex items-center gap-3 text-sm text-ink/55"
              style={{
                // sin drives the height, cos is its derivative, so the tilt
                // always matches the tangent of the curve at that point.
                transform: `translateY(${(Math.sin(phase) * AMPLITUDE).toFixed(2)}px) rotate(${(Math.cos(phase) * TILT).toFixed(2)}deg)`,
              }}
            >
              <span className="font-display tracking-tight">{t}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
