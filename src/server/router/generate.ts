import { createRouter } from "./context";
import { z } from "zod";

export const generateRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .mutation("genString", {
    // using zod schema to validate and infer input values
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input }) {
      // Here some login stuff would happen

      return {
        user: {
          name: input.name,
          role: "ADMIN",
        },
      };
    },
  })
  .mutation("genInteger", {
    // using zod schema to validate and infer input values
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input }) {
      // Here some login stuff would happen

      return {
        user: {
          name: input.name,
          role: "ADMIN",
        },
      };
    },
  })
  .mutation("genUUID", {
    // using zod schema to validate and infer input values
    input: z.object({
      name: z.string(),
    }),
    async resolve({ input }) {
      // Here some login stuff would happen

      return {
        user: {
          name: input.name,
          role: "ADMIN",
        },
      };
    },
  });
