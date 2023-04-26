import Image from "next/image";
import { forwardRef, useMemo } from "react";
import { useTranslation } from "react-i18next";

import config from "~/utils/config";
import { useEmailService } from "~/hooks";
import { withSectionReveal } from "~/hooks/with-reveal.hoc";

const networks = [
  {
    id: "linkedin",
    url: config.socialNetworks.linkedin,
    icon: (
      <svg
        className=" cursor-pointer"
        fill="currentColor"
        height="28"
        id="mdi-linkedin"
        version="1.1"
        viewBox="0 0 24 24"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
      </svg>
    ),
  },
  {
    id: "github",
    url: config.socialNetworks.github,
    icon: (
      <svg
        className="cursor-pointer"
        fill="currentColor"
        height="28"
        id="mdi-github"
        version="1.1"
        viewBox="0 0 24 24"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    ),
  },
];

const Contact = forwardRef(function Contact(_, ref) {
  const { t } = useTranslation("common");
  const { status, sendEmail } = useEmailService();
  const inputsDisabled = useMemo(() => status === "loading", [status]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { name, email, content } = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      content: { value: string };
    };

    sendEmail({ name: name.value, email: email.value, content: content.value });
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="container mt-32 flex w-full flex-col md:flex-row"
      id="contact"
    >
      <div className="flex w-full flex-col gap-12">
        <div className="text-title leading-none text-headline-light dark:text-headline-dark">
          {t("sections.contact.header")}
        </div>
        <p className=" max-w-sm text-l">{t("sections.contact.subheader")}</p>
        <div className="flex gap-4">
          <div className="w-full">
            <p className="text-s font-light">{t("sections.contact.mail_label")}</p>
            <p className="text-m font-semibold">{config.email}</p>
          </div>
          <div className="w-full">
            <p className="pb-1 text-s font-light">{t("sections.contact.networks_label")}</p>
            <div className="flex gap-1">
              {networks.map((network) => (
                <a key={network.id} className="link" href={network.url} target="_blank">
                  {network.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full self-center">
        {status !== "resolved" && (
          <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
            <input
              required
              autoComplete="off"
              disabled={inputsDisabled}
              id="name"
              minLength={4}
              placeholder={t("sections.contact.form.placeholders.name")}
              type="text"
            />
            <input
              required
              autoComplete="off"
              disabled={inputsDisabled}
              id="email"
              placeholder={t("sections.contact.form.placeholders.email")}
              type="email"
            />
            <textarea
              required
              className=""
              disabled={inputsDisabled}
              id="content"
              minLength={4}
              placeholder={t("sections.contact.form.placeholders.content")}
              rows={4}
            />
            <button
              className="ml-auto min-h-[2rem] min-w-[6rem]"
              disabled={inputsDisabled}
              type="submit"
            >
              {inputsDisabled ? (
                <Image
                  alt="loading"
                  className="m-auto"
                  height={20}
                  src="/images/loading.svg"
                  width={20}
                />
              ) : (
                t("sections.contact.form.submit")
              )}
            </button>
          </form>
        )}
        {status === "resolved" && (
          <p
            dangerouslySetInnerHTML={{
              __html: t("sections.contact.form.success_message"),
            }}
            className=" text-center text-m"
          />
        )}
      </div>
    </section>
  );
});

export default withSectionReveal(Contact);
