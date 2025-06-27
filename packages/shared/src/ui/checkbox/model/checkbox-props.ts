import {
    ElementType,
    ReactNode,
    ChangeEvent,
    KeyboardEvent
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
    onClick?: (e: ChangeEvent<HTMLInputElement> | KeyboardEvent) => void;
    as?: ElementType;
}

export type CheckboxProps<C extends ElementType = "input"> =
    CheckboxOwnProps &
    Omit<WithRef<C>, keyof CheckboxOwnProps>;
