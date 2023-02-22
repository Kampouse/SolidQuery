import "./index.css";
import {A } from "@solidjs/router";
import server$ from "solid-start/server";
import { JSX, Component,Accessor, createEffect } from "solid-js";
import { createSignal,For } from "solid-js";
import {CounterContext } from "~/components/Providers/Provider";
import IssuesList from "~/components/IssuesList";
import {useContext } from "solid-js";
import { client, } from "~/lib/trpc/client";
const Tag = (props: { tag: () => {tag:string, selected:string,index:number},selected:Accessor<{tag:string,selected:string,index:number}[]>}) => {
    const showSelected = () => {
        return "tag-element " +  props.selected()[props.tag().index].tag + " "  +  props.selected()[props.tag().index].selected;
    };
    return (
        <div class={ showSelected()}>
            <small> {props.tag().tag} </small>
        </div>
    );
};
export function  Tags ( ) {
    const [Selected, setSelected] = createSignal(new Set<string>());
    const LookUp = ["feature", "rnd", "bugs"].map((tag,index) => {
        return { tag: tag, selected: "", index: index };
    });
    const [Styles, setStyles] = createSignal(LookUp);
    type selectedType = "feature" | "rnd" | "bugs" ;
    const selectTag = (tag: selectedType,index:number) => {
        if (Selected().has(tag)) {
            Selected().delete(tag);
            setStyles(Styles().map((style) => {
                if (style.tag === tag) {
                      
                    style.selected = "";
                }
                return style;
            }));
        }
        else {
            setSelected(Selected().add(tag));
            //add "selected" to the tag
            setStyles(Styles().map((style) => {
                if (style.tag === tag) {
                    style.selected = "selected";
                }
                return style;
            }));
        }
    };
    
    return (
        <div class="tags">
            <ul class="tags-list">
                <For each={Styles()}>{(tag, i) =>
                    <div onClick={()=> selectTag(tag.tag as selectedType,i())}>
                        <Tag tag={()=> tag} selected={Styles }  />
                    </div>
                }
                </For>
                

            </ul>
        </div>
    );
}
export default function Home() {
    const [counter ] = useContext(CounterContext);
    const createUser = async () => {
        client.createUser.mutate({
            name: "alice",
            email: "alice@prisma.io",
        });
    };
    const createPost = async () => {
        client.createPost.mutate({ title: "test", content: "test", published: false, authorEmail: "alice@prisma.io" });
    };
    return (
        <div>
            <h1 class="style title"> Solid Query</h1>

            <main>
                <div class="issue-main">
                    <form class="issue-search">
                        <input type="text" placeholder="Search issues" />    
                    </form>
                    <IssuesList />
                </div>
                <div class="tags">
                    <ul class="tags-list">
                        <div class="tag-element feature">
                            <small> feature </small>
                        </div>
                        <div class="tag-element rnd">
                            <small> rnd </small>
                        </div>
                        <div class="tag-element bugs">
                            <small> bugs </small>
                        </div>
                    </ul>
                    <select class="issue-select" >
                        <option value="all"> select a type</option>
                        <option  value="feature">feature</option>
                        <option value="rnd">rnd</option>
                        <option value="bugs">bugs</option>
                    </select>
                    <hr/>
                    <A  href="/AddIssue">
                        <button  data-testid="goto-AddIssue" class="issue-button">   add issue </button> </A>
                </div>
            </main>
        </div>
    );
}
