import "./index.css";
import {A } from "@solidjs/router";
import server$ from "solid-start/server";
import { JSX, Component,Accessor, createEffect, untrack } from "solid-js";
import { createSignal,For } from "solid-js";
import {CounterContext } from "~/components/Providers/Provider";
import IssuesList from "~/components/IssuesList";
import {useContext } from "solid-js";
import { client, } from "~/lib/trpc/client";
import { TagSet } from "./AddIssue";
const Tag = (props: { tag: () => {tag:string, selected:string,index:number},selected:Accessor<{tag:string,selected:string,index:number}[]>}) => {
    const showSelected = () => {
           
        if(props.selected() === undefined)
        {
            return "tag-element " +  props.tag().tag + " "  +  props.tag().selected;
        }
        else {
            return "tag-element " +  props.selected()[props.tag().index].tag + " "  +  props.selected()[props.tag().index].selected;
        }
    };
    return (
        <div class={ showSelected()}>
            <small> {props.tag().tag} </small>
        </div>
    );
};
export function  Tags (props : {tags:  TagSet,tagNames : string[]}) {
    const converProps = () => {
        if (Styles().length === 0) {
            setStyles(props.tagNames.map((tag, index) => {
                return { tag: tag, selected: "", index: index };
            }));
        }
        return Styles;
    };
    const [Styles, setStyles] = createSignal([] as {tag:string,selected:string,index:number}[]);
    const selectTag = (tag: string) => {
        if (props.tags.Selected().find((t) => t === tag)) {
            props.tags.setSelected(  props.tags.Selected().filter((t) => t !== tag));
            setStyles(Styles().map((style) => {

                style.tag === tag ? style.selected = "" : style.selected;
                return style;
            }));
        }
        else {
            props.tags.setSelected([...props.tags.Selected(), tag]);
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
                <For each={ converProps()()}>{(tag) =>
                    <div onClick={()=> selectTag(tag.tag)}>
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
