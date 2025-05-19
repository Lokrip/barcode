import { PropsWithChildren } from "react";
import { ClassNameType } from "../../../types/react.ts";

export type MaxWidthType = string|number

export interface ContainerProps extends PropsWithChildren, ClassNameType {
    maxWidth?: MaxWidthType;
}
