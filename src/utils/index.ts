import { getSession} from "@auth/solid-start"
import { createServerData$, redirect } from "solid-start/server";
import { authOpts } from "~/server/auth";
export const useSession = () => {
    return createServerData$(
        async (_, { request }) => {
            console .log("request")    
            return await getSession(request, authOpts)
        },
        { key: () => ["auth_user"] }
    )
}


