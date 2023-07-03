

import { JSX, useContext,  } from "solid-js";
import {Protected } from "~/components/Protected";
import { Navbar } from "~/components/Navbar";
import { useSession } from "~/utils";
import {UserContext, Session } from "~/components/Providers/Provider";

const routes = import.meta.globEager("../routes/*.tsx")
const routeNames = Object.keys(routes).map((route) => route.replace("../routes/", "").replace(".tsx", "").replace("./", ""))
export const BaseLayout = (props: { children: JSX.Element }) => {

    const [user, setUser] = useContext(UserContext);

    const session = useSession()
     if (session()) {
        const userdata: Session = {
           name: session()?.user?.name as string,
           email: session()?.user?.email as string
    }
        setUser(userdata)
   }
    return (<>
        <Navbar fields={routeNames} />
        {props.children}
    </>)
}
export const ProtectedLayout = (props: { children: JSX.Element }) => {
    return (<>

        <Navbar fields={routeNames} />
        {props.children}
    </>)

 
}

