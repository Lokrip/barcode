import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardFooter } from "./card-footer";
import { createRef } from "react";

vi.mock("../card-avatar", () => ({
    CardAvatar: ({ avatar }: any) => <div data-testid="avatar">{avatar}</div>,
}));

vi.mock("../card-actions", () => ({
    CardActions: ({ actions }: any) => (
        <div data-testid="actions">{actions}</div>
    ),
}));

describe("CardFooter", () => {
    it("should render without crashing", () => {
        render(<CardFooter />);
        const element = screen.getByTestId("card-footer-root");
        expect(element).toBeInTheDocument();
    });

    it("should render correctly with avatar and actions props", () => {
        render(
            <CardFooter
                avatar={<span>Avatar Content</span>}
                actions={<span>Actions Content</span>}
            />
        );
        expect(screen.getByTestId("avatar")).toHaveTextContent(
            "Avatar Content"
        );
        expect(screen.getByTestId("actions")).toHaveTextContent(
            "Actions Content"
        );
    });

    it("should not throw error when avatar and actions are undefined or null", () => {
        expect(() =>
            render(<CardFooter avatar={null} actions={undefined} />)
        ).not.toThrow();
    });

    it("should apply external className", () => {
        render(<CardFooter className="custom-class" />);
        const element = screen.getByTestId("card-footer-root");
        expect(element).toHaveClass("custom-class");
    });

    it("should combine external className with base styles", () => {
        render(<CardFooter className="custom-class" />);
        const element = screen.getByTestId("card-footer-root");
        expect(element.className).toMatch(/flex-between/);
    });

    it("should apply default styles when className is not provided", () => {
        render(<CardFooter />);
        const element = screen.getByTestId("card-footer-root");
        expect(element.className).toMatch(/flex-between/);
    });

    it("should construct and pass ownerState with all props", () => {
        render(
            <CardFooter
                avatar={<span data-testid="avatar-prop">avatar</span>}
                actions={<span data-testid="actions-prop">actions</span>}
            />
        );
        expect(screen.getByTestId("avatar-prop")).toBeInTheDocument();
        expect(screen.getByTestId("actions-prop")).toBeInTheDocument();
    });

    it("should forward ref to the root div element", () => {
        const ref = createRef<HTMLDivElement>();
        render(<CardFooter ref={ref} />);
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("should work correctly when ref is not provided", () => {
        expect(() => render(<CardFooter />)).not.toThrow();
    });

    it("should render correctly with no props", () => {
        render(<CardFooter />);
        const element = screen.getByTestId("card-footer-root");
        expect(element).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        const { asFragment } = render(
            <CardFooter
                avatar={<span>Avatar</span>}
                actions={<span>Actions</span>}
                className="test-class"
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
