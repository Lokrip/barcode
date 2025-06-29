import { ElementType } from "react";
import clsx from "clsx";
import styles from "./styles/avatar.module.scss";
import { AvatarProps } from "./model/avatar-props";
import { getFallbackContent } from "./model/trimFallbackContent";

export const Avatar = <C extends ElementType = "button">({
    as,
    src,
    alt,
    fallback,
    className = '',
    onClick,
    variant = 'circle',
    size = 'medium',
    children,
    ref,
    ...restProps
}: AvatarProps<C>) => {
    const Component = as || "button";

    const classes = clsx(
        styles.avatar,
        styles[variant],
        styles[size],
        className
    );

    return (
        <Component
            ref={ref}
            className={classes}
            onClick={onClick}
            {...restProps}
        >
            {src ? (
                <img src={src} alt={alt} className={styles.image} />
            ) : typeof fallback === "string" ? (
                getFallbackContent(fallback)
            ) : (
                fallback ?? null
            )}
            {children}
        </Component>
    );
};
