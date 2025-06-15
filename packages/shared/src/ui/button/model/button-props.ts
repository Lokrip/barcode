import {
    ReactNode,
    ElementType,
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    Ref
} from "react";
import { ButtonColor, ButtonSize, ButtonTypes, ButtonVariant } from "./button-types";
import { WithRef } from "../../../types/react";

export interface ButtonOwnProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
    iconOnly?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    className?: string;
    type?: ButtonTypes;
    color?: ButtonColor;
    as?: string;
    ref?: Ref<HTMLElement>;
}

export type ButtonProps<C extends ElementType = "button"> =
    ButtonOwnProps &
    WithRef<HTMLElement> &
    ComponentPropsWithRef<C> &
    Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | "as">;
