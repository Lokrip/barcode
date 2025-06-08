import { FC, Ref } from "react";
import {
    CardMediaProps,
    CardMediaRootGenericProps,
} from "../model/types/card-media-props";
import { CardImage } from "../_ui/_card-image";

import styles from "../styles/card-media.module.scss";
import { correctClass } from "../../../utils";
import clsx from "clsx";

export const CardMediaRoot: FC<CardMediaRootGenericProps> = ({
    ownerState,
    className,
    ref,
}) => {
    const { type, height, width, alt, img, video, audio } = ownerState;

    const clasess = correctClass(
        clsx(styles.media, styles[type], styles[`${type}-rounded`]),
        className ?? ""
    );

    if (type === "video") {
        return <div className={clasess}></div>;
    }

    if (type === "audio") {
        return <div className={clasess}></div>;
    }

    return (
        <CardImage
            ref={ref as Ref<HTMLImageElement>}
            src={img ?? ""}
            width={width}
            height={height}
            className={clasess}
            alt={alt}
        />
    );
};

export const CardMedia: FC<CardMediaProps> = (props) => {
    const { className, ref, ...ownerState } = { ...props };

    return (
        <CardMediaRoot
            ref={ref}
            className={className}
            ownerState={ownerState}
            {...props}
        />
    );
};
