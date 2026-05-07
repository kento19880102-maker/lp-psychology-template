import { site } from "@/content/site";

export function ContactForm() {
  return (
    <section id="contact" className="section">
      <div className="container grid gap-10 md:grid-cols-[.9fr_1.1fr]">
        <div className="reveal">
          <p className="eyebrow">{site.form.eyebrow}</p>
          <h2 className="section-title">{site.form.title}</h2>
          <p className="section-lead">{site.form.lead}</p>
        </div>
        <form className="card reveal grid gap-4 p-5 md:p-8" action={site.form.action} method="POST">
          {/* Formspreeの送信先はsrc/content/site.tsのform.actionで切り替えます。 */}
          <label className="grid gap-2 font-bold">
            お名前
            <input className="rounded-[8px] border border-[var(--color-line)] bg-white px-4 py-3 font-normal outline-none focus:border-[var(--color-primary)]" name="name" autoComplete="name" required />
          </label>
          <label className="grid gap-2 font-bold">
            メールアドレス
            <input className="rounded-[8px] border border-[var(--color-line)] bg-white px-4 py-3 font-normal outline-none focus:border-[var(--color-primary)]" type="email" name="email" autoComplete="email" required />
          </label>
          <label className="grid gap-2 font-bold">
            ご相談内容
            <textarea className="min-h-36 rounded-[8px] border border-[var(--color-line)] bg-white px-4 py-3 font-normal outline-none focus:border-[var(--color-primary)]" name="message" required />
          </label>
          <button className="btn btn-primary mt-2" type="submit" aria-label={`${site.cta.label}ために送信`}>
            {site.cta.label}
          </button>
        </form>
      </div>
    </section>
  );
}
