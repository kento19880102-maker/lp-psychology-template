import { site } from "@/content/site";

export function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl reveal">
          <p className="eyebrow">{site.features.eyebrow}</p>
          <h2 className="section-title">{site.features.title}</h2>
          <p className="section-lead">{site.features.lead}</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {site.features.items.map((feature) => (
            <article key={feature.title} className="card reveal p-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-[var(--color-primary)] font-display text-sm font-black text-white">
                {feature.icon}
              </span>
              <h3 className="mt-6 text-xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-8 text-[var(--color-muted)]">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
