import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Calendar, Clock, CloudRain, Boxes, Wallet } from "lucide-react";

const icons = [Shield, Calendar, Clock, CloudRain, Boxes, Wallet];

export function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="features" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Card key={item.title} className="border-border/60">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2f74b0]/10 text-[#2f74b0]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
