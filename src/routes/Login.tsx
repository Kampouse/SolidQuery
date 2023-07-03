import { createSignal, Show,useContext, createEffect } from "solid-js"
import { UserProvider,UserContext,Session } from "~/components/Providers/Provider";
import { Title } from "solid-start"
import { signIn, signOut } from "@auth/solid-start/client"
import { useNavigate } from "@solidjs/router";
import { authOpts } from "~/server/auth";
import { getSession} from "@auth/solid-start"
import { createServerData$, redirect } from "solid-start/server";
const routeData = () => {
    return createServerData$(
      async (_, event) => {
        const session = await getSession(event.request, authOpts);
        if (!session || !session.user ) {
          throw redirect("/");
        }
        return session;
      },
      { key: () => ["auth_user"] }
    );
  }
export const useSession = () => {
    return createServerData$(
        async (_, { request }) => {
            console .log("request")    
            return await getSession(request, authOpts)
        },
        { key: () => ["auth_user"] }
    )
}

type ButtonModalProps = {
    toggleButton: () => void
}

const ButtonModal = (param: ButtonModalProps) => {
    return (
        <button class={"px-4 py-2 mt-4 text-white rounded  bg-gray-900 text-black hover:scale-110 transition duration-200 "}
            onClick={param.toggleButton}>Toggle Modal</button>
    )
}

export default function LoginPage() {
    const nav = useNavigate()
    const [user, setUser] = useContext(UserContext)
    const session = useSession()
    
     if (session()) {

    const userdata:Session = { 
        name: session()?.user?.name as string,
        email: session()?.user?.email as string
    }
      setUser(userdata)

    }
      
    const [isOpen, setIsOpen] = createSignal(false)
    const toggleLogin = () => {
        signIn("github", {signinUrl:"/login"})
        if (session()) {

             
         
    }


    }
    const toggleLogout = () => {
        signOut({ callbackUrl: "/login",signoutUrl:"/login" } )
    }
    return (
        <div>
            <Title> Login </Title>
            <Show when={!session()}>
                <button class={"px-4 py-2 mt-4 text-white rounded  bg-gray-900 text-black hover:scale-110 transition duration-200 "}
                    onClick={() => toggleLogin()}>Toggle Login </button>
            </Show>
            <Show when={session()}>
                <button class={"px-4 py-2 mt-4 text-white rounded  bg-gray-900 text-black hover:scale-110 transition duration-200 "}
                    onClick={() => toggleLogout()}>Toggle Logout </button>
            </Show>
            <dialog class="w-96 h-96 mt-10 bg-[#359fad] border-2 rounded-lg border-gray-900  transition duration-500  " open={isOpen()}>
                <div class="flex flex-col items-center justify-center h-full" >
                    <ButtonModal toggleButton={() => setIsOpen(!isOpen())} />
                </div>
            </dialog>
            <ButtonModal toggleButton={() => setIsOpen(!isOpen())} />
        </div>
    )
}
