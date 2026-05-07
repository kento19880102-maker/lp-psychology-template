import { site } from "@/content/site";

export function Hero() {
  const { scarcityBanner } = site.psychology;

  return (
    <section className="relative -mt-16 min-h-[92svh] overflow-hidden bg-[#14231f] pt-16 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#10241f_0%,#176b5b_48%,#e8d7b3_100%)]" />
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        src={site.hero.videoSrc}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,18,16,.82),rgba(10,18,16,.5),rgba(10,18,16,.28))]" />
      <div className="container relative flex min-h-[calc(92svh-64px)] items-center py-20">
        <div className="max-w-5xl reveal">
          {scarcityBanner.enabled && (
            <p className="mb-7 inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur">
              {scarcityBanner.text}
            </p>
          )}
          <h1 className="font-display text-[clamp(2.65rem,7vw,5.5rem)] font-black leading-[1.08] [text-wrap:balance] [word-break:auto-phrase]">
            {site.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/82 md:text-xl">{site.hero.lead}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={site.cta.href} className="btn btn-primary">
              {site.cta.label}
            </a>
            <a href="#pricing" className="btn btn-secondary">
              {site.hero.secondaryCta}
            </a>
          </div>
          <p className="mt-4 text-sm text-white/70">{site.cta.subLabel}</p>
        </div>
      </div>
    </section>
  );
}
