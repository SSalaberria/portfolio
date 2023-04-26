import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

import { withSectionReveal } from "~/hooks/with-reveal.hoc";

import { ProjectCard } from "./project-card.component";

const Projects = forwardRef(function Projects(_, ref) {
  const { t } = useTranslation("common");

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="container flex w-full flex-col justify-between gap-12"
      id="projects"
    >
      <h2 className="text-title text-headline-light dark:text-headline-dark">
        {t("sections.projects.label")}
      </h2>
      <div className="flex w-full flex-wrap justify-center gap-4">
        {t("sections.projects.list", { returnObjects: true }).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
});

export default withSectionReveal(Projects);
