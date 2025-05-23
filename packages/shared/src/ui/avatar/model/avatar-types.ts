import { ReactNode, SyntheticEvent, ElementType, ComponentPropsWithRef } from "react";

export type AvatarVariant = "circle" | "square" | "rounded";
export type AvatarSize = "small" | "medium" | "large" | number;

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export interface BaseAvatarType {
    src?: string;
    alt?: string;
    fallback?: ReactNode;
    variant?: AvatarVariant;
    size?: AvatarSize;
    className?: string;
    onError?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
    children?: ReactNode;
    onClick?: () => void
}
