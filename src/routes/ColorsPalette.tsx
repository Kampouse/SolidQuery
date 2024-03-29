import { For } from "solid-js";
import Colors from "../components/Colors";
import { Navbar, BaseLayout } from "./index"
import { Title } from "solid-start";
export default function ColorsPalette() {
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-purple-500", "bg-indigo-500"];
    return (
        <div>
            <Title> Colors Palette </Title>
            <div class="flex flex-row flex-wrap w-full justify-center gap-4">
                <For each={colors}>{(color) => <Colors color={color} />}</For> </div>;
        </div>)
}

