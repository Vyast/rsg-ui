// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { generateRouter } from "./generate";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("gen.", generateRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
