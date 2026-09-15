import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { ContainerLineIcon } from "@/components/container-line-icon";

export function Containers() {
  const t = useTranslations("containers");
  const items = t.raw("items") as {
    name: string;
    capacity: string;
    size: string;
    description: string;
  }[];

  return (
    <section id="containers" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.name} className="border-border/60">
              <CardContent className="flex flex-col items-center gap-5 p-8 text-center">
                <ContainerLineIcon className="h-20 w-auto text-[#2f74b0]" />

                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm font-medium text-[#2f74b0]">
                    {item.capacity}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {t("sizeLabel")}:
                  </span>{" "}
                  {item.size}
                </p>

                <p className="max-w-sm text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
