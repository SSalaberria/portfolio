interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  origin?: "left" | "right";
  onClose: () => void;
}

export function Drawer({ children, isOpen, onClose, title, origin = "right" }: DrawerProps) {
  return (
    <main
      className={
        " fixed inset-0 z-50 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out" +
        (isOpen
          ? " translate-x-0 opacity-100 transition-opacity duration-500  "
          : " -translate-x-full opacity-0 transition-all delay-500  ") +
        (origin === "left" ? "" : " ")
      }
    >
      <div
        className={
          " delay-400 absolute h-full w-screen max-w-[12rem] transform bg-gray-100 p-4 shadow-xl transition-all duration-500 ease-in-out dark:bg-background-dark-secondary  " +
          (isOpen ? " translate-x-0 " : ` ${origin === "left" ? "-" : ""}translate-x-full `) +
          (origin === "left" ? "left-0" : "right-0")
        }
      >
        <article className="relative flex h-full flex-col items-center space-y-6">
          {title && <header className="text-lg p-4 font-bold">{title}</header>}
          {children}
        </article>
      </div>
      <section className=" h-full w-screen" onClick={onClose} />
    </main>
  );
}
