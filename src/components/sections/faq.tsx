import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <section id="faq" className="border-b border-border/60 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>

        <Accordion className="mt-10">
          {items.map((item) => (
            <AccordionItem key={item.question}>
              <AccordionTrigger className="text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
