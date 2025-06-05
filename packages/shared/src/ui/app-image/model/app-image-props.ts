import { ImageProps } from "next/image";
import { ClassNameType, WithRef } from "../../../types/react";

export type AppImageProps = ImageProps &
    ClassNameType &
    WithRef<HTMLImageElement>;
