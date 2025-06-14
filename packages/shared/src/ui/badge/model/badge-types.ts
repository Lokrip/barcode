import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

export type BadgeVariant = "standard" | "dot" | "outlined";
export type BadgeSize = "small" | "medium" | "large";
export type BadgeOverlap = "circular" | "rectangular";
export type BadgeColor = "primary" | "secondary" | "error" | "warning" | "info" | "success";

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export interface BaseBadgeType {
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
    component?: ElementType;
}
