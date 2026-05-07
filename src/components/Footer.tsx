import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8">
      <div className="container flex flex-col justify-between gap-4 text-sm text-[var(--color-muted)] md:flex-row md:items-center">
        <p>© 2026 {site.company}. All rights reserved.</p>
        <div className="flex gap-5">
          {site.footer.sns.map((sns) => (
            <a key={sns.label} href={sns.href} className="font-bold hover:text-[var(--color-foreground)]">
              {sns.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
