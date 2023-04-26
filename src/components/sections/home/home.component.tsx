import { useTranslation } from "react-i18next";

import css from "./home.module.css";

export function Home() {
  const { t } = useTranslation("common");

  return (
    <section
      className="container mb-0 flex min-h-screen w-full items-center justify-center md:justify-start"
      id="home"
    >
      <div className="flex flex-col gap-8 md:gap-4">
        <h1 className=" text-center text-l md:text-left md:text-m">{t("sections.home.heading")}</h1>
        <h1
          className="  relative flex justify-center text-xxl font-bold md:justify-start"
          style={{
            fontSize: "clamp(65px, 12vw, 120px)",
            lineHeight: "0.8em",
          }}
        >
          <div className="relative flex flex-col rounded-md bg-primary-300 px-1 pb-3 text-headline-dark">
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
      <svg
        className={[css["dotted-circle"], " hidden stroke-black dark:stroke-white sm:block"].join(
          " ",
        )}
        height="800"
        overflow="visible"
        width="800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="400"
          cy="400"
          fill="none"
          r="400"
          strokeDasharray="12.921,11.9271"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
}
