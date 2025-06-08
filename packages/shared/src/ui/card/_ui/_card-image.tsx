import type { FC } from "react";
import type { CardImageProps } from "../_model/types/_card-image-props";
import { AppImage } from "../../app-image";

export const CardImage: FC<CardImageProps> = ({
    alt = "Card image",
    ...props
}) => {
    return <AppImage alt={alt} {...props} />;
};
