import Image from "next/image";
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

import { withSectionReveal } from "~/hooks/with-reveal.hoc";

import { Skills } from "./skills.component";

const About = forwardRef(function About(_, ref) {
  const { t } = useTranslation("common");

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="container flex w-full flex-col items-center justify-between gap-12"
      id="about"
    >
      <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
        <div>
          <h2 className="section-title ">{t("sections.about.label")}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t("sections.about.description"),
            }}
            className="max-w-prose text-m"
          />
        </div>
        <div className="">
          <div className="relative z-[1] block w-full after:absolute after:inset-y-0 after:left-3 after:top-3 after:z-[-1] after:block after:h-full after:w-full after:rounded-xl after:border after:transition-all hover:after:left-2 hover:after:top-2">
            <Image
              priority
              alt="profile-pic"
              className="relative rounded-xl grayscale filter transition-all duration-500 hover:translate-x-0.5 hover:translate-y-0.5 hover:grayscale-0"
              height={312}
              src="/images/profile-pic.webp"
              width={312}
            />
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center gap-4">
        <Skills />
      </div>
    </section>
  );
});

export default withSectionReveal(About);
