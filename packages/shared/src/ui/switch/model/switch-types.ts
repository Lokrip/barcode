import {
    ChangeEvent,
    ComponentPropsWithRef,
    ElementType
} from "react";

export type SwitchElements =
    | "input"
    | "label"
    | "span"
    | "div"
    | "p"
    | "button";

export type SwitchSize =
    | "small"
    | "medium"
    | "large";

export type SwitchColor =
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";

export type PolymorphicRef<C extends ElementType> =
    ComponentPropsWithRef<C>["ref"];

export interface BaseSwitchType {
    size?: SwitchSize;
    color?: SwitchColor;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    component?: SwitchElements;
}
