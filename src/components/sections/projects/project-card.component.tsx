import { ExternalIcon, GithubIcon, StackIcon } from "~/components/common/icons";

interface ProjectCardProps {
  title: string;
  description: string;
  website: string;
  repository?: string | null;
  tags: string[];
}

const iconsStyle = "w-6 text-paragraph-dark transition-all duration-200 hover:text-primary-500";

export function ProjectCard({ title, description, website, repository, tags }: ProjectCardProps) {
  return (
    <div className="group relative flex w-[19rem] cursor-pointer flex-col gap-6 rounded-md bg-background-light-secondary p-8 transition-transform duration-300 will-change-contents hover:-translate-y-2 dark:bg-background-dark-secondary">
      <div className="flex w-full items-center justify-between self-start">
        <StackIcon />

        <div className="flex gap-4">
          {repository && (
            <a className="z-[2]" href={repository} target="_blank">
              <GithubIcon className={iconsStyle} />
            </a>
          )}
          {website && (
            <a className=" z-[2]" href={website} target="_blank">
              <ExternalIcon className={iconsStyle} />
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className=" text-l font-bold transition-colors duration-200 group-hover:text-primary-500">
          <a
            className=" static z-[1] inline-block before:absolute before:left-0 before:top-0 before:z-0 before:block before:h-full before:w-full"
            href={website}
            rel="noopener noreferrer"
            target="_blank"
          >
            {title}
          </a>
        </h4>
        <p className="text-s">{description}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span key={tag} className=" rounded-full bg-[#eaeae9] px-2 py-1 text-s dark:bg-[#393b3e]">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
