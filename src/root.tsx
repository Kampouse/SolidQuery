// @refresh reload
import { Routes } from "@solidjs/router";
import  { BaseLayout } from "./routes";
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
import  { UserProvider } from "./components/Providers/Provider"; 
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
                <div class=" m-3 ">
                    <Suspense>
                        <ErrorBoundary>
                        <UserProvider>
                            <QueryClientProvider client={queryClient}>
                                     
                                <BaseLayout >
                                    <Routes>
                                        <FileRoutes />
                                    </Routes>
                                </BaseLayout>
                            </QueryClientProvider>
                            </UserProvider>
                        </ErrorBoundary>
                    </Suspense>
                    <Scripts />
                </div>
            </Body>
        </Html>
    );
}
