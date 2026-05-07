import Image from "next/image";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-background)_92%,transparent)] backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 font-bold" aria-label={`${site.company} トップへ`}>
          <Image src="/logo.svg" width={36} height={36} alt="" priority />
          <span>{site.company}</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-bold text-[var(--color-muted)] md:flex" aria-label="主要ナビゲーション">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--color-foreground)]">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={site.cta.href} className="btn btn-primary hidden md:inline-flex">
          {site.cta.label}
        </a>
      </div>
    </header>
  );
}
