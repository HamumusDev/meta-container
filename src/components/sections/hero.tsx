import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const t = useTranslations("hero");
  const s = useTranslations("stats");

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="space-y-6">
          <Badge variant="secondary" className="rounded-full">
            {t("badge")}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("title")}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" render={<a href="#contact" />} nativeButton={false}>
              {t("ctaPrimary")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href="#how-it-works" />}
              nativeButton={false}
            >
              {t("ctaSecondary")}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            {[
              [s("containersValue"), s("containers")],
              [s("securityValue"), s("security")],
              [s("accessValue"), s("access")],
            ].map(([value, label]) => (
              <div key={label} className="space-y-1">
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-md justify-self-center rounded-2xl border border-border/60 bg-gradient-to-br from-orange-500/15 via-background to-background shadow-xl md:justify-self-end">
          <div className="absolute inset-6 grid grid-cols-3 grid-rows-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg border border-border/60 bg-background/60"
                style={{ opacity: 0.5 + (i % 3) * 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
