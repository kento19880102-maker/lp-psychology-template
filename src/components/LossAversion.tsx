import { site } from "@/content/site";

export function LossAversion() {
  if (!site.psychology.lossAversion.enabled) return null;

  return (
    <section className="pb-20">
      <div className="container">
        <div className="reveal rounded-[8px] border border-[color-mix(in_srgb,var(--color-primary)_24%,var(--color-line))] bg-[var(--color-soft)] p-6 md:p-10">
          <h2 className="text-2xl font-black md:text-4xl">{site.loss.title}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {site.loss.risks.map((risk) => (
              <p key={risk} className="rounded-[8px] bg-white p-5 font-bold leading-8 text-[var(--color-foreground)]">
                {risk}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
