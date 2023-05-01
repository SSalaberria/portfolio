import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

import { withSectionReveal } from "~/hooks/with-reveal.hoc";

import css from "./home.module.css";

const Home = forwardRef(function Home(_, ref) {
  const { t } = useTranslation("common");

  return (
    <>
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="container mb-0 flex min-h-screen w-full items-center justify-center md:justify-start"
        id="home"
      >
        <div className="flex flex-col gap-8 md:gap-4">
          <h1 className=" text-center text-l md:text-left md:text-m">
            {t("sections.home.heading")}
          </h1>
          <h1
            className="  relative flex justify-center text-xxl font-bold md:justify-start"
            style={{
              fontSize: "clamp(65px, 12vw, 120px)",
              lineHeight: "0.8em",
            }}
          >
            <div className="relative flex flex-col rounded-md bg-primary-500 px-1 py-1 text-headline-dark">
              <span className="">S</span>
              <span className="">S</span>
            </div>
            <div className="flex flex-col gap-1 text-headline-light dark:text-headline-dark">
              <span className="">ebastián</span>
              <span className="">alaberría</span>
            </div>
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: t("sections.home.description") }}
            className="max-w-prose text-center text-l md:text-left"
          />
        </div>
      </section>

      <svg className="-z-1 fixed -bottom-1/2 -right-1/2 h-full w-full stroke-black dark:stroke-white">
        <circle
          className={css["dotted-circle"]}
          cx="50%"
          cy="50%"
          fill="none"
          r="25%"
          strokeDasharray="12.921,11.9271"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </svg>
    </>
  );
});

export default withSectionReveal(Home);
