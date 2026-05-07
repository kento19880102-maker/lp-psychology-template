import Image from "next/image";
import { site } from "@/content/site";

export function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-3xl reveal">
          <p className="eyebrow">{site.testimonials.eyebrow}</p>
          <h2 className="section-title">{site.testimonials.title}</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {site.testimonials.items.map((item) => (
            <article key={item.name} className="card reveal p-6">
              <div className="flex items-center gap-4">
                <Image className="rounded-full" src={item.image} width={56} height={56} alt={`${item.name}さんの写真`} />
                <div>
                  <h3 className="font-black">{item.name}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{item.role}</p>
                </div>
              </div>
              <p className="mt-6 leading-8 text-[var(--color-muted)]">「{item.comment}」</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
