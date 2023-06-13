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

export default function Home() {
    return  ( <> 
<div class=" grid  grid-cols-12  h-full gap-4  rounded-lg ">
  <div class="header col-span-12 rounded-lg h-2  bg-gray-200 py-8">
  </div>
  <div class="col-span-12  rounded-lg border border-gray-500 bg-gray-200 p-32   sm:col-span-8">
  </div>
  <div class="col-span-12 h-96 rounded-lg  border border-gray-400 bg-gray-200 p-16 sm:col-span-4">
  </div>
  <div class="footer col-span-12 h-full   rounded-lg border border-gray-200 bg-gray-200 p-6">
  </div>
</div>





    </> )
}
