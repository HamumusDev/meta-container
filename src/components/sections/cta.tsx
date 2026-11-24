import { useTranslations } from "next-intl";

export function Cta() {
  const t = useTranslations("cta");

  return (
    <section className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-4xl rounded-2xl bg-foreground px-8 py-14 text-center text-background sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
        <p className="mt-3 text-background/80">{t("subtitle")}</p>
      </div>
    </section>
  );
}
