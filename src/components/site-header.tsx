import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";

export function SiteHeader() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background text-sm">
            M
          </span>
          Méta Konténer
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground transition-colors">
            {t("features")}
          </a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">
            {t("howItWorks")}
          </a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">
            {t("testimonials")}
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            {t("contact")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            render={<a href="#contact" />}
            nativeButton={false}
          >
            {t("contact")}
          </Button>
        </div>
      </div>
    </header>
  );
}
