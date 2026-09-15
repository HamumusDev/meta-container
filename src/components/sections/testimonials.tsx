import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as { name: string; text: string }[];

  return (
    <section id="testimonials" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.name} className="border-border/60">
              <CardContent className="space-y-4 pt-6">
                <div className="flex gap-1 text-[#2f74b0]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  &ldquo;{item.text}&rdquo;
                </p>
                <p className="text-sm font-semibold">{item.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
