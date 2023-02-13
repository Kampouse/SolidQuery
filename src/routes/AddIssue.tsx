import {Signal,Show } from "solid-js";
import { createSignal } from "solid-js";
import { createResource } from "solid-js";
import { client, } from "~/lib/trpc/client";
import type { Issue } from "~/lib/trpc/types"; 

const wrapper = async (fn: typeof client.getIssues) => {
    await fn.query();
};
const [list , setList] = createSignal<Issue[]> ([]);
const getIssues = async () => {
    const  [data] = createResource(async () => {
        setList(await client.getIssues.query());
    });
};
  
export default function  AddIssue() {
    return (
        <>
            <button role="button" onClick={getIssues}> add issue </button>
            <Show when={list().length > 0}>
                <h1  data-testid="title" >{list()[0].title  }</h1>
            </Show>
            <h1 class="style style-head"> issues list</h1>
        </>);
}
