import {PropsWithChildren, ReactNode} from "react";
import {ListBaseType} from "./list-types";

export interface ListProps<T> extends ListBaseType {
    items: T[];
    mapItems: (item: T, index?: number) => ReactNode;
}

export interface ListContainerProps extends ListBaseType, PropsWithChildren {}
