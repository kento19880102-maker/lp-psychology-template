import { site } from "@/content/site";

export function Problems() {
  return (
    <section id="problems" className="section">
      <div className="container grid gap-10 md:grid-cols-[.9fr_1.1fr] md:items-start">
        <div className="reveal">
          <p className="eyebrow">{site.problems.eyebrow}</p>
          <h2 className="section-title">{site.problems.title}</h2>
          <p className="section-lead">{site.problems.lead}</p>
        </div>
        <div className="grid gap-3 reveal">
          {site.problems.items.map((item) => (
            <div key={item} className="card flex items-center gap-4 p-5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-soft)] text-sm font-black text-[var(--color-primary)]">✓</span>
              <p className="font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
