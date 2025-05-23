import { ElementType } from "react";
import { ClassNameType } from "../../../types/react.ts";
import { BaseBadgeType } from "./badge-types";

export interface BadgeProps extends ClassNameType, BaseBadgeType {}

export type BaseBadgeGenericProps<C extends  ElementType> = ClassNameType & {
    as?: C;
    ownerState: BaseBadgeType;
}
