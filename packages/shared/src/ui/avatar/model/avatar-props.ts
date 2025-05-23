import {ComponentPropsWithRef, CSSProperties, ElementType, ReactNode} from "react";
import { BaseAvatarType } from "./avatar-types";

export type AvatarRootGenericProps<C extends ElementType> = {
    as?: C;
    ownerState: BaseAvatarType;
    className?: string;
    style?: CSSProperties;
};

export type AvatarProps<C extends ElementType = "div"> = BaseAvatarType & {
    component?: C;
} & Omit<ComponentPropsWithRef<C>, keyof BaseAvatarType | "ref" | "className">;

export type AvatarGroupOwnProps<C extends ElementType> = {
    children: ReactNode;
    max?: number;
    spacing?: number;
    className?: string;
    component?: C;
};

export type AvatarGroupProps<C extends ElementType = "div"> =
    AvatarGroupOwnProps<C> &
    Omit<ComponentPropsWithRef<C>, keyof AvatarGroupOwnProps<C>>;
