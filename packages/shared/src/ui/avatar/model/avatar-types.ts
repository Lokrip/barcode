import {ReactNode, SyntheticEvent, ElementType, ComponentPropsWithRef, JSX, Ref} from "react";

export type AvatarVariant = "circle" | "square" | "rounded";
export type AvatarSize = "small" | "medium" | "large" | number;

export type PolymorphicRef<C extends ElementType> = Ref<
    C extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[C] extends { ref?: infer R }
            ? R
            : never
        : ComponentPropsWithRef<C>["ref"]
>;

export interface BaseAvatarType {
    src?: string;
    alt?: string;
    fallback?: ReactNode;
    variant?: AvatarVariant;
    size?: AvatarSize;
    onError?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
}
