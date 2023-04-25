/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useMemo } from "react";

import { Switch } from "../ui/switch.component";

export function LocaleSwitch({}) {
  const router = useRouter();

  const options = useMemo(
    () =>
      router.locales!.map((locale) => ({
        id: locale,
        label: <>{locale.toUpperCase()}</>,
      })),
    [],
  );

  return (
    <Switch
      options={options}
      selected={router?.locale || "en"}
      onSelect={(value) => router.push("/", "/", { locale: value, scroll: false })}
    />
  );
}
