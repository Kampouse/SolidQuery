import "./index.css";
import { A } from "@solidjs/router";
export const Navbar = () => {
    return (

        <div class="header col-span-12 rounded-lg   bg-inner-blue   flex flex-row mb-4">

            <button class="bg-white text-black rounded-lg   border border-inner-blue  p-4 px-8"> <A href="/"> Home </A> </button>
            <button class="bg-white text-black rounded-lg   border border-inner-blue  p-4 px-8"> <A href="/DarkMode"> Dark Mode </A> </button>
            <button class="bg-white text-black   border border-inner-blue p-4 px-8"> <A href="/ColorsPalette"> Color Palettes </A> </button>
            <button class="bg-white text-black border border-inner-blue   p-4 px-8"> <A href="/Modal"> Modal </A> </button>
            <button class="bg-white text-black border border-inner-blue   p-4 px-8"> <A href="/Form"> Form </A> </button>
        </div>

    )
}
export default function Home() {
    return (<>
        <div class=" grid  grid-cols-12  h-full gap-4  rounded-lg   ml-2">
            <Navbar />
            <div class="col-span-12  rounded-lg border border-gray-500  bg-inner-blue bg-p-32   sm:col-span-8">
            </div>
            <div class="col-span-12 h-96 rounded-lg  border border-gray-400   bg-inner-blue  p-16 sm:col-span-4">
            </div>
            <div class="footer col-span-12 h-full   rounded-lg border border-gray-200  bg-inner-blue  p-6">
            </div>
        </div>
    </>)
}
