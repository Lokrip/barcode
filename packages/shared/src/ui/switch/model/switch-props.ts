import { ElementType } from "react";
import { ClassNameType } from "../../../types/react";
import { BaseSwitchType } from "./switch-types";

export interface SwitchProps extends ClassNameType, BaseSwitchType {}

export type SwitchBaseGenericProps<C extends ElementType> = ClassNameType & {
    as?: C;
    ownerState: BaseSwitchType;
};
