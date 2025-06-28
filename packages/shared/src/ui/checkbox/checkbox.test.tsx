import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { forwardRef } from "react";
import { Checkbox } from "./checkbox";

describe("Checkbox component", () => {
    it("renders unchecked input by default", () => {
        const { getByRole } = render(<Checkbox />);
        const checkbox = getByRole("checkbox");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
        expect(checkbox).toHaveAttribute("aria-checked", "false");
    });

    it("renders checked state", () => {
        const { getByRole } = render(<Checkbox checked />);
        const checkbox = getByRole("checkbox");
        expect(checkbox).toBeChecked();
        expect(checkbox).toHaveAttribute("aria-checked", "true");
    });

    it("renders indeterminate state with aria-checked='mixed'", () => {
        const { getByRole } = render(<Checkbox indeterminate />);
        const checkbox = getByRole("checkbox");
        expect(checkbox).toHaveAttribute("aria-checked", "mixed");
    });

    it("applies disabled state", () => {
        const { getByRole } = render(<Checkbox disabled />);
        const checkbox = getByRole("checkbox");
        expect(checkbox).toBeDisabled();
    });

    it("renders label text if provided", () => {
        const labelText = "Accept terms";
        const { getByText } = render(<Checkbox label={labelText} />);
        expect(getByText(labelText)).toBeInTheDocument();
    });

    it("renders correct icon based on state", () => {
        const icon = <span data-testid="icon">icon</span>;
        const checkedIcon = <span data-testid="checkedIcon">checked</span>;
        const indeterminateIcon = <span data-testid="indeterminateIcon">indeterminate</span>;

        const { getByTestId, rerender } = render(
            <Checkbox icon={icon} checkedIcon={checkedIcon} indeterminateIcon={indeterminateIcon} />
        );
        expect(getByTestId("icon")).toBeInTheDocument();

        rerender(<Checkbox icon={icon} checkedIcon={checkedIcon} indeterminateIcon={indeterminateIcon} checked />);
        expect(getByTestId("checkedIcon")).toBeInTheDocument();

        rerender(<Checkbox icon={icon} checkedIcon={checkedIcon} indeterminateIcon={indeterminateIcon} indeterminate />);
        expect(getByTestId("indeterminateIcon")).toBeInTheDocument();
    });

    it("calls onClick on mouse click when enabled", () => {
        const onClick = vi.fn();
        const { getByRole } = render(<Checkbox onClick={onClick} />);
        const checkbox = getByRole("checkbox");
        fireEvent.click(checkbox);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does NOT call onClick on mouse click when disabled", () => {
        const onClick = vi.fn();
        const { getByRole } = render(<Checkbox onClick={onClick} disabled />);
        const checkbox = getByRole("checkbox");
        fireEvent.click(checkbox);
        expect(onClick).not.toHaveBeenCalled();
    });

    it("calls onClick on Space key press", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        const { getByRole } = render(<Checkbox onClick={onClick} />);
        const checkbox = getByRole("checkbox");
        checkbox.focus();
        await user.keyboard("[Space]");
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("does NOT call onClick on Enter key press on native input", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        const { getByRole } = render(<Checkbox onClick={onClick} />);
        const checkbox = getByRole("checkbox");
        checkbox.focus();
        await user.keyboard("[Enter]");
        expect(onClick).not.toHaveBeenCalled();
    });

    it("calls onClick on Space and Enter key press for custom element", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        const CustomComp = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
            (props, ref) => <div ref={ref} {...props} />
        );

        const { getByRole } = render(<Checkbox as={CustomComp} onClick={onClick} />);
        const checkbox = getByRole("checkbox");

        checkbox.focus();

        await user.keyboard("[Space]");
        expect(onClick).toHaveBeenCalledTimes(1);

        await user.keyboard("[Enter]");
        expect(onClick).toHaveBeenCalledTimes(2);
    });

    it("forwards ref correctly", () => {
        const ref = { current: null };
        render(<Checkbox ref={ref} />);
        expect(ref.current).not.toBeNull();
    });

    it("applies custom className to label", () => {
        const { container } = render(<Checkbox className="custom-class" />);
        expect(container.firstChild).toHaveClass("custom-class");
    });

    it("passes extra props to input element", () => {
        const onFocus = vi.fn();
        const { getByRole } = render(<Checkbox data-testid="checkbox" onFocus={onFocus} />);
        const checkbox = getByRole("checkbox");
        expect(checkbox).toHaveAttribute("data-testid", "checkbox");
        fireEvent.focus(checkbox);
        expect(onFocus).toHaveBeenCalled();
    });

    it("sets tabindex -1 on disabled custom elements", () => {
        const CustomComp = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => <div ref={ref} {...props} />);
        const { getByRole } = render(<Checkbox as={CustomComp} disabled />);
        const checkbox = getByRole("checkbox");
        expect(checkbox).toHaveAttribute("tabindex", "-1");
    });
});
