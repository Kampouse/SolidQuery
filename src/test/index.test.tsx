import { render,screen,fireEvent } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import Home from "~/routes";
import "@testing-library/jest-dom"; // 👈 this is imported in order to use the jest-dom matchers 
import IssueDetails from "~/components/IssueDetails";



describe("<Home />", () => {
    it("home text", async () => {
        const { queryByRole, unmount } = render(() => <IssueDetails />);
        
        const button  =  screen.getByText("Issue");
        fireEvent.click(button); 
    });
});
