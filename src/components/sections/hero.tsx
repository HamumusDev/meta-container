import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/count-up";

export function Hero() {
  const t = useTranslations("hero");
  const s = useTranslations("stats");

  return (
    <section id="home" className="relative overflow-hidden border-b border-border/60">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="space-y-6">
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

          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="space-y-1">
              <div className="text-2xl font-bold">
                <CountUp value={s("containersValue")} />
              </div>
              <div className="text-xs text-muted-foreground">
                {s("containers")}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold">{s("accessValue")}</div>
              <div className="text-xs text-muted-foreground">{s("access")}</div>
            </div>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-md justify-self-center rounded-2xl border border-border/60 bg-gradient-to-br from-sky-500/15 via-background to-background shadow-xl md:justify-self-end">
          <Image
            src="/meta-kontener-hero.png"
            alt="Méta Konténer"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            priority
            className="object-contain p-8"
          />
        </div>
      </div>
    </section>
  );
}
