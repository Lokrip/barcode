"use client";

import { FC } from "react";
import { AppImageProps } from "../model/app-image-props";
import Image from "next/image";

import styles from "../styles/app-image.module.scss";

export const AppImage: FC<AppImageProps> = ({
    alt,
    className,
    width = 100,
    height = 100,
    ref,
    ...props
}) => {
    return (
        <div className={styles.image}>
            <Image
                {...props}
                alt={alt || "Image"}
                className={className}
                width={width}
                height={height}
                ref={ref}
            />
        </div>
    );
};
