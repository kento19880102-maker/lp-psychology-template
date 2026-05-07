import { site } from "@/content/site";

export function Faq() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-10 md:grid-cols-[.8fr_1.2fr]">
        <div className="reveal">
          <p className="eyebrow">{site.faq.eyebrow}</p>
          <h2 className="section-title">{site.faq.title}</h2>
        </div>
        <div className="space-y-3 reveal">
          {site.faq.items.map((item) => (
            <details key={item.question} className="card group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-black">
                {item.question}
                <span className="text-xl text-[var(--color-primary)] group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
