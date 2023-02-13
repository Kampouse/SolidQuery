import { createTRPCSolid } from "solid-trpc";
import {
    createTRPCProxyClient,
    httpBatchLink,
    loggerLink,
} from "@trpc/client";
import type { AppRouter } from "./router";
import { APIEvent } from "solid-start/api";
import { QueryClient } from "@tanstack/solid-query";

export const queryClient = new QueryClient();
export const trpc = createTRPCSolid<AppRouter>({});

export const client = createTRPCProxyClient<AppRouter>({


    links: [loggerLink(), httpBatchLink({ url: "/api/trpc" })]
});

