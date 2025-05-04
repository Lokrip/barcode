import { ReactNode } from "react";
import { ClassNameType } from "../../types/react";

export interface ListProps<T> extends ClassNameType {
    items: T[];
    mapItems: (item: T, index?: number) => ReactNode;
}
