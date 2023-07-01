import type { inferAsyncReturnType } from '@trpc/server'
import type { createSolidAPIHandlerContext } from 'solid-start-trpc'

export const createContextInner = async (opts: createSolidAPIHandlerContext) => {
  // const user = await authenticator.isAuthenticated(opts.req)
  return {
    ...opts,
 //   prisma,
    // user,
  }
}

export const createContext = async (opts: createSolidAPIHandlerContext) => {
  return await createContextInner(opts)
}

export type Context = inferAsyncReturnType<typeof createContext>
