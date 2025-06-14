import {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    ElementType,
    ReactNode
} from "react";
import { WithRef } from "../../../types/react";

export interface CheckboxOwnProps {
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    checkedIcon?: ReactNode;
    indeterminateIcon?: ReactNode;
    label?: ReactNode;
    className?: string;
    "aria-label"?: string;
}

export type CheckboxProps<C extends ElementType = "input"> =
    CheckboxOwnProps &
    WithRef<HTMLElement> &
    ComponentPropsWithRef<C> &
    Omit<ComponentPropsWithoutRef<C>, keyof CheckboxOwnProps>;
