import { PropsWithChildren, ReactNode } from "react";
import { ClassNameType } from "../../../types/react";
import { InputSize, InputVariant } from "../input-type";
import { InputType } from "./input-type";

export interface InputProps extends PropsWithChildren, ClassNameType {
    variant?: InputVariant;
    size?: InputSize;
    type?: InputType;
    disabled?: boolean;
    onChange?: () => void;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
    loadingText?: string;
}
