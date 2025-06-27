import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { forwardRef } from "react";
import { Button } from "./button";

describe("Button component", () => {
    it("renders with default props as <button>", () => {
        const { getByTestId } = render(<Button>Click me</Button>);
        const btn = getByTestId("button-root");

        expect(btn).toBeInTheDocument();
        expect(btn.tagName.toLowerCase()).toBe("button");
        expect(btn.className).toMatch(/contained/);
        expect(btn.className).toMatch(/medium/);
        expect(btn.className).toMatch(/primary/);

        expect(btn).not.toBeDisabled();
        expect(btn).toHaveAttribute("type", "button");
    });

    it("renders as anchor tag when `as='a'` and sets href", () => {
        const { getByTestId } = render(<Button as="a" href="/test">Link</Button>);
        const link = getByTestId("button-root");

        expect(link.tagName.toLowerCase()).toBe("a");
        expect(link).toHaveAttribute("href", "/test");
        expect(link).not.toHaveAttribute("disabled");
        expect(link).toHaveAttribute("role", "button");
        expect(link).toHaveAttribute("tabindex", "0");
    });

    it("applies variant, size, color, fullWidth, loading, disabled, iconOnly classes", () => {
        const { getByTestId } = render(
            <Button
                variant="outlined"
                size="large"
                color="error"
                fullWidth
                loading
                disabled
                iconOnly
            >
                X
            </Button>
        );
        const btn = getByTestId("button-root");

        expect(btn.className).toMatch(/outlined/);
        expect(btn.className).toMatch(/large/);
        expect(btn.className).toMatch(/error/);
        expect(btn.className).toMatch(/fullWidth/);
        expect(btn.className).toMatch(/loading/);
        expect(btn.className).toMatch(/disabled/);
        expect(btn.className).toMatch(/iconOnly/);

        if (btn.tagName.toLowerCase() === "button") {
            expect(btn).toBeDisabled();
        } else {
            expect(btn).not.toHaveAttribute("disabled");
        }
    });

    it("sets type prop when rendered as button", () => {
        const { getByTestId, rerender } = render(<Button>Default</Button>);
        let btn = getByTestId("button-root");
        expect(btn).toHaveAttribute("type", "button");

        rerender(<Button type="submit">Submit</Button>);
        btn = getByTestId("button-root");
        expect(btn).toHaveAttribute("type", "submit");

        rerender(<Button type="reset">Reset</Button>);
        btn = getByTestId("button-root");
        expect(btn).toHaveAttribute("type", "reset");
    });

    it("does not set type when rendered as non-button", () => {
        const { getByTestId } = render(<Button as="a">Link</Button>);
        const el = getByTestId("button-root");
        expect(el).not.toHaveAttribute("type");
    });

    it("renders startIcon and endIcon only when not loading", () => {
        const startIcon = <span data-testid="start-icon">S</span>;
        const endIcon = <span data-testid="end-icon">E</span>;

        const { getByTestId, queryByTestId, rerender } = render(
            <Button startIcon={startIcon} endIcon={endIcon}>
                Text
            </Button>
        );
        expect(getByTestId("start-icon")).toBeInTheDocument();
        expect(getByTestId("end-icon")).toBeInTheDocument();

        rerender(
            <Button startIcon={startIcon} endIcon={endIcon} loading>
                Text
            </Button>
        );
        expect(queryByTestId("start-icon")).toBeNull();
        expect(queryByTestId("end-icon")).toBeNull();
    });

    it("renders children only when iconOnly=false", () => {
        const { getByTestId } = render(<Button>Content</Button>);
        expect(getByTestId("button-root").textContent).toContain("Content");
    });

    it("renders children directly when iconOnly=true and sets aria-label", () => {
        const { getByTestId } = render(<Button iconOnly>+</Button>);
        const btn = getByTestId("button-root");

        expect(btn.textContent).toBe("+");
        expect(btn).toHaveAttribute("aria-label", "+");
    });

    it("calls onClick handler when clicked and not disabled or loading", () => {
        const onClick = vi.fn();
        const { getByTestId } = render(<Button onClick={onClick}>Click</Button>);

        fireEvent.click(getByTestId("button-root"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does NOT call onClick handler when disabled", () => {
        const onClick = vi.fn();
        const { getByTestId } = render(
            <Button onClick={onClick} disabled>
                Disabled
            </Button>
        );

        fireEvent.click(getByTestId("button-root"));
        expect(onClick).not.toHaveBeenCalled();
    });

    it("does NOT call onClick handler when loading", () => {
        const onClick = vi.fn();
        const { getByTestId } = render(
            <Button onClick={onClick} loading>
                Loading
            </Button>
        );

        fireEvent.click(getByTestId("button-root"));
        expect(onClick).not.toHaveBeenCalled();
    });

    it("sets aria-busy when loading", () => {
        const { getByTestId, rerender } = render(<Button loading>Load</Button>);
        const btn = getByTestId("button-root");

        expect(btn).toHaveAttribute("aria-busy", "true");

        rerender(<Button>Load</Button>);
        expect(btn).not.toHaveAttribute("aria-busy");
    });

    it("sets disabled attribute only on native buttons", () => {
        const { getByTestId, rerender } = render(<Button disabled>Btn</Button>);
        let btn = getByTestId("button-root");
        expect(btn).toBeDisabled();

        rerender(<Button as="a" disabled>Link</Button>);
        btn = getByTestId("button-root");
        expect(btn).not.toHaveAttribute("disabled");
    });

    it("sets role and tabIndex correctly on non-button elements", () => {
        const { getByTestId, rerender } = render(<Button as="a">Link</Button>);
        const el = getByTestId("button-root");
        expect(el).toHaveAttribute("role", "button");
        expect(el).toHaveAttribute("tabindex", "0");

        rerender(<Button as="a" disabled>Disabled Link</Button>);
        expect(getByTestId("button-root")).toHaveAttribute("tabindex", "-1");
    });

    it("supports forwarding ref", () => {
        const ref = { current: null };
        render(<Button ref={ref}>Ref</Button>);
        expect(ref.current).not.toBeNull();
    });

    it("passes extra props to root element", () => {
        const onFocus = vi.fn();
        const { getByTestId } = render(
            <Button data-custom="test" onFocus={onFocus}>
                Extra props
            </Button>
        );
        const btn = getByTestId("button-root");

        expect(btn).toHaveAttribute("data-custom", "test");

        fireEvent.focus(btn);
        expect(onFocus).toHaveBeenCalled();
    });

    it("handles keyboard events (Enter, Space) and triggers onClick when enabled", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        const { getByTestId } = render(<Button onClick={onClick}>Press me</Button>);
        const btn = getByTestId("button-root");

        btn.focus();

        await user.keyboard("[Enter]");
        expect(onClick).toHaveBeenCalledTimes(1);

        await user.keyboard("[Space]");
        expect(onClick).toHaveBeenCalledTimes(2);
    });

    it("does NOT trigger onClick on keyboard events when disabled or loading", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();

        const { getByTestId, rerender } = render(<Button onClick={onClick} disabled>Disabled</Button>);
        const btn = getByTestId("button-root");

        btn.focus();
        await user.keyboard("[Enter]");
        await user.keyboard("[Space]");
        expect(onClick).not.toHaveBeenCalled();

        rerender(<Button onClick={onClick} loading>Loading</Button>);
        btn.focus();
        await user.keyboard("[Enter]");
        await user.keyboard("[Space]");
        expect(onClick).not.toHaveBeenCalled();
    });

    it("renders without children without errors", () => {
        const { getByTestId } = render(<Button />);
        const btn = getByTestId("button-root");
        expect(btn).toBeInTheDocument();
    });

    it("sets aria-label correctly when iconOnly and children is not string", () => {
        const icon = <svg data-testid="svg-icon" />;
        const { getByTestId } = render(<Button iconOnly>{icon}</Button>);
        const btn = getByTestId("button-root");

        expect(btn).not.toHaveAttribute("aria-label");
        expect(getByTestId("svg-icon")).toBeInTheDocument();
    });

    it("passes custom HTML attributes (id, name, title) correctly", () => {
        const { getByTestId } = render(
            <Button id="my-btn" name="myName" title="myTitle">
                Test
            </Button>
        );
        const btn = getByTestId("button-root");

        expect(btn).toHaveAttribute("id", "my-btn");
        expect(btn).toHaveAttribute("name", "myName");
        expect(btn).toHaveAttribute("title", "myTitle");
    });

    it("renders correctly with custom React component in `as` prop", () => {
        const CustomComp = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
            <div ref={ref} data-testid="button-root" {...props} />
        ));
        const { getByTestId } = render(<Button as={CustomComp}>Custom</Button>);

        const el = getByTestId("button-root");
        expect(el.tagName.toLowerCase()).toBe("div");
        expect(getByTestId("button-root")).toBeInTheDocument();
    });
});
