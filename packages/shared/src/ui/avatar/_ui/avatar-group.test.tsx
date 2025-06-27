import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React, { forwardRef } from "react";
import { AvatarGroup } from "./avatar-group";
import { Avatar } from "../avatar";
import styles from "../styles/avatar.module.scss";

describe("AvatarGroup component", () => {
    const users = ["AB", "CD", "EF", "GH"].map((name, i) => (
        <Avatar key={i} fallback={name} />
    ));

    it("renders all avatars when total <= max or max not set", () => {
        const { getAllByText } = render(<AvatarGroup>{users}</AvatarGroup>);
        expect(getAllByText(/[A-Z]{2}/).length).toBe(4);
    });

    it("renders only max avatars and +N fallback when total > max", () => {
        const { getByText, queryByText } = render(
            <AvatarGroup max={2}>{users}</AvatarGroup>
        );

        expect(getByText("AB")).toBeInTheDocument();
        expect(getByText("CD")).toBeInTheDocument();
        expect(getByText("+2")).toBeInTheDocument();

        expect(queryByText("EF")).toBeNull();
        expect(queryByText("GH")).toBeNull();
    });

    it("does not set style when spacing is a string", () => {
        // @ts-expect-error — намеренно передаем неправильный тип для теста
        const { container } = render(<AvatarGroup spacing="10px">{users}</AvatarGroup>);
        const root = container.firstChild as HTMLElement;
        expect(root.style.getPropertyValue("--spacing")).toBe("");
    });

    it("applies negative spacing as CSS variable", () => {
        const { container } = render(<AvatarGroup spacing={-16}>{users}</AvatarGroup>);
        const root = container.firstChild as HTMLElement;
        expect(root.style.getPropertyValue("--spacing")).toBe("-16px");
    });

    it("renders as specified element via `as`", () => {
        const { container } = render(<AvatarGroup as="section">{users}</AvatarGroup>);
        expect(container.firstChild?.nodeName.toLowerCase()).toBe("section");
    });

    it("renders as custom component via `as`", () => {
        const Custom = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
            <div data-testid="custom-group" ref={ref} {...props} />
        ));
        const { getByTestId } = render(<AvatarGroup as={Custom}>{users}</AvatarGroup>);
        expect(getByTestId("custom-group")).toBeInTheDocument();
    });

    it("passes custom className and other props", () => {
        const { container } = render(
            <AvatarGroup className="test-group" title="Group title">{users}</AvatarGroup>
        );
        const el = container.firstChild as HTMLElement;

        expect(el).toHaveClass("test-group");
        expect(el).toHaveAttribute("title", "Group title");
    });

    it("forwards ref to root element", () => {
        const ref = { current: null as null | HTMLDivElement };
        render(<AvatarGroup ref={ref}>{users}</AvatarGroup>);
        expect(ref.current).not.toBeNull();
    });

    it("wraps each avatar with correct z-index", () => {
        const { container } = render(<AvatarGroup>{users}</AvatarGroup>);
        const wrappers = container.querySelectorAll(`.${styles.avatarWrapper}`);

        wrappers.forEach((el) => {
            const z = parseInt((el as HTMLElement).style.zIndex || "0", 10);
            expect(z).toBeGreaterThanOrEqual(0);
        });
    });
});
