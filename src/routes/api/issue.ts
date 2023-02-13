import { APIEvent, json } from "solid-start/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { client } from "~/lib/trpc/client";
import { GET as get } from "./trpc/[...]";


import server$ from "solid-start/server";

const logger = async () => {
    const logHello = server$(async (message: string) => {
        console.log(message);
    });
    await logHello("Hello");
};

export function GET() {
    console.log("GET");
    return json({ message: "Hello World" });
}


export function POST() {
    // ...
}

export function PATCH() {
    // ...
}

export function DELETE() {
    // ...
}