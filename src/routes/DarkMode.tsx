import { createSignal, createRenderEffect } from "solid-js";
import {  BaseLayout } from "./index"


export default function DarkMode() {
    const [theme, setTheme] = createSignal("dark");
    const [color, setColor] = createSignal("bg-gray-900 text-white");
    const [buttonColor, setButtonColor] = createSignal("bg-white text-black");
    const [borderColor, setBorderColor] = createSignal("border-gray-900");
    createRenderEffect(() => {
        setColor(theme() === "dark" ? "bg-gray-900 text-white" : " bg-[#359fad] text-black")
        setButtonColor(theme() === "dark" ? "bg-[#359fad] text-black" : "bg-gray-900 text-white")
        setBorderColor(theme() === "dark" ? "border-[#359fad]" : "border-gray-900")
    });


    const toggleTheme = () => setTheme(theme() === "dark" ? "light" : "dark");


    return (
             <BaseLayout> 
        <div class={color() + " transition duration-500  rounded-xl "}>
            <div class={"  flex flex-col items-center justify-center w-full h-[38rem] border-2 rounded-lg " + borderColor()}>

                <h1 class="text-4xl font-bold   transition duration-500"> {theme() != "dark" ? "Dark mode" : "White mode"} </h1>
                <button class={"px-4 py-2 mt-4 text-white rounded " + buttonColor() + " hover:scale-110 transition duration-200"} onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
            </BaseLayout> 
    );
}
