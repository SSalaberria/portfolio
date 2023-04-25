import Image from "next/image";
import { useTranslation } from "react-i18next";

import { SkillTag } from "~/components/common";
import {
  JavascriptIcon,
  TypescriptIcon,
  HtmlIcon,
  CssIcon,
  ReactIcon,
  NextIcon,
  TailwindIcon,
  BitIcon,
  CypressIcon,
  NestIcon,
  ExpressIcon,
  PythonIcon,
  DjangoIcon,
  MysqlIcon,
  MongoIcon,
  DockerIcon,
  AwsIcon,
  GitIcon,
} from "~/components/common/icons";

const skills = [
  {
    label: "JavaScript",
    website: null,
    icon: <JavascriptIcon />,
  },
  {
    label: "TypeScript",
    website: "https://www.typescriptlang.org/",
    icon: <TypescriptIcon />,
  },
  {
    label: "HTML5",
    website: null,
    icon: <HtmlIcon />,
  },
  {
    label: "CSS3",
    website: "",
    icon: <CssIcon />,
  },
  {
    label: "React",
    website: "https://react.dev/",
    icon: <ReactIcon />,
  },
  {
    label: "Next.js",
    website: "https://nextjs.org/",
    icon: <NextIcon />,
  },
  {
    label: "Tailwind",
    website: "https://tailwindcss.com/",
    icon: <TailwindIcon />,
  },
  {
    label: "Bit",
    website: "https://bit.dev/",
    icon: <BitIcon />,
  },
  {
    label: "Cypress",
    website: "https://www.cypress.io/",
    icon: <CypressIcon />,
  },
  {
    label: "NestJS",
    website: "https://nestjs.com/",
    icon: <NestIcon />,
  },
  {
    label: "Express",
    website: "https://expressjs.com/",
    icon: <ExpressIcon />,
  },
  {
    label: "Python",
    website: "https://www.python.org/",
    icon: <PythonIcon />,
  },
  {
    label: "Django",
    website: "https://www.djangoproject.com/",
    icon: <DjangoIcon />,
  },
  {
    label: "MySQL",
    website: "https://www.mysql.com/",
    icon: <MysqlIcon />,
  },
  {
    label: "MongoDB",
    website: "https://www.mongodb.com/",
    icon: <MongoIcon />,
  },
  {
    label: "Docker",
    website: "https://www.docker.com/",
    icon: <DockerIcon />,
  },
  {
    label: "AWS",
    website: "https://aws.amazon.com/",
    icon: <AwsIcon />,
  },
  {
    label: "Git",
    website: "https://git-scm.com/",
    icon: <GitIcon />,
  },
];

export function About() {
  const { t } = useTranslation("common");

  return (
    <section
      className="container flex w-full flex-col items-center justify-between gap-12"
      id="about"
    >
      <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row">
        <div>
          <h2 className="text-title text-headline-light dark:text-headline-dark">
            {t("sections.about.label")}
          </h2>
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
        <div className="flex w-full max-w-3xl flex-wrap  items-center justify-center gap-8 gap-y-8">
          {skills.map((s) => (
            <SkillTag key={s.label} icon={s.icon} label={s.label} website={s.website} />
          ))}
        </div>
      </div>
    </section>
  );
}
