import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import { Layout } from "~/components/common";
import { About, Experience, Contact, Home, Projects } from "~/components/sections";

type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

const Portfolio: NextPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("seo.title")}</title>
        <meta key="desc" content={t("seo.description")} name="description" />

        <meta content="Sebastián Salaberría" property="og:title" />
        <meta content={t("seo.description")} property="og:description" />
        <meta content="/images/profile-pic.webp" property="og:image" />
        <meta content="Sebastián Salaberría" property="og:site_name" />
        <meta content="https://sebastiansalaberria.com" property="og:url" />
        <meta content="website" property="og:type" />

        <meta content="Sebastián Salaberría" name="twitter:title" />
        <meta content={t("seo.description")} name="twitter:description" />
        <meta content="/images/profile-pic.webp" name="twitter:image" />
        <meta content="summary_large_image" name="twitter:card" />

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
