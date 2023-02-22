import {Signal,Show} from "solid-js";

import {A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createResource } from "solid-js";
import { client, } from "~/lib/trpc/client";
import type { Issue } from "~/lib/trpc/types"; 
import  "./AddIssue.css";
import { Tags,getTags } from ".";
import "./index.css";
import { createStore } from "solid-js/store";
const wrapper = async (fn: typeof client.getIssues) => {
    await fn.query();
};
const [list , setList] = createSignal<Issue[]> ([]);
const getIssues = async () => {
    const  [data] = createResource(async () => {
        setList(await client.getIssues.query());
    });
};
// maybe add a search a a top to see if there something already similar to the the curren issue 
export default function  AddIssue() {

    const  [getTags,setTags] = createStore<getTags>({ 
        feature: { name:"feature", selected:false}, 
        rnd:{name: "rnd",selected:false},
        bugs: {name:"bugs",selected:false} });
    return (
        <> 
            <A href="/">
                <div class="back-button-issue"  data-testid="goto-Index" > <span>  back to menu </span></div>
            </A>
            <form>
                <div class="container"> 
                    <div class="issue-writer">
                        <h1 class="page-title">  Add issue </h1>
                        <label class="titles"> Title </label>
                        <input class="issue-input" type="text" placeholder="Title" data-testid="issue-title-writer" />
                        <label class="titles"> Description </label>
                        <textarea class="issue-input textarea" placeholder="Description" data-testid="issue-description-writer" />
                        <button class="issue-button" type="button" data-testid="submit-button" > Submit </button>
                    </div>
                    <div class="tag-container">   
                        <label> select a tag</label>
                        <Tags/>
                    </div>
                </div>

            </form>
        </>);
}











