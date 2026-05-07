import { site } from "@/content/site";

export function CtaSection() {
  return (
    <section className="bg-[var(--color-primary)] py-20 text-[var(--color-primary-foreground)]">
      <div className="container max-w-4xl text-center reveal">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-black leading-[1.14] [text-wrap:balance] [word-break:auto-phrase]">選ばれる理由を、今日から整える。</h2>
        {site.psychology.lossAversion.enabled && <p className="mx-auto mt-5 max-w-2xl text-white/82">{site.psychology.lossAversion.text}</p>}
        <a href={site.cta.href} className="btn btn-on-primary mt-8">
          {site.cta.label}
        </a>
      </div>
    </section>
  );
}
