import {
    ComponentPropsWithRef,
    ElementType,
    MouseEventHandler,
    ReactNode,
} from "react";
import {AvatarSize, AvatarVariant} from "./avatar-types";
import {WithRef} from "../../../types/react";

export interface BaseAvatarProps {
    src?: string;
    alt?: string;
    fallback?: ReactNode;
    variant?: AvatarVariant;
    size?: AvatarSize;
    children?: ReactNode;
    className?: string;
    as?: ElementType;
    onClick?: MouseEventHandler;
}

export type AvatarProps<C extends ElementType = "button"> =
    BaseAvatarProps &
    Omit<ComponentPropsWithRef<C>, keyof BaseAvatarProps> &
    WithRef<C>;


export interface BaseAvatarGroupProps {
    children: ReactNode,
    max?: number,
    spacing?: number,
    className?: string,
    as?: ElementType,
}

export type AvatarGroupProps<C extends ElementType = "div"> =
    BaseAvatarGroupProps &
    Omit<ComponentPropsWithRef<C>, keyof BaseAvatarGroupProps>;
