import { initTRPC, TRPCError } from '@trpc/server'
import type { Context } from './context'
import {getToken} from "@auth/core/jwt"
import { getSession } from '@auth/solid-start'
import { authOpts } from '~/server/auth'

export const t = initTRPC.context<Context>().create()

export const router = t.router
export const procedure = t.procedure

export const protectedProcedure = t.procedure.use(
  t.middleware(async ({ ctx, next }) => {
      
    if (typeof Window === 'undefined') {
      if (ctx.user && !ctx.user.valid ) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'You are not authorized to access this resource',
          cause: 'No user present'
        })
      }
      return next({ ctx: { ...ctx, user: ctx.user } })
    }
    if (ctx.user && !ctx.user.valid) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'You are not authorized to access this resource',
        cause: 'No user present'
      })
    }
    return next({ ctx: { ...ctx, user: ctx.user } })

  }),
)
