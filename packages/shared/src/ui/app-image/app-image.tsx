"use client";

import { FC, useEffect, useState } from "react";
import { AppImageProps } from "./model/app-image-props";
import Image from "next/image";

import styles from "./app-image.module.scss";
import { Skeleton } from "../skeleton";

export const AppImage: FC<AppImageProps> = ({
    alt,
    className,
    skeleton,
    width = 100,
    height = 100,
    ref,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const skeletonProps =
        skeleton.height && skeleton.width
            ? skeleton
            : {
                  ...skeleton,
                  width:
                      typeof width === "number"
                          ? width
                          : parseInt(width ?? "0", 10),
                  height:
                      typeof height === "number"
                          ? height
                          : parseInt(height ?? "0", 10),
              };

    return (
        <div className={styles.image}>
            {isLoading ? (
                <Skeleton {...skeletonProps} />
            ) : (
                <Image
                    {...props}
                    alt={alt || "Image"}
                    onLoadingComplete={() => setIsLoading(false)}
                    className={className}
                    width={width}
                    height={height}
                    ref={ref}
                />
            )}
        </div>
    );
};
