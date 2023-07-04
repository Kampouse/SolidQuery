import { type SolidAuthConfig } from "@auth/solid-start"
import { prisma } from "~/db/client"
import GitHub from "@auth/core/providers/github"
declare module "@auth/core/types" {
  export interface Session {
    user?: {
      id?: string;
    } & DefaultSession["user"];
  }


}
export const authOpts: SolidAuthConfig = {
   
  callbacks: {

    session({ session }) {
      if (session.user) {
      }
      return session;
    },

    async signIn({ profile,user ,account}) {
       console.log( user,account,profile)
      if (profile) {
        try {
          if (profile.name && profile.node_id) {
             console.log(profile.node_id)

            const exist = await prisma.user.findUnique({ where: { email: profile.node_id as string } })
            if (exist) {
              return true
            }

          }
          await prisma.user.create({
            data: {
              name: profile.name,
              email: profile.node_id as string,

            },
          })
         await prisma.profile.create({
          data  : {
           user : { connect : { email : profile.node_id as string } },
           bio : profile?.bio as string || ""       
        }
          
        })
        }
        catch (e) {
          console.log(e)
          return true
        }
        if (profile.name) {
          // user prisma to find user by name
          const user = await prisma.user.findUnique({
            where: {
              email: profile.name,
            },
          })

        }



      }
      return true;
    }

  },
  providers: [
    GitHub({
      clientId: import.meta.env.VITE_GITHUB_ID,
      clientSecret: import.meta.env.VITE_GITHBU_SECRET,
    }),
  ],
  debug: false,
  secret: import.meta.env.VITE_AUTH_SECRET,
}

