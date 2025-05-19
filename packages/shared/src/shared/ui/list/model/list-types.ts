import { ClassNameType } from "../../../types/react.ts";

export type DirectionType = "row" | "column"

export interface ListBaseType extends ClassNameType {
    direction?: DirectionType;
}
