import Image from "next/image";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { useScrollDirection } from "~/hooks/use-scroll-direction";

import { LocaleSwitch } from "./locale-switch.component";
import { ThemeSwitch } from "./theme-switch.component";

export function Navbar() {
  const { t } = useTranslation("common");
  const scrollDir = useScrollDirection();

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

  useEffect(() => {
    const sectionElements = Array.from(document.getElementsByTagName("section"));
    const navLinksElements = Array.from(
      document.getElementsByClassName("nav-link"),
    ) as HTMLElement[];
    const lineElement = document.getElementById("line");

    const checkSectionIntersect = () => {
      let current = "";

      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")!;
        }
      });

      navLinksElements.forEach((li) => {
        if (li.id.includes(current) && lineElement) {
          li.classList.add("active");
          lineElement.style.width = `${li.offsetWidth}px`;
          lineElement.style.left = `${li.offsetLeft}px`;
        } else {
          li.classList.remove("active");
        }
      });
    };

    checkSectionIntersect();

    window.addEventListener("scroll", checkSectionIntersect);

    return () => window.removeEventListener("scroll", checkSectionIntersect);
  }, []);

  return (
    <nav
      className=" fixed left-0 top-0 z-20 w-full border-b border-gray-200 transition-all duration-500 dark:border-gray-600"
      style={{
        transform: scrollDir === "down" ? "translate(0, -6rem)" : "translate(0, 0px)",
      }}
    >
      <div className="mx-auto flex h-24 max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Image priority alt="logo-ss" height={48} src="/images/logo-color.svg" width={48} />
        <div className="flex md:order-2">
          <div className="flex w-full max-w-[90rem] items-center justify-between">
            <div className="flex flex-col items-end gap-2">
              <ThemeSwitch />
              <LocaleSwitch />
            </div>
          </div>
          <button
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
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="relative hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-0 flex flex-row gap-6 rounded-lg p-4 font-medium">
            {navOptions.map((opt) => (
              <li key={opt.id}>
                <a
                  aria-current="page"
                  className="nav-link block rounded dark:text-white"
                  href={`#${opt.id}`}
                  id={`${opt.id}-nav-link`}
                >
                  {opt.label}
                </a>
              </li>
            ))}
            <span
              className="absolute bottom-2 block h-0.5 w-0 bg-primary-500 transition-all duration-500"
              id="line"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
