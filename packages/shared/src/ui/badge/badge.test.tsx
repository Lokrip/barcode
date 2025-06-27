import { render, screen } from "@testing-library/react";
import React from "react";
import { Badge } from "./badge";
import styles from "./styles/badge.module.scss";
import { describe, it, expect } from "vitest";

describe("Badge component", () => {
    it("renders children", () => {
        render(<Badge>Text</Badge>);
        expect(screen.getByText("Text")).toBeInTheDocument();
    });

    it("renders badge content if number > 0", () => {
        render(<Badge badgeContent={5}>Item</Badge>);
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("does not render badge content if 0 and showZero is false", () => {
        render(<Badge badgeContent={0}>Item</Badge>);
        expect(screen.queryByText("0")).not.toBeInTheDocument();
    });

    it("renders 0 if showZero is true", () => {
        render(<Badge badgeContent={0} showZero>Item</Badge>);
        expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("renders badge content as max-1+ if it exceeds max", () => {
        render(<Badge badgeContent={150} max={100}>Item</Badge>);
        expect(screen.getByText("99+")).toBeInTheDocument();
    });

    it("renders badge content as string", () => {
        render(<Badge badgeContent="New">Item</Badge>);
        expect(screen.getByText("New")).toBeInTheDocument();
    });

    it("does not render badgeContent if null", () => {
        render(<Badge badgeContent={null}>Item</Badge>);
        expect(screen.queryByText("null")).not.toBeInTheDocument();
    });

    it("forwards ref to root element", () => {
        const ref = React.createRef<HTMLSpanElement>();
        render(<Badge ref={ref}>Item</Badge>);
        expect(ref.current).not.toBeNull();
        expect(ref.current?.tagName).toBe("SPAN");
    });

    it("renders with custom tag if 'as' is provided", () => {
        render(<Badge as="div">Item</Badge>);
        const element = screen.getByText("Item");
        expect(element.tagName).toBe("DIV");
    });

    it("applies className", () => {
        render(<Badge className="custom-class">Item</Badge>);
        const element = screen.getByText("Item");
        expect(element).toHaveClass("custom-class");
    });

    it("applies variant, size, color, overlap styles", () => {
        render(
            <Badge
                variant="dot"
                size="large"
                color="error"
                overlap="rectangular"
            >
                Item
            </Badge>
        );
        const element = screen.getByText("Item");
        expect(element).toHaveClass(styles.dot);
        expect(element).toHaveClass(styles.large);
        expect(element).toHaveClass(styles.error);
        expect(element).toHaveClass(styles.rectangular);
    });

    it("applies anchorOrigin class: top-left", () => {
        render(
            <Badge anchorOrigin={{ vertical: "top", horizontal: "left" }}>
                Item
            </Badge>
        );
        const element = screen.getByText("Item");
        expect(element.className).toMatch(/anchorOriginTopLeft/);
    });

    it("applies anchorOrigin class: bottom-right", () => {
        render(
            <Badge anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                Item
            </Badge>
        );
        const element = screen.getByText("Item");
        expect(element.className).toMatch(/anchorOriginBottomRight/);
    });

    it("applies anchorOrigin class: bottom-left", () => {
        render(
            <Badge anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                Item
            </Badge>
        );
        const element = screen.getByText("Item");
        expect(element.className).toMatch(/anchorOriginBottomLeft/);
    });

    it("applies default anchorOrigin class: top-right", () => {
        render(<Badge>Item</Badge>);
        const element = screen.getByText("Item");
        expect(element.className).toMatch(/anchorOriginTopRight/);
    });
});


