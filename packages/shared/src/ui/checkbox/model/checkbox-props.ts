import {ComponentPropsWithRef, ElementType, ReactNode} from "react";

export interface CheckboxOwnProps {
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: ReactNode;
    checkedIcon?: ReactNode;
    indeterminateIcon?: ReactNode;
    label?: ReactNode;
    className?: string;
    "aria-label"?: string;
}

export type PolymorphicProps<C extends ElementType, Props = {}> = Props & {
    as?: C;
} & Omit<ComponentPropsWithRef<C>, keyof Props | "as">;

export type CheckboxProps<C extends ElementType = "input"> = PolymorphicProps<C, CheckboxOwnProps>;
