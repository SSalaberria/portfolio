import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation("common");

  return (
    <section className="container flex w-full flex-col justify-between gap-12" id="projects">
      <h2 className="text-title text-headline-light dark:text-headline-dark">
        {t("sections.projects.label")}
      </h2>
      WIP
    </section>
  );
}
