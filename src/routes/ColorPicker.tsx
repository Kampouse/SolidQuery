import { For,createSignal} from "solid-js";
import Colors from "../components/Colors";
import { Navbar, BaseLayout } from "./index"
import { Title } from "solid-start";

export default function ColorPicker() {
     const  [selected, setSelect] = createSignal<string>("");
     
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-purple-500", "bg-indigo-500"];
    return (
        <div>
            <Title> Color Picker </Title>
            <div class= { "flex flex-row flex-wrap w-full justify-center gap-4 " + selected()} >

                <For each={colors}>{(color) => <div onClick={() => setSelect(color)}> <Colors color={color} /> </div>}</For> </div>;
        </div>)
}

