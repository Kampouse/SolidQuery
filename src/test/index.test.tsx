import { render,screen,fireEvent, queryByTestId, queryAllByText } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import Home from "~/routes";
import "@testing-library/jest-dom"; // 👈 this is imported in order to use the jest-dom matchers 
import IssueDetails from "~/components/IssueDetails";
import { useRoute } from "@solidjs/router/dist/routing";
import FileRoutes from "solid-start/root/FileRoutes";
import { useRoutes,A } from "solid-start";
import { QueryClient,QueryClientProvider } from "@tanstack/solid-query";
import {Router } from "@solidjs/router";
const TestComponent = () => {
    const Routes = useRoutes(FileRoutes());
    const queryClient = new QueryClient();
    return (<QueryClientProvider client={queryClient}>
        <Router>  <div> <Routes />  <A href="/">
            <div  data-testid="goto-Index" > <span>  back to menu </span></div>
        </A> </div></Router>  </QueryClientProvider>);
};

describe("<Home />", () => {
     
    it("navigate to  add Issue", async () => {
        const { queryByRole, unmount } = render(() => <TestComponent />);
        const button  =  screen.getByTestId("goto-Index");
        fireEvent.click(button); 
        const stuff =  screen.getByTestId("goto-AddIssue");
        expect(stuff).toBeInTheDocument();
        
         
    });
});
