import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { useMediaQuery, useScrollDirection } from "~/hooks";

import { Drawer } from "../ui/drawer.component";

import { LocaleSwitch } from "./locale-switch.component";
import { ThemeSwitch } from "./theme-switch.component";
import css from "./navbar.module.css";

export function Navbar() {
  const { t } = useTranslation("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery(640);
  const scrollDir = useScrollDirection();

  const navOptions = useMemo(
    () => [
      {
        id: "home",
        label: t("sections.home.label"),
      },
      {
        id: "about",
        label: t("sections.about.label"),
      },
      {
        id: "experience",
        label: t("sections.experience.label"),
      },
      {
        id: "projects",
        label: t("sections.projects.label"),
      },
      {
        id: "contact",
        label: t("sections.contact.label"),
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

          if (!isMobile) {
            lineElement.style.width = `${li.offsetWidth}px`;
            lineElement.style.left = `${li.offsetLeft}px`;
          } else {
            lineElement.style.height = `${li.offsetHeight}px`;
            lineElement.style.top = `${li.offsetTop}px`;
          }
        } else {
          li.classList.remove("active");
        }
      });
    };

    checkSectionIntersect();

    window.addEventListener("scroll", checkSectionIntersect);

    return () => window.removeEventListener("scroll", checkSectionIntersect);
  }, [isMobile]);

  const Switches = useMemo(
    () => (
      <div className="flex items-end gap-2 md:flex-col">
        <ThemeSwitch />
        <LocaleSwitch />
      </div>
    ),
    [],
  );

  const NavLinks = useMemo(
    () => (
      <div
        className="relative w-full items-center justify-between md:order-1 md:flex md:w-auto"
        id="navbar-sticky"
      >
        <ul className="relative mt-0 flex flex-col gap-6 rounded-lg p-4 font-medium md:flex-row">
          {navOptions.map((opt, index) => (
            <li key={opt.id}>
              <a
                aria-current="page"
                className={[
                  css.fadeIn,
                  "nav-link md:link relative block rounded pl-4 !text-paragraph-light before:-bottom-2 dark:!text-white md:pl-0",
                ].join(" ")}
                href={`#${opt.id}`}
                id={`${opt.id}-nav-link`}
                style={{
                  animationDelay: `${index * 150 + 100}ms`,
                }}
              >
                {opt.label}
              </a>
            </li>
          ))}
          <li
            className="absolute bottom-2 block h-0 w-0.5 bg-primary-500 transition-all duration-500 md:h-0.5 md:w-0"
            id="line"
          />
        </ul>
      </div>
    ),
    [navOptions],
  );

  return (
    <>
      <nav
        className=" fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-background-light-primary transition-transform duration-500 dark:border-gray-600 dark:bg-background-dark-primary"
        style={{
          transform: scrollDir === "down" ? "translate(0, -6rem)" : "translate(0, 0px)",
        }}
      >
        <div className="mx-auto flex h-20 max-w-screen-xl flex-wrap items-center justify-between p-4 md:h-24">
          <Image priority alt="logo-ss" height={48} src="/images/logo-color.svg" width={48} />

          <div className="flex md:order-2">
            <div className="hidden w-full max-w-[90rem] items-center justify-between md:flex">
              {Switches}
            </div>
            <button
              aria-label="menu-button"
              className="text-sm inline-flex items-center rounded-lg stroke-black p-2 dark:fill-white dark:stroke-white dark:hover:bg-gray-700 md:hidden"
              data-collapse-toggle="navbar-sticky"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg
                height="28"
                id="mdi-menu"
                version="1.1"
                viewBox="0 0 24 24"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  className={css.line}
                  d="M3,6H21"
                  fill="none"
                  strokeDasharray="80"
                  strokeDashoffset="80"
                  strokeWidth="2"
                />
                <path
                  className={css.line}
                  d="M3,11H21"
                  fill="none"
                  strokeDasharray="80"
                  strokeDashoffset="80"
                  strokeWidth="2"
                  style={{
                    animationDelay: "500ms",
                  }}
                />
                <path
                  className={css.line}
                  d="M3,16H21"
                  fill="none"
                  strokeDasharray="80"
                  strokeDashoffset="80"
                  strokeWidth="2"
                  style={{
                    animationDelay: "1000ms",
                  }}
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex">{!isMobile && NavLinks}</div>
        </div>
      </nav>
      <Drawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        {Switches}
        {isMobile && NavLinks}
      </Drawer>
    </>
  );
}
