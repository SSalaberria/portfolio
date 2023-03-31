import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Layout } from "~/components/common";
import { About, Skills, Contact } from "~/components/sections";

type Props = {};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sebastián Salaberría</title>
        <meta content="Portfolio" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Layout>
        <About />
        <Skills />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
