import "./index.css";
import { signIn, signOut } from "@auth/solid-start/client"
import { A } from "@solidjs/router";
import { createSignal, For, JSX } from "solid-js";
import { Title } from "solid-start";

//get routes from the routes folder probaly should not to this but ... lazy af
const routes = import.meta.globEager("../routes/*.tsx")
const routeNames = Object.keys(routes).map((route) => route.replace("../routes/", "").replace(".tsx", "").replace("./", ""))
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

export const BaseLayout = (props: { children: JSX.Element }) => {
    return (<>
        <Navbar fields={routeNames} />
        {props.children}
    </>)

}

const DropDown = () => {
    const [Drop, SetDrop] = createSignal("hidden");
    const toggle = () => Drop() === "hidden" ? SetDrop("visible") : SetDrop("hidden")
    const options = ["Message", "Update", "Delete"]
    return (
        <>
            <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
            </button>
            <div id="dropdownDots"
                class={"z-10 absolute  overflow-visible  bg-white divide-y divide-gray-100 rounded-lg shadow w-[8em] dark:bg-gray-700 dark:divide-gray-600 " + Drop()}>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                    <For each={options}>
                        {(field) => (
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{field}</a>
                        )}
                    </For>
                </ul>
            </div>
            <button id="dropdownMenuIconHorizontalButton"
                onClick={() => { toggle() }}
                onFocusOut={() => { SetDrop("hidden") }}
                data-dropdown-toggle="dropdownDotsHorizontal"
                class="inline-flex items-center  relative right-2 p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
        </>
    )
}
export const Table = () => {
     
    const data = [{ name: "Apple mac pro ", color: "Silver", category: "Laptop", price: "$2499", option: "none" },
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2499", option: "none" },
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2499", option: "none" },
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2499", option: "none" },
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2499", option: "none" },
    { name: "Apple MacBook Pro 17", color: "Silver", category: "Laptop", price: "$2499", option: "none" },

    ]
    const title = ["Product name", "Color", "Category", "Price", "Option"]
    return (
        <div class="relative  overflow-visible rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg" >
                    <tr>
                        <For each={title}>
                            {(tit) => (
                                <td class="px-6 py-4">
                                    {tit}
                                </td>)}
                        </For>
                    </tr>
                </thead>
                <tbody>

                    <For each={data}>
                        {(child) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border rounded-lg  ">
                                <th scope="col" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-lg">
                                    {child.name}
                                </th>
                                <td class="px-6 py-4 rounded-lg">
                                    {child.color}
                                </td>

                                <td class="px-6 py-4">
                                    {child.category}
                                </td>
                                <td class="px-6 py-4">
                                    {child.price}
                                </td>
                                <td class="px-6 py-4  rounded-lg">
                                    <DropDown />
                                </td>
                            </tr>)}
                    </For>
                </tbody>
            </table>
        </div>
    )
}

const Table_v2 = () => {
    return ( 
  <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div class="w-full overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden">
      <table class="w-full">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-center text-gray-900 bg-gray-100 uppercase border-b border-gray-600 text-center">
            <th class="px-[1rem] py-3 text-left">Name</th>
            <th class="px-4 py-3">Age</th>
            <th class="px-4 py-3">Status</th>
            <th class="px-4 py-3">Date</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr class="text-gray-700 text-center">
            <td class="px-4 py-3 text-center border">
              <div class="flex flex-row items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">Sufyan</p>
                  <p class="text-xs text-gray-600">Developer</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">22</td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
            </td>
            <td class="px-4 py-3 text-sm border">6/4/2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    );
  } 

export default function Home() {
    return (
        <BaseLayout>
            <Title> Home </Title>
            <div class=" grid  grid-cols-12  h-full gap-4  rounded-lg   ml-2">
                <div class="col-span-12  rounded-lg   bg-inner-blue bg-p-32">

                </div>
                <div class="col-span-12 h-fit rounded-lg  border border-gray-400   bg-inner-blue  p-2 ">
                    <Table_v2 />
</div>

            </div>
        </BaseLayout>)
}
