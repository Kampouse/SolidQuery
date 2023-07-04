// routes/protected.tsx
import { JSX, For, createSignal } from "solid-js";
import { Protected } from "~/components/Protected";
import { trpc}  from "../server/trpc_client"
const DropDown = () => {
  const [Drop, SetDrop] = createSignal("hidden");
  const toggle = () => Drop() === "hidden" ? SetDrop("visible") : SetDrop("hidden")
  const options = ["Message", "Update", "Delete"]
  return (
    <>
      <div id="dropdownDots"
        class={"z-10 absolute  overflow-visible  bg-white divide-y divide-gray-100 rounded-lg shadow w-[8em] dark:bg-gray-800 dark:divide-gray-800 " + Drop()}>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownMenuIconButton">
          <For each={options}>
            {(field) => (
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">{field}</a>
            )}
          </For>
        </ul>
      </div>
      <button id="dropdownMenuIconHorizontalButton"
        onClick={() => { toggle() }}
        onFocusOut={() => { SetDrop("hidden") }}
        data-dropdown-toggle="dropdownDotsHorizontal"
        class="inline-flex items-center  relative right-1 p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
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
  const title = ["Name", "Color", "Category", "Price", "Option"]
  return (
    <div class="relative  overflow-visible rounded-lg w-full">
      <div class="overflow-hidden rounded-lg w-full  ">
        <table class="w-full  border-seperate  text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900
            dark:text-gray-400 rounded-lg" >


            <tr class="rounded-lg">
              <For each={title}>
                {(tit) => (
                  <td class="px-6 py-4 rounded-lg">
                    {tit}
                  </td>)}
              </For>
            </tr>
          </thead>
          <tbody class="rounded-lg">
            <For each={data}>
              {(child) => (
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 border rounded-lg   ">
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
    </div>
  )
}

export const { routeData, Page } = Protected((session) => {
  const client_image = session.user?.image ? session.user?.image : "https://avatars.githubusercontent.com/u/10047061?v=4"
  const client_name = session.user?.name ? session.user?.name : "John Doe"
  const profile = trpc.profile.query({ name: client_name})
 // const user = trpc.user.query({ name: client_name})
  return (

    <div class="flex flex-col lg:flex-row md:flex-row gap-2  mt-[0.5em] md:gap-2  ">
      <div class="flex flex-col  self-center md:self-baseline 
        lg:self-baseline  w-full  md:min-w-min-md justify-center min-w-fit max-w-xs p-
        shadow-md rounded-xl px-12 py-12 dark:bg-gray-900 
        dark:text-gray-100 h-fit">
        <img src={client_image} alt="" class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
        <div class="space-y-4 text-center divide-y divide-gray-700">
          <div class="my-2 space-y-1">
            <h2 class="text-xl font-semibold sm:text-2xl">{client_name}</h2>
            <p class="px-5 text-xs sm:text-base dark:text-gray-400">Full-stack developer</p>
          </div>
          <div class="flex justify-center pt-2 space-x-4 align-center w-fit max-w-xs">
            <h1>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis. Amet justo donec enim diam vulputate ut pharetra. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices.</h1>
          </div>
        </div>

      </div>
      <Table />
    </div>
  );
});

export default Page;
