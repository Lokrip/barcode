import { PropsWithChildren } from "react";
import { ClassNameType } from "../../types/react";

export type MaxWidthType = string|number

export interface ContainerProps extends PropsWithChildren, ClassNameType {
    maxWidth?: MaxWidthType;
}
