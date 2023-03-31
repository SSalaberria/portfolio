/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useState } from "react";

import { ThemeOption } from "~/utils/types";

import { Switch } from "../ui/switch.component";

const initThemeState = () => {
  if (typeof window !== "undefined")
    return (localStorage?.getItem("theme") as ThemeOption) || "dark";
  else return "light";
};

const options = [
  {
    id: "dark",
    label: "🌙",
  },
  {
    id: "light",
    label: "☀️",
  },
];

export const ThemeSwitch = memo(function ThemeSwitch() {
  const [theme, setTheme] = useState<ThemeOption>(initThemeState);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return <Switch options={options} selected={theme} onSelect={toggleTheme} />;
});
