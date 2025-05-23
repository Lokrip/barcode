import { ElementType, forwardRef } from "react";
import { PolymorphicRef, BaseBadgeType } from "./model/badge-types";
import { BaseBadgeGenericProps, BadgeProps } from "./model/badge-props";
import clsx from "clsx";
import styles from "./styles/badge.module.scss";
import { correctClass } from "../../utils";

export const BaseBadge = forwardRef(
    <C extends ElementType = "div">(
        { as, ownerState, className, ...props }: BaseBadgeGenericProps<C>,
        ref: PolymorphicRef<C>
    ) => {
        const {
            variant = "standard",
            size = "medium",
            children,
            color = "primary",
            badgeContent,
            overlap = "circular",
            anchorOrigin = { vertical: "top", horizontal: "right" }
        } = ownerState;

        const anchorOriginClass = clsx({
            [styles.anchorOriginTopRight]: anchorOrigin.vertical === "top" && anchorOrigin.horizontal === "right",
            [styles.anchorOriginTopLeft]: anchorOrigin.vertical === "top" && anchorOrigin.horizontal === "left",
            [styles.anchorOriginBottomRight]: anchorOrigin.vertical === "bottom" && anchorOrigin.horizontal === "right",
            [styles.anchorOriginBottomLeft]: anchorOrigin.vertical === "bottom" && anchorOrigin.horizontal === "left",
        });

        const classNameValid = correctClass(
            clsx(
                styles.badge,
                styles[variant],
                styles[size],
                styles[color],
                styles[overlap],
                anchorOriginClass,
                className
            ),
            className!
        );

        const Component: ElementType = as || "div";

        return (
            <Component ref={ref} className={classNameValid} {...props}>
                {children}
                {badgeContent}
            </Component>
        );
    }
);

export const Badge = forwardRef<HTMLElement, BadgeProps>(
    (
        {
            component = "div",
            variant = "standard",
            size = "medium",
            color = "primary",
            badgeContent,
            showZero = false,
            max = 100,
            overlap = "circular",
            anchorOrigin = { vertical: "top", horizontal: "right" },
            className,
            children,
            ...props
        },
        ref
    ) => {
        let displayBadgeContent = badgeContent;

        if (typeof badgeContent === "number") {
            if (badgeContent === 0 && !showZero) {
                displayBadgeContent = null;
            } else if (badgeContent >= max) {
                displayBadgeContent = `${max - 1}+`;
            }
        }

        const ownerState: BaseBadgeType = {
            component,
            variant,
            size,
            color,
            badgeContent: displayBadgeContent,
            showZero,
            max,
            overlap,
            anchorOrigin,
            className,
            children,
        };

        return (
            <BaseBadge
                ref={ref}
                ownerState={ownerState}
                className={className}
                {...props}
                as={component}
            />
        );
    }
);
