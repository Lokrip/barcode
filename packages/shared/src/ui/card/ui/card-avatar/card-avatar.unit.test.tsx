import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CardAvatar } from "./card-avatar";

describe("Card component", () => {
    it("renders correctly with avatar and no slot", () => {
        render(<CardAvatar avatar={<img alt="avatar" src="avatar.png" />} />);
        const img = screen.getByAltText("avatar");
        const wrapper = img.parentElement;
        expect(wrapper).toBeInTheDocument();
        expect(wrapper?.className).toContain("avatar");
        expect(wrapper).not.toHaveAttribute("slot");
    });

    it("renders correctly with avatar and slot", () => {
        render(
            <CardAvatar avatar={<span>Avatar content</span>} slot="avatar" />
        );
        const span = screen.getByText("Avatar content");
        const wrapper = span.parentElement;
        expect(wrapper).toBeInTheDocument();
        expect(wrapper).toHaveAttribute("slot", "avatar");
        expect(wrapper?.className).toContain("avatar");
    });

    it("does not render when avatar is undefined", () => {
        const { container } = render(<CardAvatar />);
        expect(container.firstChild).toBeNull();
    });

    it("does not render when avatar is null", () => {
        const { container } = render(<CardAvatar avatar={null} />);
        expect(container.firstChild).toBeNull();
    });
});
