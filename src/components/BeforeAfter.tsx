import { site } from "@/content/site";

export function BeforeAfter() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl reveal">
          <p className="eyebrow">{site.beforeAfter.eyebrow}</p>
          <h2 className="section-title">{site.beforeAfter.title}</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <ComparisonCard title="Before" items={site.beforeAfter.before} tone="muted" />
          <ComparisonCard title="After" items={site.beforeAfter.after} tone="primary" />
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({ title, items, tone }: { title: string; items: string[]; tone: "muted" | "primary" }) {
  const active = tone === "primary";

  return (
    <article className={`card reveal p-6 md:p-8 ${active ? "bg-[var(--color-soft)]" : ""}`}>
      <h3 className={`font-display text-3xl font-black ${active ? "text-[var(--color-primary)]" : "text-[var(--color-muted)]"}`}>
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 font-bold leading-8">
            <span aria-hidden="true">{active ? "✓" : "—"}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
