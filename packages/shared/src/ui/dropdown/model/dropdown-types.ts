import { ElementType, ComponentPropsWithRef } from "react";

export type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

export interface DropdownContextValue {
    onSelect: (value: string) => void;
    selectedValue: string | null;
}
