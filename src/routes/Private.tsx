// routes/protected.tsx
import { JSX, For, createSignal } from "solid-js";
import {Table }  from "~/components/Table";
import { Protected } from "~/components/Protected";
import { trpc}  from "../server/trpc_client"
const  UserCard = (props:{client_image:string,  client_name:string }) => {
return  ( 


      <div class="flex flex-col  h-full self-center md:self-baseline 
        lg:self-baseline  w-full  md:min-w-min-md justify-center min-w-fit max-w-xs p-
        shadow-md rounded-xl px-12 py-12 dark:bg-gray-900 
        dark:text-gray-100 ">
        <img src={props.client_image} alt="" class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
        <div class="space-y-4 text-center divide-y divide-gray-700">
          <div class="my-2 space-y-1">
            <h2 class="text-xl font-semibold sm:text-2xl">{props.client_name}</h2>
            <p class="px-5 text-xs sm:text-base dark:text-gray-400">Full-stack developer</p>
          </div>
          <div class="flex justify-center pt-2 space-x-4 align-center w-fit max-w-xs">
            <h1>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis. Amet justo donec enim diam vulputate ut pharetra. Donec adipiscing tristique risus</h1>
          </div>
        </div>

      </div>

)
}



export const { routeData, Page } = Protected((session) => {
  const client_image = session.user?.image ? session.user?.image : "https://avatars.githubusercontent.com/u/10047061?v=4"
  const client_name = session.user?.name ? session.user?.name : "John Doe"
  const profile = trpc.profile.query({ name: client_name})
 // const user = trpc.user.query({ name: client_name})
  const TableAction = [
    { name: "Edit", action: () => { console.log("Edit") } },
    { name: "Delete", action: () => { console.log("Delete") } },
    { name: "Duplicate", action: () => { console.log("Duplicate") } }]
  return (

    <div class="flex flex-col lg:flex-row md:flex-row gap-2  mt-[0.5em] md:gap-2  h-fit ">
      <UserCard client_image={client_image} client_name={client_name} />
      <Table actions={TableAction} />
    </div>
  );
});

export default Page;
