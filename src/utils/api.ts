export interface SendEmailPayload {
  name: string;
  email: string;
  content: string;
}

export const api = {
  email: {
    send: async (payload: SendEmailPayload): Promise<any> =>
      fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) }).then((data) =>
        data.json(),
      ),
  },
};
