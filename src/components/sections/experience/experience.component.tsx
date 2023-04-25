/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { formatDateToShort } from "~/utils/helpers";

export function Experience({}) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  const workExperiences = useMemo(() => t("sections.experience.experiences"), [t]);

  const [selectedExperience, setSelectedExperience] = useState(workExperiences[0]);

  useEffect(
    () =>
      setSelectedExperience(
        workExperiences.find((exp) => exp.company === selectedExperience?.company),
      ),
    [t],
  );

  return (
    <section className="container" id="experience">
      <h2 className="text-title text-headline-light dark:text-headline-dark">
        {t("sections.experience.label")}
      </h2>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
        <div className="relative flex flex-col">
          {workExperiences.map((exp) => (
            <div
              key={exp.company}
              className={`flex h-8 cursor-pointer items-center border-l-2 border-background-light-secondary px-4 text-l font-semibold dark:border-background-dark-secondary ${
                selectedExperience?.company === exp.company
                  ? " text-primary-300"
                  : "dark:text-white"
              }`}
              onClick={() => setSelectedExperience(exp)}
            >
              {exp.company}
            </div>
          ))}
          <span
            className={`absolute inset-0 h-8 w-0.5 bg-primary-500 transition-all duration-200`}
            style={{
              translate: `0 ${
                2 * workExperiences.findIndex((exp) => exp.company === selectedExperience?.company)
              }rem`,
            }}
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          {selectedExperience?.roles.map((role, index) => (
            <div key={role.position} className="flex flex-col gap-2">
              <h4 className="text-center text-xl font-semibold sm:text-left">
                {role.position}{" "}
                {index === 0 && (
                  <a className="link" href={selectedExperience.website} target="_blank">
                    @{selectedExperience.company}
                  </a>
                )}
              </h4>
              <p className="text-center italic sm:text-left">
                {formatDateToShort(new Date(role.start), locale)} —{" "}
                {formatDateToShort(new Date(role.end), locale)}
              </p>
              <ul
                style={{
                  listStyleType: '"➜"',
                }}
              >
                {role.descriptions.map((description) => (
                  <li key={description} className="mb-2 pl-2 marker:text-primary-300 last:mb-0">
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
