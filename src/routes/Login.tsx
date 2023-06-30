import { createSignal, Show } from "solid-js"
import { Title } from "solid-start"
import { signIn, signOut } from "@auth/solid-start/client"
import { BaseLayout } from "./index"
import { authOpts } from "~/server/auth";
import { getSession } from "@auth/solid-start"
import { createServerData$ } from "solid-start/server"

export const useSession = () => {
    return createServerData$(
        async (_, { request }) => {
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
    const session = useSession()
    const [isOpen, setIsOpen] = createSignal(false)
    const toggleLogin = () => {
        console.log("login")
        signIn("github")
    }
    const toggleLogout = () => {
        signOut()
    }
    return (
        <BaseLayout>
            <Title> Login </Title>
            <Show when={!session()}>
                <button class={"px-4 py-2 mt-4 text-white rounded  bg-gray-900 text-black hover:scale-110 transition duration-200 "}
                    onClick={(e) => toggleLogin()}>Toggle Login </button>
            </Show>
            <Show when={session()}>
                <button class={"px-4 py-2 mt-4 text-white rounded  bg-gray-900 text-black hover:scale-110 transition duration-200 "}
                    onClick={(e) => toggleLogout()}>Toggle Logout </button>
            </Show>
            <dialog class="w-96 h-96 mt-10 bg-[#359fad] border-2 rounded-lg border-gray-900  transition duration-500  " open={isOpen()}>
                <div class="flex flex-col items-center justify-center h-full" >
                    <ButtonModal toggleButton={() => setIsOpen(!isOpen())} />
                </div>
            </dialog>
            <ButtonModal toggleButton={() => setIsOpen(!isOpen())} />
        </BaseLayout>
    )
}
