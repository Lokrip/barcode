import { isValidElement, ReactElement, ReactNode } from "react";
import { WithSlotProp } from "../types/props";

export function hasSlotProp(
    child: ReactNode
): child is ReactElement<WithSlotProp> {
    return (
        isValidElement<WithSlotProp>(child) && child.props.slot !== undefined
    );
}
