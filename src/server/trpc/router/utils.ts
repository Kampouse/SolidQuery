import { initTRPC, TRPCError } from '@trpc/server'
import type { Context } from './context'
import { getSession } from '@auth/solid-start'
import { authOpts } from '~/server/auth'

export const t = initTRPC.context<Context>().create()

export const router = t.router
export const procedure = t.procedure

export const protectedProcedure = t.procedure.use(
  t.middleware(async ({ ctx, next }) => {
    if (typeof Window === 'undefined') {
      const user = await getSession(ctx.req, authOpts)
      if (!ctx.user && !user) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'You are not authorized to access this resource',
          cause: 'No user present'
        })

      }
      return next({ ctx: { ...ctx, user: ctx.user } })
    }

    if (!ctx.user) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'You are not authorized to access this resource',
        cause: 'No user present'
      })
    }
    return next({ ctx: { ...ctx, user: ctx.user } })

  }),
)
