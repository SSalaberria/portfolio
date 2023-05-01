import { useTranslation } from "react-i18next";
import { forwardRef, useEffect, useRef } from "react";

import { sectionReveal, withSectionReveal } from "~/hooks/with-reveal.hoc";

import { ProjectCard } from "./project-card.component";

const Projects = forwardRef(function Projects(_, ref) {
  const { t } = useTranslation("common");
  const projectRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!projectRefs.current) return;

    async function animate() {
      if (projectRefs.current) {
        const sr = (await import("scrollreveal")).default();

        projectRefs.current.forEach((ref, i) => sr.reveal(ref, sectionReveal(400 * i, 0)));
      }
    }
    animate();
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="container flex w-full flex-col justify-between gap-12"
      id="projects"
    >
      <h2 className="section-title">{t("sections.projects.label")}</h2>
      <div className="flex w-full flex-wrap justify-center gap-4">
        {t("sections.projects.list", { returnObjects: true }).map((project, i) => (
          <ProjectCard
            key={project.title}
            ref={(ref) => (projectRefs.current[i] = ref!)}
            {...project}
          />
        ))}
      </div>
    </section>
  );
});

export default withSectionReveal(Projects);
