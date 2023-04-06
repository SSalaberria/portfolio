import Head from "next/head";

import { Navbar } from "../navbar/navbar.component";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Sebastián Salaberría</title>
        <meta content="Portfolio" name="description" />
        <meta content="Portfolio" name="og:description" />
        <meta content="Portafolio de Sebastián Salaberría" property="og:title" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar />

      <main className=" clear-both flex min-h-screen w-full flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
