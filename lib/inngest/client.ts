import { Inngest } from "inngest";

export type InngestEvents = {
  "deck/generate": {
    data: {
      deckId: string;
    };
  };
};

export const inngest = new Inngest({
  id: "ai-pitch-deck",
  signingKey: process.env.INNGEST_SIGNING_KEY,
});