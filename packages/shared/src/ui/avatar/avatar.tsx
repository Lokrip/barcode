import {ElementType} from "react";
import clsx from "clsx";
import styles from "./styles/avatar.module.scss";
import {AvatarProps} from "./model/avatar-props.ts";
import {getFallbackContent} from "./model/trimFallbackContent.ts";

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
    const isAnchor = Component === "a";

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
            {...(isAnchor && restProps.href ? { href: restProps.href } : {})}
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
