import { memo } from "react";

interface SwitchProps {
  selected: string;
  onSelect: (optionId: string) => void;
  options: {
    id: string;
    label: React.ReactNode;
  }[];
  className?: string;
}

export const Switch = memo(
  function Switch({ selected, options, onSelect, className }: SwitchProps) {
    return (
      <div className={"flex w-full rounded-xl " + (className || "")}>
        {options.map((opt) => (
          <div
            key={opt.id}
            className={`justify-content mx-auto box-border flex h-7 w-full cursor-pointer items-center border px-1.5 py-0.5 text-s first:rounded-l-xl first:border-r-0 last:rounded-r-xl last:border-l-0 ${
              selected === opt.id
                ? "  bg-primary-500 text-white hover:bg-primary-400 dark:border-background-dark-secondary"
                : "  border-background-light-secondary hover:bg-gray-100 dark:border-background-dark-secondary  dark:hover:bg-background-dark-secondary"
            }`}
            onClick={() => selected !== opt.id && onSelect(opt.id)}
          >
            <span className="mx-auto">{opt.label}</span>
          </div>
        ))}
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.selected === nextProps.selected,
);
