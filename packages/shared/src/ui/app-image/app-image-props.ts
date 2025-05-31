import { ImageProps } from "next/image";
import { ClassNameType } from "../../types/react";
import { BaseSkeletonType } from "../skeleton";

export type AppImageProps = ImageProps &
    ClassNameType & {
        skeleton: BaseSkeletonType;
    };
