import {
    ChangeEvent,
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
    onKeyToggle?: (e: KeyboardEvent) => void;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export type SwitchProps<C extends ElementType = "div"> =
    BaseSwitchProps &
    Omit<WithRef<C>, keyof BaseSwitchProps>;

