import {PropsWithChildren} from "react";
import {ClassNameType} from "../../../types/react.ts";
import {MaxWidthType} from "./container-type.ts";

export interface ContainerProps extends PropsWithChildren, ClassNameType {
    maxWidth?: MaxWidthType;
}
