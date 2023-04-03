import { DocumentProps, Head, Html, Main, NextScript } from "next/document";

import i18nextConfig from "../../next-i18next.config";

export default function Document(props: DocumentProps) {
  const setInitialTheme = `
        function getUserPreference() {
            if(window.localStorage.getItem('theme')) {
                return window.localStorage.getItem('theme')
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            }
            document.documentElement.className = getUserPreference();
    `;

  const currentLocale = props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head>
        <link href="/images/logo-color.svg" rel="icon" type="image/svg+xml" />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
