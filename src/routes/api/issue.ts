import { APIEvent, json } from "solid-start/api";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { client } from "~/lib/trpc/client";
import { GET as get } from "./trpc/[...]";
export function GET() {
    const status = client.getTodos.query();
    return status;

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