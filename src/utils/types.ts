import "i18next";

export type ThemeOption = "dark" | "light";

import type common from "../../public/locales/en/common.json";

interface I18nNamespaces {
  common: typeof common;
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
