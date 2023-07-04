import { t } from './utils'
import exampleRouter from './example'
import userRouter from './user'

export const appRouter = t.mergeRouters(exampleRouter, userRouter)

export type AppRouter = typeof appRouter
