import type { ImageProps } from "next/image";
import { WithRef } from "../../../../types/react";

export type CardImageProps = ImageProps & WithRef<HTMLImageElement>;
