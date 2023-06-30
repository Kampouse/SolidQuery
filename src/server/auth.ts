import {type SolidAuthConfig } from "@auth/solid-start"
import GitHub from "@auth/core/providers/github"
declare module "@auth/core/types" {
  export interface Session {
    user?: DefaultSession["user"];
  }
}

export const authOpts: SolidAuthConfig = {
  providers: [
    GitHub({
      clientId:  import.meta.env.VITE_GITHUB_ID,
      clientSecret: import.meta.env.VITE_GITHBU_SECRET,
    }),
  ],
  debug: false,
  secret :  import.meta.env.VITE_AUTH_SECRET,
}

