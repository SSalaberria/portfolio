interface SkillTagProps {
  label: string;
  icon: React.ReactElement;
  website?: string | null;
}

export function SkillTag({ label, icon, website }: SkillTagProps) {
  return (
    <div
      key={label}
      className={`group/item relative flex flex-col items-center justify-center gap-2 ${
        website ? " cursor-pointer" : ""
      }`}
      onClick={() => website && window.open(website)}
    >
      <div className="w-10 transition-all group-hover/item:scale-125">{icon}</div>
      <div className="absolute -bottom-10 text-s font-semibold opacity-0 transition-all duration-300 group-hover/item:-translate-y-3 group-hover/item:opacity-100">
        {label}
      </div>
    </div>
  );
}
