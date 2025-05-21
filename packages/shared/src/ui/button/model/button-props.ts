import { ReactNode, ElementType } from "react";
import { ButtonVariant, ButtonSize, ButtonTypes } from "./button-types";

export interface ButtonOwnProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
    loadingText?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<any>;
    children?: ReactNode;
    className?: string;
    type?: ButtonTypes;
    "data-testid"?: string;
}

export type PolymorphicRef<C extends ElementType> = React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicProps<C extends ElementType, Props = {}> = Props & {
    as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, keyof Props | "as">;

export type ButtonProps<C extends ElementType = "button"> = PolymorphicProps<C, ButtonOwnProps>;

export type ButtonOwnerState = ButtonOwnProps;
