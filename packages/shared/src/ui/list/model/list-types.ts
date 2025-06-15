import { ClassNameType } from "../../../types/react";

export type DirectionType = "row" | "column"

export interface ListBaseType extends ClassNameType {
    direction?: DirectionType;
}
