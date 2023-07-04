import { z } from 'zod'
import { procedure, router, protectedProcedure } from './utils'



const user =  router ({
     getRequest:  procedure.input(z.object({ name: z.string() }))
      .query(({ input, ctx }) => {
         return ctx.prisma.profile.findFirst({
            where:
            {
               user:
                  { name: input.name }
            }
         }).then((profile) => {
            return profile

         }).catch((e) => {
            console.log(e)
            throw new Error("User profile not found")
         })
      }),



})

export default router({
   profile: procedure.input(z.object({ name: z.string() }))
      .query(({ input, ctx }) => {
         return ctx.prisma.profile.findFirst({
            where:
            {
               user:
                  { name: input.name }
            }
         }).then((profile) => {
            return profile

         }).catch((e) => {
            console.log(e)
            throw new Error("User profile not found")
         })
      }),
   userData: procedure.input(z.object({ name: z.string() }))
      .query(({ input, ctx }) => {
         return ctx.prisma.user.findFirst({
          where : {
            name : input.name
            }
         }).then((user) => {
            return user

         }).catch((e) => {
            console.log(e)
            throw new Error("User not found")
         })
      }),
    


})

