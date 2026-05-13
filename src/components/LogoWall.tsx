import { site } from "@/content/site";

export function LogoWall() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-background)] py-12">
      <div className="container max-w-[1200px]">
        <h2 className="text-center text-sm font-black text-[var(--color-muted)]">{site.logos.title}</h2>
        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 2xl:grid-cols-6">
          {site.logos.items.map((logo) => (
            <div key={logo} className="flex h-20 items-center justify-center rounded-[8px] border border-[var(--color-line)] bg-white px-4 text-center font-display text-sm font-black text-[var(--color-muted)]">
              {logo}
            </div>
          ))}
        </div>
        {site.logos.note && <p className="mt-5 text-xs text-[var(--color-muted)]">{site.logos.note}</p>}
      </div>
    </section>
  );
}
