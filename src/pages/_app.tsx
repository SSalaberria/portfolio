import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="scrollbar relative flex w-full bg-background-light-primary text-m text-paragraph-light dark:bg-background-dark-primary dark:text-paragraph-dark">
      <style global jsx>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
};

export default appWithTranslation(MyApp);
