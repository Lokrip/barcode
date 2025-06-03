import { ImageProps } from "next/image";
import { ClassNameType, WithRef } from "../../../types/react";
import { BaseSkeletonType } from "../../skeleton";

export type AppImageProps = ImageProps &
    ClassNameType &
    WithRef<HTMLImageElement> & {
        skeleton: BaseSkeletonType;
    };
