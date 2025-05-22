import {ComponentPropsWithRef, ElementType, ReactNode} from "react";

export interface DropdownOwnProps {
    label?: ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    value?: string | null;
    onSelect?: (value: string) => void;
    children?: ReactNode;
    className?: string;
}

export type DropdownProps<C extends ElementType> = DropdownOwnProps & {
    as?: C;
} & Omit<ComponentPropsWithRef<C>, keyof DropdownOwnProps | "as">;

export interface DropdownOptionProps {
    value: string;
    children: ReactNode;
    className?: string;
}
