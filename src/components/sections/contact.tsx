import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-[#2f74b0]" />
            <div>
              <div className="text-sm text-muted-foreground">{t("phone")}</div>
              <a
                href="tel:+36309485973"
                className="block font-medium hover:underline"
              >
                +36 30 948 5973
              </a>
              <a
                href="tel:+36305234845"
                className="block font-medium hover:underline"
              >
                +36 30 523 4845
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-[#2f74b0]" />
            <div>
              <div className="text-sm text-muted-foreground">{t("email")}</div>
              <a
                href="mailto:metakontener@gmail.com"
                className="font-medium hover:underline"
              >
                metakontener@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-[#2f74b0]" />
            <div>
              <div className="text-sm text-muted-foreground">{t("address")}</div>
              <div className="font-medium">1194 Budapest, Méta u. 31.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
