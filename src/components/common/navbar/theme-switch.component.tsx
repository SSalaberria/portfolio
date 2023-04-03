/* eslint-disable @next/next/no-img-element */
import { memo, useEffect, useState } from "react";

import { ThemeOption } from "~/utils/types";

import { Switch } from "../ui/switch.component";

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
  const [theme, setTheme] = useState<ThemeOption>("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    setTheme((localStorage?.getItem("theme") as ThemeOption) || "dark");
  }, []);

  return <Switch options={options} selected={theme} onSelect={toggleTheme} />;
});
