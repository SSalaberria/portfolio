/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { LocaleSwitch } from "./locale-switch.component";
import { ThemeSwitch } from "./theme-switch.component";

const DynamicThemeSwitch = dynamic(
  async () => {
    await new Promise((res) => setTimeout(res, 3000));

    return Promise.resolve(ThemeSwitch);
  },
  {
    ssr: false,
    loading: () => <p>Loading</p>,
  },
);

export function Navbar() {
  const { t } = useTranslation("common");

  const navOptions = useMemo(
    () => [
      {
        id: "about",
        label: t("sections.about"),
      },
      {
        id: "skills",
        label: t("sections.skills"),
      },
      {
        id: "contact",
        label: t("sections.contact"),
      },
    ],
    [t],
  );

  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 dark:border-gray-600">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Image alt="logo-ss" height={48} src="/images/logo-color.svg" width={48} />
        <div className="flex md:order-2">
          <div className="flex w-full max-w-[90rem] items-center justify-between">
            <div className="flex flex-col items-end gap-2">
              <DynamicThemeSwitch />
              <LocaleSwitch />
            </div>
          </div>
          <button
            aria-controls="navbar-sticky"
            aria-expanded="false"
            className="text-sm inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            data-collapse-toggle="navbar-sticky"
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8">
            {navOptions.map((opt) => (
              <li key={opt.id}>
                <a
                  aria-current="page"
                  className="block rounded py-2 pl-3 pr-4 dark:text-white md:bg-transparent md:p-0"
                  href={`#${opt.id}`}
                >
                  {opt.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
