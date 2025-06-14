import {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    ElementType,
    KeyboardEvent
} from "react";
import { WithRef} from "../../../types/react";
import {
    SwitchColor,
    SwitchSize
} from "./switch-types";

export interface BaseSwitchProps {
    as?: ElementType;
    size?: SwitchSize;
    color?: SwitchColor;
    checked?: boolean;
    defaultChecked?: boolean;
    isChecked: boolean;
    onKeyToggle: (e: KeyboardEvent) => void;
    disabled: boolean;
    className?: string;
}

export type SwitchProps<C extends ElementType = "div"> =
    BaseSwitchProps &
    WithRef<HTMLElement> &
    ComponentPropsWithRef<C> &
    Omit<ComponentPropsWithoutRef<C>, keyof BaseSwitchProps>;

