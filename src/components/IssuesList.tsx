import { A  } from "@solidjs/router";
import {CounterContext } from "~/components/Providers/Provider";
import {For,createResource,createSignal } from "solid-js";
import {useRouteData } from "solid-start";
import {useContext } from "solid-js";
import { QueryClient, createQuery } from "@tanstack/solid-query";
type IssueType =  "feature" | "rnd" | "bug";
type IssueProps = {
  description: string;
  title: string;
  type:  IssueType;  
};


function Issues(props: IssueProps){
    const visualTag = (type: IssueType) => {
        return (
            <div class={`tag-element ${type} list` }>  {type} </div>);
    };
    return (
        <>
            <li>
                <div class="issue">
                    <span> {props.title} </span>
                    <small> {props.description}</small>
                    <div class="tagged-list">
                        {visualTag(props.type)}
                    </div>
                </div>
            </li>
        </>
    );
}

export default function IssuesList() {
    const queryClient = new QueryClient();
    const [counter ] = useContext(CounterContext);
    const  [page, setPage] = createSignal(0);
    const getIssues = async () => {
        createQuery(() => ["page-0" + page(), counter.count()], async () => {

        });
    };
    getIssues();
    return (
        <ul class="issues-list">
            <For each={list()}>{(issue, i) =>
                <Issues description={issue.description} title={issue.title}  type={issue.type as IssueType} />
            }</For>

        </ul>
    );
}
