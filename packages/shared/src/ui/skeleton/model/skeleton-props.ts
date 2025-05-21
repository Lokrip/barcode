import { ElementType } from "react";
import { ClassNameType } from "../../../types/react";
import { BaseSkeletonType } from "./skeleton-type";

export interface SkeletonProps extends ClassNameType, BaseSkeletonType {}

export type SkeletonRootGenericProps<C extends ElementType> = ClassNameType & {
    as: C;
    ownerState: BaseSkeletonType;
};
