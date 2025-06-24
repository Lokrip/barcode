import {
    ButtonHTMLAttributes,
    ElementType,
    ReactNode,
} from "react";
import { ButtonColor, ButtonSize, ButtonTypes, ButtonVariant } from "./button-types";
import { WithRef } from "../../../types/react";

export interface ButtonOwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children?: ReactNode;
    size?: ButtonSize;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
    iconOnly?: boolean;
    className?: string;
    type?: ButtonTypes;
    color?: ButtonColor;
    href?: string;
    as?: ElementType;
}

// Omit removes keys from a ref object that exist in ButtonOwnProps
// since ref is not in ButtonOwnProps, it remains unchanged.
export type ButtonProps = ButtonOwnProps & Omit<WithRef<HTMLButtonElement>, keyof ButtonOwnProps>;
