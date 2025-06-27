import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import React, { forwardRef } from "react";
import { Avatar } from "./avatar";

describe("Avatar component", () => {
    it("renders image when src is provided", () => {
        const { getByRole } = render(<Avatar src="avatar.jpg" alt="User" />);
        const img = getByRole("img");

        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "avatar.jpg");
        expect(img).toHaveAttribute("alt", "User");
    });

    it("renders string fallback via getFallbackContent", () => {
        const { getByText } = render(<Avatar fallback="John Doe" />);
        expect(getByText("JD")).toBeInTheDocument();
    });

    it("renders fallback if it's a React node", () => {
        const fallback = <span data-testid="fallback-node">X</span>;
        const { getByTestId } = render(<Avatar fallback={fallback} />);
        expect(getByTestId("fallback-node")).toBeInTheDocument();
    });

    it("renders nothing if no src and fallback provided", () => {
        const { container } = render(<Avatar />);
        expect(container.querySelector("img")).toBeNull();
    });

    it("applies variant and size classes", () => {
        const { container } = render(<Avatar variant="square" size="large" />);
        const el = container.firstChild as HTMLElement;

        expect(el.className).toMatch(/square/);
        expect(el.className).toMatch(/large/);
    });

    it("renders as anchor when `as='a'` with href", () => {
        const { container } = render(<Avatar as="a" href="/profile" />);
        const el = container.firstChild as HTMLElement;

        expect(el.tagName.toLowerCase()).toBe("a");
        expect(el).toHaveAttribute("href", "/profile");
    });

    it("renders as custom component via `as`", () => {
        const Custom = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
            <div ref={ref} data-testid="custom-avatar" {...props} />
        ));

        const { getByTestId } = render(<Avatar as={Custom} />);
        expect(getByTestId("custom-avatar")).toBeInTheDocument();
    });

    it("calls onClick when clicked", () => {
        const handleClick = vi.fn();
        const { container } = render(<Avatar onClick={handleClick} />);
        fireEvent.click(container.firstChild as HTMLElement);
        expect(handleClick).toHaveBeenCalled();
    });

    it("forwards ref to root element", () => {
        const ref = { current: null as null | HTMLElement };
        render(<Avatar ref={ref} />);
        expect(ref.current).not.toBeNull();
    });

    it("renders children", () => {
        const { getByText } = render(<Avatar>Text</Avatar>);
        expect(getByText("Text")).toBeInTheDocument();
    });

    it("passes extra HTML attributes", () => {
        const { container } = render(<Avatar title="avatar" data-test="avatar" />);
        const el = container.firstChild as HTMLElement;
        expect(el).toHaveAttribute("title", "avatar");
        expect(el).toHaveAttribute("data-test", "avatar");
    });
});
