import { For,createSignal,useContext} from "solid-js";
import Colors from "../components/Colors";
import {  BaseLayout } from "./index"
import { Title } from "solid-start";
import { BlockContext,BlockProvider } from "~/components/Providers/Provider";
export default function PizelArt() {
     const  [selected, setSelect] = createSignal<string>("");
     
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-purple-500", "bg-indigo-500"];
    return (
        <BaseLayout>
         <BlockProvider>
            <Title> Color Picker </Title>
            <Block/>
            </BlockProvider>
        </BaseLayout>)
}
 const Block = () => { 
     const  [   Block,SetBlock ] = useContext(BlockContext)

    SetBlock ({blocks: ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-pink-500", "bg-purple-500", "bg-indigo-500"]})
    
     console.log(Block())
    return  <div class="w-10 h-10 bg-red-500">

     

    </div>


}
  

 
