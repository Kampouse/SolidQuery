import { A  } from "@solidjs/router";
 
import {For,createResource,createSignal } from "solid-js";
 import { client, } from "~/lib/trpc/client";
 import {Issue } from "~/lib/trpc/types";
 import {useRouteData } from "solid-start";
export default function fetchIssues() {
  const todos = useRouteData();
const  [page, setPage] = createSignal(0);
  const getIssues = async () => {
       return await client.getIssues.query();
  };
 const    [Issues] = createResource("page-0" + page(),getIssues );
  //should a tag should redirector to the issue page with the issue id
  return (
   <ul>
    <For each={Issues()}>{(issue, i) =>
      <li>
        <a> {issue.title} </a>
        <h1>{issue.completed}</h1>
                  <h1>{issue.id}</h1>
      </li>
    }</For>
    </ul>
  );
}
