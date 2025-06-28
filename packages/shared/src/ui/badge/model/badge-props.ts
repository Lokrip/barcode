import {
    ElementType,
    ReactNode
} from "react";
import { WithRef } from "../../../types/react";
import {
    BadgeColor,
    BadgeOverlap,
    BadgeSize,
    BadgeVariant
} from "./badge-types";

export interface BadgeOwnProps {
    size?: BadgeSize;
    color?: BadgeColor;
    variant?: BadgeVariant;
    badgeContent?: ReactNode;
    showZero?: boolean;
    max?: number;
    overlap?: BadgeOverlap;
    anchorOrigin?: {
        vertical: "top" | "bottom";
        horizontal: "left" | "right";
    };
    className?: string;
    children?: ReactNode;
    as?: ElementType;
}

export type BadgeProps<C extends ElementType = "span"> =
    BadgeOwnProps &
    Omit<WithRef<C>, keyof BadgeOwnProps>;
