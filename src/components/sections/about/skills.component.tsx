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

export function Skills() {
  return (
    <div className="flex w-full max-w-3xl flex-wrap  items-center justify-center gap-8 gap-y-8">
      {skills.map((s) => (
        <SkillTag key={s.label} icon={s.icon} label={s.label} website={s.website} />
      ))}
    </div>
  );
}
