import {
    InputHTMLAttributes,
    ElementType,
    ReactNode,
} from "react";
import { InputColor, InputSize, InputType, InputVariant } from "./input-types";
import { WithRef } from "../../../types/react";

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">;

export interface InputOwnProps extends NativeInputProps {
    variant?: InputVariant;
    type?: InputType;
    size?: InputSize;
    color?: InputColor;
    fullWidth?: boolean;
    autoHeight?: boolean;
    autoWidth?: boolean;
    rows?: string | number;
    maxRows?: string | number;
    minRows?: string | number;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    error?: string | boolean;
    helperText?: string;
    label?: string;
    loading?: boolean;
    as?: ElementType;
    eyeWatch?: boolean;
}

export type InputProps = InputOwnProps & Omit<WithRef<HTMLInputElement>, keyof InputOwnProps>;
