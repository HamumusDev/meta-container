import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  const t = useTranslations("pricing");
  const plans = t.raw("plans") as {
    name: string;
    size: string;
    price: string;
    period: string;
  }[];
  const terms = t.raw("terms") as string[];

  return (
    <section id="pricing" className="border-b border-border/60 bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <Card key={plan.name} className="border-border/60">
              <CardContent className="flex flex-col gap-4 p-8">
                <div>
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.size}</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#2f74b0]">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{t("note")}</p>

        <div className="mt-10 max-w-md">
          <h3 className="text-lg font-semibold">{t("termsTitle")}</h3>
          <ul className="mt-4 space-y-2">
            {terms.map((term) => (
              <li
                key={term}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2f74b0]" />
                {term}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
