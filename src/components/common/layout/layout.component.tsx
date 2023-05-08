import { Navbar } from "../navbar/navbar.component";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <main className=" clear-both flex min-h-screen w-full flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
