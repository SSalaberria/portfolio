interface ProjectCardProps {
  title: string;
  description: string;
  website: string;
  repositoryUrl: string;
  tags: {
    icon: React.ReactElement;
    label: string;
  }[];
}

export function ProjectCard({
  title,
  description,
  website,
  repositoryUrl,
  tags,
}: ProjectCardProps) {
  return <div className="">ProjectCard</div>;
}
