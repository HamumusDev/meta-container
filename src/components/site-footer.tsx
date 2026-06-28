import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-foreground text-background text-xs">
            M
          </span>
          <span>Méta Konténer — {t("tagline")}</span>
        </div>
        <div>
          © {year} Méta Konténer. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
