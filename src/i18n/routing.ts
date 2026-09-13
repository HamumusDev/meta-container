import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["hu", "en", "ru"],
  defaultLocale: "hu",
  localeDetection: false,
});
