import  { DropDown} from "~/components/DropDown";
import { JSX, For, createSignal } from "solid-js";
import type {Action} from "~/components/DropDown";
export const Table = (props:{ actions: Action[]}) => {

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
                    <DropDown  actions={props.actions} />
                  </td>
                </tr>)}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  )
}
