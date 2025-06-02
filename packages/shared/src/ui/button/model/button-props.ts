import {
    ReactNode,
    ElementType,
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
} from "react";
import {ButtonColor, ButtonSize, ButtonTypes, ButtonVariant} from "./button-types";

export interface ButtonOwnProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    className?: string;
    type?: ButtonTypes;
    color?: ButtonColor;
}

export type PolymorphicRef<C extends ElementType> =
    ComponentPropsWithRef<C>["ref"];

export type PolymorphicProps<C extends ElementType, Props = object> = Props & {
    as?: C;
    ref?: PolymorphicRef<C>;
} & Omit<ComponentPropsWithoutRef<C>, keyof Props | "as" | "ref">;

export type ButtonProps<C extends ElementType = "button"> = PolymorphicProps<
    C,
    ButtonOwnProps
>;

export type ButtonOwnerState = ButtonOwnProps;
