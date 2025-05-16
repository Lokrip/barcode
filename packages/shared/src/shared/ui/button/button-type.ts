import { PropsWithChildren, ReactNode } from "react";
import { ClassNameType } from "../../types/react";

export type ButtonVariant = "text" | "contained" | "outlined";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset"

export interface ButtonProps extends PropsWithChildren, ClassNameType {
    variant?: ButtonVariant;
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
    onClick?: () => void;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
    loadingText?: string;
}
