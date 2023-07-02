import type { inferAsyncReturnType } from '@trpc/server'
import type { createSolidAPIHandlerContext } from 'solid-start-trpc'
import { authOpts } from "~/server/auth";
import { getSession } from "@auth/solid-start"
export const createContextInner = async (opts: createSolidAPIHandlerContext) => {
  const user = await getSession(opts.req,authOpts)
  return {
    ...opts,
 //   prisma,
     user,
  }
}

export const createContext = async (opts: createSolidAPIHandlerContext) => {
  return await createContextInner(opts)
}

export type Context = inferAsyncReturnType<typeof createContext>
