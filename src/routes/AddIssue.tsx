import {Signal,Show} from "solid-js";

import {A } from "@solidjs/router";
import { createSignal } from "solid-js";
import { createResource } from "solid-js";
import { client, } from "~/lib/trpc/client";
import type { Issue } from "~/lib/trpc/types"; 
import  "./AddIssue.css";
import { Tags } from ".";
import "./index.css";
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
    return (
        <> 
            <A href="/">
                <div class="back-button-issue"  data-testid="goto-Index" > <span>  back to menu </span></div>
            </A>
            <div class="container"> 
                <div class="issue-writer">
                    <h1 class="page-title">  Add issue </h1>
                    <label class="titles"> Title </label>
                    <input class="issue-input" type="text" placeholder="Title" data-testid="issue-title-writer" />
                    <label class="titles"> Description </label>
                    <textarea class="issue-input" placeholder="Description" data-testid="issue-description-writer" />
                    <button class="issue-button" type="button" data-testid="submit-button" > Submit </button>
                </div>
                <div class="tag-container">   
                    <label> select a tag</label>
                    <Tags />
                </div>
            </div>
        </>);
}











