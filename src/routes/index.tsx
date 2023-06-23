import "./index.css";
import { A } from "@solidjs/router";
import { For, JSX } from "solid-js";
 
//get routes from the routes folder probaly should not to this but ... lazy af
const routes = import.meta.globEager("../routes/*.tsx")
const routeNames = Object.keys(routes).map((route) => route.replace("../routes/", "").replace(".tsx", "").replace ("./",""))
export const Navbar = (props: { fields: string[] }) => {
    const ishome = (route:string)    =>  route === "/Home" ? "/" : route
    return (
        <div class="header col-span-12 rounded-lg   bg-inner-blue   flex flex-row mb-4">
            <For each={props.fields}>
                {(field) => (
                    <button class="bg-white text-black rounded-lg   border border-inner-blue  p-4 px-8"> 
                    <A href={ishome("/" + field)}> {field} </A> </button>
                )}
            </For>
        </div>

    )
}

export const BaseLayout = (props: { children: JSX.Element }) => {
    return (<>
        <Navbar fields={routeNames} />
        {props.children}
    </>)


}

export default function Home() {
    return (
        <BaseLayout>
            <div class=" grid  grid-cols-12  h-full gap-4  rounded-lg   ml-2">
                <div class="col-span-12  rounded-lg border border-gray-500  bg-inner-blue bg-p-32   sm:col-span-8">
                </div>
                <div class="col-span-12 h-96 rounded-lg  border border-gray-400   bg-inner-blue  p-16 sm:col-span-4">
                </div>
                <div class="footer col-span-12 h-full   rounded-lg border border-gray-200  bg-inner-blue  p-6">
                </div>
            </div>
        </BaseLayout>)
}
