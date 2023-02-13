import { render,screen } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import Home from "~/routes";
import "@testing-library/jest-dom"; // 👈 this is imported in order to use the jest-dom matchers 
import AddIssue from "~/routes/AddIssue";


describe("<IssueList />", () => {
    it("home text", async () => {
        const { queryByRole, unmount } = render(() => <AddIssue />);
        const stuff  =  screen.getByRole("button");
        expect(stuff).toBeInTheDocument();
        setTimeout(() => {
            const stuff2 =  screen.getByTestId("title"); 
            expect(stuff2).toBeInTheDocument();
            unmount();
        }, 1000);
    });
});
