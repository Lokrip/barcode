import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CardActions } from "./card-actions";

describe("Card component", () => {
    it("renders correctly with actions and no slot", () => {
        const { getByRole } = render(
            <CardActions actions={<button>Click</button>} />
        );
        const actionDiv = getByRole("button").parentElement;
        expect(actionDiv).toBeInTheDocument();
        expect(actionDiv?.className).toContain("actions");
        expect(actionDiv).not.toHaveAttribute("slot");
    });

    it("renders correctly with actions and slot", () => {
        render(<CardActions actions={<span>Action</span>} slot="actions" />);
        const actionDiv = screen.getByText("Action").parentElement;
        expect(actionDiv).toBeInTheDocument();
        expect(actionDiv).toHaveAttribute("slot", "actions");
    });

    it("does not render when actions is undefined", () => {
        const { container } = render(<CardActions />);
        expect(container.firstChild).toBeNull();
    });

    it("does not render when actions is null", () => {
        const { container } = render(<CardActions actions={null} />);
        expect(container.firstChild).toBeNull();
    });
});
