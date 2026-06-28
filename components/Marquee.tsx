const tokens = [
  "Financial Literacy",
  "Sustainable Investing",
  "Compounding",
  "Eco-Conscious Wealth",
  "Future-Ready",
  "Smart Habits",
  "Index Funds",
  "Green Bonds",
];

export default function Marquee() {
  const row = [...tokens, ...tokens];
  return (
    <section className="border-y border-ink/8 bg-bone py-5 overflow-hidden">
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {row.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm text-ink/55"
            >
              <span className="w-1 h-1 rounded-full bg-brand-500" />
              <span className="font-display tracking-tight">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
