import { PropsWithChildren, ReactNode } from "react";
import { ClassNameType } from "../../types/react";

export type DirectionType = "row" | "column"

interface ListBaseType extends ClassNameType {
    direction?: DirectionType;
}

export interface ListProps<T> extends ListBaseType {
    items: T[];
    mapItems: (item: T, index?: number) => ReactNode;
}

export interface ListContainerProps extends ListBaseType, PropsWithChildren {}
