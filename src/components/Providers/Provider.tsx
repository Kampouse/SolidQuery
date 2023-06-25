import  { createContext, createSignal } from "solid-js";
import { JSX } from "solid-js";
import { createStore } from "solid-js/store";


type  fn = (state: any) => void;
const updater = (state: any, fn: fn) => {
    const newState = fn(state);
};

type  Blocks  = {
    blocks: string[] 
}

const [Block, SetBlock] = createSignal<Blocks>({ blocks: [] })
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

