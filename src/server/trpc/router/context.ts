import type { inferAsyncReturnType } from '@trpc/server'
import type { createSolidAPIHandlerContext } from 'solid-start-trpc'
import zod from "zod"
import { authOpts } from "~/server/auth";
import { getSession } from "@auth/solid-start"
import { prisma } from "~/db/client"

export const createContextInner = async (opts: createSolidAPIHandlerContext) => {
const Session = await getSession(opts.req,authOpts)
if(Session !== null) { 
const Tempuser = Session.user
const user = { id: Tempuser?.id, name: Tempuser?.name, email: Tempuser?.email,valid : true }
    return {
      ...opts,
       prisma,
       user,
    }
  }
   const user = { id: "anonymous", name: "anonymous", email: "anonymous",valid : false }
  return { ...opts, user,prisma }

}

export const createContext = async (opts: createSolidAPIHandlerContext) => {
  return await createContextInner(opts)
}

export type Context = inferAsyncReturnType<typeof createContext>
