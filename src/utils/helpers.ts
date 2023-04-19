import { Locale } from "next/router";

export function formatDateToShort(date: Date, locale: Locale) {
  const formattedDate = date.toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
  });

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}
