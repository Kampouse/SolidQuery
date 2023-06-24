import {Signal,Show,For, createEffect, createComputed, createSelector} from "solid-js";
import {A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createResource } from "solid-js";
import { client, } from "~/lib/trpc/client";
import type { Issue } from "~/lib/trpc/types";
import type { Accessor,Setter } from "solid-js";
import  "./AddIssue.css";
import "./index.css";
import { createStore } from "solid-js/store";
export type  TagSet = {
           Selected : Accessor<Array<string>>;
            setSelected: Setter<Array<string>>;
    }
const wrapper = async (fn: typeof client.getIssues) => {
    await fn.query();
};
const [list , setList] = createSignal<Issue[]> ([]);
const  [getTitle,setTitle] = createSignal("");
const [getDescription,setDescription] = createSignal("");
const getIssues = async () => {
    const  [data] = createResource(async () => {
        setList(await client.getIssues.query());
    });
};
// maybe add a search a a top to see if there something already similar to the the curren issue 
export default function  AddIssue() {
 
    const [Selected, setSelected] = createSignal(new Array<string>());
    const  TagState:TagSet = { Selected: Selected, setSelected: setSelected };
    const list =  ["feature","rnd","bugs"];
    const submitIssue = async (event: Event) => {
        event.preventDefault();
        await client.createPost.mutate({title: getTitle(), content: getDescription(), published: true,authorEmail: "defaut@gmail.com"  }).then((res) => { console.log(res); });
         
        console.log("submitting issue", getTitle(), getDescription());

         
    };
    return (
        <> 
            <A href="/">
                <div class="back-button-issue"  data-testid="goto-Index" > <span>  back to menu </span></div>
            </A>
            <form>
                <div class="container"> 
                    <div class="tag-container" >   
                        <label> select a tag</label>
                        <div class="selected-container">
                            <label> selected tag</label>
                            <div class="tags-list tags">
                                <For each={Selected()}>
                                    {(tag) => <div class={"tag-element " + tag} > {tag} </div>}
                                </For>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </>);
}











