import  { createContext, createSignal } from "solid-js";
import { JSX } from "solid-js";
import { createStore } from "solid-js/store";


type  fn = (state: any) => void;
const updater = (state: any, fn: fn) => {
    const newState = fn(state);
};

type  Blocks  = {
    current_color :string;
    blocks: string[] 
}


const fill = () => {
     return new Array(100).fill("bg-red-500");
}
const [Block, SetBlock] = createSignal<Blocks> 
({blocks : fill(),current_color:"bg-gray-900"  } )

export const BlockContext = createContext([Block,SetBlock]);
export function BlockProvider(props: { children: JSX.Element}) {
    const [state, setState] = createStore(Block);

    return (
       <BlockContext.Provider 
            value={[Block,SetBlock]}>
            {props.children}
        </ BlockContext.Provider>
    );
}

