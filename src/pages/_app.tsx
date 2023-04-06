import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { appWithTranslation } from "next-i18next";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="scrollbar flex w-full bg-background-light-primary text-m text-paragraph-light dark:bg-background-dark-primary dark:text-paragraph-dark">
      <Component {...pageProps} />
    </div>
  );
};

export default appWithTranslation(MyApp);
