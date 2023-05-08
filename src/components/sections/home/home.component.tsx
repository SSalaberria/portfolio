import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

import { sectionReveal } from "~/hooks/with-reveal.hoc";

import css from "./home.module.css";

function Home() {
  const { t } = useTranslation("common");
  const itemsRefs = useRef<HTMLElement[]>([]);

  const heading = (
    <p className=" text-center text-l md:text-left md:text-m">{t("sections.home.heading")}</p>
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
        <span>S</span>
        <span>S</span>
      </div>
      <div className="flex flex-col gap-1 text-headline-light dark:text-headline-dark">
        <span>ebastián</span>
        <span>alaberría</span>
      </div>
    </h1>
  );

  const description = (
    <h2
      dangerouslySetInnerHTML={{ __html: t("sections.home.description") }}
      className="max-w-prose pb-16 text-center text-l md:pb-10 md:text-left"
    />
  );

  const resumeCTA = (
    <a className="w-fit" href={t("sections.home.resume.file")} target="_blank">
      <button aria-label={t("sections.home.resume.description")} className="btn-secondary">
        {t("sections.home.resume.label")}
      </button>
    </a>
  );

  const items = [heading, name, description, resumeCTA];

  useEffect(() => {
    async function animate() {
      const sr = (await import("scrollreveal")).default();

      itemsRefs.current.forEach((itemRef, i) => {
        sr.reveal(itemRef, sectionReveal(350 * i, 0.25));
        setTimeout(() => (itemRef.style.visibility = "visible"), 0); // Making style change async to avoid flash of unanimated elements
      });
    }
    animate();
  }, []);

  return (
    <section
      className="container mb-0 flex min-h-screen w-full items-center justify-center md:justify-start"
      id="home"
    >
      <div className="flex flex-col gap-8 md:gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            ref={(ref) => (itemsRefs.current[i] = ref!)}
            className=" mx-auto md:mx-0"
            style={{
              visibility: "hidden",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <svg className="fixed -bottom-1/2 -right-1/2 -z-0 h-full w-full stroke-black opacity-30 dark:stroke-white">
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
    </section>
  );
}

export default Home;
