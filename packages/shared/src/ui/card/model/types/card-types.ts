import type { ReactNode } from "react";

export type CardVariant =
    | "elevated" // с тенью и приподнятым эффектом
    | "outlined" // с границей, без тени
    | "flat" // без тени и границы, минималистичный
    | "glass"; // эффект стекла (blur + прозрачность)

export interface BaseCardType {
    width?: number;
    height?: number;
    fixedSize?: boolean;
    variant?: CardVariant;
}

export interface CardHeaderActions {
    actions?: ReactNode;
}

export interface CardHeaderAvatar {
    avatar?: ReactNode;
}

export interface CardSlots extends CardHeaderActions, CardHeaderAvatar {}
