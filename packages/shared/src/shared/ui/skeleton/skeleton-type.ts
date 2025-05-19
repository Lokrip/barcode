import { ComponentPropsWithRef, ElementType } from "react";
import { ClassNameType } from "../../types/react";

export type SkeletonElements =
    | "div"
    | "span"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "li"
    | "img"
    | "button";

export type SkeletonVariant = "circular" | "rectangular" | "rounded" | "text";
export type SkeletonAnimation = "pulse" | "wave";

export type PolymorphicRef<C extends ElementType> =
    ComponentPropsWithRef<C>["ref"];

export interface BaseSkeletonType {
    width?: number;
    height?: number;
    variant?: SkeletonVariant;
    animation?: SkeletonAnimation;
    component?: SkeletonElements;
}

export interface SkeletonProps extends ClassNameType, BaseSkeletonType {}

export type SkeletonRootGenericProps<C extends ElementType> = ClassNameType & {
    as: C;
    ownerState: BaseSkeletonType;
};
