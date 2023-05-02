import { useTranslation } from "react-i18next";
import { forwardRef, useEffect, useRef } from "react";

import { sectionReveal, withSectionReveal } from "~/hooks/with-reveal.hoc";

import css from "./home.module.css";

const Home = forwardRef(function Home(_, ref) {
  const { t } = useTranslation("common");

  const heading = (
    <h1 className=" text-center text-l md:text-left md:text-m">{t("sections.home.heading")}</h1>
  );

  const name = (
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
  );

  const description = (
    <p
      dangerouslySetInnerHTML={{ __html: t("sections.home.description") }}
      className="max-w-prose pb-20 text-center text-l md:pb-10 md:text-left"
    />
  );

  const resumeCTA = (
    <a download className="w-fit" href={t("sections.home.resume.file")}>
      <button aria-label={t("sections.home.resume.description")} className="btn-secondary">
        {t("sections.home.resume.label")}
      </button>
    </a>
  );

  const items = [heading, name, description, resumeCTA];
  const itemsRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default();

      itemsRefs.current.forEach((ref, i) => {
        ref.style.opacity = "1";
        sr.reveal(ref, sectionReveal(400 * i, 0.25));
      });
    }
    animate();
  }, []);

  return (
    <>
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="container mb-0 flex min-h-screen w-full items-center justify-center md:justify-start"
        id="home"
      >
        <div className="flex flex-col gap-8 md:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(ref) => (itemsRefs.current[i] = ref!)}
              className=" mx-auto opacity-0 md:mx-0"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <svg className="-z-1 fixed -bottom-1/2 -right-1/2 h-full w-full stroke-black opacity-30 dark:stroke-white">
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
