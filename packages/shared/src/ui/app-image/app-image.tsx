import { FC, useState } from "react";
import { AppImageProps } from "./app-image-props";
import Image from "next/image";

import styles from "./app-image.module.scss";
import { Skeleton } from "../skeleton";

export const AppImage: FC<AppImageProps> = ({
    alt,
    className,
    skeleton,
    width,
    height,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);

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
            <Image
                {...props}
                alt={alt || "Image"}
                onLoadingComplete={() => setIsLoading(false)}
                className={className}
                width={width}
                height={height}
            />
            {isLoading && (
                <div className={styles.skeletonWrapper}>
                    <Skeleton {...skeletonProps} />
                </div>
            )}
        </div>
    );
};
