import { site } from "@/content/site";

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="max-w-3xl reveal">
          <p className="eyebrow">{site.pricing.eyebrow}</p>
          <h2 className="section-title">{site.pricing.title}</h2>
          <p className="section-lead">{site.pricing.lead}</p>
        </div>
        {site.psychology.limitedOffer.enabled && (
          <p className="mt-8 inline-flex rounded-full bg-[var(--color-soft)] px-4 py-2 text-sm font-black text-[var(--color-primary)]">
            {site.psychology.limitedOffer.text}
          </p>
        )}
        <div className="mt-8 grid gap-5 overflow-visible lg:grid-cols-3 lg:items-stretch">
          {site.pricing.plans.map((plan) => (
            <article key={plan.name} className={`card reveal relative p-6 transition-transform ${plan.recommended ? "pricing-card-recommended" : ""}`}>
              {plan.badge && <p className="absolute right-5 top-5 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-black text-white">{plan.badge}</p>}
              <h3 className="pr-24 text-2xl font-black">{plan.name}</h3>
              <p className="mt-3 min-h-12 text-sm leading-7 text-[var(--color-muted)]">{plan.note}</p>
              <div className="mt-6 rounded-[8px] bg-white p-5">
                {site.psychology.priceAnchoring.enabled && (
                  <p className="text-sm font-bold text-[var(--color-muted)]">
                    通常価格 <span className="line-through">{plan.regularPrice}</span>
                  </p>
                )}
                <p className="mt-1 font-display text-4xl font-black text-[var(--color-primary)]">{plan.currentPrice}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-bold leading-7">
                    <span className="text-[var(--color-primary)]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href={site.cta.href} className="btn btn-primary mt-7 w-full">
                {site.cta.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
