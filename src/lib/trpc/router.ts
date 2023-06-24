import { initTRPC } from "@trpc/server";
import { Issue } from "./types";
import { getIssues, } from "./queries";
import { z } from "zod";

export const t = initTRPC.create();

export const appRouter = t.router({

    getIssues: getIssues(),
 //   createUser: createUser(),
   // createPost: createPost()

});
export type AppRouter = typeof appRouter;


