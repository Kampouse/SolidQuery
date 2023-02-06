import { onMount,Signal,createSignal, Suspense } from "solid-js";
 import { client } from "~/lib/trpc/client";
 import { createRouteAction, useRouteData } from "solid-start";
export default function AddIssue() {
   const [Issue,SetIssue] = createSignal("")
    const todos =   useRouteData();
   const getissue = async ()  => {
     try {
        const stuff   = await client.getTodos.query();
        console.log(stuff);
     }
     catch (error) {
       console.log(error);
     }
  };
    onMount(() => {
       getissue();
    });
        
  return <h2>Add Issue {Issue}</h2>;
}