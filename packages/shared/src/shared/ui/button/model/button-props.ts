import {PropsWithChildren, ReactNode} from "react";
import {ClassNameType} from "../../../types/react.ts";
import {ButtonSize, ButtonTypes, ButtonVariant} from "./button-types.ts";

export interface ButtonProps extends PropsWithChildren, ClassNameType {
    variant?: ButtonVariant;
    size?: ButtonSize;
    type?: ButtonTypes;
    disabled?: boolean;
    onClick?: () => void;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
    loadingText?: string;
}
