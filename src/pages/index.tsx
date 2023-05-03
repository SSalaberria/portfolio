import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "~/components/common";
import { About, Experience, Contact, Home, Projects } from "~/components/sections";

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

const Portfolio: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Sebastián Salaberría</title>
        <meta
          key="desc"
          content="Welcome to my web developer portfolio! I'm a skilled developer with experience in HTML, CSS, JavaScript, Node and React. Check out my projects to see my skills in action."
          name="description"
        />
        <meta content="Sebastián Salaberría web developer portfolio." property="og:title" />
        <meta
          content="Welcome to my web developer portfolio! I'm a skilled developer with experience in HTML, CSS, JavaScript, Node and React. Check out my projects to see my skills in action."
          property="og:description"
        />
        <meta content="/images/profile-pic.webp" property="og:image" />
        <link href="/favicon.ico" rel="icon" />
        <meta content="all" name="robots" />
      </Head>

      <Layout>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Portfolio;
