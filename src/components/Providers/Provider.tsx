import  { createContext, createSignal } from "solid-js";
import { JSX } from "solid-js";
import { createStore } from "solid-js/store";


type  fn = (state: any) => void;
const updater = (state: any, fn: fn) => {
    const newState = fn(state);
};
const [count, setCount] = createSignal(0);
const   Counter = {   count: count, setCount: setCount  };
export const CounterContext = createContext([ Counter]);
export function CounterProvider(props: { count:number, children: JSX.Element}) {
    const [state, setState] = createStore(Counter);

    const store = [
        state];

    return (
        <CounterContext.Provider value={store}>
            {props.children}
        </CounterContext.Provider>
    );
}

