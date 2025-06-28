import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";
import { useEffect, useRef } from "react";

describe("Card component", () => {
    it("renders the card with default styles", () => {
        const { getByTestId } = render(<Card />);
        const cardRoot = getByTestId("card-root");
        expect(cardRoot).toBeInTheDocument();
    });

    it("applies custom className", () => {
        const { getByTestId } = render(<Card className="custom-class" />);
        const cardRoot = getByTestId("card-root");

        expect(cardRoot.className).toContain("custom-class");
    });

    it("applies width and height styles", () => {
        const { getByTestId } = render(<Card width={300} height={300} />);
        const cardRoot = getByTestId("card-root");

        expect(cardRoot).toHaveStyle({ width: "300px", height: "300px" });
    });

    it("applies fixedSize class when enabled", () => {
        const { getByTestId } = render(<Card fixedSize />);
        const cardRoot = getByTestId("card-root");

        expect(cardRoot.className).toContain("fixedSize");
    });

    it("renders children correctly", () => {
        const { getByTestId } = render(
            <Card>
                <span data-testid="child">Hello</span>
            </Card>
        );

        expect(getByTestId("child")).toBeInTheDocument();
        expect(getByTestId("child")).toHaveTextContent("Hello");
    });

    it("forwards ref correctly to the DOM element", () => {
        const TestComponent = () => {
            const ref = useRef<HTMLDivElement>(null);

            useEffect(() => {
                if (ref.current) {
                    expect(ref.current.dataset.testid).toBe("card-root");
                }
            });

            return <Card ref={ref}>With Ref</Card>;
        };

        render(<TestComponent />);
    });

    it("applies correct variant class (e.g., 'outlined')", () => {
        const { getByTestId } = render(<Card variant="outlined" />);
        const cardRoot = getByTestId("card-root");
        expect(cardRoot.className).toContain("outlined");
    });

    it("applies correct variant class (e.g., 'elevated')", () => {
        const { getByTestId } = render(<Card variant="elevated" />);
        const cardRoot = getByTestId("card-root");
        expect(cardRoot.className).toContain("elevated");
    });

    it("applies correct variant class (e.g., 'flat')", () => {
        const { getByTestId } = render(<Card variant="flat" />);
        const cardRoot = getByTestId("card-root");
        expect(cardRoot.className).toContain("flat");
    });

    it("applies correct variant class (e.g., 'glass')", () => {
        const { getByTestId } = render(<Card variant="glass" />);
        const cardRoot = getByTestId("card-root");
        expect(cardRoot.className).toContain("glass");
    });

    it("applies default variant class when not provided", () => {
        const { getByTestId } = render(<Card />);
        const cardRoot = getByTestId("card-root");
        expect(cardRoot.className).toContain("outlined");
    });

    it("applies all combined styles and classNames correctly", () => {
        render(
            <Card
                width={100}
                height={200}
                fixedSize
                variant="outlined"
                className="custom-class"
            >
                <span data-testid="child">Combo</span>
            </Card>
        );

        const cardRoot = screen.getByTestId("card-root");

        expect(cardRoot).toHaveStyle({ width: "100px", height: "200px" });
        expect(cardRoot.className).toContain("fixedSize");
        expect(cardRoot.className).toContain("outlined");
        expect(cardRoot.className).toContain("custom-class");

        const child = screen.getByTestId("child");
        expect(child).toHaveTextContent("Combo");
    });
});
