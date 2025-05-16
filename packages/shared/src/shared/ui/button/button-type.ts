import { PropsWithChildren, ReactNode } from "react";
import { ClassNameType } from "../../types/react";

export interface ButtonProps extends PropsWithChildren, ClassNameType {
    variant?: "text" | "contained" | "outlined";
    size?: "small" | "medium" | "large";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
    loadingText?: string;
}
