"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  hu: "HU",
  en: "EN",
  ru: "RU",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-background/60 p-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
            loc === locale
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-current={loc === locale}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
