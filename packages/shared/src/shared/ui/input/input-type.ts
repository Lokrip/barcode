import { PropsWithChildren, ReactNode } from "react";
import { ClassNameType } from "../../types/react";

export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'outlined' | 'filled' | 'standard';
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';

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
    helperText?: string;
    label?: string;
    error?: string;
}