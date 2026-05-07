import { site } from "@/content/site";

export function MidCta({ variant }: { variant: "compact" | "pricing" }) {
  const label = variant === "pricing" ? site.psychology.limitedOffer.text : site.cta.subLabel;

  return (
    <section className="bg-[var(--color-foreground)] py-12 text-white">
      <div className="container flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold text-white/62">{label}</p>
          <h2 className="mt-2 text-2xl font-black md:text-4xl">相談までの迷いを、ここで短く。</h2>
        </div>
        <a href={site.cta.href} className="btn btn-primary">
          {site.cta.label}
        </a>
      </div>
    </section>
  );
}
