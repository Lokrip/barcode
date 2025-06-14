import { PropsWithChildren } from "react";
import { ClassNameType } from "../../../types/react";
import { MaxWidthType } from "./container-type";

export interface ContainerProps extends PropsWithChildren, ClassNameType {
    maxWidth?: MaxWidthType;
}
