// @refresh reload
import { Routes } from "@solidjs/router";
import { Suspense } from "solid-js";
import {
    Body,
    FileRoutes,
    Head,
    Html,
    Meta,
    Scripts,
    Title,
} from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import { QueryClient, QueryClientProvider, createQuery } from "@tanstack/solid-query";
import "./index.css";
const queryClient = new QueryClient();
export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>solid Query</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Body>
                <div class="black">
                    <Suspense>
                        <ErrorBoundary>
                            <QueryClientProvider client={queryClient}>
                                <div class="container">
                                    <Routes>
                                        <FileRoutes />
                                    </Routes>
                                </div>
                            </QueryClientProvider>
                        </ErrorBoundary>
                    </Suspense>
                    <Scripts />
                </div>
            </Body>
        </Html>
    );
}
