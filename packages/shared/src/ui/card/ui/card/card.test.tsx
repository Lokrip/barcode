import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Card } from "./card";

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
        const { getByTestId } = render(<Card width="200px" height="150px" />);
        const cardRoot = getByTestId("card-root");

        expect(cardRoot).toHaveStyle({ width: "200px", height: "150px" });
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
});
