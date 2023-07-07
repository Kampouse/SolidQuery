
import { JSX, For, createSignal } from "solid-js";

export type Action = {

  name : string,
  action : () => void

}

export const DropDown = (props:{ actions: Action[]  } ) => {
  const [Drop, SetDrop] = createSignal("hidden");
  const toggle = () => Drop() === "hidden" ? SetDrop("visible") : SetDrop("hidden")
const defaultAction = { name: "Edit", trigger: () => { console.log("Edit") } }
  const options =  props?.actions?.map((field) => field) ?? [defaultAction] 
  return (
    <>
      <div id="dropdownDots"
        class={"z-10 absolute  overflow-visible  bg-white divide-y divide-gray-100 rounded-lg shadow w-[8em] dark:bg-gray-800 dark:divide-gray-800 " + Drop()}>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 "
        onMouseLeave={() => { SetDrop("hidden") } }
          aria-labelledby="dropdownMenuIconButton">
          <For each={options}>
            {(field) => (
              <button onClick={() =>  field.action() } class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">{field.name} </button>
            )}
          </For>
        </ul>
      </div>
      <button id="dropdownMenuIconHorizontalButton"
        onClick={() => { toggle() }}
        data-dropdown-toggle="dropdownDotsHorizontal"
        class="inline-flex items-center  relative right-1 p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
      </button>
    </>
  )
}
