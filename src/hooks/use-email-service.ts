import { useState } from "react";

import { SendEmailPayload, api } from "~/utils/api";

export function useEmailService() {
  const [status, setStatus] = useState<"inactive" | "loading" | "resolved" | "error">("inactive");

  const sendEmail = (payload: SendEmailPayload) => {
    setStatus("loading");

    return api.email
      .send(payload)
      .then(() => setStatus("resolved"))
      .catch(() => setStatus("error"));
  };

  return { sendEmail, status };
}
