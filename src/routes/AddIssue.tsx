import { onMount,Signal,createSignal, Suspense } from "solid-js";
export default function AddIssue() {
   const [Issue,SetIssue] = createSignal("")
   const getissue = async ()  => {
     try {
       const response = await fetch("http://localhost:5454/api/issue");
       const data = await response.json();
       SetIssue(data);
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