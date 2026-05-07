import { site } from "@/content/site";

export function SocialProofStats() {
  return (
    <section id="proof" className="border-y border-[var(--color-line)] bg-white">
      <div className="container grid grid-cols-3 gap-px">
        {site.psychology.socialProofStats.map((stat) => (
          <div key={stat.label} className="py-7 text-center md:py-10">
            <p className="font-display text-3xl font-black text-[var(--color-primary)] md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-xs font-bold text-[var(--color-muted)] md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
