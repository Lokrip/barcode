import { ElementType } from "react";
import clsx from "clsx";
import styles from "./styles/badge.module.scss";
import { BadgeProps } from "./model/badge-props";

export const Badge = <C extends ElementType = "span">({
    as,
    size = "medium",
    color = "primary",
    variant = "standard",
    badgeContent,
    showZero = false,
    max = 100,
    overlap = "circular",
    anchorOrigin = { vertical: "top", horizontal: "right" },
    className = "",
    children,
    ref,
    ...rest
}: BadgeProps<C>) => {
    const Component = as || "span";

    let displayBadgeContent = badgeContent;
    if (typeof badgeContent === "number") {
        if (badgeContent === 0 && !showZero) {
            displayBadgeContent = null;
        } else if (badgeContent >= max) {
            displayBadgeContent = `${max - 1}+`;
        }
    }

    const anchorOriginClass = clsx({
        [styles.anchorOriginTopRight]: anchorOrigin.vertical === "top" && anchorOrigin.horizontal === "right",
        [styles.anchorOriginTopLeft]: anchorOrigin.vertical === "top" && anchorOrigin.horizontal === "left",
        [styles.anchorOriginBottomRight]: anchorOrigin.vertical === "bottom" && anchorOrigin.horizontal === "right",
        [styles.anchorOriginBottomLeft]: anchorOrigin.vertical === "bottom" && anchorOrigin.horizontal === "left",
    });

    const classes = clsx(
        styles.badge,
        styles[variant],
        styles[size],
        styles[color],
        styles[overlap],
        anchorOriginClass,
        className
    );

    return (
        <Component
            ref={ref}
            className={classes}
            {...rest}
        >
            {children}
            {displayBadgeContent != null && (
                <span className={styles.badgeContent}>{displayBadgeContent}</span>
            )}
        </Component>
    );
};
