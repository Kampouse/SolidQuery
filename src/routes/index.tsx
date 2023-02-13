import "./index.css";
import {A } from "@solidjs/router";
import server$ from "solid-start/server";
import type { JSX, Component } from "solid-js";
import {CounterContext } from "~/components/Providers/Provider";
import IssuesList from "~/components/IssuesList";
import {useContext } from "solid-js";

import { client, } from "~/lib/trpc/client";
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

                    <button class="issue-button" onClick={createPost}>   add issue </button>
                    <A  href="/Issues">
                        <button class="issue-button">   add issue </button> </A>


                </div>
            </main>
        </div>
    );
}
