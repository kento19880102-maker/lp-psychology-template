import { site } from "@/content/site";

export function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-[color-mix(in_srgb,var(--color-foreground)_90%,transparent)] p-3 backdrop-blur md:hidden">
      <a href={site.cta.href} className="btn btn-primary w-full" aria-label="お問い合わせフォームへ移動">
        {site.cta.label}
      </a>
    </div>
  );
}
