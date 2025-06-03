import { ComponentPropsWithRef, ElementType } from "react";
import { Size } from "../../../types/props";

export type SkeletonElements =
    | "div"
    | "span"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "li"
    | "button";

export type SkeletonVariant = "circular" | "rectangular" | "rounded" | "text";
export type SkeletonAnimation = "pulse" | "wave";

export type PolymorphicRef<C extends ElementType> =
    ComponentPropsWithRef<C>["ref"];

export interface BaseSkeletonType extends Size {
    variant?: SkeletonVariant;
    animation?: SkeletonAnimation;
    component?: SkeletonElements;
}
