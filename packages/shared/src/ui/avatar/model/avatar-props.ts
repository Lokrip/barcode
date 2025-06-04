import {
    ComponentPropsWithRef,
    ElementType,
    ReactNode,
} from "react";
import { AvatarSize, AvatarVariant } from "./avatar-types";
import { WithRef } from "../../../types/react.ts";

export type BaseAvatarProps<C extends ElementType = "button"> = {
    src?: string;
    alt?: string;
    fallback?: ReactNode;
    variant?: AvatarVariant;
    size?: AvatarSize;
    children?: ReactNode;
    className?: string;
    as?: C
};

export type AvatarProps<C extends ElementType = "button"> =
    BaseAvatarProps &
    WithRef<HTMLElement> &
    ComponentPropsWithRef<C> &
    Omit<ComponentPropsWithRef<C>, keyof BaseAvatarProps<C>>;

export type BaseAvatarGroupProps<C extends ElementType = "button"> = {
    children: ReactNode;
    max?: number;
    spacing?: number;
    className?: string;
    as?: C;
};

export type AvatarGroupProps<C extends ElementType = "button"> =
    BaseAvatarGroupProps<C> &
    WithRef<HTMLElement> &
    ComponentPropsWithRef<C> &
    Omit<ComponentPropsWithRef<C>, keyof BaseAvatarGroupProps<C>>;
