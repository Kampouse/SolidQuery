import { createContext, createSignal, Accessor, Setter } from "solid-js";
import { authOpts } from "~/server/auth";
import { createServerData$, redirect } from "solid-start/server";
import { JSX } from "solid-js";
import { createStore } from "solid-js/store";
import { useSession } from "~/routes/Login";
import { getSession} from "@auth/solid-start"


type fn = (state: any) => void;
const updater = (state: any, fn: fn) => {
    const newState = fn(state);
};

type Blocks = {
    current_color: string;
    blocks: string[]
}
type User = {
    name: string | undefined | null,
    email: string | undefined | null,
}
 
const stuff = async () => { 

    return createServerData$(
        async (_, { request }) => {
            return await getSession(request, authOpts)
        },
        { key: () => ["auth_user"] }
    )
}


export type Session =  { name: string | null, email: string | null }
type UserContext = [Accessor<Session>, Setter<Session>]
type ColorContext = [Accessor<Blocks>, Setter<Blocks>]

const fill = () => {
    return new Array(100).fill("bg-red-500");
}
const [state, SetState] = createSignal
    ({ blocks: fill(), current_color: "bg-gray-900" })
//const sessionData = useSession();

const [userData, SetUser] = createSignal<Session>({ name: null, email: null });
export const UserContext = createContext<UserContext>([userData, SetUser]);
export const UserProvider = (props: { children: JSX.Element }) => {
     
    const [user, setUser] = createStore(userData);
     const session = useSession()


    return (<UserContext.Provider value={[userData, SetUser]}>  {props.children} </UserContext.Provider>
    )
}

export const BlockContext = createContext<ColorContext>([state, SetState]);
export function BlockProvider(props: { children: JSX.Element }) {
    const [Block,  SetBlock] = createStore(state);

    return (
        <BlockContext.Provider value={[Block, SetBlock]}>
            {props.children}
        </ BlockContext.Provider>
    );
}

