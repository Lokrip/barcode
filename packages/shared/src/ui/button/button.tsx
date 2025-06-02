import { ElementType } from "react";
import { ButtonProps } from "./model/button-props";
import clsx from "clsx";
import styles from "./styles/button.module.scss";

export const Button = <C extends ElementType = "button">({
    as,
    variant = "contained",
    size = "medium",
    type,
    className = "",
    disabled = false,
    onClick,
    fullWidth = false,
    startIcon,
    endIcon,
    loading = false,
    iconOnly = false,
    children,
    color = "primary",
    ref,
    ...restProps
}: ButtonProps<C>) => {
    const Component = as || "button";
    const isButton = Component === "button";
    const isAnchor = Component === "a";

    const classes = clsx(
        styles.btn,
        styles[variant],
        styles[size],
        styles[color],
        {
            [styles.fullWidth]: fullWidth,
            [styles.loading]: loading,
            [styles.disabled]: disabled,
            [styles.iconOnly]: iconOnly,
        },
        className
    );

    const handleKeyDown = (event: KeyboardEvent) => {
        if ((event.key === "Enter" || event.key === " ") && !disabled && !loading) {
            event.preventDefault();
            onClick?.(event);
        }
    };

    return (
        <Component
            ref={ref}
            type={isButton ? type || "button" : undefined}
            className={classes}
            disabled={isButton ? disabled || loading : undefined}
            {...(isAnchor ? { href: (restProps).href } : {})}
            onClick={!disabled && !loading ? onClick : undefined}
            aria-busy={loading}
            aria-label={iconOnly && typeof children === "string" ? children : undefined}
            role={!isButton ? "button" : undefined}
            tabIndex={!isButton ? (disabled || loading ? -1 : 0) : undefined}
            onKeyDown={!isButton ? handleKeyDown : undefined}
            {...restProps}
        >
            {iconOnly ? (
                children
            ) : (
                <>
                    {startIcon && !loading && <span className={styles.icon}>{startIcon}</span>}
                    <span className={styles.label}>{children}</span>
                    {endIcon && !loading && <span className={styles.icon}>{endIcon}</span>}
                </>
            )}

        </Component>
    );
};
