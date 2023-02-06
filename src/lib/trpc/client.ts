import {
    createTRPCProxyClient,
    httpBatchLink,
    loggerLink,
} from '@trpc/client';
import type { AppRouter } from "./router";
import { APIEvent } from "solid-start/api";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from "~/lib/trpc/router";





// create the client, export it
export const client = createTRPCProxyClient<AppRouter>({
    links: [loggerLink(), httpBatchLink({ url: "/api/trpc" })]
});

