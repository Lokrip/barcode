import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { CardContent } from "./card-content";

// Мокаем useSlot
vi.mock("../../../../utils/use-slot", () => {
    return {
        default: () => {
            return ({ name }: { name: string }) => (
                <div data-testid={`slot-${name}`}>{name}</div>
            );
        },
    };
});

describe("CardContent", () => {
    it("renders default component (div) with slots", () => {
        render(<CardContent>Some content</CardContent>);
        const container = screen.getByTestId("card-content");

        expect(container.tagName).toBe("DIV");
        expect(container).toBeInTheDocument();
        expect(screen.getByTestId("slot-title")).toBeInTheDocument();
        expect(screen.getByTestId("slot-description")).toBeInTheDocument();
    });

    it("renders custom component (section)", () => {
        render(<CardContent component="section" />);
        const container = screen.getByTestId("card-content");

        expect(container.tagName).toBe("SECTION");
    });

    it("applies custom className", () => {
        render(<CardContent className="custom-class" />);
        const container = screen.getByTestId("card-content");

        expect(container).toHaveClass("custom-class");
    });

    it("forwards ref correctly", () => {
        const ref = createRef<HTMLDivElement>();
        render(<CardContent ref={ref} />);

        expect(ref.current).not.toBeNull();
        expect(ref.current?.tagName).toBe("DIV");
    });

    it("spreads additional props", () => {
        render(<CardContent data-test="extra-prop" />);
        const container = screen.getByTestId("card-content");

        expect(container).toHaveAttribute("data-test", "extra-prop");
    });
});
