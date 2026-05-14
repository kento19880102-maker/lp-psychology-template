import { site } from "@/content/site";

export function SocialProofStats() {
  return (
    <section id="proof" className="border-y border-[var(--color-line)] bg-white">
      <div className="container grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
        {site.psychology.socialProofStats.map((stat) => (
          <div key={stat.label} className="bg-white py-7 text-center md:py-10">
            <p className="font-display text-5xl font-black text-[var(--color-primary)]">{stat.value}</p>
            <p className="mt-2 text-xs font-bold text-[var(--color-muted)] md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
