import { ComponentPropsWithRef, ElementType } from "react";

export type CheckboxElements = "input" | "span" | "div" | "label";
export type CheckboxStatus = "checked" | "indeterminate" | "unchecked";

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

