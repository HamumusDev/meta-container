import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section id="how-it-works" className="border-b border-border/60 bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative space-y-3 pl-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-semibold">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
