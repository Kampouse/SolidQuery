
import {  For } from "solid-js";
import {A } from  "@solidjs/router";

export const Navbar = (props: { fields: string[] }) => {
    const ishome = (route: string) => route === "/Home" ? "/" : route
    return (
        <div class="  header col-span-12 rounded-lg  bg-inner-blue  mb-1 ml-2  p-4 justify-center">
            <button class="  text-black rounded-lg   border border-inner-blue p-4">
                <A href="/"> home  </A> </button>

            <For each={props.fields}>
                {(field) => (
                    <button class="  text-black rounded-lg   border border-inner-blue  hidden md:inline lg:inline p-4">
                        <A href={ishome("/" + field)}> {field} </A> </button>

                )}
            </For>
        </div>
    )
}
