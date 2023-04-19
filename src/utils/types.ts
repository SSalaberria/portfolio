import "i18next";
import { NextRouter } from "next/router";

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

declare module "next/router" {
  export type Locale = "en" | "es";
  export function useRouter(): Omit<NextRouter, "locale" | "locales"> & {
    locale: Locale;
    locales: Locale[];
  };
}
